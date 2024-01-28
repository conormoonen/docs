import React, { useState } from "react";
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartTimelineVariant,
    mdiMonitorCellphone,
    mdiReload,
    mdiGithub,
    mdiChartPie,
    mdiPackageVariantClosed,
    mdiFileMultiple,
    mdiPlus,
} from "@mdi/js";
import {
    siAngular,
    siDjango,
    siDocker,
    siDotnet,
    siExpress,
    siLaravel,
    siNextdotjs,
    siNuxtdotjs,
    siReact,
    siRubyonrails,
    siSpringboot,
    siVuedotjs,
} from "simple-icons";
import ServiceFrameworkType from "../../models/ServiceFrameworkType.js";
import BaseButton from "../ui/BaseButton";
import ServiceTemplateSelector from "./ServiceTemplateSelector"; // Update the import path

function WizardPrompt() {
    const [initialServiceFrameworkType, setInitialServiceFrameworkType] = useState(null);
    const [initialServiceName, setInitialServiceName] = useState(null);

    function goToWizard() {

        const appHost = process.env.APP_HOST || 'http://localhost:5173';

        window.open(`${appHost}/wizard?initialserviceframeworktype=${initialServiceFrameworkType || ''}&initialservicename=${initialServiceName || ''}`, "_blank");
    }

    return (
        <div className="w-full h-full relative">
            <div className=" absolute">
                <div className="circle1"></div>
            </div>

            <div className="">
                <div className="p-4 wizard-prompt relative z-20">
                    <div>
                        <div className="mb-2 text-2xl">StationOps Quickstarts</div>
                        <div className="mb-4">Deploy your infra to AWS in 30 minutes</div>
                    </div>


                    <input
                        value={initialServiceName}
                        onChange={(e) => setInitialServiceName(e.target.value)}
                        placeholder="Service Name"
                        className="id-input-no-space focus:outline-none mb-2 py-2 px-2 w-full"
                    />

                    <ServiceTemplateSelector
                        value={initialServiceFrameworkType}
                        onChange={(value) => setInitialServiceFrameworkType(value)}
                    />

                    <div className="flex w-full mt-4 space-x-4">
                        <BaseButton onClick={goToWizard} className="flex-grow" emphasis="secondary" label="Deploy" />
                        <BaseButton onClick={goToWizard} className="hidden lg:block" icon={mdiPlus} emphasis="secondary" label="Add Service" />
                    </div>
                </div>
            </div>
        </div>
    );
}


// CSS styles (you can use CSS-in-JS libraries or import a CSS file)
const styles = {
    idInputNoSpace: {
        backgroundColor: "bg-gray-100",
        borderColor: "border-gray-200",
        borderWidth: "border",
        fontSize: "text-xl",
        borderRadius: "rounded-lg",
    },
    wizardPrompt: {
        background: "rgb(249, 249, 249)",
        border: "1px solid #d3d3d355",
        borderRadius: "15px",
    },
    circles: {
        height: "100%",
        width: "100%",
        position: "absolute",
    },
    circle: {
        animation: "growAndFade 2s infinite ease-out",
        backgroundColor: "rgb(147 51 234 / 1)",
        borderRadius: "15px",
        height: "100%",
        opacity: "0",
        position: "absolute",
        width: "100%",
    },
};


export default WizardPrompt;