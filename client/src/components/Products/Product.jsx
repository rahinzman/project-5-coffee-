import HeaderProd from "./HeaderProd";
import ProductCard from "./ProductCard";
import ProductToggleTab from "./ProductToggleTab";
import productDetails from "../../ProductDetails";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Product = () => {
  const select = useSelector((state) => state.selector.value);

  return (
    <>
      <HeaderProd />
      <ProductToggleTab key={Math.random()} />

      <div className="relative md:m-16 grid my-10 md:mx-32 mx-5 h-[140vh] gap-4 overflow-auto  md:h-[96vh] md:grid-cols-2 lg:h-[142vh] lg:grid-cols-4 ">
        {select === 0
          ? productDetails.map((products) =>
              products.map((product, i) => (
                <motion.div
                  key={i}
                  className="box"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}

                >
                  <ProductCard
                    imgSrc={product.img}
                    imgTxt={product.name}
                    price={product.price}
                    desc={product.description}
                    time={product.time}
                    rating={product.rating}
                  />
                </motion.div>
              )),
            )
          : productDetails[select - 1].map((product, i) => (
              <motion.div
                key={i}
                className="box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ProductCard
                  key={i}
                  imgSrc={product.img}
                  imgTxt={product.name}
                  price={product.price}
                  desc={product.description}
                  time={product.time}
                  rating={product.rating}
                />
              </motion.div>
            ))
            }
      </div>
      <div className="flex justify-center">
        <img
          src="line.svg"
          alt="line"
          className="-mt-10 block w-[27rem] md:hidden lg:hidden"
        />
      </div>
    </>
  );
};

export default Product;
