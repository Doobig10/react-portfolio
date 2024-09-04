import React, {PropsWithChildren} from "react";

interface Props {
    active: boolean;
    selectTab?: any;
    universalClass?: string;
    activeClass?: string;
    inactiveClass?: string;
}

const fallback = {
    activeClass: "",
    inactiveClass: "",
}

export default function AboutButtonComponent (
    props: PropsWithChildren<Props>
) {
    const classNameModifier = props.active ?
        props.activeClass || fallback.activeClass :
        props.inactiveClass || fallback.inactiveClass;

    return (
        <button onClick={props.selectTab}>
            <div className={`${props.universalClass} ${classNameModifier}`}>
                {props.children}
            </div>
        </button>
    )
}