import React, { useState } from "react";
import SearchBar from "./SearchBar";

const ProductTable = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Product A",
      stock: "50 in stock",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 25.99,
      totalSale: 100,
      image: "./profile.png",
    },
    {
      id: 2,
      name: "Product B",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stock: "30 in stock",
      price: 19.99,
      totalSale: 80,
      image: "./profile.png",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:px-7">
      <div className="bg-white py-5 p-4 rounded-lg">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Product Cell</h1>
          <div className="flex md:flex-row flex-col justify-end md:gap-8">
            <div>
              <SearchBar />
            </div>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-50 w-40"
            >
              <option value="">Last 30 Days</option>
              <option value="Product A">Product A</option>
              <option value="Product B">Product B</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full rounded-lg">
            <thead className="h-10 text-left text-gray-500 font-medium">
              <tr className="">
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sale</th>
              </tr>
            </thead>
            <tbody>
              {searchedProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } p-4`}
                >
                  <td className="md:m-2 flex items-center gap-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={30}
                      height={30}
                    />
                    <div className="flex flex-col">
                      <span className="md:text-base text-xs font-semibold">{product.name}</span>
                      <span className="text-xs hidden sm:block text-slate-800">
                        {product.title}
                      </span>
                    </div>
                  </td>
                  <td className="md:text-base text-xs">{product.stock}</td>
                  <td className="md:font-bold md:border-none border-spacing-0">${product.price.toFixed(2)}</td>
                  <td>{product.totalSale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
