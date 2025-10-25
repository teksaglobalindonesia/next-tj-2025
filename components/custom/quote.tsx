export default function Quote() {
  return (
    <section className="flex flex-row bg-neutral-silver w-[1,440px] h-[390px] px-[104px] items-center justify-between gap-[104px]">
      <div className="flex justify-center md:w-1/3">
        <img
          src="/quote0.png"
          className="w-[326px] h-[326px] object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between md:w-2/3">
        <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
          risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
          in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultricies, quis
          tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
          potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
          odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
          ac sit amet magna.
        </p>

        <div className="mb-6">
          <h3 className="text-green-600 font-semibold text-[16px]">Tim Smith</h3>
          <p className="text-gray-500 text-[14px]">
            British Dragon Boat Racing Association
          </p>
        </div>

       <div className="flex flex-wrap items-center justify-between">
  <div className="flex items-center gap-8">
    <img
      src="/quote1.png"
      alt="client"
      className="w-12 h-12 rounded-lg opacity-100 rotate-0 object-contain"
    />
    <img
      src="/quote2.png"
      alt="client"
      className="w-12 h-12 rounded-lg opacity-100 rotate-0 object-contain"
    />
    <img
      src="/quote4.png"
      alt="client"
      className="w-12 h-12 rounded-lg opacity-100 rotate-0 object-contain"
    />
    <img
      src="/quote5.png"
      alt="client"
      className="w-12 h-12 rounded-lg opacity-100 rotate-0 object-contain"
    />
    <img
      src="/quote6.png"
      alt="client"
      className="w-12 h-12 rounded-lg opacity-100 rotate-0 object-contain"
    />
    <img
      src="/quote7.png"
      alt="client"
      className="w-12 h-12 rounded-lg opacity-100 rotate-0 object-contain"
    />
  </div>

          <button className="text-green-600 font-medium text-[20px] flex items-center gap-8 hover:underline">
            Meet all customers →
          </button>
        </div>
      </div>
    </section>
  );
}
