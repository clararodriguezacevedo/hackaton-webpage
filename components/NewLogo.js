"use client";

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/configNewParticles";

export default function NewLogo({ date }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  const csImage = `/images/hackitba-new-imagotype.png`;

  return (
    <div className="relative flex w-screen h-[80vh] items-center justify-center overflow-hidden">
      {/* Particles background */}
      {init && (
        <div className="absolute inset-0 pt-16 z-0">
          <Particles
            id="tsparticles"
            loaded={particlesLoaded}
            options={particlesConfig}
          />
        </div>
      )}

      {/* Foreground content */}
      <div className="z-10 flex flex-col items-end justify-center w-full h-full space-y-2 px-10">
        <div className="h-[70%] w-full flex items-center justify-center">
          <img
            src={csImage}
            alt="logo"
            className="h-full object-contain pt-[3%]"
          />
        </div>
        <div className="space-y-2 md:pr-24">
          <div className="text-right">
            <h1 className="text-white inline text-lg md:text-5xl font-bold">
              by{" "}
            </h1>
            <h1 className="text-cs-orange inline text-lg md:text-5xl ml-1 font-bold">
              IEEE Computer Society
            </h1>
          </div>
          <div className="text-right">
            <h2 className="text-cs-orange text-lg md:text-3xl font-bold">
              ITBA Student Chapter
            </h2>
          </div>
          <div className="text-right">
            <p className="text-white text-lg md:text-3xl font-bold">
              {typeof date === "string" ? date : String(date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
