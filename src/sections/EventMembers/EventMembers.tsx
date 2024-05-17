import { Member } from "@/components/ui";

import { getEventMembers } from "@/services/members-api";

import data from "@/data/eventMembers.json";

import { EventMembersProps } from "./types";

export const EventMembers: React.FC<EventMembersProps> = async ({
  eventId,
}) => {
  const eventMembers = await getEventMembers(eventId);

  return (
    <section>
      <div className="container">
        <ul className="flex flex-wrap gap-6 w-full">
          {eventMembers?.map((m) => (
            <Member key={m._id} {...m} />
          ))}
        </ul>
      </div>

      {eventMembers?.length === 0 && (
        <p className="text-accent text-xl text-center">
          {data.noMembersMessage}
        </p>
      )}
    </section>
  );
};
