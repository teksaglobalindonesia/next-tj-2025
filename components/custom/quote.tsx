export default function Quote() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-[104px] py-16 bg-neutral-silver">
      <img
        src="tesla-airpods.png"
        alt="Quote Illustration"
        className="w-full md:w-[326px] h-auto rounded-lg object-contain"
      />
      <div className="flex flex-col gap-6 w-full md:w-[748px]">
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-[16px] font-inter text-neutral-grey">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-brand-primary font-semibold text-lg md:text-[20px] font-inter">Team Smith</p>
          <p className="font-inter text-neutral-lgrey text-sm md:text-[16px]">British Dragon Boat Racing Association</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8"> 
          <div className="flex flex-wrap gap-2 md:gap-4">
            <img src="client1.png" alt="" className="w-10 h-10 md:w-[48px] md:h-[48px]" />
            <img src="client2.png" alt="" className="w-10 h-10 md:w-[48px] md:h-[48px]" />
            <img src="client3.png" alt="" className="w-10 h-10 md:w-[48px] md:h-[48px]" />
            <img src="client4.png" alt="" className="w-10 h-10 md:w-[48px] md:h-[48px]" />
            <img src="client5.png" alt="" className="w-10 h-10 md:w-[48px] md:h-[48px]" />
            <img src="client6.png" alt="" className="w-10 h-10 md:w-[48px] md:h-[48px]" />
          </div>
          <a
            href=""
            className="text-brand-primary font-semibold text-base md:text-[20px] transition-all duration-300 hover:text-shade-2">
            Meet all customers →
          </a>
        </div>
      </div>
    </section>
  );
}
