export default function Tutorial() {
    return (
       <section className="flex flex-row justify-between items-center px-[104px] py-[40px]">
           <img src="pana.png" alt="" className="w-[442px] h-[433px]"/>
           <div className="flex flex-col w-[600px] h-[308px] gap-[16px]">
               <div className="flex flex-col gap-[16px] w-[661px] h-[268px]">
               <h2 className="font-inter text-[36px] font-semibold text-neutral-dgrey leading-tight w-[602px] h-[88px]">How to design your site footer like we did</h2>
               <p className="font-inter text-neutral-grey text-[14px] w-[602px] h-[120px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>

           </div>
           <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-md gap-[10px]">
          Learn More
        </button>
           </div>
       </section>
    );
}