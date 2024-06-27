import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mt-10">
            Mis{" "}
            <span className="font-bold text-secondary mb-3"> Tech skills.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300 hidden md:inline-block ">
            Ofrezco servicios como Backend Developer, especializado en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizo Python, JavaScript, PostgreSQL y MongoDB para diseñar
            servidores seguros y robustos, comprometiéndome a ofrecer soluciones
            escalables y de alto rendimiento.
          </p>
          <Link href={'#!'} className="px-3 py-2 rounded-lg bg-secondary w-fit rounded-xl hover:bg-secondary/65 fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:block mx-auto block">
          Descargar CV
          </Link>
        
        </div>
        {/* <div className="bg-red-500 mb-14"> */}
        <div className="mb-14 md:mb-0">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
