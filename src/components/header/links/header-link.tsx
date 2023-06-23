import { component$, useStylesScoped$ } from "@builder.io/qwik";
import HeaderStyle from "./../header.css?inline";

interface HeaderLinkProps {
  title: string;
  href: string;
}

export default component$(({ title, href }: HeaderLinkProps) => {
  useStylesScoped$(HeaderStyle);

  return (
    <a class="header-link" href={href}>
      {title}
    </a>
  );
});
