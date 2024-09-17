import React, {PropsWithChildren, useState} from 'react'
import {data, Windows} from "@/app/components/about/Data";

interface Props {
    active: Windows,

}

export default function DisplayComponent(
    props: PropsWithChildren<Props>
) {

    const [isShowMore, setShowMore] = useState<boolean>(false);

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
                        (data.find(
                            (entry) => (entry.id === props.active)
                        ) || {content: <p>failed to locate content</p>}).content
                    }
                </div>
            </div>

            {/*<button*/}
            {/*    onClick={() => setShowMore(!isShowMore)}*/}
            {/*    className={`*/}
            {/*                    px-2 py-2 */}
            {/*                    text-supreme*/}
            {/*                    hover:text-white hover:border-white*/}
            {/*                    `}*/}
            {/*>*/}
            {/*    {!isShowMore ?*/}
            {/*        <span> + See More </span> :*/}
            {/*        <span> - See Less </span>*/}
            {/*    }*/}
            {/*</button>*/}

        </div>

)
    ;
}
