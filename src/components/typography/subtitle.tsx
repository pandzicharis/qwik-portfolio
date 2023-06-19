import { component$, useStylesScoped$ } from "@builder.io/qwik";
import TypographyStule from "./typography.css?inline";

interface SubtitleProps {
  subtitle: string;
}

export default component$(({ subtitle }: SubtitleProps) => {
  useStylesScoped$(TypographyStule);

  return <p class={"subtitle"}>{subtitle}</p>;
});
