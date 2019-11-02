import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div className={s.img_1}>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="пейзаж"
        />
      </div>
      <div className={s.img_2}>
        <img src="https://tinyjpg.com/images/social/website.jpg" alt="панда" />
      </div> */}
      <div className={s.img_3}>
        <img src={props.profile.photos.large} alt="димыч" />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
