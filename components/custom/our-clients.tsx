export default function Clients() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-[60px]">
      <div className="text-center mb-10">
        <h2 className="text-[28px] font-bold text-gray-800">Our Clients</h2>
        <p className="text-gray-500 text-[16px] mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-[120px]">
        <img src="/our7.png" alt="Client 1" className="w-[45px] h-auto object-contain" />
        <img src="/our1.png" alt="Client 2" className="w-[45px] h-auto object-contain" />
        <img src="/our2.png" alt="Client 3" className="w-[45px] h-auto object-contain" />
        <img src="/our4.png" alt="Client 4" className="w-[45px] h-auto object-contain" />
        <img src="/our5.png" alt="Client 5" className="w-[45px] h-auto object-contain" />
        <img src="/our6.png" alt="Client 6" className="w-[45px] h-auto object-contain" />
        <img src="/our2.png" alt="Client 7" className="w-[45px] h-auto object-contain" />
      </div>
    </div>
  );
}
