export default function Marketing() {
  return (
    <section className="flex flex-col items-center justify-center py-[48px] px-[104px]">
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-semibold text-neutral-dgrey font-inter mb-2">
          Caring is the new marketing
        </h2>
        <p className="text-[16px] text-neutral-grey w-[600px] mx-auto">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.​
        </p>
      </div>

      <div className="flex flex-row justify-between gap-[24px] mt-[-25px]">
        <div className="relative flex flex-col items-center w-[368px] h-[366px]">
          <img src="/marketing1.png" alt="" className="w-[368px] h-[286px] object-cover rounded-lg"/>
          <div className="absolute -bottom-[2px] bg-neutral-silver shadow-lg w-[317px] h-[176px] rounded-lg text-center p-4">
            <p className="text-[20px] text-neutral-grey font-inter font-semibold w-[288px] h-[86px] mb-7">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a
              href="#"
              className="text-brand-primary font-inter font-semibold w-[99px] h-[28px] text-center text-[20px] gap-2 py-16">
              Readmore →
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-[368px] h-[366px]">
          <img src="/marketing2.png" alt="" className="w-[368px] h-[286px] object-cover rounded-lg"/>
          <div className="absolute -bottom-[2px] bg-neutral-silver shadow-lg w-[317px] h-[176px] rounded-lg text-center p-4">
            <p className="text-[20px] text-neutral-grey font-inter font-semibold w-[285px] h-[84px] mb-7">
              What are your safeguarding responsibilities and how can you manage them?
            </p>
            <a
              href="#"
              className="text-brand-primary font-inter font-semibold w-[99px] h-[28px] text-center text-[20px] gap-2">
              Readmore →
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-[368px] h-[366px]">
          <img src="/marketing3.png" alt="" className="w-[368px] h-[286px] object-cover rounded-lg"/>
          <div className="absolute -bottom-[2px] bg-neutral-silver shadow-lg w-[317px] h-[176px] rounded-lg text-center p-4">
            <p className="text-[20px] text-neutral-grey font-inter font-semibold w-[285px] h-[84px] mb-7">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <a
              href="#"
              className="text-brand-primary font-inter font-semibold w-[99px] h-[28px] text-center text-[20px] gap-2">
              Readmore →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
