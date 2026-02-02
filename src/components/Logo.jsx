import React from 'react'

const Logo = ({ className = "h-12" }) => {
  return (
    <img 
      src="/assets/Logoo.png" 
      alt="NBO - BI & Data Engineer" 
      className={className}
    />
  )
}

export default Logo
