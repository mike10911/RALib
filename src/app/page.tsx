import BookCataloge from "@/components/book-cataloge";
import LandingPage from "@/components/landing-page";
import { BookSpotlight } from "@/components/ui/book-spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <BookSpotlight />
      <BookCataloge/>
    </div>
  );
}
 