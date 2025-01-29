// import { Bar } from "react-chartjs-2";
//import { Bar } from "react-chartjs-2";

// import {
//   Chart as chartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
// } from "chart.js";

import "./App.css";
import Bar from "./components/BarGraph";
// import LineGraph from "./components/LineGraph";

// chartJS.register(CategoryScale, LinearScale, BarElement);
// const data = {
//   label: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "couleurs prefere en rdc",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "blue",
//         "yellow",
//         "green",
//         "purple",
//         "orange",
//       ],
//     },
//   ],
// };
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="card">
          graph
          {/* <Bar data={data} /> */}
          {/* <LineGraph /> */}
          <Bar />
        </div>
      </div>
    </div>
  );
}

export default App;
