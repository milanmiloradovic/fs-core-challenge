import axios from "axios";
import Message from "../models/Message";
import { API_URL } from "../constants";

export class MessageService {
  async getAll(): Promise<Message[]> {
    const result = await axios.get(API_URL + "/messages");
    return result.data;
  }

  async sendMessage(messageData: Partial<Message>): Promise<Message> {
    const result = await axios.post(API_URL + "/message", messageData);
    return result.data;
  }
}

const service = new MessageService();
export default service;
