/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { myTechStack } from "./../../components/landing-tech-stack/data/tech-stack-items";
import "./tech-stack.css";

function TechStack() {
  const findTechStackItem = (e: any) => {
    return myTechStack.find((i) => i.name === e);
  };

  const bestTechStack = [
    {
      item: findTechStackItem("React"),
      percentage: "90%",
    },
    {
      item: findTechStackItem("Typescript"),
      percentage: "85%",
    },
    {
      item: findTechStackItem("Nest.js"),
      percentage: "85%",
    },
    {
      item: findTechStackItem("React Native"),
      percentage: "75%",
    },
    {
      item: findTechStackItem("Flutter"),
      percentage: "75%",
    },
    {
      item: findTechStackItem(".NET"),
      percentage: "70%",
    },
  ];

  return (
    <div className="mt-12 w-full flex flex-col">
      <p className="link-title">tech stack.</p>
      <span className="about-me">
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels and other components and export it as a set of static
        files: HTML/CSS/JS.
      </span>
      <div className="mt-10 flex flex-wrap gap-y-1">
        {myTechStack.map((item) => (
          <div className="flex items-center w-48">
            <img width={35} height={35} src={item.icon} className="mr-1" />
            <span className="text-[#42446e]">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <span className="title">Most experienced in</span>
        <div className="grid grid-cols-2 gap-10 w-[60%] mt-10">
          {bestTechStack.map((item) => (
            <div className="flex items-center">
              <div className="w-full">
                <div className="flex mb-1 items-center">
                  <img width={25} height={25} src={item.item?.icon} />
                  <span className="text-base font-medium text-[#42446e]">
                    {item.item?.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="progress-bar h-2.5 rounded-full"
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <span className="title">Awards</span>
        <div className="grid grid-cols-2 gap-10 w-[60%] mt-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-full bg-[#42446e] h-[100px] flex items-center justify-center">
              <img
                className="current-engagement-company-logo ml-2 cursor-pointer"
                src="/awards/ankora-white.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const QTechStack = qwikify$(TechStack, { eagerness: "visible" });
