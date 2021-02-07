import React, { useState } from "react";

function PopupWindow({ showPopup, closePopup }) {
  const fileTypes = ["image/jpeg", "image/jpg"];
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (fileTypes.includes(file.type)) {
      setError("");
      setDisabled(false);
    } else {
      setError("wrong file type");
      setDisabled(true);
    }
  };

  return (
    <div className={`popup ${showPopup ? "show" : ""}`}>
      <h4 className="popup-header">Choose file</h4>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={closePopup}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="content">
        <input type="file" onChange={handleUpload} />
        <h4 id="error-msg">{error}</h4>
        <button
          className="btn btn-warning"
          disabled={disabled}
          onClick={closePopup}
        >
          Complete upload
        </button>
      </div>
    </div>
  );
}

export default PopupWindow;
