import React from 'react'

function Card({children, bgColor, textColor}) {
  return (
    <div className={`p-6 ${bgColor||'bg-red-600'} rounded-2xl ${textColor||'text-white'}`}>
      {children}
    </div>
  )
}

export default Card
