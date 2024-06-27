"use client";

import Image from "next/image";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { useState } from "react";

const TestimonialsPage = () => {
  const [copied, setCopied] = useState(false);
  const email = "arcancode@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center min-h-screen">
        <CircleImage />

        <div className="flex items-center justify-center min-h-screen bg-[#221d2d] text-[#fdfcfd] font-[Poppins]">
          <div className="flex flex-col md:flex-row items-center w-[90vw] md:w-[75vw] max-w-[650px] p-6 md:p-8 bg-[#121017] rounded-[24px] mx-auto my-auto">
            <Image
              src="/jonny.jpeg"
              width="300"
              height="300"
              alt="user image"
              className="w-full md:max-w-[280px] md:w-[35vw] h-[300px] object-cover md:ml-[-60px] md:mr-8 rounded-[24px] mb-8 md:mb-0"
            />
            <div>
              <h2 className="text-[26px] font-[400] mt-0 mb-2 md:mr-8">
                Jonny Fernandez
              </h2>
              <h3 className="text-[16px] font-[400] m-0 opacity-[0.75]">
                Backend Developer
              </h3>
              <p className="text-[14px] font-[400] mb-8 opacity-[0.5]">
                Detrás de cada gran aplicación, hay un backend impecable.
              </p>
              <span
                className=" text-[#f8f8f8] font-inherit px-6 py-4 text-[16px] rounded-[40px] cursor-pointer"
                onClick={handleCopy}
              >
                {email}
              </span>
              {copied && (
                <p className="absolute top-1/1.2 left-1/2 transform -translate-x-1/3 -translate-y-full text-green-500 mt-2 text-sm">
                  ¡Correo copiado!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
