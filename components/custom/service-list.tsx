export default function Servicelist() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-[104px] bg-white mt-[40px]">
        <div className="flex justify-center md:w-1/2">
          <img
            src="/service1.png"
            alt="Service 1 Illustration"
            className="w-[433px] md:w-[368px] h-auto object-contain"
          />
        </div>

        <div className="p-6 rounded-md md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-[22px] md:text-[36px] font-semibold text-[#4D4D4D] leading-snug mb-3">
            Service 1
          </h2>
          <p className="text-gray-600 text-[14px] max-w-[600px] mb-5 leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="px-3 py-1.5 w-[120px] h-[42px] bg-green-500 text-white rounded-md mt-2 font-medium text-[16px] hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="w-screen bg-[#F5F7FA] mt-[40px]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-6 py-12 px-6 md:px-12">
          <div className="flex justify-center md:w-1/2">
            <img
              src="/service2.png"
              alt="Service 2 Illustration"
              className="w-[433px] md:w-[368px] h-auto object-contain"
            />
          </div>

          <div className="p-6 md:w-1/2 flex flex-col justify-center text-left">
            <h2 className="text-[22px] md:text-[36px] font-semibold text-[#4D4D4D] leading-snug mb-3">
              Service 2
            </h2>
             <p className="text-gray-600 text-[14px] max-w-[600px] mb-5 leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
            <button className="px-3 py-1.5 w-[120px] h-[42px] bg-green-500 text-white rounded-md mt-2 font-medium text-[16px] hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-[104px] bg-white mt-[40px]">
        <div className="flex justify-center md:w-1/2">
          <img
            src="/service3.png"
            alt="Service 3 Illustration"
            className="w-[433px] md:w-[368px] h-auto object-contain"
          />
        </div>

        <div className="p-6 rounded-md md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-[22px] md:text-[36px] font-semibold text-[#4D4D4D] leading-snug mb-3">
            Service 3
          </h2>
          <p className="text-gray-600 text-[14px] max-w-[600px] mb-5 leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
            quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="px-3 py-1.5 w-[120px] h-[42px] bg-green-500 text-white rounded-md mt-2 font-medium text-[16px] hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
