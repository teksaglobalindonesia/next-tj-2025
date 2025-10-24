export default function Howtodesign() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-[104px] bg-white mt-[48px]">
      <div className="flex justify-center md:w-1/2">
        <img
          src="/design0.png"
          alt="Illustration"
          className="w-[420px] md:w-[430px] h-auto object-contain"
        />
      </div>

      <div className="p-6 rounded-md md:w-1/2 flex flex-col justify-center text-left">
        <h2 className="text-[22px] md:text-[36px] font-semibold text-gray-600 leading-snug mb-3">
          How to design your site footer like we did
        </h2>

        <p className="text-gray-600 text-[14px] max-w-[600px] mb-5 leading-relaxed">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
          molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
          libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
          nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
          in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi
          ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>

        <button className="px-3 py-1.5 w-[120px] h-[42px] bg-green-500 text-white rounded-md mt-2 font-medium text-[16px] hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
