import { cn } from "@/lib/utils";
import { GrDropbox } from "react-icons/gr";
import storageSrc from "@/assets/images/storage-image.jpg";

interface RowProps {
  direction?: "ltr" | "rtl";
}

const FeatureRow = ({ direction = "ltr" }: RowProps) => {
  const isRTL = direction === "rtl";

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
      {/* Text Section */}
      <div className={cn("order-1 bg-white shadow-lg h-full p-6", isRTL && "order-3")}>
        <h3 className="text-cyan-600 text-2xl font-bold">
          Manage Your Storage with Ease
        </h3>
        <p className="text-gray-600 mt-2">
          Track inventory in real-time, prevent stock shortages, and streamline
          pharmacy storage operations.
        </p>
        <ul className="mt-3 text-sm text-gray-500 list-disc pl-4">
          <li>Monitor product levels with automated tracking</li>
          <li>Receive low-stock alerts before running out</li>
          <li>Organize supplies efficiently with smart categorization</li>
          <li>Reduce expired products with batch expiration alerts</li>
          <li>Sync inventory data across multiple branches</li>
        </ul>
      </div>

      {/* Icon Section (Always Center) */}
      <div className="order-2 bg-gray-100 p-4 rounded-full shadow-md flex justify-center items-center">
        <GrDropbox className="size-10 text-cyan-600" />
      </div>

      {/* Image Section */}
      <div className={cn("order-3", isRTL && "order-1")}>
        <img
          src={storageSrc}
          alt="Storage Management"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default FeatureRow;
