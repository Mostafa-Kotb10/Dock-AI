import Header from "@/components/Header";
import Hero from "./Hero";

// import VerticalTimeline from "./VerticalTimeline";
// import StackedFeatureCard from "./StackedFeatureCard";
import StackedFeaturesSection from "./StackedFeaturesSection";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      {/* <VerticalTimeline /> */}
      {/* <StackedFeaturesSection /> */}
      <section>
        <div className="min-h-[100px] overflow-y-auto">
          <div className="h-screen bg-red-300 sticky top-0">
            <h1>Hello</h1>
          </div>
          <div className="h-screen bg-red-300 sticky top-0">
            <h1>Hello</h1>
          </div>
          <div className="h-screen bg-red-300 sticky top-0">
            <h1>Hello</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
