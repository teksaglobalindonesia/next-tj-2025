export default function Footer() {
    return(
       <section className="flex flex-row justify-between bg-neutral-black px-[165px] py-[64px]">
         <div className="flex flex-col w-[350px] h-[190px] gap-[40px]">
            <img src="/Nextcent.png" alt="" className="w-[191px] h-[30px] gap-[10px]"/>
            <div className="w-[350px] h-[48px] gap-[9px] py-[10px]">
                <p className="font-inter text-[14px] w-[350px] text-neutral-silver leading-loose">Copyright © 2020 Nexcent ltd. <br /> All right reserved</p>
            </div>
            <div className="w-[128px] h-[32px] gap-[16px] flex flex-row py-[24px]">
                <img src="insta-icon.png" className="w-[32px] h-[32px]" alt="" />
                <img src="twitter-icon.png" className="w-[32px] h-[32px]" alt="" />
                <img src="yt-icon.png" className="w-[32px] h-[32px]" alt="" />
            </div>
         </div>
         <div className="flex flex-row w-[635px] h-[200px] gap-[30px] px-[24px]">
               <div className="flex flex-col w-[160px] h-[200px] gap-[24px]">    
                      <h2 className="w-[160px] h-[28px] text-neutral-white text-[20px] font-inter font-semibold">Company</h2>
                      <div className="flex flex-col w-[160px] h-[148px] gap-[12px]">
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">About us</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Blog</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Contact us</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Pricing</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Testimonials</a>
                      </div>
               </div>
                <div className="flex flex-col w-[160px] h-[200px] gap-[24px]">    
                      <h2 className="w-[160px] h-[28px] text-neutral-white text-[20px] font-inter font-semibold">Support</h2>
                      <div className="flex flex-col w-[160px] h-[148px] gap-[12px]">
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Help center</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Terms of service</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Legal</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Privacy policy</a>
                          <a href="" className="w-[160px] h-[20px] font-inter text-neutral-silver text-[14px]">Status</a>
                      </div>
               </div>
         </div>
       </section>
    );
}