export default function Ribbon() {
  return (
    <section className="flex flex-col items-center justify-center bg-neutral-silver px-6 md:px-[104px] py-[60px] text-center">
      <div className="flex flex-col items-center gap-6 max-w-[900px]">
        <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-inter font-semibold text-neutral-black leading-tight">
          Pellentesque suscipit fringilla libero eu.
        </h2>

        <button className="bg-brand-primary text-white font-inter text-[16px] md:text-[18px] rounded-lg px-[32px] py-[14px] mt-4 shadow-md transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Get a Demo →
        </button>
      </div>
    </section>
  );
}
