import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function MasamitsuCitiusLogo({ className = "h-10 sm:h-12 w-auto", height = 52, width = 280 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 310 75"
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MASAMITSU CITIUS Logo"
    >
      {/* MASAMITSU text */}
      <text
        x="32"
        y="30"
        fontFamily="system-ui, -apple-system, 'Montserrat', 'Inter', sans-serif"
        fontWeight="900"
        fontSize="31"
        fill="#156EB0"
        letterSpacing="1"
      >
        MASAMITSU
      </text>

      {/* Red Tapered Bar underneath MASAMITSU */}
      <polygon points="5,46 130,42 130,48" fill="#C9232C" />

      {/* CITIUS text */}
      <text
        x="138"
        y="62"
        fontFamily="system-ui, -apple-system, 'Montserrat', 'Inter', sans-serif"
        fontWeight="900"
        fontSize="31"
        fill="#156EB0"
        letterSpacing="1"
      >
        CITIUS
      </text>

      {/* Red Chevrons >> */}
      <g transform="translate(248, 36)">
        <path d="M0 2 L11 14 L0 26 L5.5 26 L16.5 14 L5.5 2 Z" fill="#C9232C" />
        <path d="M12 2 L23 14 L12 26 L17.5 26 L28.5 14 L17.5 2 Z" fill="#C9232C" />
      </g>
    </svg>
  );
}
