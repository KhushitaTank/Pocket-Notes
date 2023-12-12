import React, { useEffect, useState } from "react";
import NotesHeading from "./NotesHeading";
import NotesInputField from "./NotesInputField";
import notes from "./notes.module.css";
import NotesCardContainer from "./NotesCardcontainer";
import BlankPage from "./BlankPage";

export default function Notes({
  createdGroupName,
  setCreatedGroupName,
  selected,
  isActive,
  setSelected,
}) {
  const [userSelectedNotes, setUserSelectedNotes] = useState();

  useEffect(() => {
    if (selected == -1) setUserSelectedNotes();
    else setUserSelectedNotes(createdGroupName.at(selected));
  }, [selected]);

  return userSelectedNotes ? (
    <div
      className={`${notes.container} ${
        isActive ? notes.active : notes.notActive
      }`}>
      <NotesHeading
        userSelectedNotes={userSelectedNotes}
        isActive={isActive}
        setSelected={setSelected}
      />
      <NotesCardContainer userSelectedNotes={userSelectedNotes} />
      <NotesInputField
        userSelectedNotes={userSelectedNotes}
        createdGroupName={createdGroupName}
        setCreatedGroupName={setCreatedGroupName}
      />
    </div>
  ) : (
    <>
      <BlankPage />
    </>
  );
}
