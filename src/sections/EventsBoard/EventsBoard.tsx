"use client";

import { useEffect, useState, useRef, LegacyRef } from "react";
import debounce from "lodash.debounce";

import { Event } from "@/components/ui";

import { scrollToNextPageOnLoad, isUserReachedBottom } from "@/utils";

import { getAllEvents } from "@/services/events-api";

import { EventType } from "@/types";

export const EventsBoard = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [events, setEvents] = useState<EventType[]>([]);
  const eventsListRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    if (isUserReachedBottom()) {
      setPageNumber((prev) => (prev += 1));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      const evs = (await getAllEvents(pageNumber)) as EventType[];

      setEvents((prev) => [...prev, ...evs]);
    })();

    scrollToNextPageOnLoad(
      pageNumber,
      eventsListRef?.current as HTMLUListElement
    );
  }, [pageNumber]);

  return (
    <section>
      <div className="container">
        <ul
          ref={eventsListRef}
          id="eventsList"
          className="flex flex-wrap gap-6 justify-center"
        >
          {events?.map((ev) => (
            <Event key={ev._id} {...ev} />
          ))}
        </ul>
      </div>
    </section>
  );
};
