import { Button } from "@/components/ui/button";
import Link from "next/link";

const servicesData = [
  {
    title: "1. Tech Consulting",
    description:
      "Strategic consulting to help businesses identify, design, and implement impactful technology solutions.",
  },
  {
    title: "2. Software Development",
    description:
      "Custom web and mobile application development tailored to your business needs.",
  },
  {
    title: "3. Cloud Solutions",
    description:
      "Cloud infrastructure migration and optimization for maximum scalability and efficiency.",
  },
  {
    title: "4. UI/UX Design",
    description:
      "User-centered interface and experience design focused on usability, aesthetics, and performance.",
  },
  {
    title: "5. Data Analytics",
    description:
      "Unlock insights from your data with customized dashboards and predictive analytics.",
  },
];

const Services = () => {
  return (
    <section className="container mx-auto py-16 md:py-[20vh] px-6 md:px-20 font-[Montserrat]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="block md:hidden">
          <h1 className="text-xl font-bold">Our Core Services</h1>
          <p className="text-sm text-gray-600 mt-2">
            What we deliver to drive your digital growth.
          </p>
        </div>

        <div className="hidden md:block sticky top-20 self-start">
          <h1 className="text-2xl font-bold">Our Core Services</h1>
          <p className="text-base text-gray-600 mt-2">
            What we deliver to drive your digital growth.
          </p>
        </div>

        <div className="grid gap-6">
          {servicesData.map((service, idx) => (
            <div key={idx} className="border rounded-xl p-6">
              <h1 className="font-semibold text-base md:text-lg">
                {service.title}
              </h1>
              <p className="text-sm mt-2 text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-left">
        <Link href="/services">
          <Button className="bg-[#393E46] cursor-pointer">
            Learn More About Our Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
