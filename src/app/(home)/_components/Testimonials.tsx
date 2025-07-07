const Testimonials = () => {
  const testimonials = [
    {
      name: "Rina A.",
      position: "CTO at Komerce",
      feedback:
        "ARUNIKA helped us completely modernize our infrastructure. Their cloud solution reduced our deployment time by 70%.",
    },
    {
      name: "Michael L.",
      position: "Founder of Finverse",
      feedback:
        "Great communication and professionalism. Their dev team delivered our MVP ahead of schedule with outstanding quality.",
    },
    {
      name: "Sarah T.",
      position: "Product Manager at Medika",
      feedback:
        "The UI/UX team at ARUNIKA is top-notch. Our app redesign received amazing feedback from our users.",
    },
    {
      name: "Aldi N.",
      position: "CEO of Tokomart",
      feedback:
        "We've worked with many vendors before, but ARUNIKA truly felt like a partner. Highly recommended.",
    },
    {
      name: "Jessica W.",
      position: "COO at EduSpark",
      feedback:
        "Thanks to ARUNIKA, we scaled our platform to handle thousands of users without downtime.",
    },
    {
      name: "Bagas I.",
      position: "Tech Lead at InvestIQ",
      feedback:
        "Reliable, innovative, and deeply technical — that’s how I’d describe ARUNIKA. We’ll definitely work with them again.",
    },
  ];

  return (
    <section className="container mx-auto py-16 md:py-[20vh] px-6 md:px-20 font-[Montserrat]">
      <div className="flex flex-col gap-10">
        {/* Title & Subtitle */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Our Testimonials</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            What Our Clients Say About Working with ARUNIKA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <li
              key={i}
              className="list-none border rounded-xl p-6 flex flex-col justify-between"
            >
              <blockquote className="mt-2 border-l-2 pl-4 text-sm md:text-base text-muted-foreground mb-4 italic">
                “{item.feedback}”
              </blockquote>
              <div>
                <h1 className="font-semibold text-sm md:text-base text-black dark:text-white">
                  {item.name}
                </h1>
                <p className="text-xs text-gray-500">{item.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
