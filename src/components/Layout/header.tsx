import { IcallOutlineIcon, MessageTextIcon } from "../../assets/icons";
import { John } from "../../assets/images";
import RoundButton, { NotificationButton } from "../misc/roundButton";
import SearchInput from "../misc/searchInput";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-6 border-b">
      <SearchInput />
      <div className="flex flex-row gap-10 items-center">
        <div className="flex flex-row gap-4 items-center">
          <RoundButton icon={MessageTextIcon} />
          <RoundButton icon={IcallOutlineIcon} />
          <NotificationButton />
        </div>
        <div className="flex flex-row gap-1.5">
          <div className="w-10 h-10 rounded-full bg-slate-500">
            <img
              src={John}
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm font-semibold">Orevba john</p>
            <p className="text-sm font-medium text-[#475467]">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
