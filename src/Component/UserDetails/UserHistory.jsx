import React from "react";
import "./UserHistory.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import avatar from "../../assets/profile.jpg";

const UserHistory = () => {
  const userData = [
    {
      id: 1,
      userName: "emily",
      cardType: "Visa",
      time: "7:30:35 pm",
      amount: "$2500",
      status: "Completed",
    },

    {
      id: 2,
      userName: "Eleaner",
      cardType: "Visa",
      time: "9:30:35 pm",
      amount: "$3500",
      status: "Pending",
    },
    {
      id: 3,
      userName: "emily",
      cardType: "Visa",
      time: "7:30:35 pm",
      amount: "$2500",
      status: "Failed",
    },
    {
      id: 4,
      userName: "emily",
      cardType: "Visa",
      time: "10:30:35 pm",
      amount: "$4500",
      status: "Completed",
    },
  ];
  return (
    <div className="user-history__wrapper">
      <div className="user-history__container">
        <div className="user-history__top__portion">
          <div className="user-history__heading">
            <h5>Transaction</h5>
          </div>

          <div className="user-history__sub__heading">
            Feb
            <KeyboardArrowDownIcon />
          </div>
        </div>
        {userData.map((data) => {
          return (
            <div className="user-history__bottom">
              <div className="user-history__profileContainer">
                <img className="profile__img" src={avatar}></img>
              </div>
              <div className="user-history__details">
                <h7>{data.userName}</h7>
                <h7>{data.cardType}</h7>
                <h7>{data.time}</h7>
                <h7>{data.amount}</h7>
                <ul>
                  <li>{data.status}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserHistory;
