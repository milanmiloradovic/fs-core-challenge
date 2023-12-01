import React, { useState } from "react";
import Message from "../../models/Message";
import MessageCard from "../MessageCard/index";
import Error from "../Error/index";
import messageService from "../../services/MessageService";
import Input from "../Input";

import "../../styles/layout.css";

interface LayoutProps {
  messages: Message[];
  getMessages: () => Promise<void>;
}

export default function Layout({ messages, getMessages }: LayoutProps) {
  const [error, isError] = useState<boolean>(false);

  const sendMessage = async (messageData: Message) => {
    if (messageData.content === "") {
      isError(true);
    } else {
      isError(false);
      await messageService.sendMessage(messageData);
      getMessages();
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="title">Chat App</div>
        {messages.map((message, index) => (
          <MessageCard key={index} message={message} />
        ))}
        <Input onSend={sendMessage} />
        <Error error={error} />
      </div>
    </React.Fragment>
  );
}
