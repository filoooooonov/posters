"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  eventName: z.string().min(2, {
    message: "Event name must be at least 2 characters.",
  }),
  posterImage: z.file(),
});

type FormValues = z.infer<typeof formSchema>;

export function DialogSubmitPoster() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("posterImage", file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("eventName", values.eventName);
      formData.append("posterImage", values.posterImage);

      const response = await fetch("/api/submit-poster", {
        method: "POST",
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit poster");
      }

      toast.success("Poster submitted successfully!");
      setOpen(false);
      form.reset();
      setPreviewUrl(null);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit poster, try again or reach out to @wheelsofsteel (TG)"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="text-neutral-600 bg-transparent hover:bg-transparent cursor-pointer hover:text-neutral-500 text-sm md:text-base"
        >
          Submit a Poster
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-800/80 backdrop-blur-2xl border-4 border-neutral-700/30 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-neutral-100">
            Submit a Poster
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Submit an event poster if you think it deserves attention!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <FormControl>
                <div className="relative h-40 bg-neutral-700 border-2 border-dashed border-neutral-600 rounded-lg">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-neutral-400">
                    <Upload className="w-8 h-8" />
                    <span>Click to upload a poster</span>
                  </div>
                </div>
              </FormControl>
              {previewUrl && (
                <div className="mt-2 relative w-full h-40 rounded-lg overflow-hidden bg-neutral-900 group">
                  <button
                    type="button"
                    // onClick={() => {
                    //   setPreviewUrl(null);
                    //   form.setValue("posterImage", undefined);
                    // }}
                    className="absolute top-2 right-2 cursor-pointer z-10 p-1 rounded-full bg-neutral-800/80 text-neutral-400 hover:text-neutral-200 transition-opacity opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <Image
                    src={previewUrl}
                    alt="Poster preview"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <FormMessage className="text-red-400" />
            </FormItem>
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter event name"
                      {...field}
                      className="bg-neutral-700 border-neutral-600 text-neutral-100 placeholder:text-neutral-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-neutral-100 text-neutral-900 hover:bg-neutral-200 disabled:bg-neutral-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin size-3" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Poster"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
