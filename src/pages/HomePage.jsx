import Hero from "../components/Hero";
import Package from "../components/Package";
import Portfolio from "../components/Portfolio";
import Split from "../components/Split";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div className="mt-[105px]">
      <Hero />
      <Package />
      <Split />
      <Portfolio />
      <Testimonials />
    </div>
  );
};

export default HomePage;
