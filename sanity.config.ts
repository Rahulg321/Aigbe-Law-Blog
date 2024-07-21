import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: "xq3bdfae",
  dataset: "production",
  title: "Aigbe Law Blog",
  apiVersion: "2024-01-01",
  basePath: "/admin",
  plugins: [structureTool(), visionTool(), unsplashImageAsset(), codeInput()],
  schema: {
    types: schemas,
  },
});

export default config;
