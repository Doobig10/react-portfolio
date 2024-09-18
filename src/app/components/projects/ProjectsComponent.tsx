"use client";

import ProjectsCardComponent from "@/app/components/projects/ProjectsCardComponent";

import {filters, projectsData, Tag} from "@/app/data/ProjectsData";
import {useState} from "react";
import ProjectsTagButtonComponent from "@/app/components/projects/ProjectsTagButtonComponent";

export default function ProjectsComponent() {

    const [activeTag, setActiveTag] = useState<Tag>("all");

    return (
        <section
            id={"projects"}
        >
            <h2
                className={`
                text-center
                text-4xl
                font-bold
                text-white
                mt-2 mb-8 md:mb-12
                `}
            >
                My Projects
            </h2>
            <div
                className={`
                flex flex-row 
                justify-center 
                items-center 
                gap-2 
                py-6
                text-supreme
                `}
            >
                {filters.map((filter, index) => (
                    <ProjectsTagButtonComponent
                        key={index}
                        active={(activeTag == filter.filter)}
                        select={() => (setActiveTag(filter.filter))}
                        display={filter.display}
                    />
                    ))
                }
            </div>
            <div
                className={`
                grid 
                lg:grid-cols-3 
                gap-8 md:gap-12
                `}
            >
                {
                    projectsData.map((project) => {
                        return (project.tags.includes(activeTag)) ? (
                        <ProjectsCardComponent
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            background={project.background}
                            github={project.github}
                            preview={project.preview}
                        />
                        ) : null}
                    )
                }
            </div>
        </section>
    );
}


