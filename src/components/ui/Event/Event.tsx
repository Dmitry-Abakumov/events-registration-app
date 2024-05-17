import moment from "moment";
import Link from "next/link";

import data from "@/data/event.json";

import { EventType } from "@/types";

export const Event: React.FC<EventType> = ({
  title,
  description,
  organizer,
  eventDate,
  _id: id,
}) => {
  const { viewEventLinkLabel, registerEventLinkLabel } = data;

  return (
    <li className="border-2 border-solid border-accent w-[200px] rounded-[5px] p-2">
      <p>{title}</p>
      <p>{description}</p>
      <p>{organizer}</p>
      <p>{moment(eventDate).format("MMMM Do YYYY, h:mm:ss a")}</p>

      <div className="flex justify-center gap-2 items-center mt-2">
        <Link
          className="border-solid border-accent border-2 rounded-[5px] py-1 px-2"
          href={`members/event/${id}`}
        >
          {viewEventLinkLabel}
        </Link>
        <Link
          className="border-solid border-accent border-2 rounded-[5px] py-1 px-2"
          href={`members/event/${id}/register`}
        >
          {registerEventLinkLabel}
        </Link>
      </div>
    </li>
  );
};
