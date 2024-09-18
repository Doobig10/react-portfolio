import {PropsWithChildren} from 'react'

interface Props {
    active: boolean;
    select: () => void;
    display?: string;
}

export default function ProjectsTagButtonComponent(
    props: PropsWithChildren<Props>
) {

    const classNameModifier = props.active ?
        `border-pear`:
        `border-supreme hover:border-white`;

    return (
        <button
            onClick={props.select}
            className={`
                    rounded-full
                    border-2 
                    px-6 py-3
                    text-xl
                    cursor-pointer
                    ${classNameModifier}
                    `}
        >
            {props.display || props.children}
        </button>
    );
}