import React from "react";
import UserNotesList from "./UserNotesList";
import Container from "./sideNavbar.module.css";
import Logo from "./Logo";

export default function SideNavbar({
  createdGroupName,
  setCreatedGroupName,
  setSelected,
  isActive,
}) {
  return (
    <div
      className={`${Container.container} ${isActive ? Container.active : ""}`}>
      <Logo />
      <div className={Container.DisplayListButton}>
        <UserNotesList
          createdGroupName={createdGroupName}
          setCreatedGroupName={setCreatedGroupName}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}
