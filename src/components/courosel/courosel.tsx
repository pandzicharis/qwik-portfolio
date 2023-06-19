/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "./courosel.css";
import { myTechStack } from "../landing-tech-stack/data/tech-stack-items";
import Tooltip from "@mui/material/Tooltip";
import { PROJECTS } from "./data/data";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const OPTIONS: EmblaOptionsType = { loop: true };

function Courosel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ stopOnInteraction: false, delay: 5000 }),
  ]);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });

    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {PROJECTS.map((item, index: number) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <div className="container w-full flex flex-row">
                <div
                  style={{
                    width: "35%",
                    height: "100%",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    background: item.style?.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="bg-red-100"
                >
                  <img
                    style={{
                      height: item.style.height ?? "unset",
                      width: item.style.width ?? "unset",
                    }}
                    src={item.logo}
                  />
                </div>
                <div
                  style={{
                    width: "65%",
                    height: "100%",
                    padding: "20px",
                  }}
                >
                  <div>
                    <div className="project-title-container">
                      <div className="flex items-center justify-between">
                        <span className="project-title">{item.name}</span>
                        <div className="flex gap-2">
                          {item.code && (
                            <Tooltip title="View code" arrow placement="top">
                              <GitHubIcon
                                className="cursor-pointer"
                                onClick={() => {
                                  window.open(item.url, "_blank");
                                }}
                              />
                            </Tooltip>
                          )}
                          {item.url && (
                            <Tooltip title="Preview" arrow placement="top">
                              <LinkIcon
                                className="cursor-pointer"
                                onClick={() => {
                                  window.open(item.url, "_blank");
                                }}
                              />
                            </Tooltip>
                          )}
                        </div>
                      </div>
                      <span className="project-subtitle">{item.since}</span>
                      <span className="project-description mt-7">
                        {item.description}
                      </span>
                      <span className="tech-stack-title mt-7">Tech-stack</span>
                      <div className="flex">
                        {myTechStack
                          .filter((techStack) =>
                            item.techStack.includes(techStack.type)
                          )
                          .map((i) => (
                            <Tooltip title={i.name} arrow followCursor>
                              <img
                                src={i.icon}
                                style={{ height: "40px", marginLeft: "-5px" }}
                                height={40}
                                width={40}
                              />
                            </Tooltip>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const QCourosel = qwikify$(Courosel, { eagerness: "visible" });
