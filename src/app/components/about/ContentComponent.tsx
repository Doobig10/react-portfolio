"use client";

import {data, Windows} from "@/app/components/about/Data";
import React, {useState, useTransition} from "react";
import ButtonMenuComponent from "@/app/components/about/menu/ButtonMenuComponent";
import DisplayComponent from "@/app/components/about/menu/DisplayComponent";

export default function ContentComponent() {

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

            <ButtonMenuComponent
                active={activeWindow}
                select={handleWindowChange}
            />

            <DisplayComponent
                active={activeWindow}
            />
        </div>
    );
}
