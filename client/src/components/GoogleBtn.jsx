
import { FcGoogle } from "react-icons/fc";
const GoogleBtn = ({text}) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-solid bg-zinc-200 px-4 py-1 text-lg font-semibold hover:bg-zinc-100">
          <FcGoogle className="text-2xl" /> {text}
        </button>
      </div>
    </>
  );
};

export default GoogleBtn;
