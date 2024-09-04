import Link from "next/link";
import {PropsWithChildren} from "react";

interface Props {
    href: string,
    text?: string,
    className?: string,
}

const fallback = {
    className: "block py-2 pl-3 pr-4 text-[#86959e] sm:text-xl rounded md:p-0 hover:text-white"
}

export default function ToolbarElementComponent(
    props: PropsWithChildren<Props>
) {
    return (
        <Link
            href={props.href}
            className={props.className || fallback.className}
        >
            {props.children || props.text}
        </Link>
    );
}