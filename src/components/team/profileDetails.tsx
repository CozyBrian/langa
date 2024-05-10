import RoundButton from "../misc/roundButton";
import {
  InfoMenu3Icon,
  MailIcon,
  MessageTextIcon,
  PhoneThinIcon,
  WorldIcon,
} from "../../assets/icons";
import { Cozy } from "../../assets/images";

const ProfileDetails = () => {
  return (
    <div className="flex flex-col w-[350px] border-r">
      <div className="flex flex-row items-center justify-between p-6 border-b">
        <div className="flex flex-row items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-slate-500">
            <img
              src={Cozy}
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-xl font-bold">Brian T. Joestar</p>
            <p className="text-sm font-medium text-[#475467]">
              Software Developer
            </p>
          </div>
        </div>
        <RoundButton icon={MessageTextIcon} />
      </div>
      <div className="flex flex-col gap-2 p-6 border-b">
        <p className="text-sm font-medium text-[#475467]">Details</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <img src={WorldIcon} className="w-4 h-4" alt="icon" />
              <p className="text-xs font-medium">Timezone</p>
            </div>
            <p className="text-sm font-medium">UTC/GMT +0 hours</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <img src={MailIcon} className="w-4 h-4" alt="icon" />
              <p className="text-xs font-medium">Work Email</p>
            </div>
            <a
              href="mailto:brian@briannewton.dev"
              className="text-sm font-medium text-[#592ABE] underline underline-offset-[5px]"
            >
              brian@briannewton.dev
            </a>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <img src={PhoneThinIcon} className="w-4 h-4" alt="icon" />
              <p className="text-xs font-medium">Phone</p>
            </div>
            <p className="text-sm font-medium">+233 4206969369</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6 border-b">
        <p className="text-sm font-medium text-[#475467]">About</p>
        <p className="text-sm font-medium capitalize">
          Brian Joestar is a seasoned software developer with a passion for
          crafting elegant and user-friendly web and mobile experiences. With a
          background in Computer Science and years of industry experience, Brian
          has honed his skills in various languages and disciplines to create
          visually stunning and highly functional applications.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <p className="text-sm font-medium text-[#475467]">About</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-500"></div>
              <p className="text-sm font-medium">Scott Summers</p>
            </div>
            <img src={InfoMenu3Icon} alt="" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-500"></div>
              <p className="text-sm font-medium">Ororo Munroe</p>
            </div>
            <img src={InfoMenu3Icon} alt="" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-500"></div>
              <p className="text-sm font-medium">Ororo Munroe</p>
            </div>
            <img src={InfoMenu3Icon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end px-6 pb-6">
        <button className="w-fit h-[36px] flex flex-row items-center px-2 bg-[#F9FAFB] border border-[#D0D5DD] rounded-md text-sm gap-2">
          View More
          <img src={InfoMenu3Icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
