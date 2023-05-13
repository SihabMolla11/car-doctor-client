import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;

  return (
    <div>
      <div className="card w-full border-2 h-full bg-base-100 shadow-xl">
        <figure className="p-6">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-6 items-center text-left">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="text-lg font-bold flex justify-between items-center">
            <p className="text-[#FF3811]">Price: ${price}</p>
            <Link to={`/checkout/${_id}`} className="text-[#FF3811]">
              <button>
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
