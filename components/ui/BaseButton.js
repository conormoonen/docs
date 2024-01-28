import React from "react";
import BaseIcon from "../ui/BaseIcon"; // Make sure to import your BaseIcon component

function BaseButton(props) {
    const {
        label,
        type,
        icon,
        emphasis,
        to,
        size,
        onClick
    } = props;

    const buttonClasses = `font-bold button-bg rounded-xl button-color relative flex h-11 w-full items-center justify-center px-5 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 data-${size === "sm" ? "sm" : ""}:h-9 data-${size === "sm" ? "sm" : ""}:px-4 ${emphasis === "primary" ? "before:bg-primary" : "before:border before:border-transparent before:bg-primary/10 dark:before:border-gray-700 dark:before:bg-gray-800"}`;

    const textClasses = `data-${size === "sm" ? "sm" : ""}:text-sm flex items-center ${emphasis === "primary" ? "text-white" : "text-primary dark:text-white"}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
        >
      <span className={textClasses}>
        {icon && <BaseIcon w="w-3" h="h-3" className="mr-2" path={icon} />}
          <span>{label}</span>
      </span>
        </button>
    );
}


export default BaseButton;
