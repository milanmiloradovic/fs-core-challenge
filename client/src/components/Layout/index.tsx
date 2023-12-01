import React from "react";
import Message from "../../models/Message";
import MessageCard from "../MessageCard/index";
import Input from "../Input";

import "../../styles/layout.css";

interface LayoutProps {
  messages: Message[];
}

export default function Layout({ messages }: LayoutProps) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="title">Chat App</div>
        {messages.map((message, index) => (
          <MessageCard key={index} message={message} />
        ))}
        <Input />
      </div>
    </React.Fragment>
  );
}
