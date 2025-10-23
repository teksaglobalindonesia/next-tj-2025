export default function Achievement() {
  return (
    <section className="flex flex-row items-center justify-between bg-neutral-silver py-[80px] px-[104px]">
      <div className="flex flex-col w-[540px] h-[120px] gap-[8px] px-[24px]">
        <h2 className="text-[36px] font-semibold font-inter text-neutral-dgrey w-[600px] h-[44px] leading-tight">
          Helping a local <br /> <span className="text-green-600">business reinvent itself</span>
        </h2>
        <p className="w-[400px] h-[24px] text-neutral-grey text-[16px] mt-11 font-inter text-gray-900">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="flex flex-col gap-[40px] px-[24px]">
        <div className="flex flex-row gap-[60px]">
          <div className="flex flex-row items-center text-left w-[200px] gap-[12px]">
            <img src="/member-archievement.png" alt="" className="w-[40px] h-[40px]" />
            <div>
              <h3 className="text-[24px] font-semibold text-neutral-dgrey">2,245,341</h3>
              <p className="text-[16px] text-neutral-grey">Members</p>
            </div>
          </div>

          <div className="flex flex-row items-center text-left w-[200px] gap-[12px]">
            <img src="/clubs-archievement.png" alt="" className="w-[40px] h-[40px]" />
            <div>
              <h3 className="text-[24px] font-semibold text-neutral-dgrey">46,328</h3>
              <p className="text-[16px] text-neutral-grey">Clubs</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[60px]">
          <div className="flex flex-row items-center text-left w-[200px] gap-[12px]">
            <img src="/event-archievement.png" alt="" className="w-[40px] h-[40px]" />
            <div>
              <h3 className="text-[24px] font-semibold text-neutral-dgrey">828,867</h3>
              <p className="text-[16px] text-neutral-grey">Event Bookings</p>
            </div>
          </div>

          <div className="flex flex-row items-center text-left w-[200px] gap-[12px]">
            <img src="/payment-archievement.png" alt="Payments" className="w-[40px] h-[40px]" />
            <div>
              <h3 className="text-[24px] font-semibold text-neutral-dgrey">1,926,436</h3>
              <p className="text-[16px] text-neutral-grey">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
