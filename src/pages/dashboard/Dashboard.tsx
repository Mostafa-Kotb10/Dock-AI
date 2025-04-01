import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <main className="p-4 ml-4 ">
        <Outlet />
      </main>
    </div>
  );
};

const ExampleContent = () => {
  return (
    <div className="h-[200dvh] w-full bg-white p-4">
      <span>text</span>
    </div>
  );
};

export default Dashboard;
