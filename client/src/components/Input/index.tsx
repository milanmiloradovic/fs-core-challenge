import React, { useState } from "react";

import "../../styles/input.css";

export default function Input() {
  const [message, setMessage] = useState<string>("");

  return (
    <React.Fragment>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </div>
    </React.Fragment>
  );
}
