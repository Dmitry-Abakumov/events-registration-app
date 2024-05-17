import axios from "axios";

import { EventType } from "@/types";

export const getAllEvents = async (pageNumber: number) => {
  try {
    const { data } = await axios.get(
      `https://events-registration-app-server.onrender.com/api/events?page=${pageNumber}&limit=12`
    );

    return data as EventType[];
  } catch (err) {
    console.log(err);
  }
};
