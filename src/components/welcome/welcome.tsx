import { component$, useStylesScoped$ } from "@builder.io/qwik";
import WelcomeStyle from "./welcome.css?inline";
import WelcomePicture from "./picture/welcome-picture";
import CurrentEngagement from "../current-engagement/current-engagement";
import OutlinedButton from "../buttons/outlined/outlined-button";
import ContainedButton from "../buttons/contained/contained-button";
import TechStack from "../landing-tech-stack/tech-stack";
import Projects from "../landing-projects/projects";
import { QContact } from "../landing-contact/contact";

export default component$(() => {
  useStylesScoped$(WelcomeStyle);

  return (
    <div class="flex flex-col mt-28">
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="welcome-text">Hi 👋,</p>
          <p class="welcome-text">My name is</p>
          <p class="welcome-name welcome-text">Haris Pandzic.</p>
          <p class="welcome-text">I'm full-stack developer!</p>
        </div>
        <WelcomePicture src="./profile-picture.jpg" />
      </div>
      <div class="flex gap-3">
        <ContainedButton />
        <OutlinedButton
          onClick$={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
      <CurrentEngagement />
      <TechStack />
      <Projects />
      <QContact />
    </div>
  );
});
