import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section>
      <div className="block lg:hidden">
        <div className="bg_hero text-center">
          <div className="container flex flex-col items-center justify-center py-20">
            <h1 className="font-bold text-5xl mb-4">Build or scale up</h1>
            <h2 className="text-[46px] leading-10 mb-4">your development team</h2>
            <div className="flex flex-col items-center mb-8">
              <hr className="w-20 h-1.5 bg-secondary my-1 border-none" />
              <p className="text-[22px]">in weeks, not months</p>
            </div>
            <CustomButton link="/" title="Book now" style="bg-secondary font-semibold py-5 px-11" parentStyle="my-3" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="container flex items-center">
          <div className="content absolute">
            <h1 className="font-bold text-6xl mb-6 text_shadow">Build or scale up</h1>
            <h2 className="text-6xl mb-4 text_shadow">your development team</h2>
            <div className="flex items-center mb-6">
              <hr className="w-20 mx-5  h-1.5 bg-secondary my-6 border-none" />
              <p className="text-2xl text_shadow">in weeks, not months</p>
            </div>
            <CustomButton link="/" title="Book now" style="bg-secondary font-semibold py-5 px-11" parentStyle="my-3" />
          </div>
          <div className="w-full">
            <img src="./asset/Group 81.png" alt="hero" className="ml-auto w-[820px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
