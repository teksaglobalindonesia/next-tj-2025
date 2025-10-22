export default function Hero() {
  return (
    <div className="flex flex-row bg-neutral-silver h-[599px] px-[104px] items-center justify-between gap-[104px]">
      <div className="flex flex-col gap-4 max-w-[500px] text-center md:text-left">
        <div className="flex flex-col -translate-y-8">
        <h1 className="text-[48px] font-bold text-gray-800 leading-tight">
         Lessons and insights
        </h1>
        <h1 className="text-[48px] font-bold text-brand-primary leading-tight">
         from 8 years
        </h1>
        <p className="text-[16px] text-gray-600">
          Where to grow your business as a photographer:site or social media?
        </p>
       <button className="mt-4 bg-brand-primary text-white text-[14px] px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200 w-fit mx-auto md:mx-0">
        Register
        </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src="/Illustration.png"
          alt="Hero"
          className="w-[391px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
