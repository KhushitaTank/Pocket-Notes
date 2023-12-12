import React, { useEffect, useState } from "react";
import SideNavbar from "./Side-Navbar/Side-Navbar";
import Notes from "./Notes/Notes";
import Container from "./home.module.css";
import "./color.css";

export default function Home() {
  const [createdGroupName, setCreatedGroupName] = useState(
    JSON.parse(localStorage.getItem("Group Name")) ?? []
  );
  const [selected, setSelected] = useState(-1);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (selected == -1) setIsActive(false);
    else setIsActive(true);
  }, [selected]);

  return (
    <div className={`${Container.Container} ${Container.Scrollbar}`}>
      <SideNavbar
        createdGroupName={createdGroupName}
        setCreatedGroupName={setCreatedGroupName}
        setSelected={setSelected}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Notes
        isActive={isActive}
        setSelected={setSelected}
        createdGroupName={createdGroupName}
        setCreatedGroupName={setCreatedGroupName}
        selected={selected}
      />
    </div>
  );
}
