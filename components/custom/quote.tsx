export default function Quote() {
    return (
    <section className="flex flex-row justify-between px-[104px] py-[64px] items-center bg-neutral-silver gap-[78px]">
       <img src="tesla-airpods.png" alt="" className="w-[326px] h-[326px] rounded-lg"/>
       <div className="flex flex-col w-[748px] h-[324px] gap-[32px]">
         <div className="flex flex-col w-[748px] h-[244px] gap-[16px]">
            <p className="text-[16px] font-inter text-neutral-grey">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <p className="text-brand-primary font-semibold font-inter text-[20px]">Team Smith</p>
            <p className="font-inter text-neutral-lgrey text-[16px]">British Dragon Boat Racing Association</p>
            <div className="flex flex-row w-[748px] h-[48px] gap-[32px]">
            <div className="flex flex-row w-[493px] h-[48px] gap-[41px]">
               <img src="client1.png" alt="" className="w-[48px] h-[48px]"/>
               <img src="client2.png" alt="" className="w-[48px] h-[48px]"/>
               <img src="client3.png" alt="" className="w-[48px] h-[48px]"/>
               <img src="client4.png" alt="" className="w-[48px] h-[48px]"/>
               <img src="client5.png" alt="" className="w-[48px] h-[48px]"/>
               <img src="client6.png" alt="" className="w-[48px] h-[48px]"/>
            </div>
             <a href="" className="w-[233px] h-[44px] p-[8px] gap-[8px] font-inter text-brand-primary font-semibold text-[20px]">Meet all customers →</a>
            </div>
         </div>
       </div>
    </section>
    );
}