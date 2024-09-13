"use client";

import Link from "next/link";
import React , {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

import ToolbarOverlayComponent from "@/app/components/toolbar/ToolbarOverlayComponent";
import ToolbarElementComponent from "@/app/components/toolbar/ToolbarElementComponent";
import {toolbarData} from "@/app/components/toolbar/ToolbarData"

export default function ToolbarComponent() {
    const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);

    return (
        <nav className={`
        fixed top-0 left-0 right-0 z-10 
        bg-eerie bg-opacity-95
        `}>
            <div className={`
            flex flex-wrap 
            items-center justify-between 
            mx-auto p-8
            `}>
                <Link href={"/"} className={`
                text-2xl md:text-5xl 
                text-white 
                font-semibold
                `}>
                    AJB
                </Link>
                <div  id={"navbar"} className={`
                mobile-menu block 
                sm:hidden w-auto
                `}>
                    <button
                        onClick={() => setToolbarOpen(!toolbarOpen)}
                        className={`
                        flex items-center 
                        px-3 py-2 
                        rounded
                        border border-slate-200 border-2
                        text-slate-200 
                        hover:text-white hover:border-white
                        `}
                    >
                        {!toolbarOpen ?
                            <Bars3Icon className={`h-5 w-5`}/> :
                            <XMarkIcon className={`h-5 w-5`}/>
                        }
                    </button>
                </div>
                <div id={"navbar"} className={`
                menu hidden 
                sm:block sm:w-auto
                `}>
                    <ul className={`
                    flex 
                    p-0 
                    md:flex-row md:space-x-8
                    `}>
                        {
                            toolbarData.map((toolbarElement, index) => (
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
            {
                toolbarOpen ? (
                    <ToolbarOverlayComponent />
                ) : null
            }
        </nav>
    );
}