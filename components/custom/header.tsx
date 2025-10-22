export default function Header() {
  return (
    <div className="flex flex-row bg-neutral-silver h-[84px] px-[104px] items-center justify-between">
      <img src="./logo.png" className="w-[154px] h-[24px] object-contain" alt="" />
      <div className="flex flex-row flex-1 justify-center items-center gap-8">
            <p className="font-inter text-[16px]">Home</p>
            <p className="font-inter text-[16px]">Service</p>
            <p className="font-inter text-[16px]">Feature</p>
            <p className="font-inter text-[16px]">Product</p>
            <p className="font-inter text-[16px]">Testimonial</p>
            <p className="font-inter text-[16px]">FAQ</p>
        </div>
      <div className="flex flex-row gap-3 items-center">
        <button className="text-brand-primary text-[14px] font-inter w-[91px] h-[40px] rounded-md hover:underline">
          Login
        </button>
        <button className="bg-brand-primary text-white text-[14px] font-inter w-[91px] h-[40px] rounded-md hover:opacity-90 transition-all duration-200">
          Sign up
        </button>
      </div>
    </div>
  );
}
