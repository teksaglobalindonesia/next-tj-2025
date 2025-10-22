export default function Hero() {
  return (
    <section className="flex justify-between items-center px-[104px] py-[106px] bg-gray-50">
      <div className="max-w-lg">
        <h1 className="text-[48px] font-bold text-neutral-dgrey font-inter leading-tight">
          Lessons and insights <span className="text-green-600 font-inter font-semibold">from 8 years</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md">
          Register
        </button>
      </div>

      <div>
        <img src="/Illustration.png" alt="illustration" className="w-[391px] h-[407px]" />
      </div>
    </section>
  );
}
