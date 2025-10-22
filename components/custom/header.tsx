export default function Header() {
  return (
    <div className="flex flex-row bg-neutral-silver h-[84px] px-[105px] items-center">
      <img src="/logo.png" className="w-[154px] h-[24px]" />
      <div className="flex flex-row flex-1 justify-center items-center gap-8">
        <p className="font-inter text-[16px] hover:bg-red-500">Menu 1</p>
        <p className="font-inter text-[16px]">Menu 2</p>
        <p className="font-inter text-[16px]">Menu 3</p>
        <p className="font-inter text-[16px]">Menu 4</p>
        <p className="font-inter text-[16px]">Menu 5</p>
        <p className="font-inter text-[16px]">Menu 6</p>
      </div>
      <div className="flex flex-row gap-4">
        <button className="text-brand-primary text-[14px] font-inter w-[77px] h-[40px]">Login</button>
        <button className="bg-brand-primary text-white text-[14px] font-inter w-[77px] h-[40px]">Signup</button>
      </div>

    </div>
  );
}
