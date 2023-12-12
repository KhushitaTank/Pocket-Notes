import React from "react";
import NotesImage from "../../assests/JPG/NoteImage.png";
import lock from "../../assests/Lock.svg";
import blankPage from "./blankPage.module.css";

export default function BlankPage() {
  return (
    <div className={blankPage.Container}>
      <div className={blankPage.Main}>
        <img className={blankPage.NotesImage} src={NotesImage} />
        <h1 className={blankPage.heading}>Pocket Notes</h1>
        <h3 className={blankPage.description}>
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </h3>
      </div>
      <div className={blankPage.Footer}>
        <img src={lock} />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
}
