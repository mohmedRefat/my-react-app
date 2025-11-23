import { useState } from "react";

function MyCompo() {
  const [name, setName] = useState("");
  const [quantity, setQuattity] = useState(0);
  const [comment, setComment] = useState("");
  const [pay, setPay] = useState("visa");
  const [ship, setShip] = useState("Delivery");

  function updateName(e) {
    setName(e.target.value);
  }

  function updateQuantity(e) {
    setQuattity(e.target.value);
  }

  function updateComment(e) {
    setComment(e.target.value);
  }

  function shippFunc(e) {
    setShip(e.target.value);
  }

  function payFunc(e) {
    setPay(e.target.value);
  }

  return (
    <form className="max-w-md mx-auto mt-10 bg-white shadow-lg p-8 rounded-2xl flex flex-col gap-6">
      {/* NAME */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Name: <span className="text-blue-600">{name}</span>
        </label>
        <input
          type="text"
          onChange={updateName}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* QUANTITY */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Quantity: <span className="text-green-600">{quantity}</span>
        </label>
        <input
          type="number"
          onChange={updateQuantity}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* COMMENT */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Comment: <span className="text-purple-600">{comment}</span>
        </label>
        <textarea
          onChange={updateComment}
          className="border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
      </div>

      {/* SELECT PAYMENT */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Payment Method</label>

        <select
          value={pay}
          onChange={payFunc}
          className="border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select your payment</option>
          <option value="visa">Visa</option>
          <option value="CreditCard">Credit Card</option>
          <option value="GiftCard">Gift Card</option>
        </select>

        <p className="text-indigo-600 font-medium">{pay}</p>
      </div>

      {/* RADIO SHIPPING */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Shipping Method</label>

        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="Delivery"
              checked={ship === "Delivery"}
              onChange={shippFunc}
              className="w-4 h-4 text-blue-600 focus:ring-blue-400"
            />
            <span>Delivery</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="onTrip"
              checked={ship === "onTrip"}
              onChange={shippFunc}
              className="w-4 h-4 text-blue-600 focus:ring-blue-400"
            />
            <span>On Trip</span>
          </label>
        </div>
      </div>
    </form>
  );
}

export default MyCompo;
