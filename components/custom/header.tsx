export default function Header() {
    return (
        <div className="flex flex-row bg-neutral-silver h-[84px] px-[105px] items-center" >
        <img src="/Logo.png" className="w-[154px] h-[24px]" alt=""/>
        <div className="flex flex-row flex-1 justify-center items-center gap-8">
            <p className="font-inter text-[16px]">Home</p>
            <p className="font-inter text-[16px]">Service</p>
            <p className="font-inter text-[16px]">Feature</p>
            <p className="font-inter text-[16px]">Product</p>
            <p className="font-inter text-[16px]">Testimonial</p>
            <p className="font-inter text-[16px]">FAQ</p>
        </div>
        <div className="flex flex-row gap-4">
        <button className="text-brand-primary text-[14px] font-inter w-[77px] h-[40px]">Login</button>
        <button className="bg-brand-primary text-white text-[14px] font-inter w-[77px] h-[40px] rounded-lg">Signup</button>
      </div>

        </div>
    );
}