import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QTooltip } from "~/components/tooltip/tooltip";
import HeaderStyle from "./../header.css?inline";

interface HeaderIconProps {
  src: string;
  title: string;
}

export default component$(({ src, title }: HeaderIconProps) => {
  useStylesScoped$(HeaderStyle);

  return (
    <QTooltip title={title}>
      <img class="header-link" src={src} alt="logo" width={30} height={30} />
    </QTooltip>
  );
});
