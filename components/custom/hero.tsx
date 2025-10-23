export default function Hero() {
  return (
    <div className="flex bg-neutral-silver items-center justify-between px-[104px] py-[106px]">
      <div className="max-w-lg">
        <h1 className="text-[48px] font-bold text-dgray leading-tight mb-4">
          Lessons and insights <span className="text-green-600">from 8 years</span>
        </h1>

        <p className="text-gray-600 mt-4 mb-6">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button className="bg-brand-primary hover:bg-green-700 text-white px-6 py-3 rounded-sm">
          Register
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img src="/Illustration.png" alt="" className="w-[391px] h-[407px]"/>
      </div>
    </div>
  );
}
