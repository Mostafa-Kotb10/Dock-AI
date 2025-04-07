import InventoryTable from "@/components/InventoryTable";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { inventoryData } from "@/constants/constants";

const Inventory = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">Inventory</h1>
      <div className="mt-10">
        {/* <InventoryTable /> */}
        <DataTable columns={columns} data={inventoryData} />
      </div>
    </>
  );
};

export default Inventory;
