import { FaTimesCircle } from "react-icons/fa";

const BookingRow = ({ booking, handelDelteBooking, handelConform }) => {
  const { _id, img, price, date, service, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handelDelteBooking(_id)} className="text-xl">
            <FaTimesCircle />
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-lg  w-36 h-36">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xl font-semibold">{service}</p>
      </td>
      <td>
        <p className="text-xl font-semibold">{price}</p>
      </td>
      <td>
        <p className="text-xl font-medium">{date}</p>
      </td>
      <th>
        {
            status === "confirm" ? <span className="text-lg text-blue-500">Confirmed</span>
           :
            <button onClick={() => handelConform(_id)} className="my-btn">
          Please Conform
        </button>}
      </th>
    </tr>
  );
};

export default BookingRow;
