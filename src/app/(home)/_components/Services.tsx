import { Button } from "@/components/ui/button";

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
    <section className=" container mx-auto py-[20vh] px-20 h-[100vh]">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Kiri*/}
        <div className="sticky top-20 self-start">
          <h3 className="text-2xl font-bold">Our Core Services</h3>
          <p className="text-gray-600 mt-2">
            What we deliver to drive your digital growth.
          </p>
        </div>

        {/* Kanan */}

        <div className="grid gap-6">
          <div className="border rounded-xl p-6">
            <h4 className="font-semibold text-lg">Tech Consulting</h4>
            <p className="text-sm mt-2">
              Strategic consulting to help businesses identify, design, and
              implement impactful technology solutions.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h4 className="font-semibold text-lg">Software Development</h4>
            <p className="text-sm mt-2">
              Custom web and mobile application development tailored to your
              business needs.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h4 className="font-semibold text-lg">Cloud Solutions</h4>
            <p className="text-sm mt-2">
              Cloud infrastructure migration and optimization for maximum
              scalability and efficiency.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h4 className="font-semibold text-lg">UI/UX Design</h4>
            <p className="text-sm mt-2">
              User-centered interface and experience design focused on
              usability, aesthetics, and performance.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-left">
        <Button>Learn More About Our Services</Button>
      </div>
    </section>
  );
};

export default Services;
