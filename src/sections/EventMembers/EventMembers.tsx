"use client";

import { useEffect, useState } from "react";

import { Member } from "@/components/ui";

import { getEventMembers } from "@/services/members-api";

import { MemberType } from "@/types";
import { EventMembersProps } from "./types";

export const EventMembers: React.FC<EventMembersProps> = ({ eventId }) => {
  const [members, setMembers] = useState<MemberType[]>([]);

  useEffect(() => {
    (async () => {
      const eventMembers = await getEventMembers(eventId);

      if (eventMembers) setMembers(eventMembers);
    })();
  });

  return (
    <section>
      {/* <MembersFilter members={members} setMembers={setMembers} /> */}
      <div className="container">
        <ul className="flex flex-wrap gap-6 w-full">
          {members?.map((m) => (
            <Member key={m._id} {...m} />
          ))}
        </ul>
      </div>
    </section>
  );
};
