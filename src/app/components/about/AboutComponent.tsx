"use client";

import {aboutData, Windows} from "@/app/components/about/AboutData";
import React, {useState, useTransition} from "react";
import AboutButtonMenuComponent from "@/app/components/about/menu/AboutButtonMenuComponent";
import AboutDisplayComponent from "@/app/components/about/menu/AboutDisplayComponent";

export default function AboutComponent() {

    const [activeWindow, setActiveWindow] = useState<Windows>("skills");
    const [isPending, startTransition] = useTransition()

    const handleWindowChange = (window: Windows) => {
        startTransition(() => {
            setActiveWindow(window)
        })
    }

    return (
        <div
            className={`
                    container
                    flex flex-col h-full
                    place-self-center
                    mt-4 md:mt-0
                    text-left
                    `}
        >
            <h2 className={"text-4xl font-bold text-white mb-4"}>
                About Me
            </h2>
            <p className={"text-base md:text-lg"}>
                Competent, punctual and friendly, as a graduate specialising in computer science and
                mathematics, I have a broad spectrum of experience in roles requiring a variety of both
                technical and interpersonal skills, as well as a keen interest in the subject matter
                and in furthering my own skills and knowledge.
            </p>

            <AboutButtonMenuComponent
                active={activeWindow}
                select={handleWindowChange}
            />

            <AboutDisplayComponent
                active={activeWindow}
            />
        </div>
    );
}
