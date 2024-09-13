import Link from "next/link";
import {PropsWithChildren} from "react";

interface Props {
    href: string,
    text?: string,
}

export default function ToolbarElementComponent(
    props: PropsWithChildren<Props>
) {
    return (
        <Link
            href={props.href}
            className={`
            block py-2 pl-3 pr-4 text-supreme sm:text-xl rounded md:p-0 hover:text-white
            `}
        >
            {props.children || props.text}
        </Link>
    );
}