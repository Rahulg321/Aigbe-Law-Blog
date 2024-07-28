import React from "react";
import { Separator } from "./ui/separator";

const CategoriesList = () => {
  return (
    <div className="bg-muted p-4 ">
      <h4 className="text-mainB">Categories</h4>
      <Separator className="h-[4px] bg-mainB my-[0.5em]" />
    </div>
  );
};

export default CategoriesList;
