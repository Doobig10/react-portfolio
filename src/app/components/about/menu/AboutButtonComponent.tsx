import React, {PropsWithChildren} from "react";

interface Props {
    active: boolean;
    select: () => void;
}

export default function AboutButtonComponent (
    props: PropsWithChildren<Props>
) {
    const classNameModifier = props.active ?
        `text-white border-b border-moonstone`:
        `text-supreme`;

    return (
        <button onClick={props.select}>
            <div className={`mr-3 font-semibold hover:text-white ${classNameModifier}`}>
                {props.children}
            </div>
        </button>
    )
}