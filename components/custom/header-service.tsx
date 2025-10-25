export default function Headerservice() {
  return (
    <footer className="w-[1440px] h-[328px] bg-[#263238] opacity-100 flex justify-between items-start px-[165px] py-[64px] gap-[125px] mx-auto">
      <div>
        <div className="flex items-center w-[191px] h-[29.67px] gap-[9.89px] mb-4">
          <img src="/nex.png"/>
        </div>
        <p className="text-sm text-gray-300 mb-2">Copyright © 2020 Nexcent ltd.</p>
        <p className="text-sm text-gray-300 mb-6">All rights reserved</p>

        <div className="flex items-center w-[128px] h-[32px] gap-[16px] opacity-100">
  <a href="#">
    <img src="/ins.png" alt="Instagram" className="w-[32px] h-[32px]" />
  </a>
  <a href="#">
    <img src="/twitt.png" alt="Twitter" className="w-[32px] h-[32px]" />
  </a>
  <a href="#">
    <img src="/yt2.png" alt="YouTube" className="w-[32px] h-[32px]" />
  </a>
</div>

</div>
      <div>
        <h3 className="text-white font-semibold text-[20px] mb-4">Company</h3>
        <ul className="space-y-2 text-[14px] text-gray-300">
          <li><a href="#" className="hover:text-white">About us</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
          <li><a href="#" className="hover:text-white">Contact us</a></li>
          <li><a href="#" className="hover:text-white">Pricing</a></li>
          <li><a href="#" className="hover:text-white">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-[20px] mb-4">Support</h3>
        <ul className="space-y-2 text-[14px] text-gray-300">
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
