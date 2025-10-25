export default function Quote() {
    return(
        <section className="flex flex-row justify-between px-[104px] py-[64px] items-center bg-neutral-silver gap-[78px]">
            <img src="quote.png" alt="" className="w-[326px] h-[326px] rounded-lg" />
            <div className="flex flex-col w-[748px] h-[324px] gap-[40px]">
                <div className="flex flex-col w-[748px] h-[244px] gap-[12px]">
                <p className="text-[16px font-inter text-neutral-grey w-[748px] h-[168px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className="text-[20px] font-semibold font-inter text-brand-primary">Tim Smith</p>
                <p className="text-[16px] font-inter text-neutral-lgrey -mt-2">British Dragon Boat Racing Association</p>
                <div className="flex flex-row w-[748px] h-[48px] gap-[32px] mt-3">
                    <div className="flex flex-row w-[493px] h-[48px] gap-[38px]">
                        <img src="/our1.png" alt="" className="w-[48px] h-[48px]"/>
                        <img src="/our2.png" alt="" className="w-[48px] h-[48px]"/>
                        <img src="/our3.png" alt="" className="w-[48px] h-[48px]"/>
                        <img src="/our4.png" alt="" className="w-[48px] h-[48px]"/>
                        <img src="/our5.png" alt="" className="w-[48px] h-[48px]"/>
                        <img src="/our6.png" alt="" className="w-[48px] h-[48px]"/>
                    </div>
                    <a href="" className="w-[235px] h-[44px] p-[8px] gap-[8px] font-inter text-brand-primary font-semibold text-[20px] hover:text-shade-2 transition-all">Meet all customers →</a>
                    </div>
                </div>
            </div>
        </section>
    );
}