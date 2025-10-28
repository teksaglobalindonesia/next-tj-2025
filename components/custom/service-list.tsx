export default function ServiceList () {
    return (
       <section className="">
        <div className="flex flex-row justify-between items-center px-[104px] py-[64px]">
           <img src="marketing1-card.png" alt="" className="w-[368px] h-[286px]"/>
           <div className="flex flex-col gap-[16px] w-[661px] h-[268px] mb-[12px]">
               <h2 className="font-inter text-[36px] font-semibold text-neutral-dgrey leading-tight w-[600px] h-[44x]">Service 1</h2>
               <p className="font-inter text-neutral-grey text-[14px] w-[600px] h-[20px] py-[1px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-md mt-[80px] gap-[10px]  transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Learn More
        </button>
           </div>
        </div>

        <div className="flex flex-row justify-between items-center px-[104px] py-[64px] bg-neutral-silver">
           <div className="flex flex-col gap-[16px] w-[661px] h-[268px] mb-[12px]">
               <h2 className="font-inter text-[36px] font-semibold text-neutral-dgrey leading-tight w-[600px] h-[44x]">Service 2</h2>
               <p className="font-inter text-neutral-grey text-[14px] w-[600px] h-[20px] py-[1px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-md mt-[80px] gap-[10px]  transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Learn More
        </button>
           </div>
           <img src="marketing2-card.png" alt="" className="w-[368px] h-[286px]"/>
        </div>

        <div className="flex flex-row justify-between items-center px-[104px] py-[64px]">
           <img src="marketing3-card.png" alt="" className="w-[368px] h-[286px]"/>
           <div className="flex flex-col gap-[16px] w-[661px] h-[268px] mb-[12px]">
               <h2 className="font-inter text-[36px] font-semibold text-neutral-dgrey leading-tight w-[600px] h-[44x]">Service 3</h2>
               <p className="font-inter text-neutral-grey text-[14px] w-[600px] h-[20px] py-[1px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-md mt-[80px] gap-[10px]  transition-all duration-300 hover:bg-shade-2 hover:scale-105">
          Learn More
        </button>
           </div>
        </div>
       </section>
    );
}