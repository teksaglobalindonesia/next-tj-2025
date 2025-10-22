
export default function Header() {
    return(
      <div className="flex flex-row bg-neutral-silver h-[84px] px-[104px] items-center">
        <img src="/logo.png" alt="" className="w-[154px] h-[24px]"/>
        <div className="flex flex-row flex-1 justify-center items-center gap-8">
           <p><a href="" className="font-inter text-[16px]">Home</a></p>
           <p><a href="" className="font-inter text-[16px]">Service</a></p>
           <p><a href="" className="font-inter text-[16px]">Feature</a></p>
           <p><a href="" className="font-inter text-[16px]">Products</a></p>
           <p><a href="" className="font-inter text-[16px]">Testimonial</a></p>
           <p><a href="" className="font-inter text-[16px]">FAQ</a></p>
        </div>
        <div className="flex flex-row gap-5">
          <button className="text-brand-primary text-[14px] font-inter w-[37px] h-[40px]">
            Login
          </button>
          <button className="text-white bg-brand-primary text-[14px] font-inter w-[91px] h-[40px] rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    );
}