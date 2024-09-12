import "/public/images/next.svg"
import "/public/images/scpsecretlab-banner.jpg"

type Tags = "all" | "web" | "docker"

interface IProjectsData {
    id: number;
    title: string;
    description: string;
    background: string;
    tags: Tags[];
    github: string | undefined;
    preview: string | undefined;
}

export const projectsData: IProjectsData[] = [
    {
        id: 1,
        title: "React Portfolio Website - NextJS",
        description: "A basic React portfolio website implemented with NextJS. You may even be browsing it already.",
        background: "/images/next.svg",
        tags: ["all", "web"],
        github: "https://github.com/Doobig10/hermes",
        preview: "https://ajb-intelligentsoftware.com",
    },
    {
        id: 2,
        title: "SCP: Secret Laboratory - Docker Server",
        description: "A simple to use implementation of an SCP Secret Laboratory game server through docker.",
        background: "/images/scpsecretlab-banner.jpg",
        tags: ["all", "docker"],
        github: "https://github.com/Doobig10/scpsl-docker",
        preview: "https://hub.docker.com/r/doobig/scpsl-docker",
    },
]