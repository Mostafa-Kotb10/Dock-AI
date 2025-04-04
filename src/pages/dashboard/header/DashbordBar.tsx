
import CommandMenu from "./CommandMenu";

const DashbordBar = () => {
  return (
    <div className="bg-slate-100/60">
      <div className="mx-auto max-w-7xl border-b border-slate-300 px-20 py-3 md:px-18">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2.5">
            <CommandMenu />
            {/* <Button className="group relative flex w-fit cursor-pointer items-center gap-1 rounded-sm bg-emerald-600 shadow-xl hover:bg-emerald-700">
              Sign Out
            </Button> */}

          </div>
          <div className="flex items-center gap-1">
            <div className="size-10 cursor-pointer rounded-full bg-orange-600" />
            {/* <h4 className="text-base font-semibold">John due</h4> */}
            {/* <span>Owner</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordBar;
