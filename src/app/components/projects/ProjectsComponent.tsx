import ProjectsCardComponent from "@/app/components/projects/ProjectsCardComponent";

import {projectsData} from "@/app/components/projects/ProjectsData";

export default function ProjectsComponent() {
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
                mt-4 mb-8 md:mb-12
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
                <button
                    className={`
                    rounded-full
                    border-2 border-pear
                    px-6 py-3
                    text-xl
                    cursor-pointer
                    `}
                >
                    All
                </button>
                <button
                    className={`
                    rounded-full
                    border-2 
                    border-supreme hover:border-white
                    px-6 py-3
                    text-xl
                    cursor-pointer
                    `}
                >
                    Web
                </button>
            </div>
            <div
                className={`
                grid 
                lg:grid-cols-3 
                gap-8 md:gap-12
                `}
            >
                {
                    projectsData.map((project) => (
                        <ProjectsCardComponent
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        background={project.background}
                        github={project.github}
                        preview={project.preview}
                        />
                    ))
                }
            </div>
        </section>
    );
}


