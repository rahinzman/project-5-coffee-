import React from 'react'

const Slide = ({img, txt, price}) => {
  return (
    <div>
        <img src={img} alt={txt} className="w-[24rem] pt-5 "/>
        <div className="text-4xl text-white font-bold -mt-6">{txt}</div>
        <div className="text-2xl text-white " >${price}</div>

    </div>
  )
}

export default Slide