import React from 'react'

const Logo = ({ className = "w-40 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 180 50" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape - optional subtle background */}
      <rect x="0" y="8" width="44" height="34" rx="8" className="fill-primary/10" />
      
      {/* NBO Letters with modern design */}
      <g className="fill-primary dark:fill-primary">
        {/* Letter N */}
        <path d="M8 14 L8 36 L11 36 L11 21 L18 36 L21 36 L21 14 L18 14 L18 29 L11 14 Z" />
        
        {/* Letter B */}
        <path d="M26 14 L26 36 L33 36 C35.5 36 37 34.5 37 32 C37 30.5 36 29.5 35 29 C36 28.5 36.5 27.5 36.5 26 C36.5 23.5 35 14 33 14 Z M29 17 L32 17 C33 17 33.5 18 33.5 19 C33.5 20 33 21 32 21 L29 21 Z M29 24 L32.5 24 C33.5 24 34 25 34 26 C34 27 33.5 33 32.5 33 L29 33 Z" />
        
        {/* Letter O */}
        <path d="M41 25 C41 20 43 14 47 14 C51 14 53 20 53 25 C53 30 51 36 47 36 C43 36 41 30 41 25 Z M44 25 C44 29 45 33 47 33 C49 33 50 29 50 25 C50 21 49 17 47 17 C45 17 44 21 44 25 Z" />
      </g>
      
      {/* Separator line */}
      <line x1="60" y1="18" x2="60" y2="32" className="stroke-accent dark:stroke-accent" strokeWidth="2" />
      
      {/* Text: Portfolio / BI Engineer */}
      <text x="68" y="22" className="fill-gray-700 dark:fill-gray-200" fontSize="10" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
        Portfolio
      </text>
      <text x="68" y="34" className="fill-primary dark:fill-primary" fontSize="8" fontWeight="500" fontFamily="system-ui, -apple-system, sans-serif">
        BI & Data Engineer
      </text>
      
      {/* Bar Chart icon */}
      <g className="stroke-accent fill-accent" strokeWidth="1.5">
        <rect x="157" y="24" width="3" height="8" rx="0.5" />
        <rect x="162" y="18" width="3" height="14" rx="0.5" />
        <rect x="167" y="21" width="3" height="11" rx="0.5" />
        <rect x="172" y="16" width="3" height="16" rx="0.5" />
      </g>
    </svg>
  )
}

export default Logo
