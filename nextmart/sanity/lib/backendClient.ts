import { apiVersion, dataset, projectId } from "../env";
import { createClient } from "next-sanity";

export const backendClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    token:process.env.SANITY_API_TOKEN,
});