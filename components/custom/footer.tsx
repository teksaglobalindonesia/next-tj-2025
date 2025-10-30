export default function Footer() {
  return (
    <footer className="bg-[#263238] text-gray-300 py-12 px-6 sm:px-12 md:px-[104px] flex flex-col md:flex-row justify-between gap-12 md:gap-[125px]">
      <div className="flex flex-col items-start md:w-1/3">
        <div className="flex items-center gap-2.5 mb-4">
          <img src="/nex.png" alt="Logo" className="w-[48px] h-auto" />
        </div>
        <p className="text-sm mb-2">Copyright © 2020 Nexcent ltd.</p>
        <p className="text-sm mb-6">All rights reserved</p>
        <div className="flex items-center gap-4">
          <a href="#"><img src="/ins.png" alt="Instagram" className="w-8 h-8" /></a>
          <a href="#"><img src="/twitt.png" alt="Twitter" className="w-8 h-8" /></a>
          <a href="#"><img src="/yt2.png" alt="YouTube" className="w-8 h-8" /></a>
        </div>
      </div>

      <div className="flex flex-col md:w-1/4">
        <h3 className="text-white font-semibold text-[18px] sm:text-[20px] mb-4">Company</h3>
        <ul className="space-y-2 text-[14px]">
          <li><a href="#" className="hover:text-white">About us</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
          <li><a href="#" className="hover:text-white">Contact us</a></li>
          <li><a href="#" className="hover:text-white">Pricing</a></li>
          <li><a href="#" className="hover:text-white">Testimonials</a></li>
        </ul>
      </div>

      <div className="flex flex-col md:w-1/4">
        <h3 className="text-white font-semibold text-[18px] sm:text-[20px] mb-4">Support</h3>
        <ul className="space-y-2 text-[14px]">
          <li><a href="#" className="hover:text-white">Help center</a></li>
          <li><a href="#" className="hover:text-white">Terms of service</a></li>
          <li><a href="#" className="hover:text-white">Legal</a></li>
          <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          <li><a href="#" className="hover:text-white">Status</a></li>
        </ul>
      </div>
    </footer>
  );
}
