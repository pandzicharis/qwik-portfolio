import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ButtonsStyle from "./../buttons.css?inline";

export default component$(() => {
  useStylesScoped$(ButtonsStyle);

  return (
    <div class="container-contained">
      <div class="text-white">Download CV</div>
    </div>
  );
});
