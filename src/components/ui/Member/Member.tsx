import { MemberType } from "@/types";

export const Member: React.FC<MemberType> = ({ fullName, email }) => {
  return (
    <li>
      <p>{fullName}</p>
      <p>{email}</p>
    </li>
  );
};
