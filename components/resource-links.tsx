import React from "react";
import { TebexButton } from "./button";
import { tebexUrl } from "@/lib/shared";

// Buyer-facing FiveM resources live in private repos — buyers can't reach
// them on GitHub at all, so this points to the Tebex store instead.
const ResourceLinks = () => {
  return (
    <div className="flex flex-row gap-2">
      <TebexButton link={tebexUrl} label="Buy on Tebex" />
    </div>
  );
};

export default ResourceLinks;
