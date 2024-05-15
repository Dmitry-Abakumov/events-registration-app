import { Event } from "@/components/ui";

import { getAllEvents } from "@/services/events-api";

import css from "./EventBoard.module.css";

export const EventsBoard = async () => {
  const events = await getAllEvents();

  return (
    <section>
      <div className="container">
        <ul className="flex flex-wrap gap-6 w-full">
          {events?.map((ev) => (
            <Event key={ev._id} {...ev} />
          ))}
        </ul>
      </div>
    </section>
  );
};
