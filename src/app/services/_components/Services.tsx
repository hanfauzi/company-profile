const services = [
  {
    title: "Tech Consulting",
    description:
      "Strategic consulting to help businesses identify, design, and implement impactful technology solutions.",
    pricing:
      "Custom pricing based on project scope (starts from IDR 25,000,000)",
    testimonial: {
      author: "Dewi Kartika – COO, RetailHub",
      quote:
        "ARUNIKA's consulting team helped us align our legacy systems with modern cloud infrastructure. Game-changer for our operations.",
    },
  },
  {
    title: "Software Development",
    description:
      "Custom web and mobile application development tailored to your business needs.",
    pricing: "Starts from IDR 80,000,000 per project",
    testimonial: {
      author: "Fahmi Rizky – Founder, MedikaApp",
      quote:
        "We collaborated with ARUNIKA to build our healthtech platform. Their dev team is world-class and incredibly responsive.",
    },
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure migration and optimization for maximum scalability and efficiency.",
    pricing: "Monthly plans starting at IDR 8,000,000",
    testimonial: {
      author: "Maya Lee – CTO, LogiTrack",
      quote:
        "Our cloud costs dropped 30% after ARUNIKA optimized our AWS infrastructure. Highly recommend them for cloud strategy.",
    },
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interface and experience design focused on usability, aesthetics, and performance.",
    pricing: "From IDR 25,000,000 per sprint",
    testimonial: {
      author: "Kevin Tan – Product Manager, FinNow",
      quote:
        "Their design team brought clarity and delight to our fintech app. Everything now feels intuitive and clean.",
    },
  },
];

const Services = () => {
  return (
    <section className="container mx-auto mt-10 px-6 md:px-20 py-20 space-y-20 font-[Montserrat]">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">
          What We Build, We Build With Purpose
        </h1>
        <p className="text-muted-foreground mt-2">
          Each service is crafted to bring clarity, efficiency, and long-term
          value.
        </p>
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Our Core Services</h1>
        <p className="text-muted-foreground">
          Reliable, scalable, and tailored for your business — here&apos;s what
          we offer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="border rounded-xl p-6 space-y-4">
            <h1 className="text-xl font-semibold">{service.title}</h1>
            <p className="text-sm text-gray-700">{service.description}</p>

            <div>
              <h4 className="text-sm font-medium mt-4">Pricing</h4>
              <p className="text-sm text-muted-foreground">{service.pricing}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md text-sm italic">
              <p>“{service.testimonial.quote}”</p>
              <p className="text-right not-italic mt-2 font-medium text-gray-600">
                — {service.testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
