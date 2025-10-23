export default function Community() {
  const items = [
    {
      image: "/community1.png",
      title: (
        <>
          Membership <br /> Organisations
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: "/community2.png",
      title: (
        <>
          National <br /> Associations
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: "/community3.png",
      title: (
        <>
          Clubs And <br /> Groups
        </>
      ),
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <section className="bg-white py-[60px] flex flex-col items-center justify-center text-center">
      <div className="max-w-[700px] mb-12">
        <h2 className="text-[28px] font-bold text-gray-700">
          Manage your entire community
        </h2>
        <h2 className="text-[28px] font-bold text-gray-700">
          in a single system
        </h2>
        <p className="text-[16px] text-gray-600">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-[127px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-8 w-[300px] h-[270]"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                className="w-[65px] h-[56px] object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] mb-2 text-gray-700 mx-auto text-center leading-snug">
              {item.title}
            </h3>
            <p className="text-[13px] text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
