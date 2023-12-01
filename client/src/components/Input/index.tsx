import React, { useState } from "react";
import Message from "../../models/Message";

import "../../styles/input.css";

interface InputProps {
  onSend: (messageData: Message) => Promise<void>;
}

export default function Input({ onSend }: InputProps) {
  const [message, setMessage] = useState<string>("");

  return (
    <React.Fragment>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={() => {
            onSend({
              author: "You",
              content: message,
              timestamp: new Date(),
            });
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
    </React.Fragment>
  );
}
