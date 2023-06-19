import { component$, useStylesScoped$ } from "@builder.io/qwik";
import WelcomeStyle from "./../welcome.css?inline";

interface WelcomePictureProps {
  src: string;
}

export default component$(({ src }: WelcomePictureProps) => {
  useStylesScoped$(WelcomeStyle);

  return (
    <div class="w-80 h-80 picture-wrapper rounded-full flex items-center justify-center">
      <img
        class="picture rounded-full"
        src={src}
        alt="logo"
        width={320}
        height={320}
      />
    </div>
  );
});
