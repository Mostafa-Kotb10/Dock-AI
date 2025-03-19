import LeafSvg from "@/components/LeafSvg";
import MedBottle from "@/components/MedBottle";
import MedicineSvg from "@/components/MedicineSvg";
import PharmacySvg from "@/components/PharmacySvg";

export const BackgroundShapes = () => {
  return (
    <>
      <PharmacySvg
        width={100}
        height={100}
        className="text-emerald-700 absolute top-0 right-30 -z-0"
      />
      <MedicineSvg
        width={250}
        height={250}
        className="text-emerald-700 blur-[2px] absolute left-5"
      />
      <MedBottle
        width={300}
        height={300}
        className="text-emerald-700 absolute right-0 blur top-0 "
      />
      <LeafSvg
        width={125}
        height={125}
        className="text-emerald-700 absolute left-0 -bottom-0 -rotate-[30deg] blur-xs"
      />
    </>
  );
};
