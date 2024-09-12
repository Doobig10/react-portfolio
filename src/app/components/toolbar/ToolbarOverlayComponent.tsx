import React from "react";

import ToolbarElementComponent from "@/app/components/toolbar/ToolbarElementComponent";
import {toolbarData} from "@/app/components/toolbar/ToolbarData";

export default function ToolbarOverlayComponent() {
    return (
        <div>
            <ul className={"flex flex-col py-4 items-center"}>
                {
                    toolbarData.map((toolbarElement, index) => (
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