import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left me:text-5xl md:mt-10">
          Toda mi{" "}
          <span className="font-bold text-secondary ">
            trayectoria profesional
          </span>
        </h1>
      </ContainerPage>
    </>
  );
};
export default PageAboutMe;
