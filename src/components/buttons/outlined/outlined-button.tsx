import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ButtonsStyle from "./../buttons.css?inline";

export default component$(() => {
  useStylesScoped$(ButtonsStyle);

  return (
    <div class="container-outlined">
      <div class="container-outlined-text">Let's talk</div>
    </div>
  );
});
