import React from 'react'

const ButtonTrans = ({text,onClick}) => {
  return (
    <div>
        <button className="cursor-pointer text-3xl md:text-xl lg:text-xl" onClick={onClick}>
            {text}
          </button>
    </div>
  )
}

export default ButtonTrans