import React from 'react'

function Key({item,handleSetScreen}) {
  return (
    <div onClick={(e)=>handleSetScreen(e.target.innerHTML)} className='grid-item'>{item}</div>
  )
}

export default Key