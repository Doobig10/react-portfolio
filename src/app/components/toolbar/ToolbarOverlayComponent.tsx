import React from "react";

import ToolbarElementComponent from "@/app/components/toolbar/ToolbarElementComponent";
import {toolbarElements} from "@/app/components/toolbar/ToolbarElements";

export default function ToolbarOverlayComponent() {
    return (
        <div>
            <ul className={"flex flex-col py-4 items-center"}>
                {
                    toolbarElements.map((toolbarElement, index) => (
                        <li key={index}>
                            <ToolbarElementComponent
                                href={toolbarElement.path}
                                text={toolbarElement.text}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}