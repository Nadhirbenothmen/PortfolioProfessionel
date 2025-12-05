import React from 'react'

const Logo = ({ className = "w-32 h-12" }) => {
  return (
    <img 
      src="/src/assets/LOGO.png" 
      alt="NBO Logo" 
      className={`${className} mix-blend-screen`}
      style={{ backgroundColor: 'transparent' }}
    />
  )
}

export default Logo
