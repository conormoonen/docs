import React from "react";
import {
    mdiBallot,
    mdiInformation,
    mdiPlus,
    mdiFileMultiple,
    mdiServer,
    mdiInformationOutline,
} from "@mdi/js";
import {
    siAngular,
    siDocker,
    siDotnet,
    siDjango,
    siLaravel,
    siSpringboot,
    siVuedotjs,
    siRubyonrails,
    siExpress,
    siReact,
} from "simple-icons";
import BaseIcon from "../ui/BaseIcon"; // Make sure to import your BaseIcon component

function TemplateButton(props) {
    const { description, icon, children } = props;

    return (
        <div className="flex">
            <div className="flex">
                <div className="bg-white/10 rounded-xl text-center bg-so-accent square-div w-32 grow-0">
                    <div className="square-content flex justify-center flex-col">
                        <div className={`text-right pr-2 pt-1 ${!description ? "invisible" : ""}`}>
                            <BaseIcon path={mdiInformation} color="text-white" w="w-6" h="h-6" title={description} />
                        </div>
                        <div>
                            <BaseIcon path={icon} w="w-12" h="h-12" size={60} color="text-white" />
                        </div>
                        <div className="text-lg text-white">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TemplateButton;
