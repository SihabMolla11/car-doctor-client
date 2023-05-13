import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-4">
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-[#FF3811] text-xl font-bold">Service</h3>
        <h2 className="text-3xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do mot look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn btn-outline hover:bg-[#FF3811] text-[#FF3811] hover:text-white hover:border-[#FF3811] border-[#FF3811] font-medium ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
