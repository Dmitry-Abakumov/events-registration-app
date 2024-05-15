import axios from "axios";

import { EventType } from "@/types";

export const getAllEvents = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/api/events");

    return data as EventType[];
  } catch (err) {
    console.log(err);
  }
};
