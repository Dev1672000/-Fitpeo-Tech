import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeaderBox from "./components/HeaderBox";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import ProductTable from "./components/ProductTable";

function App() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="flex bg-slate-50">
      <div className="w-[17%] bg-repeat-round   h-screen">
        <Sidebar />
      </div>
      <div className="w-[83%] p-5  space-y-4">
       
        <Header />
        <Home />
        <ProductTable />
      </div>
    </div>
  );
}

export default App;
