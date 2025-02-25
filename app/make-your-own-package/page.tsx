"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FloatingNav } from "@/components/ui/navbar-menu-second";
import { navItems } from "@/data";
import LoadingButton from "@/components/loading-buttom";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { GripVertical, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation"; // For page redirection
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface MapProps {
  waypoints: [number, number][];
}

const ItemTypes = {
  MARKER: "marker",
};

const DraggableMarker = ({
  marker,
  index,
  moveMarker,
  removeMarker,
  updateDays, // New prop for updating days
}) => {
  const [, ref] = useDrag({
    type: ItemTypes.MARKER,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.MARKER,
    hover(item: { index: number }) {
      if (item.index !== index) {
        moveMarker(item.index, index);
        item.index = index; // Update the dragged index
      }
    },
  });

  return (
    <li
      ref={(node) => ref(drop(node))}
      className="text-sm grid   md:grid-cols-[60%,35.5%,4.5%]  items-center"
    >
      <span className="flex items-center ">
        <span
          ref={ref} // Attach the drag handle reference here
          className="cursor-grab p-2 mr-2"
        >
          <GripVertical size={16} /> {/* A simple drag handle */}
        </span>
        {`Location ${index + 1}: ${marker.location}`}
      </span>
      <div className="ml-4 flex items-center">
        <label htmlFor={`days-input-${index}`} className="mr-2">
          Days:
        </label>
        <input
          id={`days-input-${index}`}
          value={marker.days || ""}
          min="1"
          onChange={(e) => updateDays(index, parseInt(e.target.value))}
          className="border p-1 rounded w-16"
        />
      </div>
      <button
        onClick={() => removeMarker(index)}
        className="ml-2 bg-red-500 text-white p-1 rounded"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

const Map = ({ waypoints }: MapProps) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // Check if the device is mobile or tablet
    const isMobileOrTablet = /Mobi|Android|iPad|iPhone/i.test(
      navigator.userAgent
    );

    if (isMobileOrTablet) {
      // Optionally, redirect or show a message
      alert("This page is not available on mobile or tablet devices.");
      router.push("/"); // Redirect to the homepage or any other page
    }
  }, []);

  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [markers, setMarkers] = useState<
    { coords: [number, number]; location: string; days: number | null }[]
  >([]);
  const [mapMarkers, setMapMarkers] = useState<mapboxgl.Marker[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { place_name: string; center: [number, number] }[]
  >([]);
  const suggestionsRef = useRef<HTMLUListElement | null>(null); // Ref for suggestions list

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicmFzaGVlbjEyMyIsImEiOiJjbTdmZmZ5YWwwMW4yMmlvaGwxbTdiMmptIn0.JVb9foktD8kVZ5t2xUou7A";

    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [80.860663, 7.554045],
      zoom: 7.5,
    });

    map.current.on("load", () => {
      map.current!.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 6,
        },
      });
    });

    map.current.on("click", async (e) => {
      const coords = [e.lngLat.lng, e.lngLat.lat];
      const locationName = await fetchLocationName(coords);
      const newMarker = new mapboxgl.Marker({ color: "#be3434" })
        .setLngLat(coords)
        .addTo(map.current);

      // Update the markers state
      setMarkers((prev) => {
        const updatedMarkers = [
          ...prev,
          { coords, location: locationName, days: null },
        ];
        // Fetch route only if there are at least two markers
        if (updatedMarkers.length > 1) {
          fetchRoute(updatedMarkers.map((marker) => marker.coords));
          setDisabled(false);
        }
        return updatedMarkers;
      });

      setMapMarkers((prev) => [...prev, newMarker]);
    });

    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]); // Clear suggestions when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchLocationName = async ([lng, lat]: [number, number]) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();
    return data.features.length > 0
      ? data.features[0].place_name
      : "Unknown Location";
  };

  const fetchRoute = async (coords: [number, number][]) => {
    if (coords.length < 2) {
      return;
    }

    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${coords
        .map((coord) => coord.join(","))
        .join(";")}?geometries=geojson&access_token=${mapboxgl.accessToken}`
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    if (data.routes.length > 0) {
      const routeCoordinates = data.routes[0].geometry.coordinates.map(
        (coord) => [coord[0], coord[1]]
      );

      if (map.current) {
        const routeSource = map.current.getSource(
          "route"
        ) as mapboxgl.GeoJSONSource;
        routeSource.setData({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: routeCoordinates,
          },
        });
      }
    } else {
    }
  };

  const handleSearch = async () => {
    console.log(waypoints);

    if (!searchQuery) {
      setSuggestions([]); // Clear suggestions if the search query is empty
      return;
    }

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${mapboxgl.accessToken}`
    );

    if (response.ok) {
      const data = await response.json();
      if (data.features.length > 0) {
        setSuggestions(data.features); // Set suggestions only if there are any
      } else {
        setSuggestions([]); // Clear suggestions if no results
      }
    } else {
      setSuggestions([]); // Clear suggestions on error
    }
  };

  const handleSuggestionClick = (suggestion: {
    place_name: string;
    center: [number, number];
  }) => {
    const [lng, lat] = suggestion.center;
    const locationName = suggestion.place_name;
    const newMarker = new mapboxgl.Marker({ color: "#be3434" })
      .setLngLat([lng, lat])
      .addTo(map.current);
    setMarkers((prev) => {
      const updatedMarkers = [
        ...prev,
        { coords: [lng, lat], location: locationName, days: null },
      ];
      // Fetch route only if there are at least two markers
      if (updatedMarkers.length > 1) {
        fetchRoute(updatedMarkers.map((marker) => marker.coords));
      }
      return updatedMarkers;
    });
    setMapMarkers((prev) => [...prev, newMarker]);
    setSearchQuery(locationName);
    setSuggestions([]); // Clear suggestions after selecting
  };

  const removeMarker = (index: number) => {
    setMarkers((prev) => {
      const updatedMarkers = prev.filter((_, i) => i !== index);
      // Fetch route only if there are at least two markers remaining
      if (updatedMarkers.length > 1) {
        fetchRoute(updatedMarkers.map((marker) => marker.coords));
        setDisabled(false);
      } else {
        setDisabled(true);
        const routeSource = map.current?.getSource(
          "route"
        ) as mapboxgl.GeoJSONSource;
        routeSource.setData({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [],
          },
        });
      }
      return updatedMarkers;
    });
    setMapMarkers((prev) => {
      const updatedMarkers = [...prev];
      if (updatedMarkers[index]) {
        updatedMarkers[index].remove();
        updatedMarkers.splice(index, 1);
      }
      return updatedMarkers;
    });
  };

  const moveMarker = (fromIndex: number, toIndex: number) => {
    const updatedMarkers = [...markers];
    const [movedMarker] = updatedMarkers.splice(fromIndex, 1);
    updatedMarkers.splice(toIndex, 0, movedMarker);
    setMarkers(updatedMarkers);

    // Update mapMarkers to match the new order
    setMapMarkers((prev) => {
      const newMapMarkers = [...prev];
      const [movedMapMarker] = newMapMarkers.splice(fromIndex, 1);
      newMapMarkers.splice(toIndex, 0, movedMapMarker);
      return newMapMarkers;
    });

    // Re-fetch the route after moving the marker
    if (updatedMarkers.length > 1) {
      fetchRoute(updatedMarkers.map((marker) => marker.coords));
    } else {
      const routeSource = map.current?.getSource(
        "route"
      ) as mapboxgl.GeoJSONSource;
      routeSource.setData({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      });
    }
  };

  const updateDays = (index: number, days: number) => {
    setMarkers((prev) => {
      const updatedMarkers = [...prev];
      updatedMarkers[index].days = days;
      return updatedMarkers;
    });
  };

  const onSubmit = async () => {
    const formattedLocations = markers
      .map((item) => `${item.location} - Days: ${item.days ?? "N/A"}`)
      .join("\n");
    setLoading(true);

    if (!name.trim()) {
      toast({
        title: "Name is required.",
        description: "Please enter your name.",
        variant: "destructive", // You can set a variant for error styling
      });
      setLoading(false);

      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email.",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Validate phone number (only digits, length 10-15)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast({
        title: "Invalid Phone Number.",
        description: "Please enter a valid phone number (10-15 digits).",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const userInfo = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
  `;

    const mapboxUrl = `https://www.google.com/maps/dir/${markers
      .map((marker) => `${marker.coords[1]},${marker.coords[0]}`)
      .join("/")}`;

    const message = `${userInfo}\n\nRoute:\n${formattedLocations}\n\nView Map: ${mapboxUrl}`;

    emailjs
      .send(
        "service_o84afms",
        "template_t7q55yo",
        {
          message: message, // Use 'name' as a key for the name value
        },
        {
          publicKey: "Ou__g4P_FnfVHN688",
        }
      )
      .then(
        () => {
          toast({
            title: "Request Sent.",
            description: "We will get back to you soon",
          });
          setLoading(false);
          setDisabled(true);
        },
        (error) => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }
      );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <FloatingNav navItems={navItems} />

        <div className="w-2/5 p-4 overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">Route:</h3>
          <div className="flex flex-col mb-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search location..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(); // Call handleSearch on every change
                }}
                className="border p-2 rounded w-full"
              />
              {suggestions.length > 0 && (
                <ul
                  ref={suggestionsRef} // Attach the ref here
                  className="absolute z-10 w-full border bg-black-100 border-gray-300 rounded mt-1"
                >
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-2 cursor-pointer hover:bg-black-200"
                    >
                      {suggestion.place_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <ul>
            {markers.map((marker, index) => (
              <DraggableMarker
                key={index}
                marker={marker}
                index={index}
                moveMarker={moveMarker}
                removeMarker={removeMarker}
                updateDays={updateDays} // Pass the updateDays function
              />
            ))}
          </ul>

          <div className="self-end align-bottom mt-10">
            <div className="flex flex-col mb-4">
              <Label htmlFor="name" className="mb-1">
                Name:
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="grid grid-cols-2 mb-4 gap-5">
              <div className="flex flex-col mb-4">
                <Label htmlFor="email" className="mb-1">
                  Email:
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="flex flex-col mb-4">
                <Label htmlFor="phone" className="mb-1">
                  Phone:
                </Label>
                <Input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>
            <LoadingButton
              loading={loading}
              onClick={() => onSubmit()}
              disabled={disabled}
            >
              Submit Route Request
            </LoadingButton>
          </div>
        </div>
        <div ref={mapContainer} className="w-3/5" />
      </div>
    </DndProvider>
  );
};

export default Map;
