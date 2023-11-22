import {Rating} from "@mui/material"

const BlackCoffeeDescrip = () => {
  return (
    <div className="relative space-y-4 md:-mt-16 lg:-mt-0">
          <h1 className="text-xl lg:text-6xl md:text-3xl font-bold w-[500px]">
            Black Coffee
          </h1>
          <p className=" md:w-[200px] lg:w-[500px]">
            Back coffee is simply coffee with nothing added – no cream, no milk,
            no sweetener. When you leave out those extra ingredients, you leave
            out the calories, fat, and sugar that come with them. That allows
            you to enjoy the health benefits of coffee without additives that
            {`aren't`} as good for you.
          </p>
          <div className="bg-black text-white text-xl lg:text-6xl md:text-3xl font-bold rounded-lg text-center p-2 pb-3 lg:max-w-[50%] md:max-w-[40%]">
            $25.00
          </div>

          <div className="images flex">
            <img src="profiles.svg" alt="profiles" />
            <div className="rounded-full bg-black text-white p-1">+99</div>
          </div>
          <div className="rating flex items-center">
            <p className="text-3xl pr-3">4.0</p>
            <Rating name="read-only" value={4} readOnly />
          </div>
        </div>
  )
}

export default BlackCoffeeDescrip