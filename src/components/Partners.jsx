import hippo from "../img/hippoLogo.svg";
import home from "../img/homeLogo.svg";
import ilios from "../img/iliosLogo.svg";
import dio from "../img/dioLogo.svg";
import melan from "../img/melanLogo.svg";

const Partners = () => {
  const partners = [
    {
      icon: hippo,
      title: "hippo",
    },
    {
      icon: home,
      title: "home",
    },
    {
      icon: ilios,
      title: "ilios",
    },
    {
      icon: dio,
      title: "dio",
    },
    {
      icon: melan,
      title: "melan",
    },
  ];

  return (
    <section className="container mt-28">
      <div className="flex flex-col items-center justify-center lg:mx-8">
        <div className="grid grid-cols-5 gap-0 md:gap-5 w-full justify-center">
          {partners.map((partner) => (
            <div className="mx-auto lg:p-5 mb-5 md:mb-0" key={partner.title}>
              <img src={partner.icon} alt={partner.title} />
            </div>
          ))}
        </div>
        <div className="flex">
          <span className="w-4 h-4 bg-secondary rounded-full mx-2"></span>
          <span className="w-4 h-4 bg-tertiary rounded-full mx-2"></span>
          <span className="w-4 h-4 bg-tertiary rounded-full mx-2"></span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
