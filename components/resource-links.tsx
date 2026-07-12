import React from "react";
import { GhButton, ReleaseButton } from "./button";
import { gitConfig } from "@/lib/shared";

interface Props {
  repo: string;
}

// Buyer-facing FiveM resources live in private repos, not npm/public zips —
// this only ever links out to GitHub (repo + releases), unlike
// Overextended's version which also linked npm/direct-download.
const ResourceLinks = ({ repo }: Props) => {
  const github = `https://github.com/${gitConfig.user}/${repo}`;

  return (
    <div className="flex flex-row gap-2">
      <GhButton link={github} label="Repository" />
      <ReleaseButton link={`${github}/releases`} label="Releases" />
    </div>
  );
};

export default ResourceLinks;
