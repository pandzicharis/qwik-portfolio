import { component$, useStylesScoped$ } from "@builder.io/qwik";
import HeaderStyle from "./../header.css?inline";

interface HeaderLinkProps {
  title: string;
}

export default component$(({ title }: HeaderLinkProps) => {
  useStylesScoped$(HeaderStyle);

  return <a class="header-link">{title}</a>;
});
