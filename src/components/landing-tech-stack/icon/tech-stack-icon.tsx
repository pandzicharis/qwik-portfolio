import { component$, useStylesScoped$ } from "@builder.io/qwik";
import TechStackStyle from "./../tech-stack.css?inline";
import { QTooltip } from "~/components/tooltip/tooltip";

interface IconProps {
  element: {
    name: string;
    icon: string;
  };
}

export default component$(({ element }: IconProps) => {
  useStylesScoped$(TechStackStyle);

  return (
    <QTooltip title={element.name} followCursor={true}>
      <img src={element.icon} height={80} width={80} class="cursor-pointer" />
    </QTooltip>
  );
});
