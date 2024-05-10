import {
  AcrobatIcon,
  BookmarkIcon,
  FeaturedVideoIcon,
} from "../../../assets/icons";

const ActivityItem = ({
  title = "task report - uploaded weekly reports",
  subtitle = "Added 2 files to User story",
  files = [
    { name: "John.pdf", size: "12 Kb" },
    { name: "Task1.pdf", size: "12 Kb" },
  ],
  time = "Now",
  isBookmark = true,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-1 items-center">
        <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border-2 border-[#D0D5DD] bg-[#EAECF0]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D0D5DD]"></div>
        </div>
        <div className="w-[2px] h-full bg-[#D0D5DD] rounded-full"></div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-sm">{title}</p>
        <div className="flex flex-row items-center gap-1">
          <p className="capitalize text-sm text-[#475467]">{subtitle}</p>
          {isBookmark ? (
            <>
              <img src={BookmarkIcon} alt="bookmark" />
              <p className="text-sm text-[#1C77FF]"> DF 1246</p>
            </>
          ) : (
            <>
              <img src={FeaturedVideoIcon} alt="bookmark" />
              <p className="text-sm text-[#8E00B2]"> F-121</p>
              <div className="h-7 flex items-center justify-center border border-[#6CE9A6] bg-[#D1FADF] rounded-lg">
                <p className="text-[#039855] text-sm font-medium px-2">
                  Completed
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row gap-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="w-[230px] h-[74px] flex flex-row gap-2 px-4 items-center rounded-xl border hover:bg-gray-50 cursor-pointer duration-75"
            >
              <img src={AcrobatIcon} alt="" />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-black">{file.size}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 mb-4 text-sm text-[#475467] font-medium">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
