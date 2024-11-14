import "server-only";
import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN environment variable");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token, // Only if using this in a secure way, otherwise remove
  fetchOptions: {
    revalidate: 0, // Adjust as needed
  },
});
