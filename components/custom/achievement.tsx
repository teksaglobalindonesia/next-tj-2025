export default function Achievement() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-[104px] py-[80px] bg-neutral-silver">
      
      {/* Kiri: Judul & deskripsi */}
      <div className="flex flex-col gap-3 text-center md:text-left max-w-[540px]">
        <h2 className="font-inter font-semibold text-[28px] md:text-[36px] text-neutral-dgrey leading-tight">
          Helping a local <br />
          <span className="text-brand-primary">business reinvent itself</span>
        </h2>
        <p className="font-inter text-[15px] md:text-[16px] text-gray-900 mt-4">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* Kanan: Statistik */}
      <div className="grid grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 max-w-[540px]">
        {/* Card 1 */}
        <div className="flex items-center gap-4">
          <img
            src="/member-achievement.png"
            className="w-[48px] h-[48px]"
            alt="Members"
          />
          <div>
            <h4 className="font-bold font-inter text-[22px] md:text-[28px] text-neutral-dgrey">
              2,245,341
            </h4>
            <p className="font-inter text-neutral-grey text-[15px] md:text-[16px]">
              Members
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4">
          <img
            src="/clubs-achievement.png"
            className="w-[48px] h-[48px]"
            alt="Clubs"
          />
          <div>
            <h4 className="font-bold font-inter text-[22px] md:text-[28px] text-neutral-dgrey">
              46,328
            </h4>
            <p className="font-inter text-neutral-grey text-[15px] md:text-[16px]">
              Clubs
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4">
          <img
            src="/event-achievement.png"
            className="w-[48px] h-[48px]"
            alt="Event Bookings"
          />
          <div>
            <h4 className="font-bold font-inter text-[22px] md:text-[28px] text-neutral-dgrey">
              828,867
            </h4>
            <p className="font-inter text-neutral-grey text-[15px] md:text-[16px]">
              Event Bookings
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-4">
          <img
            src="/payment-achievement.png"
            className="w-[48px] h-[48px]"
            alt="Payments"
          />
          <div>
            <h4 className="font-bold font-inter text-[22px] md:text-[28px] text-neutral-dgrey">
              1,926,436
            </h4>
            <p className="font-inter text-neutral-grey text-[15px] md:text-[16px]">
              Payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
