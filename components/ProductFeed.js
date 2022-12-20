import Image from "next/image";
import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  //   console.log(products);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 lg:-mt-52 mx-auto">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Image
        src="https://links.papareact.com/dyz"
        alt="nn"
        width={600}
        height={200}
        className="object-contain md:col-span-full w-full"
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
