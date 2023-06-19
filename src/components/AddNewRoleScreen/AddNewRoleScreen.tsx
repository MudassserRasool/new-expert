import React from "react";
import Style from "./AddNewRoleScreen.module.css";
import { BsQuestionCircle } from "react-icons/bs";
import ReuseableCheckboxCard from "../ReuseableCheckboxCard/ReuseableCheckboxCard";
import ReuseableRedButton from "../ReuseableRedButton/ReuseableRedButton";

const AddNewRoleScreen = () => {
  return (
    <div>
      <div className={Style.roleScreenContainer}>
        {/* start add role upper bar---------------------- */}
        <div className={Style.boxRow}>
          <p className={Style.roleInputHeading}>New Role</p>
          <input
            type="text"
            placeholder="Enter New Role"
            className={Style.enterRoleInput}
          />
        </div>
        {/* end add role upper bar---------------------- */}

        <div className={Style.permissionRow}>
          <BsQuestionCircle color="#778899" />
          <p className={Style.permissionText}>Permission</p>
        </div>

        <div className={Style.reuseableCheckBoxCard}>
          <ReuseableCheckboxCard />
          <ReuseableCheckboxCard />
        </div>

        <div className={Style.buttonRow}>
          <ReuseableRedButton/>
        </div>
      </div>
    </div>
  );
};

export default AddNewRoleScreen;
