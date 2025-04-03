import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div className="relative bg-slate-50">
      <div className="fixed left-0 top-0 h-screen w-64 z-10 pointer-events-none">
        <Sidebar />
      </div>
      <main className="mx-auto max-w-7xl px-20 md:px-18 pt-3 min-h-screen 
      ">
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
