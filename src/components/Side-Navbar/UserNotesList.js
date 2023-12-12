import React from "react";
import CreateNewTitle from "./CreateNewTitle";
import listContainer from "./UserNotesList.module.css";

export default function UserNotesList({
  createdGroupName,
  setSelected,
  setCreatedGroupName,
}) {
  return (
    <div
      className={`${listContainer.mainContainer} ${listContainer.Scrollbar}`}>
      {createdGroupName &&
        createdGroupName.map((name, index) => {
          return (
            <div className={listContainer.Container} key={index}>
              <div className={name.color}>{name.intial}</div>
              <button
                className={listContainer.ButtonList}
                onClick={() => setSelected(index)}>
                {name.title}
              </button>
            </div>
          );
        })}
      <CreateNewTitle
        createdGroupName={createdGroupName}
        setCreatedGroupName={setCreatedGroupName}
      />
    </div>
  );
}
