"use client";

import React , {useState, useTransition} from "react";
import Image from "next/image";

import AboutButtonComponent from "@/app/components/about/AboutButtonComponent";
import {aboutData, Windows} from "@/app/components/about/AboutData"

export default function AboutComponent() {
    const [activeWindow, setActiveWindow] = useState<Windows>("skills");
    const [isPending, startTransition] = useTransition()

    const handleWindowChange = (window: Windows) => {
        startTransition(() => {
            setActiveWindow(window)
        })
    }

    return (
        <section
            id={"about"}
            className={`text-white`}
        >
            <div
                className={`
            lg:grid lg:grid-cols-2 
            gap-16
            items-center 
            py-8 px-0 sm:py-16 sm:px-4
            `}>
                <div className={`
                container 
                hidden lg:block
                `}>
                <Image
                    src={"/images/vercel.svg"}
                    alt={"Placeholder Image"}
                    width={500}
                    height={500}
                />
                </div>
                <div className={`
                container
                flex flex-col h-full
                place-self-center
                mt-4 md:mt-0
                text-left
                `}>
                    <h2 className={"text-4xl font-bold text-white mb-4"}>
                        About Me
                    </h2>
                    <p className={"text-base md:text-lg"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis ornare porttitor. Sed nec
                        quam dignissim, maximus nunc ac, pulvinar nisi. In vitae ultricies lorem, in dignissim mi. Nam
                        sodales felis ante, non malesuada purus condimentum sed. Quisque nisl tellus, fringilla et
                        eleifend et, porta quis arcu. Nunc porttitor mi quis est vulputate porta. Vestibulum tincidunt,
                        neque ac faucibus cursus, lacus est ornare eros, vel feugiat risus ante sit amet tellus.
                    </p>
                    <div className={"flex flex-row justify-start mt-8"}>
                        <AboutButtonComponent
                            selectTab={() => handleWindowChange("skills")}
                            active={activeWindow === "skills"}

                            universalClass={"mr-3 font-semibold hover:text-white"}
                            activeClass={"text-white border-b border-moonstone"}
                            inactiveClass={"text-supreme"}
                        >
                            <span>Skills</span>
                        </AboutButtonComponent>
                        <AboutButtonComponent
                            selectTab={() => handleWindowChange("education")}
                            active={activeWindow === "education"}

                            universalClass={"mr-3 font-semibold hover:text-white"}
                            activeClass={"text-white border-b border-moonstone"}
                            inactiveClass={"text-supreme"}
                        >
                            <span>Education</span>
                        </AboutButtonComponent>
                        <AboutButtonComponent
                            selectTab={() => handleWindowChange("experience")}
                            active={activeWindow === "experience"}

                            universalClass={"mr-3 font-semibold hover:text-white"}
                            activeClass={"text-white border-b border-moonstone"}
                            inactiveClass={"text-supreme"}
                        >
                            <span>Experience</span>
                        </AboutButtonComponent>
                    </div>
                    <div className={"mt-8"}>
                        {
                            (aboutData.find(
                                (entry) => (entry.id === activeWindow)
                            ) || {content: <p>failed to locate content</p>}).content
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}