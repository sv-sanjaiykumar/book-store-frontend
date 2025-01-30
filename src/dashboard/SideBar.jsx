import { Link } from "react-router-dom"; // Import Link for navigation
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { use, useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const Sidebar = () => {
  const{user} = useContext(AuthContext)
  console.log(user);
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 shadow-lg">
      {/* Profile Section */}
      <div className="flex items-center space-x-3 mb-6 w-16 h-16">
        <img 
          src={user?.photoURL} 
          alt="Profile" 
          className="w-8 h-8 rounded-full"
        />
        <span className="text-lg font-semibold">{user?.displayName || "Demo name"}</span>
      </div>

      {/* Sidebar Items */}
      <ul className="space-y-2">
        <SidebarItem icon={<HiOutlineCloudUpload />} text="Upload Book" path="/admin/dashboard/upload" />
        <SidebarItem icon={<HiInbox />} text="Manage Books" path="/admin/dashboard/manage" />
        <SidebarItem icon={<HiArrowSmRight />} text="Login" path="/login" />
        <SidebarItem icon={<HiTable />} text="Logout" path="/logout" />
      </ul>

      {/* Separator Line */}
      <hr className="my-4 border-gray-700" />
    </div>
  );
};

// Sidebar Item Component (Reusable)
const SidebarItem = ({ icon, text, path }) => {
  return (
    <li>
      <Link to={path} className="flex items-center p-2 rounded-lg hover:bg-gray-700">
        <span className="text-xl mr-3">{icon}</span>
        <span className="text-base">{text}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
