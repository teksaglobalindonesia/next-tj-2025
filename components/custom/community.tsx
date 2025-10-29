export default function Community() {
  return (
    <section
      className="flex flex-col justify-center items-center 
                 px-6 sm:px-10 md:px-16 lg:px-[104px] 
                 py-12 sm:py-16 md:py-[40px] 
                 bg-white text-center"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-10 max-w-xl">
        <h2 className="font-inter text-2xl sm:text-3xl md:text-[36px] font-semibold text-neutral-dgrey leading-snug sm:leading-tight">
          Manage your entire community in a single system
        </h2>
        <p className="font-inter text-sm sm:text-base md:text-[16px] text-neutral-grey mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      {/* Card Container */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-8 sm:gap-10 lg:gap-[80px] xl:gap-[127px] 
                   w-full max-w-6xl"
      >
        {/* card 1 */}
        <div className="flex flex-col items-center bg-white 
                        w-full max-w-[299px] mx-auto 
                        rounded-2xl shadow-md px-6 pt-6 pb-6 
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-xl">
          <img src="member-icon.png" alt="" className="w-12 sm:w-[64px] h-auto mb-4 mt-2" />
          <h3 className="text-xl sm:text-2xl font-inter font-semibold text-neutral-dgrey mb-3 leading-snug">
            Membership Organization
          </h3>
          <p className="text-neutral-dgrey font-inter text-sm sm:text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center bg-white 
                        w-full max-w-[299px] mx-auto 
                        rounded-2xl shadow-md px-6 pt-6 pb-6 
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-xl">
          <img src="association-icon.png" alt="" className="w-12 sm:w-[64px] h-auto mb-4 mt-2" />
          <h3 className="text-xl sm:text-2xl font-inter font-semibold text-neutral-dgrey mb-3 leading-snug">
            National Association
          </h3>
          <p className="text-neutral-dgrey font-inter text-sm sm:text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col items-center bg-white 
                        w-full max-w-[299px] mx-auto 
                        rounded-2xl shadow-md px-6 pt-6 pb-6 
                        transition-all duration-300 
                        hover:-translate-y-2 hover:shadow-xl">
          <img src="group-icon.png" alt="" className="w-12 sm:w-[64px] h-auto mb-4 mt-2" />
          <h3 className="text-xl sm:text-2xl font-inter font-semibold text-neutral-dgrey mb-3 leading-snug">
            Clubs and Groups
          </h3>
          <p className="text-neutral-dgrey font-inter text-sm sm:text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
