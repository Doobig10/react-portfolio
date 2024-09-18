"use client";

import ContentComponent from "@/app/components/header/ContentComponent";

export default function HeaderContainer() {
    return (
        <section id={'header'}>
            <div className={`
            grid 
            grid-cols-1 lg:grid-cols-25
            `}>
                <div className={`
                col-span-20 
                place-self-left
                text-center sm:text-left
                `}>
                    <ContentComponent/>
                    <div>
                        <a
                            href={"#projects"}
                        >
                            <button
                                className={`
                                w-full sm:w-fit
                                bg-gradient-to-br from-moonstone to-pear 
                                rounded-full 
                                mr-4
                                px-6 py-3
                                hover:bg-fixed hover:bg-moonstone 
                                text-black
                                `}
                            >
                                <span>
                                    My Projects
                                </span>
                            </button>
                        </a>
                        <a
                            href={"/documents/cv.pdf"}
                            download={"Aidan Brooks - CV"}
                            target={"_blank"}
                        >
                            <button
                                className={`
                                w-full sm:w-fit 
                                bg-gradient-to-br from-moonstone to-pear 
                                rounded-full 
                                mr-4 mt-3 sm:mt-0
                                px-1 py-1 
                                bg-transparent
                                `}
                            >
                                <span className={`block bg-eerie rounded-full px-5 py-2 hover:bg-slate-800 text-white`}>
                                    Download CV
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className={"col-span-5 place-self-right mt-4 lg:mt-0"}>
                    <div className={"rounded-sm bg-blue-800"}>
                    </div>
                </div>
            </div>
        </section>
    );
}