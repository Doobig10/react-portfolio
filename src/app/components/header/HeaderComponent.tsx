"use client";

import { TypeAnimation } from 'react-type-animation';

export default function HeaderComponent() {
    return (
        <section>
            <div className={`
            grid 
            grid-cols-1 lg:grid-cols-25
            `}>
                <div className={`
                col-span-20 
                place-self-left
                text-center sm:text-left
                `}>
                    <h1 className={`
                    text-white
                    mb-4
                    text-4xl sm:text-5xl lg:text-6xl 
                    font-extrabold
                    `}>
                        <span className={`
                        text-transparent 
                        bg-clip-text 
                        bg-gradient-to-b from-moonstone to-pear
                        `}>
                            Looking For
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                'A Capable Graduate?',
                                3000,
                                'A Software Engineer?',
                                3000,
                                'A New Team Member?',
                                3000,
                                'Aidan Brooks?',
                                8000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className={"text-supreme text-lg lg:text-xl mb-6"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div>
                        <button
                            className={"w-full sm:w-fit bg-gradient-to-br from-moonstone to-pear rounded-full mr-4 px-6 py-3 hover:bg-fixed hover:bg-moonstone text-black"}>My
                            Projects
                        </button>
                        <button className={"w-full sm:w-fit bg-gradient-to-br from-moonstone to-pear rounded-full mr-4 button-hollow px-1 py-1 bg-transparent mt-3"}>
                            <span className={"block bg-eerie rounded-full px-5 py-2 hover:bg-slate-800 text-white"}>
                                Download CV
                            </span>
                        </button>
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