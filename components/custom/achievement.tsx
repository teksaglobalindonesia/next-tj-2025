export default function Achievement() {
  const stats = [
    {
      image: "/acc1.png",
      value: "2,245,341",
      label: "Members",
    },
    {
      image: "/acc2.png",
      value: "46,328",
      label: "Clubs",
    },
    {
      image: "/acc3.png",
      value: "828,867",
      label: "Event Bookings",
    },
    {
      image: "/acc4.png",
      value: "1,926,436",
      label: "Payments",
    },
  ];

  return (
    <section className="bg-neutral-silver flex flex-col md:flex-row items-center justify-between px-[104px] py-[60px]">
      <div className="text-left md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-gray-700 leading-snug">
          Helping a local
        </h2>
        <h2 className="text-[28px] md:text-[36px] font-semibold text-green-600 leading-snug">
          business reinvent itself
        </h2>
        <p className="text-gray-500 text-[16px] mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 md:w-1/2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3">
            <img
              src={stat.image}
              alt={stat.label}
              className="w-[48px] h-[48px] object-contain"
            />
            <div>
              <h3 className="text-[28px] font-semibold text-gray-800">
                {stat.value}
              </h3>
              <p className="text-[16px] text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
