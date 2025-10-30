export default function Footer() {
  return (
    <section className="flex flex-wrap justify-between items-start bg-neutral-black py-12 px-6 sm:px-12 md:px-24 lg:px-44">
      <div className="flex flex-col gap-4 w-full sm:w-[320px] md:w-[350px]">
        <div className="flex items-center gap-2">
          <img src="/nex.png" alt="Logo" className="w-[150px] sm:w-[170px] md:w-[191px]" />
        </div>
        <div className="py-2">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-neutral-silver">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-neutral-silver">
            All rights reserved
          </p>
        </div>

        <div className="flex flex-row gap-3 sm:gap-4 py-2">
          <a href="#" className="rounded-full">
            <img src="/ig.png" alt="Instagram" className="w-6 h-6 sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]" />
          </a>
          <a href="#" className="rounded-full">
            <img src="/yutub.png" alt="YouTube" className="w-6 h-6 sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]" />
          </a>
          <a href="#" className="rounded-full">
            <img src="/twit.png" alt="Twitter" className="w-6 h-6 sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]" />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-12 md:gap-[60px] lg:gap-[80px] w-auto mt-8 sm:mt-0">
        <div>
          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-4 sm:mb-6 font-inter text-neutral-silver">
            Company
          </h3>
          <ul className="flex flex-col gap-2 sm:gap-3 text-neutral-silver text-[12px] sm:text-[14px]">
            <li><a href="#" className="hover:text-green-400">About us</a></li>
            <li><a href="#" className="hover:text-green-400">Blog</a></li>
            <li><a href="#" className="hover:text-green-400">Contact us</a></li>
            <li><a href="#" className="hover:text-green-400">Pricing</a></li>
            <li><a href="#" className="hover:text-green-400">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-4 sm:mb-6 font-inter text-neutral-silver">
            Support
          </h3>
          <ul className="flex flex-col gap-2 sm:gap-3 text-neutral-silver text-[12px] sm:text-[14px]">
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
