import Image from "next/image";

const Header = () => {
    return (
     <div className="flex flex-col justify-between w-full h-full">
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
        <div className="mb-6">
            <h1 className="text-xl font-medium text-black">Good morning! ☀️</h1>
            <p className="text-zinc-400">Let's see what you've got to do today.</p>
        </div>
      </div>
    );
  };

export default Header;