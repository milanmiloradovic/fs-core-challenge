import React from "react";
import { useEffect, useState } from "react";
import Message from "./models/Message";
import messageService from "./services/MessageService";
import Layout from "./components/Layout/index";

import "../src/styles/App.css";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    messageService
      .getAll()
      .then((value) => {
        setMessages(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Layout messages={messages} />;
}

export default App;
