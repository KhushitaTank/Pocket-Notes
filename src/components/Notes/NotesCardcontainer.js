import React from "react";
import Card from "./notesCardcontainer.module.css";
import dot from "../../assests/dot.svg";

export default function NotesCardcontainer({ userSelectedNotes }) {
  return (
    <div className={`${Card.CardContainer} ${Card.Scrollbar}`}>
      {userSelectedNotes.notes &&
        userSelectedNotes.notes.map((card, index) => (
          <div className={Card.Card} key={index}>
            <p>{card.note}</p>
            <div className={Card.DateTime}>
              <p>{card.date}</p>
              <img src={dot} />
              <p>{card.time}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
