import React from "react";
import Menu from "../components/Menu";
import {BarChart} from "../components/BarChart ";
import CustomerDatsa from "../components/CustomerDatsa";
const Home = () => {
  return (
    <div className="">
      <Menu />
      <div className="flex md:flex-row flex-col mt-5  md:px-7 md:mt-8 gap-8">
        <div className="bg-white  rounded-lg md:w-[70%]">
          <BarChart />
        </div>

        <div className="md:w-[30%] ">
          <CustomerDatsa />
        </div>
      </div>
    </div>
  );
};

export default Home;
