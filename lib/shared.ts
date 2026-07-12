export const appName = "DND Docs";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";
export const docsContentRoute = "/llms.mdx/docs";

export const gitConfig = {
  user: "vRealms-Team",
  repo: "dnd-docs",
  branch: "master",
};

// Each buyer-facing resource this portal documents, and its own repo — used
// to build GitHub/release links on resource overview pages without
// hardcoding the org name everywhere.
export const resources = [
  { slug: "dnd_phone", repo: "dnd_phone", label: "dnd_phone" },
  { slug: "dnd_blackmarketplace", repo: "dnd_blackmarketplace", label: "dnd_blackmarketplace" },
  { slug: "dnd_jobmanagement", repo: "dnd_jobmanagement", label: "dnd_jobmanagement" },
  { slug: "dnd_economy", repo: "dnd_economy", label: "dnd_economy" },
] as const;
