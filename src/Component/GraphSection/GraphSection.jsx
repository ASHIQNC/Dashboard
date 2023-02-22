import React from "react";
import "./GraphSection.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const GraphSection = () => {
  const grData = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="graphWrapper">
      <div className="top__portion">
        <div className="heading">
          <h5>Revenu</h5>
        </div>

        <div className="sub__heading">
          Month
          <KeyboardArrowDownIcon className="down__arrow" />
        </div>
      </div>

      <div className="bottomSection">
        <AreaChart
          width={600}
          height={200}
          data={grData}
          margin={{
            top: 10,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />

          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default GraphSection;
