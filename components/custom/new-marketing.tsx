export default function Marketing() {
  const blogs = [
    {
      image: "/marketing1.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: "/marketing2.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: "/marketing3.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="bg-white py-[60px] px-[104px] flex flex-col items-center text-center mt-[48px]"> 
      <div className="max-w-[700px] mb-12">
        <h2 className="text-[36px] font-semibold text-gray-700 mb-3">
          Caring is the new marketing
        </h2>
        <p className="text-[16px] text-gray-500 leading-relaxed">
          The Nextcent blog is the best place to read about the latest membership
          insights,
          <br />
          trends and more. See who’s joining the community, read about how our
          community
          <br />
          are increasing their membership income and lot’s more.
        </p>
      </div>

      <div className="flex flex-col mt-[-25px] md:flex-row justify-center items-center gap-[40px]">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative w-[317px] flex flex-col items-center"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-[317px] h-[220px] object-cover rounded-xl"
            />

            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-gray-200 w-[285px] rounded-xl shadow-md p-4 flex flex-col items-center text-center">
              <h3 className="text-[20px] font-semibold text-gray-500 leading-snug mb-2 line-clamp-3">
                {blog.title}
              </h3>

              <a
                href="#"
                className="text-green-500 text-[16px] font-semibold flex items-center justify-center gap-1 hover:text-green-700 transition-colors"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
