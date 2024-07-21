"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";
import React, { useEffect } from "react";

const page = () => {
  return <NextStudio config={config} />;
};

export default page;
