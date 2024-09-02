"use client";

import Link from "next/link";
import React , {useState} from "react";

import ToolbarElementComponent from "@/app/components/ToolbarElementComponent";

const toolbarElements = [
    {
        text: "About",
        path: "#about",
    },
    {
        text: "Projects",
        path: "#projects",
    },
    {
        text: "Contact",
        path: "#contact",
    },
]

export default function ToolbarComponent() {
    const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);

    return (
        <nav className={"fixed top-0 left-0 right-0 z-10 bg-[#1c1c1c] bg-opacity-90"}>
            <div className={"flex flex-wrap items-center justify-between mx-auto p-8"}>
                <Link href={"/"} className={"text-2xl md:text-5xl text-white font-semibold"}>
                    MyLogo
                </Link>
                <div className={"mobile-menu sm:hidden block w-auto"} id={"navbar"}>
                    {
                        toolbarOpen ? (
                            <button> a </button>
                        ) : (
                            <button> b </button>
                        )
                    }
                </div>
                <div className={"menu hidden sm:block sm:w-auto"} id={"navbar"}>
                    <ul className={"flex p-4 md:p-0 md:flex-row md:space-x-8"}>
                        {
                            toolbarElements.map((toolbarElement, index) => (
                                <li key={index}>
                                    <ToolbarElementComponent
                                     href={toolbarElement.path}
                                     text={toolbarElement.text}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}