import { registerEventMember } from "@/services/members-api";

import { MemberType } from "@/types";

export const onSubmit = async (values: MemberType, id: string) => {
  await registerEventMember(id, { ...values });
};
