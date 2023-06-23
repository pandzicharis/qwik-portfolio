import {
  component$,
  useStylesScoped$,
  type PropFunction,
} from "@builder.io/qwik";
import ButtonsStyle from "./../buttons.css?inline";

interface OutlinedButtonProps {
  onClick$: PropFunction<() => void>;
}

export default component$(({ onClick$ }: OutlinedButtonProps) => {
  useStylesScoped$(ButtonsStyle);

  return (
    <div class="container-outlined" onClick$={onClick$}>
      <div class="container-outlined-text">Let's talk</div>
    </div>
  );
});
