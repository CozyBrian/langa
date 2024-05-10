import Header from "../Layout/header";
import ProfileDetails from "./profileDetails";
import ProfileView from "./profileView";

const TeamOverview = () => {
  return (
    <main className="flex flex-col w-full h-full bg-white border border-[#EAECF0] shadow-main overflow-clip rounded-3xl text-[#101828]">
      <Header />
      <div className="flex flex-row w-full h-full">
        <ProfileDetails />
        <ProfileView />
      </div>
    </main>
  );
};

export default TeamOverview;
