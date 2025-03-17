import React from "react";

const CartIcon = ({ cartItemCount }) => {
  return (
    <div className="relative">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1020)">
          <g filter="url(#filter0_d_1_1020)">
            <path
              d="M12.905 25.0899H24.0016C30.8576 25.0899 31.9003 20.7829 33.1649 14.501C33.5297 12.6891 33.7121 11.7832 33.2735 11.1796C32.8348 10.576 31.9941 10.576 30.3126 10.576H9.84949"
              stroke="#FAF8F2"
              strokeWidth="1.83333"
              strokeLinecap="round"
            />
            <path
              d="M12.905 25.0899L8.90026 6.01549C8.5602 4.65526 7.33803 3.70102 5.93594 3.70102H4.5022"
              stroke="#FAF8F2"
              strokeWidth="1.83333"
              strokeLinecap="round"
            />
            <path
              d="M14.2495 25.0899H13.6209C11.538 25.0899 9.84949 26.8488 9.84949 29.0185C9.84949 29.3801 10.1309 29.6732 10.4781 29.6732H27.4189"
              stroke="#FAF8F2"
              strokeWidth="1.83333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse
              cx="16.7244"
              cy="31.9649"
              rx="2.29167"
              ry="2.29167"
              stroke="#FAF8F2"
              strokeWidth="1.83333"
            />
            <ellipse
              cx="27.4189"
              cy="31.9649"
              rx="2.29167"
              ry="2.29167"
              stroke="#FAF8F2"
              strokeWidth="1.83333"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1_1020"
            x="-6.41443"
            y="-5.21564"
            width="50.8611"
            height="52.3889"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_1020"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1020"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_1_1020">
            <rect
              width="36.6667"
              height="36.6667"
              fill="white"
              transform="translate(0.664062 0.664062)"
            />
          </clipPath>
        </defs>
      </svg>
      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#E1C06E] text-black text-xs px-2 py-1 rounded-full">
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
