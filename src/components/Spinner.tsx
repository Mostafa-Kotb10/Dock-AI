import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default Spinner;
