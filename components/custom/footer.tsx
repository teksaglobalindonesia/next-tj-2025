export default function Footer() {
  return (
    <section className="flex flex-row justify-between items-center bg-neutral-black py-[64px] px-[178px]">
      <div className="flex flex-col gap-4 w-[350px] h-[189px]">
        <div className="flex items-center gap-2">
          <img src="/nex.png" alt="" className="w-[191px] h-[29px]" />
        </div>
        <div className="w-[350px] h-[48px] gap-8px py-[34px]">
        <p className="text-[14px] text-neutral-silver ">Copyright © 2020 Nexcent ltd. </p>
        <p className="text-[14px] text-neutral-silver">All rights reserved</p>
        </div>

        <div className="flex flex-row w-[128px] h-[32px] py-[32px] gap-4 ">
          <a href="#" className="rounded-full">
            <img src="/ig.png" alt="Instagram" className="w-[32px] h-[32px]" />
          </a>
          <a href="#" className="rounded-full">
            <img src="/yutub.png" alt="YouTube" className="w-[32px] h-[32px]" />
          </a>
          <a href="#" className="rounded-full">
            <img src="/twit.png" alt="Twitter" className="w-[32px] h-[32px]" />
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-[80px] w-[635px] h-[200px] px-[125px]">
        <div>
          <h3 className="text-[20px] font-semibold mb-8 font-inter text-neutral-silver">Company</h3>
          <ul className="flex flex-col gap-3 text-neutral-silver text-[14px] w-[160px] h-[148px]">
            <li><a href="#" className="hover:text-green-400">About us</a></li>
            <li><a href="#" className="hover:text-green-400">Blog</a></li>
            <li><a href="#" className="hover:text-green-400">Contact us</a></li>
            <li><a href="#" className="hover:text-green-400">Pricing</a></li>
            <li><a href="#" className="hover:text-green-400">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold mb-8 font-inter text-neutral-silver">Support</h3>
          <ul className="flex flex-col gap-3 text-neutral-silver text-[14px] w-[160px] h-[148px]">
            <li><a href="#" className="hover:text-green-400">Help center</a></li>
            <li><a href="#" className="hover:text-green-400">Terms of service</a></li>
            <li><a href="#" className="hover:text-green-400">Legal</a></li>
            <li><a href="#" className="hover:text-green-400">Privacy policy</a></li>
            <li><a href="#" className="hover:text-green-400">Status</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
