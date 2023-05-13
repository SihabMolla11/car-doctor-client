import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import baimg1 from "../../../../assets/images/banner/1.jpg";
import baimg2 from "../../../../assets/images/banner/2.jpg";
import baimg3 from "../../../../assets/images/banner/3.jpg";
import baimg4 from "../../../../assets/images/banner/4.jpg";
import baimg5 from "../../../../assets/images/banner/5.jpg";
import baimg6 from "../../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[600px] rounded-xl w-full">
      <div id="slide1" className=" carousel-item relative w-full  ">
        <img src={baimg1} className="w-full " />
        <div className=" absolute w-[40%] flex items-center left-0  top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
          <div className="space-y-7 pl-24 ">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white text-lg ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline hover:bg-[#ff000000] hover:border-[white] border-white ">
                <span className="text-white">Latest Project</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className="btn bg-[#0000004b] hover:bg-[#0000004b] border-none btn-circle"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide2"
            className="bg-[#FF3811] border-none hover:bg-[#FF3811] btn btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={baimg2} className="w-full" />
        <div className=" absolute w-[40%] flex items-center left-0  top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
          <div className="space-y-7 pl-24 ">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white text-lg ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline hover:bg-[#ff000000] hover:border-[white] border-white ">
                <span className="text-white">Latest Project</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn bg-[#0000004b] hover:bg-[#0000004b] border-none btn-circle"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide3"
            className="bg-[#FF3811] border-none hover:bg-[#FF3811] btn btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={baimg3} className="w-full" />
        <div className=" absolute w-[40%] flex items-center left-0  top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
          <div className="space-y-7 pl-24 ">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white text-lg ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline hover:bg-[#ff000000] hover:border-[white] border-white ">
                <span className="text-white">Latest Project</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn bg-[#0000004b] hover:bg-[#0000004b] border-none btn-circle"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide4"
            className="bg-[#FF3811] border-none hover:bg-[#FF3811] btn btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={baimg4} className="w-full" />
        <div className=" absolute w-[40%] flex items-center left-0  top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
          <div className="space-y-7 pl-24 ">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white text-lg ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline hover:bg-[#ff000000] hover:border-[white] border-white ">
                <span className="text-white">Latest Project</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn bg-[#0000004b] hover:bg-[#0000004b] border-none btn-circle"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide5"
            className="bg-[#FF3811] border-none hover:bg-[#FF3811] btn btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={baimg5} className="w-full" />
        <div className=" absolute w-[40%] flex items-center left-0  top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
          <div className="space-y-7 pl-24 ">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white text-lg ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline hover:bg-[#ff000000] hover:border-[white] border-white ">
                <span className="text-white">Latest Project</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn bg-[#0000004b] hover:bg-[#0000004b] border-none btn-circle"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide6"
            className="bg-[#FF3811] border-none hover:bg-[#FF3811] btn btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={baimg6} className="w-full" />
        <div className=" absolute w-[40%] flex items-center left-0  top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)">
          <div className="space-y-7 pl-24 ">
            <h2 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white text-lg ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center gap-4">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline hover:bg-[#ff000000] hover:border-[white] border-white ">
                <span className="text-white">Latest Project</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn bg-[#0000004b] hover:bg-[#0000004b] border-none btn-circle"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide1"
            className="bg-[#FF3811] border-none hover:bg-[#FF3811] btn btn-circle"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
