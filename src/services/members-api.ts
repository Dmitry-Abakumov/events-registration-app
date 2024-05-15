import axios from "axios";

import { MemberType } from "@/types";

export const registerEventMember = async (id: string, body: MemberType) => {
  try {
    await axios.post(`http://localhost:3001/api/members/event/${id}`, {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getEventMembers = async (id: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/members/event/${id}`
    );

    return data as MemberType[];
  } catch (err) {
    console.log(err);
  }
};
