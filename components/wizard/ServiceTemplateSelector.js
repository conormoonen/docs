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
import TemplateButton from "./TemplateButton";
import ServiceFrameworkType from "../../models/ServiceFrameworkType"; // Make sure to import your TemplateButton component

const templates = [
    {
        type: ServiceFrameworkType.REACT,
        icon: siReact.path,
        title: 'React',
        handler: function() {
            console.log('Selected: React');
        }
    },
    {
        type: ServiceFrameworkType.NEXT,
        icon: siNextdotjs.path,
        title: 'Next.js',
        handler: function() {
            console.log('Selected: React');
        }
    },
    {
        type: ServiceFrameworkType.VUE,
        icon: siVuedotjs.path,
        title: 'Vue',
        handler: function() {
            console.log('Selected: Vue');
        }
    },
    {
        type: ServiceFrameworkType.NUXT,
        icon: siNuxtdotjs.path,
        title: 'Nuxt.js',
        handler: function() {
            console.log('Selected: Vue');
        }
    },
    {
        type: ServiceFrameworkType.ANGULAR,
        icon: siAngular.path,
        title: 'Angular',
        handler: function() {
            console.log('Selected: Angular');
        }
    },
    {
        type: ServiceFrameworkType.DJANGO,
        icon: siDjango.path,
        title: 'Django',
        handler: function() {
            console.log('Selected: Django');
        }
    },
    {
        type: ServiceFrameworkType.LARAVEL,
        icon: siLaravel.path,
        title: 'Laravel',
        handler: function() {
            console.log('Selected: Laravel');
        }
    },
    {
        type: ServiceFrameworkType.SPRING_BOOT,
        icon: siSpringboot.path,
        title: 'Spring Boot',
        handler: function() {
            console.log('Selected: Spring Boot');
        }
    },
    {
        type: ServiceFrameworkType.RUBY_ON_RAILS,
        icon: siRubyonrails.path,
        title: 'Ruby on Rails',
        handler: function() {
            console.log('Selected: Ruby on Rails');
        }
    },
    {
        type: ServiceFrameworkType.EXPRESS,
        icon: siExpress.path,
        title: 'Express',
        handler: function() {
            console.log('Selected: Express');
        }
    },
    {
        type: ServiceFrameworkType.DOT_NET,
        icon: siDotnet.path,
        title: 'Dot Net',
        handler: function() {
            console.log('Selected: Dot Net');
        }
    },
    {
        type: ServiceFrameworkType.NIXPACKS,
        icon: mdiPackageVariantClosed,
        title: 'Commands',
        description: 'Provide install, build and run command',

        handler: function() {
            console.log('Selected: Docker');
        }
    },

    {
        type: ServiceFrameworkType.STATIC,
        icon: mdiFileMultiple, // This is an assumption. You'll need to have this icon or replace it with the actual one.
        title: 'Static',
        description: 'For static sites serving images, html, Vite builds etc. using AWS Cloudfront',
        handler: function() {
            console.log('Selected: Static');
        }
    },
    {
        type: ServiceFrameworkType.DOCKER,
        icon: siDocker.path,
        title: 'Docker',
        description: 'Use a custom Dockerfile',
        handler: function() {
            console.log('Selected: Docker');
        }
    },
];


function ServiceTemplateSelector(props) {
    const { value, onChange } = props;
    const [selectedType, setSelectedType] = useState(value);

    const handleTemplateClick = (templateType) => {
        if (templateType === selectedType) {
            setSelectedType(null);
        } else {
            setSelectedType(templateType);
        }
        onChange(templateType);
    };

    return (
        <div className="flex space-x-3 mt-4 overflow-y-auto pb-1 dark-scrollbars">
            {templates.map((template) => (

                <div
                    key={template.type}
                    className={`flex cursor-pointer pulse-single border-4 rounded-2xl ${
                        selectedType === template.type ? "border-gray-400" : "border-transparent"
                    }`}
                    onClick={() => handleTemplateClick(template.type)}
                >
                    <TemplateButton
                        className="border-4 rounded-2xl"
                        icon={template.icon}
                        description={template.description}
                    >
                        <div>{template.title}</div>
                    </TemplateButton>
                </div>
            ))}
        </div>
    );
}

export default ServiceTemplateSelector;
