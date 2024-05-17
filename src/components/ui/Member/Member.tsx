import { MemberType } from "@/types";

export const Member: React.FC<MemberType> = ({ fullName, email }) => {
  return (
    <li className="border-2 border-solid border-accent w-[200px] rounded-[5px] p-2">
      <p>{fullName}</p>
      <p>{email}</p>
    </li>
  );
};
