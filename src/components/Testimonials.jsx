import pp from "../icons/pp.svg";

const Testimonials = () => {
  const items = [
    {
      label: "Amazing people",
      comment: '"They are people who are not only following the task, but can work as team. Together."',
      creator: "Matthijs Piëst",
      title: "COO at WieBetaaltWat",
      pp: pp,
    },
    {
      label: "Partnership approach",
      comment: '"We felt like we had a true partner throughout the process. they were cleary interested on our long-term success."',
      creator: "Matthijs Piëst",
      title: "COO at WieBetaaltWat",
      pp: pp,
    },
  ];

  return (
    <div className="bg_testi">
      <section className="container">
        <div className="mt-28 flex flex-col items-center">
          <div className="text-center">
            <p className="text-tertiary mb-3">Testimonials</p>
            <h1 className="font-bold text-3xl mb-8 lg:text-4xl text_shadow max-w-xl">What client love in working with Albatech Team</h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 w-full mb-8 mt-5">
            <div className="ml-4">
              <h1 className="font-bold text-5xl text_shadow mb-3">{items[0].label}</h1>
              <p className="text-xl max-w-md">{items[0].comment}</p>
              <div className="flex my-3">
                <img src={items[0].pp} alt="pp" />
                <div className="flex flex-col mx-4 justify-center">
                  <p className="text-sm mb-1">{items[0].creator}</p>
                  <p className="text-sm text-tertiary">{items[0].title}</p>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="font-bold text-xl mb-3">{items[0].label}</h1>
              <p className="text-md max-w-md mb-4">{items[0].comment}</p>
              <p className="text-sm mb-1">{items[0].creator}</p>
              <p className="text-sm text-tertiary">{items[0].title}</p>
            </div>
            <div className="ml-4">
              <h1 className="font-bold text-xl mb-3 mt-10">{items[0].label}</h1>
              <p className="text-md max-w-md mb-4">{items[0].comment}</p>
              <p className="text-sm mb-1">{items[0].creator}</p>
              <p className="text-sm text-tertiary">{items[0].title}</p>
            </div>
            <div className="ml-4">
              <h1 className="font-bold text-5xl text_shadow mb-3">{items[1].label}</h1>
              <p className="text-xl">{items[1].comment}</p>
              <div className="flex my-3">
                <img src={items[1].pp} alt="pp" />
                <div className="flex flex-col mx-4 justify-center">
                  <p className="text-sm mb-1">{items[1].creator}</p>
                  <p className="text-sm text-tertiary">{items[1].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
