"use server";

import prisma from "@/lib/prisma";
import { ReviewValues, reviewSchema } from "@/lib/validation";
import { del, put } from "@vercel/blob";
import path from "path";

export async function addReview(values: ReviewValues) {
  console.log("Received values:", values);

  const token =
    "vercel_blob_rw_YzvovUTt5SYI9LSY_AGz3Eq3zosirQ85kKIuhdDRmtu5Cp0";

  const { packageId, rating, comment, name, media, tokenId, ...reviewValues } =
    reviewSchema.parse(values);

  // Check if token exists
  const existingToken = await prisma.userToken.findUnique({
    where: { token: tokenId },
  });

  if (!existingToken) {
    await prisma.userToken.create({
      data: { token: tokenId },
    });
  }

  console.log("Processing media files:", media);

  // Process media uploads in parallel
  const imageUploadPromises = media.map(async (photo, index) => {
    if (photo instanceof File) {
      try {
        const uniqueFilename = `ranwin/${Date.now()}_${index}_${photo.name}`;
        console.log(`Uploading ${photo.name} as ${uniqueFilename}...`);

        const blob = await put(uniqueFilename, photo, {
          access: "public",
          token: token,
        });

        console.log(`Uploaded ${photo.name} -> ${blob.url}`);
        return blob.url;
      } catch (error) {
        console.error(`Failed to upload ${photo.name}:`, error);
        return null;
      }
    }
    return null;
  });

  const images = (await Promise.all(imageUploadPromises)).filter(Boolean); // Remove null values

  console.log("Final Uploaded Images Array:", images);

  return prisma.review.create({
    data: { packageId, rating, comment, media: images, tokenId, name },
  });
}

export async function getReviews(packageId: String) {
  const reviews = await prisma.review.findMany({
    where: { packageId: packageId },
  });

  return reviews;
}
