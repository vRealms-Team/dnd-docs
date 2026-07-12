import Link from "next/link";
import { appName } from "@/lib/shared";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 prose items-center gap-2">
      <h1 className="text-2xl font-bold">{appName}</h1>
      <p className="text-fd-muted-foreground max-w-md">
        Setup guides, configuration reference, and buyer support docs for our FiveM resources.
      </p>

      <Link href="/docs">Continue to Documentation →</Link>
    </div>
  );
}
