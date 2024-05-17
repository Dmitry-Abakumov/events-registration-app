import { Member } from "@/components/ui/Member";

import { getEventMembers } from "@/services/members-api";

import { EventMembersProps } from "./types";

export const EventMembers: React.FC<EventMembersProps> = async ({
  eventId,
}) => {
  const eventMembers = await getEventMembers(eventId);

  return (
    <section>
      <div className="container">
        <ul className="flex flex-wrap gap-6 w-full">
          {eventMembers?.map((member) => (
            <Member key={member._id} {...member} />
          ))}
        </ul>
      </div>
    </section>
  );
};
