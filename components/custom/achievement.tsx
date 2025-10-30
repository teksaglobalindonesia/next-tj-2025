export default function Achievement() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-neutral-silver py-12 px-4 md:px-[104px] gap-8 md:gap-0">
      <div className="flex flex-col w-full md:w-[540px] gap-2 px-2 md:px-[24px] text-center">
        <h2 className="text-2xl md:text-[36px] font-semibold font-inter text-neutral-dgrey leading-snug md:leading-tight">
          Helping a local <br /> 
          <span className="text-green-600">business reinvent itself</span>
        </h2>
        <p className="w-full md:w-[400px] text-[16px] mt-4 md:mt-11 font-inter text-gray-900">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:gap-[60px] w-full md:w-auto justify-items-center px-2 md:px-[24px]">
        <div className="flex flex-row items-center gap-[12px] justify-center">
          <img src="/member-archievement.png" alt="" className="w-[40px] h-[40px]" />
          <div>
            <h3 className="text-[28px] font-inter font-bold text-neutral-dgrey">2,245,341</h3>
            <p className="text-[16px] font-inter text-neutral-grey">Members</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[12px] justify-center">
          <img src="/clubs-archievement.png" alt="" className="w-[40px] h-[40px]" />
          <div>
            <h3 className="text-[28px] font-inter font-bold text-neutral-dgrey">46,328</h3>
            <p className="text-[16px] font-inter text-neutral-grey">Clubs</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[12px] justify-center">
          <img src="/event-archievement.png" alt="" className="w-[40px] h-[40px]" />
          <div>
            <h3 className="text-[28px] font-inter font-bold text-neutral-dgrey">828,867</h3>
            <p className="text-[16px] font-inter text-neutral-grey">Event Bookings</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[12px] justify-center">
          <img src="/payment-archievement.png" alt="Payments" className="w-[40px] h-[40px]" />
          <div>
            <h3 className="text-[28px] font-inter font-bold text-neutral-dgrey">1,926,436</h3>
            <p className="text-[16px] font-inter text-neutral-grey">Payments</p>
          </div>
        </div>

      </div>
    </section>
  );
}
