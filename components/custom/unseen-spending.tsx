export default function Spending() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 px-[104px] bg-white mt-[48px]">
      <div className="flex justify-center md:w-1/2">
        <img
          src="/spending0.png"
          alt="Illustration"
          className="w-[420px] md:w-[430px] h-auto object-contain"
        />
      </div>

      <div className="p-6 rounded-md md:w-1/2 flex flex-col justify-center text-left">
        <h2 className="text-[22px] md:text-[36px] font-semibold text-gray-600 leading-snug mb-3">
          The unseen of spending three <br /> years at Pixelgrade
        </h2>

        <p className="text-gray-600 text-[14px] max-w-[600px] mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
          Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum
          lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
          pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        <button className="px-3 py-1.5 w-[120px] h-[42px] bg-green-500 text-white rounded-md mt-2 font-medium text-[16px] hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
