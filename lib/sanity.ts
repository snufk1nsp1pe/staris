import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "1er3qeah",  
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
// no longer used but saved for future use
