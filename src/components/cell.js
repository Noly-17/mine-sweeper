import React from 'react'

const Cell = ({ cell, onClick }) => {
  return (
    <div className='border-2 p-10' onClick={() => onClick}>
      {cell}
    </div>
  )
}

export default Cell
