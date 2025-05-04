import React from "react";
import Image from "next/image";

const Home = () => {

  return (
    <section
      className="flex items-center justify-center"
    >
        <div className="flex gap-4 items-center">
          <Image
            src="/images/Tudoo.svg"
            width={60}
            height={60}
            className="rounded-lg"
            alt="logo"
          />
          <div>
            <p className="font-semibold">TudOOOOOO</p>
            <p className="text-orange-500 text-sm">By Birtukan</p>
          </div>
        </div>
    </section>
  );
};

export default Home;



