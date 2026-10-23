import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function MasamitsuCitiusLogo({ className = "h-10 sm:h-12 w-auto", height = 52, width = 280 }: LogoProps) {
  return (
    <Image
      src="/images/logo/masamitsucitius.png"
      alt="MASAMITSU CITIUS Logo"
      width={width}
      height={height}
      priority
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
