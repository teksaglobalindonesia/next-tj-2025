export default function Ribbon() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gray-50 py-16 sm:py-20 mt-[112.6px] px-4 sm:px-6 md:px-0">
      <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold text-gray-800 mb-6 leading-snug sm:leading-tight md:leading-tight">
        Pellentesque suscipit <br className="hidden sm:block" /> fringilla libero eu.
      </h2>

      <button className="bg-green-500 hover:bg-green-600 text-white text-[14px] sm:text-[15px] md:text-[16px] px-4 sm:px-6 py-2 rounded-md transition">
        Get a Demo →
      </button>
    </section>
  );
}
