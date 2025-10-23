export default function NewMarketing() {
  return (
    <section className="flex flex-col justify-between items-center px-[104px] py-[40px]">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="text-[36px] font-inter font-semibold text-neutral-dgrey">Caring is the new marketing</h2>
        <p className="text-neutral-grey text-center items-center text-[16px] font-inter w-[628px] h-[72px]">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
      </div>

      {/*card*/}
      <div className="flex justify-center gap-6 flex-row">
        <div className="flex flex-col w-[368px] h-[366px]">
            <img src="/marketing1-card.png" alt="" />
            <div className="w-[317px] items-center justify-center h-[176px] bg-neutral-silver shadow-xl rounded-lg p-[16px] gap-[16px] mx-[18px] mt-[-80px]">
                 <p className="font-inter text-[20px] text-center w-[285px] h-[84px] text-neutral-grey">Creating Streamlined Safeguarding Processes with OneRen</p>
                 <div className="w-[285px] h-[44px] py-[16px]">
                    <a href="" className="text-brand-primary font font-inter font-semibold text-[20px] text-center items-center px-[77px]">Readmore →</a>
                 </div>
            </div>
        </div>
         <div className="flex flex-col w-[368px] h-[366px]">
            <img src="/marketing2-card.png" alt="" />
            <div className="w-[317px] items-center justify-center h-[176px] bg-neutral-silver shadow-xl rounded-lg p-[16px] gap-[16px] mx-[18px] mt-[-80px]">
                 <p className="font-inter text-[20px] text-center w-[285px] h-[84px] text-neutral-grey">What are your safeguarding responsibilities and how can you manage them?</p>
                 <div className="w-[285px] h-[44px] py-[16px]">
                    <a href="" className="text-brand-primary font font-inter font-semibold text-[20px] text-center items-center px-[77px]">Readmore →</a>
                 </div>
            </div>
        </div>
         <div className="flex flex-col w-[368px] h-[366px]">
            <img src="/marketing3-card.png" alt="" />
            <div className="w-[317px] items-center justify-center h-[176px] bg-neutral-silver shadow-xl rounded-lg p-[16px] gap-[16px] mx-[18px] mt-[-80px]">
                 <p className="font-inter text-[20px] text-center w-[280px] h-[84px] text-neutral-grey">Revamping the Membership Model with Triathlon Australia</p>
                 <div className="w-[285px] h-[44px] py-[16px]">
                    <a href="" className="text-brand-primary font font-inter font-semibold text-[20px] text-center items-center px-[77px]">Readmore →</a>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
