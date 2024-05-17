import { Dispatch, SetStateAction } from "react";

import { MemberType } from "@/types";

export type MembersFilterProps = {
  members: MemberType[];
  setMembers: Dispatch<SetStateAction<MemberType[]>>;
};
