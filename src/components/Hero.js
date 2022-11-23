import Heroimg from "../assets/image-web-3.jpg";
import React from 'react'
const dataHero = [
  {
    title: "Hydrogen VS Electric Cars",
    des: "Will hydrogen-fueled cars ever catch up to Evs?"
  },
  {
    title: "Hydrogen VS Electric Cars",
    des: "Will hydrogen-fueled cars ever catch up to Evs?"
  },
  {
    title: "Hydrogen VS Electric Cars",
    des: "Will hydrogen-fueled cars ever catch up to Evs?"
  }
];
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row px-5">
      {/* hero left */}
      <div className="md:w-[70%]">
        <div className="t">
          <img
            src={Heroimg}
            className="object-cover w-full h-[20rem] mx-auto"
            alt=""
          />
        </div>
        <div className="mt-5 md:flex items-center">
          <div className="tl md:w-[50%]">
            <h1 className="text-5xl capitalize font-bold">
              the Bright future of web 3.0?
            </h1>
          </div>
          <div className="tr mt-5  md:w-[50%]">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="mt-5">
              <a
                href="#"
                className="uppercase bg-orange-600 tracking-widest text-white px-8 py-3 duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* hero right */}
      <div className="bg-black text-white p-5 md:mt-0 mt-8 ml-0 md:ml-5 space-y-5 md:space-y-10 md:w-[30%]">
        <h1 className="text-orange-200 text-3xl md:text-5xl font-bold">New</h1>
        {dataHero.map((item, index) => (
          <>
            <div className="">
              <h3 key={index} className="text-xl font-semibold">
                {item.title}
              </h3>
              <p key={index} className="text-zinc-400">
                {item.des}
              </p>
              <hr className="mt-8 bg-zinc-400" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Hero;
