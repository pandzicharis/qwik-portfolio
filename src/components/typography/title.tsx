import { component$, useStylesScoped$ } from "@builder.io/qwik";
import TypographyStule from "./typography.css?inline";

interface TitleProps {
  title: string;
}

export default component$(({ title }: TitleProps) => {
  useStylesScoped$(TypographyStule);

  return <p class="title">{title}</p>;
});
