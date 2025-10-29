export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-neutral-black px-6 md:px-[165px] py-16 gap-12">
      
      <div className="flex flex-col gap-10 md:w-[350px]">
        <img
          src="/Nextcent.png"
          alt="Nextcent Logo"
          className="w-[191px] h-auto object-contain"
        />
        <p className="font-inter text-[14px] text-neutral-silver leading-loose">
          Copyright © 2020 Nexcent ltd. <br /> All right reserved
        </p>
        <div className="flex flex-row gap-4">
          <img src="/insta-icon.png" className="w-8 h-8 object-contain" alt="Instagram" />
          <img src="/twitter-icon.png" className="w-8 h-8 object-contain" alt="Twitter" />
          <img src="/yt-icon.png" className="w-8 h-8 object-contain" alt="YouTube" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex flex-col gap-6 min-w-[160px]">
          <h2 className="text-[20px] font-inter font-semibold text-white">Company</h2>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">About us</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Blog</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Contact us</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Pricing</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Testimonials</a>
          </div>
        </div>
        <div className="flex flex-col gap-6 min-w-[160px]">
          <h2 className="text-[20px] font-inter font-semibold text-white">Support</h2>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Help center</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Terms of service</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Legal</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Privacy policy</a>
            <a href="#" className="text-[14px] font-inter text-neutral-silver hover:text-brand-primary transition-colors">Status</a>
          </div>
        </div>

      </div>
    </section>
  );
}
 