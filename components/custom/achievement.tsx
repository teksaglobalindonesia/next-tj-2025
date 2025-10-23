export default function Achievement() {
    return (
      <section className="flex flex-row justify-between items-center px-[104px] py-[80px] bg-neutral-silver">
        <div className="flex flex-col w-[540px] h-[120px] gap-[8px] px-[24px]">
           <h2 className="font-inter w-[600px] font-semibold text-[36px] h-[44px] leading-tight text-neutral-dgrey">Helping a local <br /><span className="text-brand-primary">business reinvent itself</span></h2>
           <p className="w-[400px] text-[16px] h-[24px] font-inter mt-11 text-gray-900">We reached here with our hard work and dedication</p>
        </div>
        <div className="flex flex-col w-[540px] h-[160px] gap-[40px]">
             <div className="flex flex-row w-[540px] h-[60px] gap-[30px]">
                <div className="flex flex-row justify-between w-[255px] h-[60px] gap-[16]">
                   <img src="member-achievement.png" className=" w-[48px] h-[48px] my-[6px]" alt=""/>
                   <div className="flex flex-col w-[191px] h-[60px]">
                    <h4 className="w-[191px] h-[36px] font-bold font-inter text-[28px] text-neutral-dgrey">2,245,341</h4>
                    <p className="w-[191px] h-[24px] font-inter text-neutral-grey text-[16px]">Members</p>
                   </div>
                </div>
                <div className="flex flex-row justify-between w-[255px] h-[60px] gap-[16]">
                   <img src="clubs-achievement.png" className=" w-[48px] h-[48px] my-[6px]" alt=""/>
                   <div className="flex flex-col w-[191px] h-[60px]">
                    <h4 className="w-[191px] h-[36px] font-bold font-inter text-neutral-dgrey text-[28px]">46,328</h4>
                    <p className="w-[191px] h-[24px] font-inter text-neutral-grey text-[16px]">Clubs</p>
                   </div>
                </div>
             </div>
              <div className="flex flex-row w-[540px] h-[60px] gap-[30px]">
                <div className="flex flex-row justify-between w-[255px] h-[60px] gap-[16]">
                   <img src="event-achievement.png" className=" w-[48px] h-[48px] my-[6px]" alt=""/>
                   <div className="flex flex-col w-[191px] h-[60px]">
                    <h4 className="w-[191px] h-[36px] font-bold font-inter text-[28px]">828,867</h4>
                    <p className="w-[191px] h-[24px] font-inter text-neutral-grey text-[16px]">Event Bookings</p>
                   </div>
                </div>
                <div className="flex flex-row justify-between w-[255px] h-[60px] gap-[16]">
                   <img src="payment-achievement.png" className=" w-[48px] h-[48px] my-[6px]" alt=""/>
                   <div className="flex flex-col w-[191px] h-[60px]">
                    <h4 className="w-[191px] h-[36px] font-bold font-inter text-[28px]">1,926,436</h4>
                    <p className="w-[191px] h-[24px] font-inter text-neutral-grey text-[16px]">Payments</p>
                   </div>
                </div>
             </div>
        </div>
      </section>
    );
}