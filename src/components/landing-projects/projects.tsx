import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Subtitle from "../typography/subtitle";
import Title from "../typography/title";
import ProjectsStyle from "./projects.css?inline";
import { QCourosel } from "../courosel/courosel";

export default component$(() => {
  useStylesScoped$(ProjectsStyle);

  return (
    <div class="mt-12 flex justify-center items-center flex-col">
      <div class="container" style={{ width: "100%" }}>
        <div class="projects">
          <Title title="Projects" />
          <Subtitle subtitle="Things I've been working on" />
        </div>
        <QCourosel />
      </div>
    </div>
  );
});
