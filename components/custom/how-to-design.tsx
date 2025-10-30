export default function Design() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-[104px] gap-8">
      <img src="/design.png" alt="" className="w-full sm:w-[350px] md:w-[442px] h-auto md:h-[433px]"/>
      <div className="flex flex-col gap-4 md:gap-[16px] w-full md:w-[661px]">
        <h2 className="text-2xl md:text-[36px] font-inter font-semibold text-neutral-dgrey leading-snug md:leading-tight w-full md:w-[601px] h-auto">
          How to design your site footer like we did
        </h2>
        <p className="font-inter text-neutral-grey text-[14px] w-full md:w-[610px] h-auto mt-2">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-sm hover:bg-green-700 transition mt-6 gap-[10px]">
          Learn More
        </button>
      </div>

    </section>
  );
}
