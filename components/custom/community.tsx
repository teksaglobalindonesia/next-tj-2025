export default function Community() {
  return (
    <section className="flex flex-col justify-center items-center px-[104px] py-[40px] bg-white">
      <div className="flex flex-col items-center text-center mb-10 w-[542px] h-[88px]">
        <h2 className="font-inter text-[36px] font-semibold text-neutral-dgrey leading-tight">
          Manage your entire community in a single system
        </h2>
        <p className="font-inter text-[16px] text-neutral-grey">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex flex-row gap-[127px]">
        {/* card 1 */}
        <div className="flex flex-col items-center bg-white w-[299px] h-[270px] rounded-2xl shadow-md px-6 pt-4 pb-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="member-icon.png" alt="" className="w-[64px] h-[56px] mb-4 mt-2" />
          <h3 className="text-[28px] font-inter font-semibold text-center mb-3 text-neutral-dgrey leading-snug">
            Membership Organization
          </h3>
          <p className="text-neutral-dgrey font-inter text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center bg-white w-[299px] h-[270px] rounded-2xl shadow-md px-6 pt-4 pb-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="association-icon.png" alt="" className="w-[64px] h-[56px] mb-4 mt-2" />
          <h3 className="text-[28px] font-inter font-semibold text-center mb-3 text-neutral-dgrey leading-snug">
            National Association
          </h3>
          <p className="text-neutral-dgrey font-inter w-[240px] text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col items-center bg-white w-[299px] h-[270px] rounded-2xl shadow-md px-6 pt-4 pb-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="group-icon.png" alt="" className="w-[64px] h-[56px] mb-4 mt-2" />
          <h3 className="text-[28px] font-inter font-semibold text-center mb-3 text-neutral-dgrey leading-snug w-[231px]">
            Clubs And<br />Groups
          </h3>
          <p className="text-neutral-dgrey font-inter text-[14px] text-center leading-snug">
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
