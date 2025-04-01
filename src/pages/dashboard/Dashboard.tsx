import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

const ExampleContent = () => {
  return (
    <div className="h-[200dvh] flex-1 bg-gray-100 p-4  ">
      <span>text</span>
    </div>
  );
};

export default Dashboard;
