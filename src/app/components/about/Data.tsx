import React from "react";
import SkillsComponent from "@/app/components/about/menu/SkillsComponent";
import EducationComponent from "@/app/components/about/menu/EducationComponent";
import ExperienceComponent from "@/app/components/about/menu/ExperienceComponent";
import HobbiesComponent from "@/app/components/about/menu/HobbiesComponent";

export type Windows = "skills" | "education" | "experience" | "hobbies";

export interface IAboutData {
    title: string;
    id: Windows;
    content: React.ReactNode;
    optional?: boolean;
}

export const data: IAboutData[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <SkillsComponent />
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <EducationComponent />
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ExperienceComponent />
        ),
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <HobbiesComponent />
        ),
        optional: true,
    }
]