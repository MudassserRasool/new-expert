import React, { useState } from "react";
import Style from "./UserListScreen.module.css";
import ReuseableUserRoleCard from "../ReuseableUserRoleCard/ReuseableUserRoleCard";

function UserListScreen() {
  const [status, setstatus] = useState(true);
  return (
    <div>
      <div className={Style.cardList}>
        <ReuseableUserRoleCard status={status} />
        <ReuseableUserRoleCard status={false} />
        <ReuseableUserRoleCard status={status} />
        <ReuseableUserRoleCard status={false} />
        <ReuseableUserRoleCard status={status} />
        <ReuseableUserRoleCard status={false} />
      </div>
    </div>
  );
}

export default UserListScreen;
