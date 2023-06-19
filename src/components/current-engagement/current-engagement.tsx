import { component$, useStylesScoped$ } from "@builder.io/qwik";
import TypographyStyle from "./../typography/typography.css?inline";
import Title from "../typography/title";
import Subtitle from "../typography/subtitle";

export default component$(() => {
  useStylesScoped$(TypographyStyle);

  return (
    <div class="mt-8">
      <Title title="Current position" />
      <div class="flex items-center">
        <Subtitle subtitle="Full-stack developer at" />
        <img
          class="current-engagement-company-logo ml-2 cursor-pointer"
          src="./ankora-logo.svg"
          alt="logo"
          width={120}
          height={120}
          onClick$={() => window.open("https://ankorainc.com/", "_blank")}
        />
      </div>
    </div>
  );
});
