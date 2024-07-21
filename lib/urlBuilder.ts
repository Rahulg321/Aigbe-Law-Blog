import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Image } from "sanity";

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
