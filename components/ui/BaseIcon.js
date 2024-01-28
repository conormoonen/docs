import React, { useMemo } from "react";
import PropTypes from "prop-types";

function BaseIcon(props) {
    const { path, w, h, size, color, children } = props;

    // Compute the classes for the span element
    const spanClass = useMemo(() => {
        return `inline-flex justify-center items-center ${w} ${color} ${h}`;
    }, [w, h, color]);

    // Compute the icon size
    const iconSize = useMemo(() => {
        return size || 16;
    }, [size]);

    return (
        <span className={path ? spanClass : ""}>
      {path && (
          <svg
              viewBox="0 0 24 24"
              width={iconSize}
              height={iconSize}
              className="inline-block"
          >
              <path fill="currentColor" d={path} />
          </svg>
      )}
            {children}
    </span>
    );
}


export default BaseIcon;
