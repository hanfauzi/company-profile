import { TimelineItem } from "@/components/Timeline";

const timelineData = [
  {
    year: "2019",
    title: "Founded in Jakarta, Indonesia",
    imageSrc: "/kantor.jpg",
    description:
      "ARUNIKA was established by a group of tech enthusiasts aiming to make quality digital solutions accessible to local businesses.",
  },
  {
    year: "2020",
    title: "First Major Client & Expansion",
    imageSrc: "/client.jpg",
    description:
      "Secured our first enterprise client in the retail sector and expanded the team from 4 to 10 engineers.",
  },
  {
    year: "2021",
    title: "Diversification of Services",
    imageSrc: "/diversity.jpg",
    description:
      "Introduced cloud infrastructure consulting and UI/UX design services to support growing client needs.",
  },
  {
    year: "2022",
    title: "Going Regional",
    imageSrc: "/expansion.jpg",
    description:
      "Completed cross-border projects in Southeast Asia, particularly in Singapore and Malaysia.",
  },
  {
    year: "2023",
    title: "Product Launch & Strategic Partnerships",
    imageSrc: "/product.jpg",
    description:
      "Launched an internal SaaS productivity tool for SMEs and formed partnerships with AWS and Google Cloud.",
  },
  {
    year: "2024",
    title: "Scaling Up",
    imageSrc: "/office.jpg",
    description:
      "ARUNIKA grew to a team of 50+, serving over 30 clients globally in e-commerce, fintech, and healthcare.",
  },
];

const CompanyOverview = () => {
  return (
    <section className="container  mx-auto px-6 md:px-20 py-16 md:py-[20vh] font-[Montserrat]">
      <div className="flex flex-col gap-16 md:gap-20">
        {/* Overview */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold">
            A Brief Snapshot of Who We Are.
          </h3>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            ARUNIKA is a technology consulting company based in Indonesia,
            committed to helping businesses transform through innovative and
            reliable digital solutions. We work across software development,
            cloud infrastructure, and digital transformation strategy — trusted
            by clients across Southeast Asia.
          </p>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold">Our Milestones</h3>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            A journey of growth, innovation, and impact.
          </p>
          <div className="mt-6 flex flex-col gap-12">
            {timelineData.map((item, idx) => (
              <TimelineItem key={idx} {...item} />
            ))}
          </div>
        </div>

{/* Values Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Mobile Title & Desc (only visible on small screens) */}
  <div className="block md:hidden">
    <h3 className="text-xl font-bold">Our Core Values</h3>
    <p className="text-sm text-gray-600 mt-2">
      What we stand for as a company.
    </p>
  </div>

  {/* Value Boxes (Left) */}
  <div className="grid gap-6">
    {[
      {
        title: "Integrity First",
        desc: "We believe in doing the right thing — always. We maintain transparency and honesty in all aspects of our work.",
      },
      {
        title: "Client-Centric Approach",
        desc: "Our clients' success is our mission. Every solution we build is aligned with their goals and challenges.",
      },
      {
        title: "Innovation Driven",
        desc: "We are passionate about leveraging the latest technology to build smart, sustainable solutions.",
      },
      {
        title: "Collaboration Over Competition",
        desc: "We grow together through open communication, mutual respect, and teamwork — internally and with clients.",
      },
      {
        title: "Continuous Learning",
        desc: "The tech world evolves fast — and so do we. We encourage curiosity, upskilling, and a growth mindset at every level.",
      },
    ].map((value, idx) => (
      <div key={idx} className="border rounded-xl p-6">
        <h4 className="font-semibold text-base md:text-lg">{value.title}</h4>
        <p className="text-sm mt-2 text-gray-700">{value.desc}</p>
      </div>
    ))}
  </div>

  {/* Desktop Title & Desc (only visible on md+) */}
  <div className="hidden md:block md:sticky md:top-20 self-start">
    <h3 className="text-2xl font-bold">Our Core Values</h3>
    <p className="text-base text-gray-600 mt-2">
      What we stand for as a company.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default CompanyOverview;
