import React, {PropsWithChildren} from 'react'
import {aboutData, Windows} from "@/app/data/AboutData";

interface Props {
    active: Windows,

}

export default function DisplayComponent(
    props: PropsWithChildren<Props>
) {

    return (
        <div>
            <div
                className={`
                h-64
                overflow-y-hidden
                `}
            >
                <div
                    className={`
                    mt-4
                    h-64
                    w-full
                    sm:min-h-32 min-h-16
                    overflow-y-scroll
                    overflow-x-hidden
                    `}
                >
                    {
                        (aboutData.find(
                            (entry) => (entry.id === props.active)
                        ) || {content: <p>failed to locate content</p>}).content
                    }
                </div>
            </div>
        </div>

)
    ;
}
