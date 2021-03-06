import React from "react";

const Heart = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 16 14"
    >
      <g>
        <g>
          <path
            fill={`var(--${props.type}-color)`}
            d="M10.983 0a5 5 0 0 1 3.736 8.316c-.569.643-4.253 4.098-5.369 5.143a2 2 0 0 1-2.732 0c-1.12-1.046-4.819-4.51-5.38-5.154A5 5 0 0 1 7.982 1a4.973 4.973 0 0 1 3-1zm0 2a3 3 0 0 0-3 3 3 3 0 1 0-6 0c-.002.73.265 1.435.75 1.98.55.63 5.25 5.02 5.25 5.02s4.69-4.39 5.24-5.01A3 3 0 0 0 10.983 2"
          />
        </g>
      </g>
    </svg>
  );
};

export default Heart;
