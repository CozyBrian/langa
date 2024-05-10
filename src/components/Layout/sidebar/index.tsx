import { useState } from "react";
import {
  CalendarSearchIcon,
  Category2Icon,
  Clarity_helpLineIcon,
  FavoriteChartIcon,
  LogoutIcon,
  PeopleIcon,
  Setting2Icon,
  SmsIcon,
} from "../../../assets/icons";
import { LangaIcon } from "../../../assets/images";
import SidebarItem from "./sidebarItem";

const sidebarItems = [
  {
    icon: Category2Icon,
    label: "Dashboard",
  },
  {
    icon: SmsIcon,
    label: "Inbox",
  },
  {
    icon: PeopleIcon,
    label: "Team",
  },
  {
    icon: CalendarSearchIcon,
    label: "Event",
  },
  {
    icon: FavoriteChartIcon,
    label: "Reports",
  },
  {
    icon: Setting2Icon,
    label: "Settings",
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(2);

  return (
    <aside className="flex flex-col px-6 pb-8 w-[280px] h-full justify-between">
      <div>
        <div className="flex flex-row gap-2 items-center py-7 border-b">
          <img src={LangaIcon} className="w-10 h-10" alt="langaIcon" />
          <p className="text-xl font-bold">LANGA</p>
        </div>
        <ul className="pt-7 flex flex-col gap-2">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              isSelected={index === selected}
              setSelected={() => {
                setSelected(index);
              }}
            />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 justify-self-end">
        <SidebarItem
          item={{ icon: Clarity_helpLineIcon, label: "Help" }}
          setSelected={() => {}}
        />
        <SidebarItem
          item={{ icon: LogoutIcon, label: "Logout" }}
          setSelected={() => {}}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
