export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-10-22",
  token: process.env.SANITY_API_TOKEN,
};
