import { useState } from "react";
import { cn } from "../../../utils";
import {
  ActivityIcon,
  AtIcon,
  Grid01Icon,
  Task2LineIcon,
  ViewTimelineIcon,
} from "../../../assets/icons";

const BAR_ITEMS = [
  {
    icon: Grid01Icon,
    label: "All",
  },
  {
    icon: AtIcon,
    label: "Mentions",
  },
  {
    icon: ActivityIcon,
    label: "Activity",
  },
  {
    icon: ViewTimelineIcon,
    label: "Timeline",
  },
  {
    icon: Task2LineIcon,
    label: "Report",
  },
  {
    icon: Task2LineIcon,
    label: "Task",
  },
];

const NavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState(2);
  return (
    <div className="flex w-full px-6 py-[19px] items-center border-b">
      <div className="flex flex-row gap-2 p-4 items-center justify-between border bg-[#FBFCFE] border-gray-200 rounded-2xl">
        {BAR_ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelectedTab(i)}
            className={cn(
              "h-10 w-[120px] rounded-lg flex items-center justify-center gap-2 duration-75",
              i === selectedTab && "border bg-[#F2F4F7]",
            )}
          >
            <img src={item.icon} alt={item.label} />
            <span className="text-[#3D4B5C] text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
