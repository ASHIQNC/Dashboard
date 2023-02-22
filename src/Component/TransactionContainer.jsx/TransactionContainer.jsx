import "./TransactionContainer.scss";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PieChart, Pie, Sector, Cell } from "recharts";
import GraphSection from "../GraphSection/GraphSection";

const TransactionContainer = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div style={{ display: "flex" }}>
      <div className="transactionCard__wrapper">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="header__section__wrapper">
            <div className="heading">
              <h5>Transaction</h5>
              <KeyboardArrowDownIcon className="down__arrow" />
            </div>

            <MoreVertIcon className="profileContainer__dot" />
          </div>
          {/* chart section */}
          <div className="chart__section">
            <div className="left__section">
              <PieChart width={100} height={300}>
                <Pie
                  data={data}
                  cx={40}
                  cy={50}
                  innerRadius={30}
                  outerRadius={40}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="right__section">
              <div className="percentage__wrapper">
                <span className="percentage__balance">52%</span>
                <h5 className="percentage__desc">Spent from total balance</h5>
              </div>

              <div className="percentage__wrapper">
                <span className="percentage__balance">72%</span>
                <h5 className="percentage__desc">
                  Spent Compared to last month
                </h5>
              </div>
            </div>
          </div>
          <div className="list__wrapper">
            <div className="list">
              <ul>
                <li>Entertainment</li>
                <li>Subscription</li>
                <li>Transport</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <GraphSection />
    </div>
  );
};

export default TransactionContainer;
