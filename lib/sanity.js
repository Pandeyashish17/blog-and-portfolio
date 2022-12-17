import Image from "next/image";
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";
import GetImage from "../utils/getImage";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

const ImageComponent = ({ value }) => {
  return (
    <Image
      {...GetImage(value)}
      blurDataURL={GetImage(value).blurDataURL}
      alt={value.alt || " "}
      placeholder="blur"
      loading="lazy"
      width={800}
      height={600}
    />
  );
};

const client = createClient(config);

export default client;
