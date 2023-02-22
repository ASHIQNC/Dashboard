import React, { useState } from "react";
import "./Card.scss";
import MovingIcon from "@mui/icons-material/Moving";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import ProfileCard from "../ProfileCard/ProfileCard";

function Card() {
  const datas = [
    {
      id: 1,
      heading: "Balance",
      accountType: "Wallet",
      balanceAmount: "$1470.70",
      date: "6 April 4pm",
      percentage: "43.07%",
      creditedAmount: "+$6734.48",
    },
    {
      id: 2,
      heading: "Saved money",
      accountType: "Savings",
      balanceAmount: "$1770.70",
      date: "6 April 4pm",
      percentage: "3.07%",
      creditedAmount: "-$1734.48",
    },
    {
      id: 1,
      heading: "Arrearages",
      accountType: "Loans",
      balanceAmount: "$1470.70",
      date: "6 April 4pm",
      percentage: "25.07%",
      creditedAmount: "+$8734.48",
    },
  ];

  const graphData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="work" id="work">
      <div className="slider">
        {datas.map((data) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <h6>{data.heading}</h6>
                    <h6>{data.balanceAmount}</h6>
                    <p>{data.date}</p>

                    <div className="footer">
                      <MovingIcon className="footer__arrowup" />
                      <span>{data.percentage}</span>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="right__content">
                    <h6>
                      {data.accountType}
                      <NavigateNextIcon className="right__arrow" />
                    </h6>

                    <ResponsiveContainer width="80%" height="60%">
                      <AreaChart
                        width={200}
                        height={60}
                        data={graphData}
                        margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 5,
                        }}
                      >
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h5>{data.creditedAmount}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ProfileCard />
    </div>
  );
}

export default Card;
