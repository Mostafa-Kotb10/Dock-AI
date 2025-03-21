import StackedFeatureCard from "./StackedFeatureCard";

const StackedFeaturesSection = () => {
    return (
      <section className=" bg-gray-50"> {/* Adjust height as needed */}
        <div className="sticky top-0">
          <StackedFeatureCard />
          <StackedFeatureCard />
          <StackedFeatureCard />
        </div>
      </section>
    );
  };
  

export default StackedFeaturesSection;
