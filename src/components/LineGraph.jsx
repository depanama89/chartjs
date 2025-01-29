import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineGraph = () => {
  const options = {};
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Step by patrick",
        data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
        borderColor: "rgb(75,192,192)",
      },
      {
        label: "Steps by ",
        data: [3000, 5000, 5500, 8000, 11000, 1200, 15000],
        borderColor: "rgb(192, 75, 95)",
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;
