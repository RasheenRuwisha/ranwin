import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DatePickerWithRange } from "./date-range-picker";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingButton from "./loading-buttom";
import { useToast } from "@/hooks/use-toast";

export function BookButton({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  });

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_o84afms",
        "template_mqctve4",
        {
          name: data.name, // Use 'name' as a key for the name value
          email: data.email, // Use 'name' as a key for the name value
          phone: data.phone, // Use 'name' as a key for the name value
          from: date.from.toString(), // Ensure 'date' is defined in the scope
          to: date.to.toString(), // Ensure 'date' is defined in the scope
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
          setOpen(false);
        },
        (error) => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }
      );
  };

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Book this package</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Booking request form</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4 p-4  rounded-lg"
          >
            <div>
              <Label className="block mb-2">Name</Label>
              <Input
                {...register("name")}
                className="border p-2 w-full rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label className="block mb-2">Email</Label>
              <Input
                {...register("email")}
                className="border p-2 w-full rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label className="block mb-2">Phone</Label>
              <Input
                {...register("phone")}
                className="border p-2 w-full rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label className="block mb-2">Date</Label>
              <div className={cn("grid gap-2", className)}>
                <Popover modal={true}>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>

            <LoadingButton
              loading={loading}
              onClick={(e) => onSubmit(e)}
              type="submit"
            >
              Submit
            </LoadingButton>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
