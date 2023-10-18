import React from "react";
import { Doughnut } from "react-chartjs-2";

export const data = {
  
  datasets: [
    {
      label: "# of customer",
      data: [12, 19, 3, 0,0,0],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
