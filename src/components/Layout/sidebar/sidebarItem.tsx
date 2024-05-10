import { cn } from "../../../utils";

const SidebarItem = ({
  item,
  isSelected = false,
  setSelected,
}: {
  item: {
    icon: string;
    label: string;
  };
  isSelected?: boolean;
  setSelected: () => void;
}) => {
  return (
    <button
      className={cn(
        "w-full h-10 px-4 flex flex-row gap-2 items-center rounded-lg border-[0.5px] border-transparent",
        isSelected && "bg-[#F9F5FF] border-[#D4C9E2]",
      )}
      onClick={setSelected}
    >
      <img src={item.icon} alt={item.label + "icon"} className="w-6 h-6" />
      <p className="text-sm font-medium">{item.label}</p>
    </button>
  );
};

export default SidebarItem;
