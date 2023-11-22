import { useDispatch, useSelector } from "react-redux";
import { selector } from "../../features/selectorSlice";

const tabs = ["All", "Coffee", "Bread", "Tea"];
const ProductToggleTab = () => {
  const select = useSelector((state) => state.selector.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="relative flex h-[3.5rem] w-[20rem] pr-4 items-center justify-center space-x-4 rounded-xl bg-white text-center md:h-[3rem] md:w-[40rem] md:space-x-10 lg:h-[3.5rem] lg:w-[42rem]  lg:space-x-10">
          {tabs.map((tab, i) => (
            <div key={i} className="flex justify-center items-center">
              <div
                className="cursor-pointer py-[3px] md:pl-5 text-center transition duration-300 md:text-2xl text-md  font-bold md:font-semibold"
                onClick={() => dispatch(selector(i))}
              >
                {tab}
                {select === i ? (
                  <div className="rounded bg-black lg:px-3 py-[3px] "></div>
                ) : (
                  <div></div>
                )}
              </div>

              {i < 3 ? (
                <div className="rounded lg:ml-14 md:ml-10 ml-5 bg-black px-[1.5px] py-4"></div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductToggleTab;
