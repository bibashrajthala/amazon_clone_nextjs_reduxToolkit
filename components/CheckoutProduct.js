import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";

import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();
  const { id, price, category, title, rating, description, image, hasPrime } =
    item;

  const addItemToBasket = () => {
    dispatch(addToBasket(item));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* left  */}
      <Image
        src={image}
        alt="product"
        width={200}
        height={200}
        className="object-contain"
      />
      {/* middle  */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://links.papareact.com/fdw"
              alt="prime"
              width={42}
              height={32}
              className="object-contain "
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* right  */}
      <div className="flex flex-col gap-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
