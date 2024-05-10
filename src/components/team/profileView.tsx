import ActivityItem from "./components/activityItem";
import NavigationBar from "./components/navigationBar";

const ProfileView = () => {
  return (
    <div className="relative flex flex-col flex-1">
      <NavigationBar />
      <div className="flex px-8 pt-6 pb-[18px]">
        <p className="font-medium">Activity stream</p>
      </div>
      <div className="flex flex-col px-7 gap-4">
        <ActivityItem />
        <ActivityItem
          title="Feature status updated"
          subtitle="Marked feature"
          time="Today"
          isBookmark={false}
          files={[]}
        />
        <ActivityItem
          title="Uploaded documents to chat"
          subtitle="Added 2 files to User story"
          time="Yesterday"
          files={[
            { name: "Team 1.pdf", size: "12 Kb" },
            { name: "Data.pdf", size: "12 Kb" },
          ]}
        />
      </div>
      <div className="absolute bottom-0 left-0 h-[74px] w-full z-20 bg-white border-t flex flex-row items-center px-4">
        <button className="text-[#592ABE] font-bold">View More</button>
      </div>
    </div>
  );
};

export default ProfileView;
