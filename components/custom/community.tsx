export default function Community() {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-[40px] px-[144px]">
        <div className="text-center mb-10 w-[542px] h-[120px]">
          <h2 className="text-[36px] font-semibold text-neutral-dgrey">Manage your entire community in a single system</h2>
          <p className="text-gray-500 text-[16px] mt-2">Who is Nexcent suitable for?</p>
        </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-[127px]">
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 w-[300px] h-[260px] flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img src="/community1.png" alt="" className="w-[60px] h-[52px]"/>
          </div>
          <h3 className="font-bold text-[20px] mb-2 text-gray-700 text-center leading-snug">Membership <br /> Organisations</h3>
          <p className="font-inter text-[13px] text-neutral-grey text-center leading-snug gap-[8px]">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 w-[300px] h-[260px] flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img src="/community2.png" alt="" className="w-[60px] h-[52px]"/>
          </div>
          <h3 className="font-bold text-[20px] mb-2 text-gray-700 text-center leading-snug">National <br /> Associations</h3>
          <p className="font-inter text-[14px] w-[240px] h-[80p] text-neutral-grey text-center leading-snug gap-[8px]">
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 w-[300px] h-[260px] flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <img src="/community3.png" alt="" className="w-[60px] h-[52px]"/>
          </div>
          <h3 className="font-bold text-[20px] mb-2 text-gray-700 text-center leading-snug">Clubs And <br /> Groups</h3>
          <p className="font-inter text-[13px] text-neutral-grey text-center leading-snug gap-[8px]">
            Our 300bership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
  );
}