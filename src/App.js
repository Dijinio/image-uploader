import React, { useState } from "react";
import PopupWindow from "./PopupWindow";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="main">
      <PopupWindow showPopup={showPopup} closePopup={closePopup} />
      <button className="btn btn-primary" onClick={() => setShowPopup(true)}>
        UPLOAD
      </button>
    </div>
  );
}

export default App;
