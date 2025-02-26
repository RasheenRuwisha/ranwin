import { z } from "zod";

// Define the media validation schema
const mediaSchema = z.object({
  url: z
    .string()
    .url("Media URL must be a valid URL")
    .nonempty("Media URL is required"),
  type: z.enum(["IMAGE", "VIDEO"], {
    message: "Media type must be either IMAGE or VIDEO",
  }),
});

// Define the review validation schema
const reviewSchema = z.object({
  packageId: z.string().nonempty("Package ID is required"),
  rating: z
    .number()
    .int("Rating must be an integer")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5")
    .nonnegative("Rating is required"),
  comment: z
    .string()
    .max(500, "Comment cannot exceed 500 characters")
    .optional(),
  name: z.string().max(500, "Comment cannot exceed 500 characters").optional(),
  media: z.array(
    z
      .custom<File | undefined>()
      .refine(
        (file) =>
          !file || (file instanceof File && file.type.startsWith("image/")),
        "Must be an image file"
      )
      .refine(
        (file) => !file || file.size <= 1024 * 1024 * 4,
        "File must be less then 4MB"
      )
  ),
  tokenId: z
    .string()
    .uuid("Invalid token ID format")
    .nonempty("Token ID is required"),
});

// Export the validation schema
export { reviewSchema };

export type ReviewValues = z.infer<typeof reviewSchema>;
export type MediaValues = z.infer<typeof mediaSchema>;
