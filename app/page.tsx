import CoverParticles from "@/components/cover-particles";
import Image from "next/image";

export default function Home() {
  return (
     <main className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
         <p>Introduccion</p>
     </main>
  );
}
