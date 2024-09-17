import React, {PropsWithChildren} from 'react'
import ButtonComponent from "@/app/components/about/menu/ButtonComponent";
import {data, Windows} from "@/app/components/about/Data";

interface Props {
    select: (window: Windows) => void,
    active: Windows
}

export default function ButtonMenuComponent(
    props: PropsWithChildren<Props>
) {
    return (
        <ul
            className={`
            flex flex-row 
            justify-start 
            mt-8
            `}
        >
            {
                data.map((aboutTab, index) => (
                    <li key={index} className={aboutTab.optional ? `hidden mg:block` : ``}>
                    <ButtonComponent
                        select={() => props.select(aboutTab.id)}
                        active={props.active === aboutTab.id}
                    >
                        <span>{aboutTab.title}</span>
                    </ButtonComponent>
                    </li>
                ))
            }
        </ul>
    );
}
