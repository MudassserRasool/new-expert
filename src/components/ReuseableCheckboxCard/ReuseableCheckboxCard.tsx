import React from "react";
import Style from "./ReuseableCheckboxCard.module.css";

const ReuseableCheckboxCard = () => {
  return (
    <div>
      <div className={Style.checkboxCardBox}>
        <p className={Style.bookingHeading}>Booking</p>

        {/* start checkbox input----------------------- */}
          <div className={Style.checkboxStyle}>
            <input type="checkBox" className={Style.checkBox} />
            <label htmlFor="" className={Style.lableTextStyle}>
              Create
            </label>
          </div>
        {/* end checkbox input----------------------- */}
        {/* start checkbox input----------------------- */}
          <div className={Style.checkboxStyle}>
            <input type="checkBox" className={Style.checkBox} />
            <label htmlFor="" className={Style.lableTextStyle}>
              Edit
            </label>
          </div>
        {/* end checkbox input----------------------- */}
        {/* start checkbox input----------------------- */}
          <div className={Style.checkboxStyle}>
            <input type="checkBox" className={Style.checkBox} />
            <label htmlFor="" className={Style.lableTextStyle}>
              Cancel
            </label>
          </div>
        {/* end checkbox input----------------------- */}
        
      </div>
    </div>
  );
};

export default ReuseableCheckboxCard;
