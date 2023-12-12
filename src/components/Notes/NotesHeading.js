import React from "react";
import notes from "./notes.module.css";
import arrow from "../../assests/arrow.svg";

export default function NotesHeading({
  userSelectedNotes,
  isActive,
  setSelected,
}) {
  return (
    <div className={notes.Header}>
      <button
        onClick={() => setSelected(-1)}
        className={`${notes.backButton} ${
          isActive ? notes.backButtonActive : ""
        }`}>
        <img src={arrow} />
      </button>
      <h1 className={userSelectedNotes.color}>{userSelectedNotes.intial}</h1>
      <h1 className={notes.title}>{userSelectedNotes.title}</h1>
    </div>
  );
}
