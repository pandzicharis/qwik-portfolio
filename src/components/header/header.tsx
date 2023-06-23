import { component$, useStylesScoped$ } from "@builder.io/qwik";
import HeaderStyle from "./header.css?inline";
import HeaderIcon from "./icons/header-icon";
import HeaderLink from "./links/header-link";

export default component$(() => {
  useStylesScoped$(HeaderStyle);

  return (
    <div class="flex justify-between">
      <img src="/logo.png" alt="logo" width={60} height={60} />
      <div class="flex items-center gap-16">
        <HeaderLink title="Home" href="/" />
        <HeaderLink title="About" href="/about" />
        <HeaderLink title="Tech Stack" href="/about" />
        <HeaderLink title="Projects" href="/about" />
        <div class="flex gap-3">
          <HeaderIcon title="LinkedIn" src="/contact-icons/linkedin.svg" />
          <HeaderIcon title="GitHub" src="/contact-icons/github.svg" />
          <HeaderIcon title="Telegram" src="/contact-icons/telegram.svg" />
        </div>
      </div>
    </div>
  );
});
