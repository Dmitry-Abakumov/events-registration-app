import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { MemberType } from "@/types";

export const registerEventMember = async (id: string, body: MemberType) => {
  try {
    await axios.post(
      `https://events-registration-app-server.onrender.com/api/members/event/${id}`,
      {
        ...body,
      }
    );

    toast.success("Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (err) {
    toast.error("Ooops, something went wrong. Try to reload the page, please", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const getEventMembers = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://events-registration-app-server.onrender.com/api/members/event/${id}`
    );

    return data as MemberType[];
  } catch (err) {
    toast.error("Ooops, something went wrong. Try to reload the page, please", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};
