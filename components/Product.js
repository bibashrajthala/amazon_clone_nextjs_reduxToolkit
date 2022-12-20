import Image from "next/image";
import React, { useState } from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";

const Product = ({ product }) => {
  //   console.log(product);
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const { id, title, description, price, category, image } = product;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>

      <Image
        src={image}
        alt="product image"
        height={100}
        width={100}
        className="mx-auto object-contain w-48 h-48"
      />

      <h4 className="my-3 font-medium">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={45685} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center gap-x-2 -mt-5">
          <Image
            src="https://links.papareact.com/fdw"
            alt="prime"
            width={48}
            height={30}
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
};

export default Product;
