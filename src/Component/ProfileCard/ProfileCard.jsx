import React from "react";
import "./ProfileCard.scss";
import profile from "../../assets/profile.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProfileCard = () => {
  return (
    <div className="profileContainer">
      <MoreVertIcon className="profileContainer__dot" />
      <div>
        <img className="profile__image" src={profile}></img>
      </div>

      <div className="details">
        <h2>Emily</h2>
        <h6>Friday,6 April 2022</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
