import {PropsWithChildren} from 'react'

import Link from 'next/link'
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline";

interface Props {
    title: string
    description: string
    background: string
    github?: string
    preview?: string
}

export default function ProjectsCardComponent(
    props: PropsWithChildren<Props>
) {
    return (
        <div
            className={`group/card`}
        >
            <div id={'project-image'}
                className={`
                h-52
                rounded-t-xl
                relative 
                `}
                style={{
                    background: `url(${props.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className={`
                    absolute
                    top-0 left-0
                    flex
                    items-center
                    justify-center
                    w-full h-full
                    bg-eerie
                    bg-opacity-0 
                    group-hover/card:bg-opacity-80
                    transition-all duration-500
                    `}
                >
                    {props.github && (
                        <Link
                            href={props.github}
                            className={`
                            opacity-0 group-hover/card:opacity-100
                            transition-opacity duration-500
                            h-14 w-14
                            mr-2 md:mr-10
                            border-2
                            relative
                            rounded-full
                            border-supreme hover:border-white
                            group/link
                            `}
                        >
                            <CodeBracketIcon
                                className={`
                                h-10 w-10
                                text-supreme
                                absolute
                                top-1/2 left-1/2
                                transform -translate-x-1/2 -translate-y-1/2
                                cursor-pointer
                                group-hover/link:text-white
                                `}
                            />
                        </Link>
                    )}
                    {props.preview && (
                        <Link
                            href={props.preview}
                            className={`
                            opacity-0 group-hover/card:opacity-100
                            transition-opacity duration-500
                            h-14 w-14
                            border-2
                            relative
                            rounded-full
                            border-supreme hover:border-white
                            group/link
                            `}
                        >
                            <EyeIcon
                                className={`
                                h-10 w-10
                                text-supreme
                                absolute
                                top-1/2 left-1/2
                                transform -translate-x-1/2 -translate-y-1/2
                                cursor-pointer
                                group-hover/link:text-white
                                `}
                            />
                        </Link>
                    )}
                </div>
            </div>
            <div
                className={`
                text-white
                rounded-b-xl
                bg-eerie
                py-6 px-4
                mt-3
                `}
            >
                <h5
                    className={`
                    text-xl
                    font-semibold
                    mb-2
                    `}
                >
                    {props.title}
                </h5>
                <p
                    className={`
                    text-supreme
                    `}
                >
                    {props.description}
                </p>
            </div>
        </div>
    );
}

