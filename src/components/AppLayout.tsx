import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="no-scrollbar">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
