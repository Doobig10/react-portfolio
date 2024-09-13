import React from "react";
import AboutSkillsComponent from "@/app/components/about/menu/AboutSkillsComponent";

export type Windows = "skills" | "education" | "experience" | "hobbies";

export interface IAboutData {
    title: string;
    id: Windows;
    content: React.ReactNode;
}

export const aboutData: IAboutData[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className={``}>
                <AboutSkillsComponent />
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div>
                <span> test </span>
            </div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <div>
                <span> test2 </span>
            </div>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <div>
                <span> test3 </span>
            </div>
        )
    }
]