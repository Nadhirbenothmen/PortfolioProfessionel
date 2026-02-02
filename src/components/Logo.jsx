import React from 'react'

const Logo = ({ className = "h-12" }) => {
  return (
    <img 
      src="/portfolio-app/public/assets/Logoo.png" 
      alt="NBO - BI & Data Engineer" 
      className={className}
    />
  )
}

export default Logo
