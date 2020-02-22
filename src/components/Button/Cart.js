import React from "react";

const Cart = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 16 16"
    >
      <g>
        <g>
          <path
            fill={`var(--${props.type}-color)`}
            d="M13.962 4l-1 5H4V4zm-1 7a1.993 1.993 0 0 0 1.952-1.608l1-5A2 2 0 0 0 13.957 2H4V1a1 1 0 0 0-1-1H1.01a1 1 0 1 0 0 2h1v10A2 2 0 1 0 4 14h6.97a1.992 1.992 0 1 0 1.991-2h-8.96v-1z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Cart;
