
const ShortList = ({text, imageSrc}) => {
  return (
    <div className="flex items-center ease-in duration-300 hover:scale-125 hover:duration-200 font-bold cursor-pointer">
        <img src={imageSrc}  alt={text} className="md:w-32 lg:w-40"/>
        <h1 className="lg:text-2xl text-black">{text}</h1>
    </div>
  )
}

export default ShortList