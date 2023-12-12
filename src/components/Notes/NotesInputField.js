import React, { useState } from "react";
import IsGreater from "../../assests/IsGreater.svg";
import disableIsGreater from "../../assests/disableIsGreater.svg";
import notes from "./notes.module.css";

export default function NotesInputField({
  userSelectedNotes,
  createdGroupName,
  setCreatedGroupName,
}) {
  const [note, setNote] = useState("");

  const [isDisabled, setIsDisable] = useState(false);

  const addZero = (num, places) => String(num).padStart(places, "0");

  const handleClick = (e) => {
    if (e.target.value) {
      setNote(e.target.value);
      setIsDisable(true);
    } else {
      setNote("");
      setIsDisable(false);
    }
  };

  const CreateNewNotes = () => {
    let Upadate = [...createdGroupName];
    const MonthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const CompleteDate = new Date();
    const Month = MonthList[CompleteDate.getMonth()];
    const Day = CompleteDate.getDate();
    const Year = CompleteDate.getFullYear();
    let hour = CompleteDate.getHours();
    const min = CompleteDate.getMinutes();

    const amOrPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    Upadate.map((i) => {
      if (i.title == userSelectedNotes.title) {
        i.notes.push({
          note: note,
          date: `${addZero(Day, 2)}  ${addZero(Month, 2)}  ${Year}`,
          time: `${addZero(hour, 2)} : ${addZero(min, 2)} ${amOrPm}`,
        });
      }
    });
    setCreatedGroupName(Upadate);
    localStorage.setItem("Group Name", JSON.stringify(Upadate));
    setNote("");
    setIsDisable(false);
  };

  return (
    <div className={notes.InputFieldContainer}>
      <textarea
        className={`${notes.InputField} ${notes.Scrollbar}`}
        type="text"
        placeholder="Enter your text here..........."
        onChange={handleClick}
        value={note}
      />
      <button
        className={notes.InputButton}
        disabled={!note}
        onClick={CreateNewNotes}>
        {isDisabled ? <img src={IsGreater} /> : <img src={disableIsGreater} />}
      </button>
    </div>
  );
}
