import "./sidebar.css"
import SideBarOptions from "../SideBarOptions/SideBarOptions";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar=()=>{
return (
    <>
      <div className="sidebar">
        <TwitterIcon className="TwitterIcon_SideBar"/>
        <SideBarOptions active Icon={HomeIcon} Text="Home"/>
        <SideBarOptions  Icon={SearchIcon} Text="Explore"/>
        <SideBarOptions  Icon={NotificationsIcon} Text="Notifications"/>
        <SideBarOptions  Icon={EmailIcon} Text="Message"/>
        <SideBarOptions  Icon={BookmarkIcon} Text="BookMarks"/>
        
        <SideBarOptions  Icon={Person2Icon} Text="Profile"/>
        <SideBarOptions  Icon={MoreHorizIcon} Text="More"/>      </div>
    </>
);
}
export default Sidebar;