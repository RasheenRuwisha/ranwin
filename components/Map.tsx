import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const route = useRef(null);
  const pointSource = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicmFzaGVlbjEyMyIsImEiOiJjbTdmZmZ5YWwwMW4yMmlvaGwxbTdiMmptIn0.JVb9foktD8kVZ5t2xUou7A";

    if (map.current) return; // Initialize only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [80.278469, 7.156788],
      zoom: 8.8,
      interactive: false,
      attributionControl: false,
    });

    const fetchRoute = async () => {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/79.88452%2C7.17929%3B80.649991%2C7.292631%3B80.69836%2C7.01334%3B79.97408%2C6.87053%3B79.88452%2C7.17929?alternatives=true&continue_straight=false&geometries=geojson&overview=full&steps=false&access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      route.current = data.routes[0].geometry;

      // Add the full route as a layer
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: route.current,
        },
      });

      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#789fce",
          "line-width": 5,
        },
      });

      // Load the car icon image and then add it as a symbol layer
      map.current.loadImage("/car.png", (error, image) => {
        if (error) throw error;
        if (!map.current.hasImage("car")) {
          map.current.addImage("car", image);
        }

        // Setup the point (car) starting at the first coordinate
        pointSource.current = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: route.current.coordinates[0],
              },
            },
          ],
        };

        const waypoints = [
          [79.88452, 7.17929], // Example waypoint 1
          [80.649991, 7.292631], // Example waypoint 2
          [80.69836, 7.01334], // Example waypoint 3
          [79.97408, 6.87053], // Example waypoint 3
          [79.88452, 7.17929], // Example waypoint 3
        ];

        map.current.addSource("point", {
          type: "geojson",
          data: pointSource.current,
        });

        map.current.addLayer({
          id: "point",
          type: "symbol",
          source: "point",
          layout: {
            "icon-image": "car",
            "icon-size": 1.5,
            "icon-rotation-alignment": "map",
          },
        });

        waypoints.forEach((coordinate) => {
          new mapboxgl.Marker({ color: "#be3434" })
            .setLngLat(coordinate)
            .addTo(map.current);
        });

        // Smooth animation using interpolation
        let startTime = null;
        const duration = 60000; // 15 seconds for a full loop

        const animateCar = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const t = (elapsed % duration) / duration;
          const totalCoords = route.current.coordinates.length;
          const index = t * (totalCoords - 1);
          const lower = Math.floor(index);
          const upper = Math.min(lower + 1, totalCoords - 1);
          const fraction = index - lower;

          const [lon1, lat1] = route.current.coordinates[lower];
          const [lon2, lat2] = route.current.coordinates[upper];
          const currentLon = lon1 + (lon2 - lon1) * fraction;
          const currentLat = lat1 + (lat2 - lat1) * fraction;

          // Update car position
          pointSource.current.features[0].geometry.coordinates = [
            currentLon,
            currentLat,
          ];
          map.current.getSource("point").setData(pointSource.current);

          requestAnimationFrame(animateCar);
        };

        requestAnimationFrame(animateCar);
      });
    };

    map.current.on("load", fetchRoute);
    return () => map.current.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
