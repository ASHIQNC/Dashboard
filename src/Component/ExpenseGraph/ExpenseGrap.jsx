import React from "react";
import "./ExpenseGraph.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProgressBars from "../ProgressBar/ProgressBar";
const ExpenseGraph = () => {
  const expense = [
    {
      name: "6",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "7",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "8",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "9",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "9",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "11",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "12",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="graph__container__wrapper">
      <div className="graph__container">
        <div className="top__portion__container">
          <div className="heading">
            <h5>Expenses</h5>
          </div>

          <div className="top__portion__sub__heading">
            Last Day
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="bottom">
          <BarChart
            width={350}
            height={200}
            data={expense}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis />
            <YAxis />

            <Bar dataKey="pv" fill="#8884d8" radius={[8, 8, 0, 0]} />
          </BarChart>
        </div>
      </div>
      <ProgressBars />
    </div>
  );
};

export default ExpenseGraph;
