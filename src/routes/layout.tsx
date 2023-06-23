import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
import Header from "~/components/header/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <main>
        <Header />
        <div></div>
        <Slot />
        <div class="divider mt-8"></div>
        <div class="footer mt-7 mb-7 flex justify-between">
          <p class="rights">@ 2023. All Rights Reserved</p>
          <p class="rights">Designed by Haris Pandzic</p>
        </div>
      </main>
    </>
  );
});
