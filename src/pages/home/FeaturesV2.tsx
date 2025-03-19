import SectionHeading from "@/components/SectionHeading";
import FeatureRow from "./FeatureRow";



const FeaturesV2 = () => {
  return (
    <section>
      <div className="section-container">
        <SectionHeading
          title="Why choose us?"
          text="Discover the best pharmacy experience with top-quality service, fast
        prescriptions, and trusted healthcare solutions."
        />

        <div className="flex flex-col space-y-10 mt-20">
          <FeatureRow />
        </div>
      </div>
    </section>
  );
};

export default FeaturesV2;
