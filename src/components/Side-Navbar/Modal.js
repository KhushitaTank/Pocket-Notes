import modalCss from "./modal.module.css";

const Modal = ({
  setColor,
  setName,
  CreateNewGroup,
  show,
  close,
  isErrorGroupName,
  isErrorColor,
}) => {
  return show ? (
    <div className={modalCss.modal} onClick={() => close()}>
      <div
        className={modalCss.modalContent}
        onClick={(e) => e.stopPropagation()}>
        <h1 className={modalCss.MainHeading}>Create New group</h1>
        <div>
          <div className={modalCss.Section1}>
            <h2>Group Name</h2>
            <input
              className={modalCss.inputField}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter group name"
            />
          </div>
          <div>
            {isErrorGroupName && (
              <div className={modalCss.error}>{isErrorGroupName}</div>
            )}
          </div>
          <div className={modalCss.Section2}>
            <h2>Choose colour</h2>
            <input
              type="radio"
              id="color1"
              name="choose"
              value="color1"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              id="color2"
              name="choose"
              value="color2"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              id="color3"
              name="choose"
              value="color3"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              id="color4"
              name="choose"
              value="color4"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              id="color5"
              name="choose"
              value="color5"
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="radio"
              id="color6"
              name="choose"
              value="color6"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div>
          {isErrorColor && <div className={modalCss.error}>{isErrorColor}</div>}
        </div>
        <div className={modalCss.CreateButtonContainer}>
          <button className={modalCss.CreateButton} onClick={CreateNewGroup}>
            Create
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
