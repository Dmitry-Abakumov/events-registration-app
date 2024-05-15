import { EventMembers } from "@/sections/EventMembers";

const EventMembersPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  return (
    <>
      <EventMembers eventId={id} />
    </>
  );
};

export default EventMembersPage;
