export default function Ribbon() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-[104px] py-[48px] mt-[80px] md:mt-[112px] bg-neutral-silver text-center">
      <h2 className="text-[28px] sm:text-[40px] md:text-[64px] text-neutral-black font-inter font-semibold leading-tight max-w-[850px] mb-10 md:mb-14">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <button className="bg-brand-primary hover:bg-green-700 w-[160px] md:w-[178px] h-[48px] md:h-[52px] font-inter font-medium text-neutral-white text-[14px] md:text-[16px] px-6 py-3 rounded-sm">
        Get a Demo →
      </button>
    </section>
  );
}
