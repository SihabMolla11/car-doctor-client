import Lottie from "lottie-react";
import errorEnimation from "../../assets/error2.json";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error = () => {
  return (
    <div className="text-center">
      <div className="w-full flex justify-center items-center">
        <Lottie animationData={errorEnimation}></Lottie>
      </div>
      <div>
        <h2 className="text-6xl font-extrabold text-red-600 capitalize">the page not found</h2>
        <Link to="/"><button className="my-btn bg-blue flex gap-4 mt-10"><FaHome className="text-2xl"/> Go bact to Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
