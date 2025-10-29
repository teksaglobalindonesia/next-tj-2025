export default function ClientsSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-white 
                        px-6 sm:px-10 md:px-16 lg:px-[104px] 
                        py-12 sm:py-16 md:py-[40px]">
      {/* Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-inter font-semibold text-neutral-dgrey">
          Our Clients
        </h2>
        <p className="text-gray-500 text-sm sm:text-base md:text-[16px] max-w-md">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Client Logos */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 
                   gap-8 sm:gap-10 md:gap-14 items-center justify-items-center w-full"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <img
            key={i}
            src={`/client${i + 1}.png`}
            alt={`Client ${i + 1}`}
            className="h-10 sm:h-12 md:h-[48px] w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
