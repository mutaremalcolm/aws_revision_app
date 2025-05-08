import Hero from "../components/Hero";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
    </div>
  );
}
