import React, { useState } from "react";
import { NotificationIcon } from "../../assets/icons";

type RoundButtonProps = {
  icon: string;
} & React.ComponentProps<"button">;

const RoundButton = ({ icon }: RoundButtonProps) => {
  return (
    <button className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-[#EAECF0] hover:border-[#c7c8cc] duration-100">
      <img src={icon} className="w-5 h-5" alt="messageText" />
    </button>
  );
};

export const NotificationButton = () => {
  const [hasNotif, setHasNotif] = useState(true);

  return (
    <button
      onClick={() => {
        setHasNotif(!hasNotif);
      }}
      className="relative w-[35px] h-[35px] flex items-center justify-center rounded-full border border-[#EAECF0] hover:border-[#c7c8cc] duration-100"
    >
      {hasNotif && (
        <div className="absolute top-1 right-2 w-[7px] h-[7px] rounded-full bg-[#D70000]"></div>
      )}
      <img src={NotificationIcon} className="w-5 h-5" alt="messageText" />
    </button>
  );
};

export default RoundButton;
