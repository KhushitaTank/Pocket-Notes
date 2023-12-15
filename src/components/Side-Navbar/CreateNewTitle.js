import React, { useState } from "react";
import addBtn from "../../assests/addBtn.svg";
import NewTitle from "../Side-Navbar/CreateNewTitle.module.css";
import Modal from "./Modal";

export default function CreateNewTitle({
  createdGroupName,
  setCreatedGroupName,
}) {
  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [isErrorGroupName, setIsErrorGroupName] = useState();
  const [isErrorColor, setIsErrorColor] = useState();

  const handleClick = () => {
    setState(!state);
    setColor();
    setName();
    setIsErrorGroupName();
    setIsErrorColor();
  };

  const generateintial = (name) => {
    let arr = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
    if (arr.length > 2) {
      return arr.slice(0, 2);
    } else {
      return arr;
    }
  };

  const CreateNewGroup = () => {
    if (
      name !== undefined &&
      name !== "" &&
      color !== undefined &&
      color !== ""
    ) {
      let newGroup = [...createdGroupName];
      let newIntial = generateintial(name);
      let newName = name.charAt(0).toUpperCase() + name.slice(1).toString();
      let RepeatedName = newGroup.filter((i) => i.title.toLowerCase() == newName.toLowerCase());
      
      if (!RepeatedName.length) {
        newGroup.push({
          title: newName,
          color: color,
          intial: newIntial,
          notes: [],
        });
        setCreatedGroupName(newGroup);
        localStorage.setItem("Group Name", JSON.stringify(newGroup));
        setState(false);
        setName();
        setColor();
        setIsErrorColor();
        setIsErrorGroupName();
      } else {
        setIsErrorGroupName("Group Name Already Exists")
      }
    } else {
      if (!(name !== undefined) || !(name !== "")) {
        setIsErrorGroupName("Group Name Require");
      } else if (!(color !== undefined) || !(color !== "")) {
        setIsErrorColor("Color Require");
      }
    }
  };

  return (
    <div className={NewTitle.CreateTitle}>
      <button className={NewTitle.createTitleBtn} onClick={handleClick}>
        <img src={addBtn} />
      </button>
      {state && (
        <>
          <Modal
            setName={setName}
            setColor={setColor}
            CreateNewGroup={CreateNewGroup}
            show={state}
            close={() => {
              setState(false);
            }}
            isErrorGroupName={isErrorGroupName}
            isErrorColor={isErrorColor}
          />
        </>
      )}
    </div>
  );
}
