import React, {PropsWithChildren, useState} from 'react'
import {aboutData, Windows} from "@/app/components/about/AboutData";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

interface Props {
    active: Windows,

}

export default function AboutDisplayComponent(
    props: PropsWithChildren<Props>
) {

    const [isShowMore, setShowMore] = useState<boolean>(false);

    return (
        <div>
            <div
                className={`
                mt-8
                w-full
                h-30
                ${!isShowMore ? `line-clamp-3` : ``}
                `}
            >
                {
                    (aboutData.find(
                        (entry) => (entry.id === props.active)
                    ) || {content: <p>failed to locate content</p>}).content
                }
                {!isShowMore?
                    (<div> <br/><br/><br/> </div>) : (<div/>)
                }
            </div>

            <button
                onClick={() => setShowMore(!isShowMore)}
                className={`
                                px-2 py-2 
                                text-supreme
                                hover:text-white hover:border-white
                                `}
            >
                {!isShowMore ?
                    <span> + See More </span> :
                    <span> - See Less </span>
                }
            </button>
        </div>

)
    ;
}
