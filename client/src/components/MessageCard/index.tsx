import React from "react";
import Message from "../../models/Message";

import "../../styles/message.css";

interface MessageCardProps {
  message: Message;
}

export default function MessageCard({ message }: MessageCardProps) {
  const messageDate = new Date(message.timestamp);

  return (
    <React.Fragment>
      <div className={message.author === "You" ? "your-message" : "message"}>
        <div className="author">{message.author}</div>
        <div className="content">{message.content}</div>
        <div className="timestamp">{messageDate.toLocaleString("en-US")}</div>
      </div>
    </React.Fragment>
  );
}
