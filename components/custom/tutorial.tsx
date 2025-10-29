export default function Tutorial() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-[104px] py-[60px] bg-white">
      

      <img
        src="/pana.png"
        alt="Tutorial Illustration"
        className="w-[320px] md:w-[442px] h-auto object-contain"
      />

      <div className="flex flex-col gap-6 max-w-[600px]">
        <h2 className="font-inter text-[28px] md:text-[36px] font-semibold text-neutral-dgrey leading-tight">
          How to design your site footer like we did
        </h2>
        <p className="font-inter text-[15px] md:text-[14px] text-neutral-grey leading-relaxed">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
          tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
          Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
          Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue
          vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
          commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
          hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>

        <button className="w-[160px] py-[14px] px-[32px] bg-brand-primary text-white rounded-md mt-4 transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
}
