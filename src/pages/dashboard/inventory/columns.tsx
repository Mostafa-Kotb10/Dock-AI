import { InventoryItem } from "@/constants/constants";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: "drugName",
    header: "Drug Name",
    cell: (props) => <span>{props.getValue() as string}</span>,
  },
  {
    accessorKey: "drugForm",
    header: "Type",
    cell: (props) => <span>{props.getValue() as string}</span>,
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: (props) => <span>{props.getValue() as string}</span>,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: (props) => <span>{props.getValue() as string}</span>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (props) => <span>{props.getValue() as string}</span>,
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: (props) => <span>{props.getValue() as string}</span>,
  },
];
