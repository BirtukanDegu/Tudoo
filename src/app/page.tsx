import React from "react";
import VanishList from "@/components/VanishList";

const Home = () => {

  return (
    <section
      className="min-h-screen overflow-y-hidden h-full flex items-center md:flex-row flex-col"
    >
      <div className="relative min-h-screen h-full w-full flex justify-center items-center p-4 md:p-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#33322C_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <VanishList />
      </div>
    </section>
  );
};

export default Home;



