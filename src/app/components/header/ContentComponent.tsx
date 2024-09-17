"use client";

import { TypeAnimation } from 'react-type-animation';

export default function ContentComponent() {
    return (
        <div
            className={`
            overflow-hidden
            h-48 sm:h-auto
            mb-6 sm:mb-4
            `}
        >
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
            <p className={"text-supreme text-lg lg:text-xl"}>
                Read on to discover more about me and what I can do for you.
            </p>
            <br/>
        </div>
    );
}
