import React from 'react'
import retroPC from "../assets/image-retro-pcs.jpg";
import laptops from "../assets/image-top-laptops.jpg";
import gaming from "../assets/image-gaming.jpg";
const contentData = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    des: "What happens when old PCs are given modern upgrades?",
    img: retroPC
  },
  {
    id: 2,
    title: "Reviving Retro PCs",
    des: "What happens when old PCs are given modern upgrades?",
    img: laptops
  },
  {
    id: 3,
    title: "Reviving Retro PCs",
    des: "What happens when old PCs are given modern upgrades?",
    img: gaming
  }
];
const Contents = () => {
  return (
    <div className="px-5 mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {contentData.map((item, index) => (
          <div className="flex items-center space-x-3  w-full h-auto">
            <div className="r w-[35%] h-full">
              <img
                key={index}
                className="h-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <div className="l w-[65%] space-y-3 md:space-y-5">
              <h1 key={index} className="text-zinc-400 text-5xl font-bold">
                0{item.id}
              </h1>
              <h3 key={index} className="font-bold text-xl">
                {item.title}
              </h3>
              <p key={index}>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
