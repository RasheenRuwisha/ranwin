"use server";

import prisma from "@/lib/prisma";
import { ReviewValues, reviewSchema } from "@/lib/validation";
import { del, put } from "@vercel/blob";
import path from "path";

export async function addReview(values: ReviewValues) {
  let images: string[] = [];
  console.log(values);

  const token =
    "vercel_blob_rw_YzvovUTt5SYI9LSY_AGz3Eq3zosirQ85kKIuhdDRmtu5Cp0";

  const { packageId, rating, comment, name, media, tokenId, ...reviewValues } =
    reviewSchema.parse(values);

  const existingToken = await prisma.userToken.findUnique({
    where: { token: tokenId },
  });

  if (!existingToken) {
    const userToken = await prisma.userToken.create({
      data: {
        token: tokenId,
      },
    });
  }

  for (const photo of media) {
    if (photo instanceof File) {
      const blob = await put(`ranwin/${path.extname(photo.name)}`, photo, {
        access: "public",
        token: token,
      });

      images.push(blob.url);
    }
  }

  console.log("sdd");
  console.log(images);

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
