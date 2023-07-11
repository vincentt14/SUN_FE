import CustomButton from "./CustomButton";

const Consult = () => {
  return (
    <section className="container mt-16">
      <div className="bg-secondary border-2 border-primary rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center">
        <p className="text-center mb-3">Is software important for your business?</p>
        <p className="text-center text-4xl mb-3">Build it with Albatech</p>
        <CustomButton title="Consult Now" style="border-2 border-primary py-5 px-16 font-bold" parentStyle="mt-8" />
      </div>
    </section>
  );
};

export default Consult;
