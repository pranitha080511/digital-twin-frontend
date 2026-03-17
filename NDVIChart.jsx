"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function NDVIChart({ history }) {

  const data = {
    labels: ["Day1","Day5","Day10","Day15","Today"],
    datasets: [
      {
        label: "NDVI Crop Health",
        data: history,
        borderColor: "green",
        borderWidth: 3
      }
    ]
  };

  return <Line data={data} />;
}