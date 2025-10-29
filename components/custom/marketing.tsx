export default function NewMarketing() {
  return (
    <section className="flex flex-col justify-center items-center px-6 md:px-[104px] py-[60px] bg-white">

      <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-[680px]">
        <h2 className="text-[28px] md:text-[36px] font-inter font-semibold text-neutral-dgrey">
          Caring is the new marketing
        </h2>
        <p className="text-neutral-grey text-[15px] md:text-[16px] font-inter leading-relaxed">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more.
          See who&apos;s joining the community, read about how our community are increasing their membership
          income and lots more.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col w-[320px] md:w-[368px] relative transition-all duration-300 hover:-translate-y-2">
          <img
            src="/marketing1-card.png"
            alt="Marketing 1"
            className="rounded-xl shadow-md"
          />
          <div className="absolute bottom-[-88px] left-1/2 -translate-x-1/2 w-[90%] bg-neutral-silver shadow-xl rounded-lg p-5 flex flex-col items-center gap-4">
            <p className="font-inter text-[18px] text-center text-neutral-grey leading-snug">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a
              href="#"
              className="text-brand-primary font-inter font-semibold text-[18px] transition-all duration-300 hover:text-shade-2 hover:scale-105"
            >
              Read more →
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[320px] md:w-[368px] relative transition-all duration-300 hover:-translate-y-2">
          <img
            src="/marketing2-card.png"
            alt="Marketing 2"
            className="rounded-xl shadow-md"
          />
          <div className="absolute bottom-[-88px] left-1/2 -translate-x-1/2 w-[90%] bg-neutral-silver shadow-xl rounded-lg p-5 flex flex-col items-center gap-4">
            <p className="font-inter text-[18px] text-center text-neutral-grey leading-snug">
              What are your safeguarding responsibilities and how can you manage them?
            </p>
            <a
              href="#"
              className="text-brand-primary font-inter font-semibold text-[18px] transition-all duration-300 hover:text-shade-2 hover:scale-105"
            >
              Read more →
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[320px] md:w-[368px] relative transition-all duration-300 hover:-translate-y-2">
          <img
            src="/marketing3-card.png"
            alt="Marketing 3"
            className="rounded-xl shadow-md"
          />
          <div className="absolute bottom-[-88px] left-1/2 -translate-x-1/2 w-[90%] bg-neutral-silver shadow-xl rounded-lg p-5 flex flex-col items-center gap-4">
            <p className="font-inter text-[18px] text-center text-neutral-grey leading-snug">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <a
              href="#"
              className="text-brand-primary font-inter font-semibold text-[18px] transition-all duration-300 hover:text-shade-2 hover:scale-105"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
