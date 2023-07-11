import ilios from "../img/ilios.jpg";
import home from "../img/home.jpg";
import hippo from "../img/hippo.jpg";
import CustomButton from "./CustomButton";

const Portfolio = () => {
  const items = [
    {
      img: ilios,
      category: "Mobile apps",
      title: "ILIOS app (B2B E-commerce)",
      description: "Has a unique selling point where not all companies offer applications for sales, data collection and management.",
    },
    {
      img: home,
      category: "Website development",
      title: "Home and Living",
      description: "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.",
    },
    {
      img: hippo,
      category: "Website development",
      title: "HIPPO",
      description: "Albatech help to create E-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
    },
  ];

  return (
    <section className="container">
      <div className="mt-28 flex flex-col items-center">
        <div className="text-center">
          <p className="text-tertiary mb-3">Portfolio</p>
          <h1 className="font-bold text-3xl mb-8 lg:text-4xl text_shadow max-w-xl">The software that we build takes our clients to the next level</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-16 w-full mb-8">
          {items.map((item) => (
            <div className="mx-auto border-2 border-tertiary hover:border-secondary rounded-2xl mt-5 md:mb-0" key={item.title}>
              <img src={item.img} alt={item.title} className="w-full" />
              <div className="p-5">
                <p className="text-tertiary text-sm mb-2">{item.category}</p>
                <h1 className="text-xl font-bold mb-2 text-secondary">{item.title}</h1>
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <CustomButton title="Learn more" style="bg-secondary py-4 px-14" parentStyle="mt-8" />
      </div>
    </section>
  );
};

export default Portfolio;
