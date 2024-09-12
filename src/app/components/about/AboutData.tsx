import React from "react";

export type Windows = "skills" | "education" | "experience";

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
            <div className={`
                list-disc
                pl-2
            `}>
                <ul>
                    <li> Skill 1 </li>
                    <li> Skill 2 </li>
                </ul>
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
    }
]