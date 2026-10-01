import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-full shrink-0 ${className}`}
    >
      {/* Outer White circular canvas with soft drop shadow */}
      <circle cx="100" cy="100" r="98" fill="#FFFFFF" stroke="#0F284E" strokeWidth="2.5" />
      {/* Concentric Golden Ring */}
      <circle cx="100" cy="100" r="92" stroke="#E5A93C" strokeWidth="1.8" />
      {/* Subtle Inner Navy Guideline */}
      <circle cx="100" cy="100" r="86" stroke="#0F284E" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />

      {/* Curved Text: SINCE 1995 along top arc */}
      <defs>
        <path
          id="topArc"
          d="M 38 100 A 62 62 0 0 1 162 100"
          fill="none"
        />
        <path
          id="bottomArc"
          d="M 162 100 A 62 62 0 0 1 38 100"
          fill="none"
        />
      </defs>

      <text fill="#0F284E" fontSize="11" fontWeight="700" letterSpacing="2.5" textAnchor="middle">
        <textPath href="#topArc" startOffset="50%">
          • SINCE 1995 •
        </textPath>
      </text>

      {/* Stylized Interlocking Monogram: Deep Navy 'A' and Amber Gold 'V' */}
      <g transform="translate(10, 5)">
        {/* Navy Letter 'A' */}
        <path
          d="M 72 55 L 42 135 H 60 L 68 112 H 98 L 102 122 H 119 L 88 55 H 72 Z M 74 95 L 83 72 L 92 95 H 74 Z"
          fill="#0F284E"
        />
        {/* Golden Amber Letter 'V' interlocking */}
        <path
          d="M 100 70 L 118 135 H 134 L 156 70 H 138 L 126 112 L 114 70 H 100 Z"
          fill="#E5A93C"
        />
      </g>

      {/* Curved Text: AJAY VIJAY along bottom arc */}
      <text fill="#0F284E" fontSize="12" fontWeight="800" letterSpacing="3" textAnchor="middle">
        <textPath href="#bottomArc" startOffset="50%">
          AJAY VIJAY
        </textPath>
      </text>
    </svg>
  );
};
