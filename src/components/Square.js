import React from 'react'



export const Square = (props) => {
  return (
    <div className='square' onClick={props.onClick}>
        <h3 className='head'>{props.value}</h3>
    </div>
  )
}
