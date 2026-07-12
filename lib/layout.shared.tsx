import { BookIcon, FileQuestion, ScrollText, ShoppingBag } from "lucide-react";
import { IconBrandDiscord } from "@tabler/icons-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig, discordUrl, tebexUrl } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img className="w-6" src="/logo.svg" />
          <p className="font-bold">{appName}</p>
        </>
      ),
      url: "/docs",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: "Resources",
        url: "/docs/resources",
        icon: <BookIcon />,
        on: "all",
      },
      {
        type: "main",
        text: "Policies",
        url: "/docs/policies",
        icon: <FileQuestion />,
        on: "all",
      },
      {
        type: "main",
        text: "Changelog",
        url: "/docs/changelog",
        icon: <ScrollText />,
        on: "all",
      },
      {
        type: "main",
        text: "Store",
        url: tebexUrl,
        icon: <ShoppingBag />,
        on: "all",
      },
      {
        type: "icon",
        label: "Discord",
        icon: <IconBrandDiscord />,
        text: "Discord",
        url: discordUrl,
      },
    ],
  };
}
