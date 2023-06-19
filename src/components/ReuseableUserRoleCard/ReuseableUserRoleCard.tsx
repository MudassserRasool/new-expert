import React, { useState } from "react";
import Style from "./ReuseableUserRoleCard.module.css";
import Image from "next/image";
import { MyProfileTwo } from "@/assets";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton/ToggleButton";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

interface ReuseableUserRoleCardProps {
  status: boolean;
}
const ReuseableUserRoleCard = ({ status }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className={Style.cardContainer}>
        {/* start card row------------------------ */}
        <div className={Style.cardRow}>
          {/* start card left side items------------------------------ */}
          <div className={Style.leftSideItems}>
            <Image
              src={MyProfileTwo}
              width={80}
              height={70}
              alt="user image not loaded"
              className={Style.profileImage}
            />
            <div className={Style.profileTextArea}>
              <h1 className={Style.userName}>
                Mudasser Rasool
{status? <span className={Style.userVerificationStatusActive}>Active</span> :<span className={Style.userVerificationStatusPending}>Pending</span>}

                {/* <span className={Style.userVerificationStatusPending}>Pending</span>
                <span className={Style.userVerificationStatusActive}>Active</span> */}
              </h1>
              <p className={Style.userRole}>Admin</p>
              <p className={Style.userId}>ID:14569</p>
              <p className={Style.userEmail}>mudasserasool@gmail.com</p>
            </div>
          </div>
          {/* end card left side items------------------------------ */}

          {/* start card right side items------------------------------ */}
          <div className={Style.rightSideItems}>
            <div>
              <BsThreeDotsVertical className={Style.threeDotsIcon} />
            </div>
            <div>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label=""
                className={Style.switchButton}
              />
            </div>
          </div>
          {/* end card right side items------------------------------ */}
        </div>
        {/* end card row------------------------ */}
      </div>
    </div>
  );
};

export default ReuseableUserRoleCard;
