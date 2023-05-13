import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);

  const handelBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    // console.log(name, email, price);

    const Booking = {
      service_id: _id,
      img: img,
      customerName: name,
      service: title,
      email,
      date,
      price: price,
    };
    // console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Booking successful", "your order successfully added", "success");
          form.reset()
        }
      });
  };

  return (
    <div className="card w-full bg-[#F3F3F3] my-6 my-container shadow-2xl p-24">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Book service: <strong className="text-[#FF3811]">{title}</strong>
      </h2>
      <form onSubmit={handelBookService}>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="Your Phone"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              placeholder="due amount"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-60"
            placeholder="Your message"
          ></textarea>
        </div>
        <input
          className="my-btn w-full mt-6"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default Checkout;
