const Split = () => {
  const datas = [
    {
      amount: "1000+",
      title: "Designs",
    },
    {
      amount: "30+",
      title: "Products",
    },
    {
      amount: "58+",
      title: "Website Development",
    },
  ];

  return (
    <section className="bg-primary py-12 mt-28">
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-lg text-secondary text-center font-bold text-2xl">Our Progress Comes with a Collaboration Between Creativity, Ideas, and Technology</h1>
        <div className="grid md:grid-cols-3 gap-5 w-full text-center">
          {datas.map((data) => (
            <div className="mx-auto mt-5 md:mb-0" key={data.title}>
              <h1 className="text-white text-5xl font-bold mb-3">{data.amount}</h1>
              <p className="text-white text-xl">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Split;
