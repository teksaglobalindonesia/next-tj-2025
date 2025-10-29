export default function ServiceList() {
  return (
    <section className="flex flex-col gap-16">
     <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[104px] py-16 gap-8">
        <img src="marketing1-card.png" alt="Service 1" className="w-full md:w-[368px] h-auto object-contain" />
        
        <div className="flex flex-col gap-4 md:w-[661px]">
          <h2 className="font-inter text-2xl md:text-[36px] font-semibold text-neutral-dgrey leading-tight">
            Service 1
          </h2>
          <p className="font-inter text-sm md:text-[14px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="w-full md:w-[151px] h-[52px] py-3 px-6 bg-brand-primary text-white rounded-md mt-6 transition-all duration-300 hover:bg-shade-2 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center px-6 md:px-[104px] py-16 gap-8 bg-neutral-silver">
        <img src="marketing2-card.png" alt="Service 2" className="w-full md:w-[368px] h-auto object-contain" />

        <div className="flex flex-col gap-4 md:w-[661px]">
          <h2 className="font-inter text-2xl md:text-[36px] font-semibold text-neutral-dgrey leading-tight">
            Service 2
          </h2>
          <p className="font-inter text-sm md:text-[14px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="w-full md:w-[151px] h-[52px] py-3 px-6 bg-brand-primary text-white rounded-md mt-6 transition-all duration-300 hover:bg-shade-2 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[104px] py-16 gap-8">
        <img src="marketing3-card.png" alt="Service 3" className="w-full md:w-[368px] h-auto object-contain" />
        
        <div className="flex flex-col gap-4 md:w-[661px]">
          <h2 className="font-inter text-2xl md:text-[36px] font-semibold text-neutral-dgrey leading-tight">
            Service 3
          </h2>
          <p className="font-inter text-sm md:text-[14px] text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="w-full md:w-[151px] h-[52px] py-3 px-6 bg-brand-primary text-white rounded-md mt-6 transition-all duration-300 hover:bg-shade-2 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}
