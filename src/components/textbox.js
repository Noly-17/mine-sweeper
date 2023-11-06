import React, { useState } from 'react'

const TextBox = ({ range, setRange }) => {
    
  return (
    <div>
      <input value={range} onChange={e => setRange(e.target.value)}/>
    </div>
  )
}

export default TextBox
