export default function Design() {
  return (
    <section className="flex flex-row items-center justify-between py-[48px] px-[104px]">
        <img src="/design.png" alt="" className="w-[442px] h-[433px]"/>
        <div className="flex flex-col gap-[16px] w-[661px] h-[308px]">
            <h2 className="text-[36px] font-inter font-semibold text-neutral-dgrey leading-tight w-[601px] h-[88px]">How to design your site footer like we did</h2>
            <p className="font-inter text-neutral-grey text-[14px] w-[610px] h-[120px] mt-2">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>

        <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-sm hover:bg-green-700 transition mt-6 gap-[10px]">
          Learn More
        </button>
        </div>
    </section>
  );
}
