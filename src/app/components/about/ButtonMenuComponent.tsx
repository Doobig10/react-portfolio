import React, {PropsWithChildren} from 'react'
import ButtonComponent from "@/app/components/about/ButtonComponent";
import {aboutData, Windows} from "@/app/data/AboutData";

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
                aboutData.map((aboutTab, index) => (
                    <li key={index} className={aboutTab.optional ? `hidden md:block` : ``}>
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
