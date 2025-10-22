export default function ClientsSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-white px-[104px] py-[80px]">
      
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <h2 className="text-[44px] font-inter font-semibold text-neutral-dgrey">Our Clients</h2>
        <p className="text-gray-500 text-[16px]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      
      <div className="flex flex-wrap justify-between items-center w-full gap-16">
        <img src="/client1.png" alt="Client 1" className="h-[48px] w-[48px] rounded-lg" />
        <img src="/client2.png" alt="Client 2" className="h-[48px] w-[48px] rounded-lg" />
        <img src="/client3.png" alt="Client 3" className="h-[48px] w-[48px] rounded-lg" />
        <img src="/client4.png" alt="Client 4" className="h-[48px] w-[48px] rounded-lg" />
        <img src="/client5.png" alt="Client 5" className="h-[48px] w-[48px] rounded-lg" />
        <img src="/client6.png" alt="Client 6" className="h-[48px] w-[48px] rounded-lg" />
        <img src="/client7.png" alt="Client 7" className="h-[48px] w-[48px] rounded-lg" />
      </div>
    </section>
  );
}
