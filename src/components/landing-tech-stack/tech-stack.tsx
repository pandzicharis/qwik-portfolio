import { component$, useStylesScoped$ } from "@builder.io/qwik";
import TechStackStyle from "./tech-stack.css?inline";
import Title from "../typography/title";
import Subtitle from "../typography/subtitle";
import TechStackIcon from "./icon/tech-stack-icon";
import { myTechStack } from "./data/tech-stack-items";

export default component$(() => {
  useStylesScoped$(TechStackStyle);

  return (
    <div class="mt-12 flex justify-center items-center flex-col">
      <Title title="My tech stack" />
      <Subtitle subtitle="Technologies I’ve been working with recently" />
      <div class="flex flex-wrap justify-center mt-5">
        {myTechStack.map((item, index) => (
          <TechStackIcon key={index} element={item} />
        ))}
      </div>
    </div>
  );
});
