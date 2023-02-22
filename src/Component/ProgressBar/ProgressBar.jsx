import React from "react";
import "./ProgressBar.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UserHistory from "../UserDetails/UserHistory";

const ProgressBars = () => {
  const progressData = [
    {
      id: 1,
      progressType: "Trip",
      amountSpend: " $1150",
      totalAmount: "$2500",
    },
    {
      id: 2,
      progressType: "Airpods max",
      amountSpend: " $2150",
      totalAmount: "$3500",
    },
    {
      id: 3,
      progressType: "car",
      amountSpend: " $3150",
      totalAmount: "$5500",
    },
  ];
  return (
    <div className="progress-bar__container__wrapper">
      <div className="progress-bar__container">
        <div className="progress-bar__top__portion">
          <div className="progress-bar__heading">
            <h5>Goals</h5>
          </div>

          <div className="progress-bar__sub__heading">
            <h6>Add goals +</h6>
          </div>
        </div>
        {progressData.map((data) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="progress-bar__middle-section">
                <div className="progress-bar__middle-section__heading">
                  <h7>{data.progressType}</h7>
                </div>

                <div className="progress-bar__middle-section__sub-heading">
                  <p>
                    {data.amountSpend}/
                    <span style={{ color: "black" }}>{data.totalAmount}</span>
                  </p>
                  <MoreVertIcon />
                </div>
              </div>
              <div className="progress-bar__bottom">
                <ProgressBar className="progress" animated now={45} />;
              </div>
            </div>
          );
        })}
        <MoreHorizIcon style={{ margin: "auto", color: "blue" }} />
      </div>
      <UserHistory />
    </div>
  );
};

export default ProgressBars;
