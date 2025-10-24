import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row bg-neutral-silver h-[84px] px-[104px] items-center">
      <img src="/Logo.png" className="w-[154px] h-[24px]" />

      <div className="flex flex-row flex-1 justify-center items-center gap-8">
        <p>
          <Link
            href="/"
            className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200"
          >
            Home
          </Link>
        </p>

        <p>
          <Link
            href="/service"
            className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200"
          >
            Service
          </Link>
        </p>

        <p>
          <a
            href=""
            className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200"
          >
            Feature
          </a>
        </p>

        <p>
          <a
            href=""
            className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200"
          >
            Products
          </a>
        </p>

        <p>
          <a
            href=""
            className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200"
          >
            Testimonial
          </a>
        </p>

        <p>
          <a
            href=""
            className="font-inter text-[16px] hover:text-brand-primary transition-colors duration-200"
          >
            FAQ
          </a>
        </p>
      </div>

      <div className="flex flex-row gap-5">
        <button className="text-brand-primary text-[14px] font-inter w-[37px] h-[40px] hover:underline transition duration-200">
          Login
        </button>
        <button className="text-white bg-brand-primary text-[14px] font-inter w-[91px] h-[40px] rounded-lg hover:bg-brand-primary/80 transition duration-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}
