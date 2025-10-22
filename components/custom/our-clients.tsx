export default function Clients() {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-[40px] px-[104px]">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="text-[36px] font-inter text-gray-800">
          Our Clients
        </h2>
        <p className="text-gray-500 text-[16px]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex justify-between items-center flex-wrap w-full gap-16">
        <img src="/our1.png" alt="client 1" className="w-[48px] h-[48px]" />
        <img src="/our2.png" alt="client 2" className="w-[48px] h-[48px]" />
        <img src="/our3.png" alt="client 3" className="w-[48px] h-[48px]" />
        <img src="/our4.png" alt="client 4" className="w-[48px] h-[48px]" />
        <img src="/our5.png" alt="client 5" className="w-[48px] h-[48px]" />
        <img src="/our6.png" alt="client 6" className="w-[48px] h-[48px]" />
        <img src="/our7.png" alt="client 7" className="w-[48px] h-[48px]" />
      </div>
    </div>
  );
}
