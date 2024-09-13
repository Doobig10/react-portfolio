import React, {PropsWithChildren} from 'react'
import AboutButtonComponent from "@/app/components/about/menu/AboutButtonComponent";
import {aboutData, Windows} from "@/app/components/about/AboutData";

interface Props {
    select: (window: Windows) => void,
    active: Windows
}

export default function AboutButtonMenuComponent(
    props: PropsWithChildren<Props>
) {
    return (
        <ul
            className={`
            flex flex-row 
            justify-start 
            mt-6
            `}
        >
            {
                aboutData.map((aboutTab, index) => (
                    <li key={index}>
                    <AboutButtonComponent
                        select={() => props.select(aboutTab.id)}
                        active={props.active === aboutTab.id}
                    >
                        <span>{aboutTab.title}</span>
                    </AboutButtonComponent>
                    </li>
                ))
            }
        </ul>
    );
}
