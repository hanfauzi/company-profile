import { TimelineItem } from "@/components/Timeline";

const timelineData = [
  {
    year: "2019",
    title: "Founded in Jakarta, Indonesia",
    imageSrc: "/",
    description:
      "ARUNIKA was established by a group of tech enthusiasts aiming to make quality digital solutions accessible to local businesses.",
  },
  {
    year: "2020",
    title: "First Major Client & Expansion",
    imageSrc: "/",
    description:
      "Secured our first enterprise client in the retail sector and expanded the team from 4 to 10 engineers.",
  },
  {
    year: "2021",
    title: "Diversification of Services",
    imageSrc: "/",
    description:
      "Introduced cloud infrastructure consulting and UI/UX design services to support growing client needs.",
  },
  {
    year: "2022",
    title: "Going Regional",
    imageSrc: "/",
    description:
      "  Completed cross-border projects in Southeast Asia, particularly inSingapore and Malaysia.",
  },
  {
    year: "2023",
    title: "Product Launch & Strategic Partnerships",
    imageSrc: "/",
    description:
      "Launched an internal SaaS productivity tool for SMEs and formed partnerships with AWS and Google Cloud.",
  },
  {
    year: "2024",
    title: "Scaling Up",
    imageSrc: "/",
    description:
      " ARUNIKA grew to a team of 50+, serving over 30 clients globally in e-commeorce, fintech, and healthcare.",
  },
];

const CompanyOverview = () => {
  return (
    <section className=" container mx-auto py-[20vh] px-20 gap-8">
      <div className="flex flex-col gap-20">
        <div>
          <h3 className="text-2xl font-bold">
            A Brief Snapshot of Who We Are.
          </h3>

          <p className="mt-4">
            ARUNIKA is a technology consulting company based in Indonesia,
            committed to helping businesses transform through innovative and
            reliable digital solutions. We work across software development,
            cloud infrastructure, and digital transformation strategy — trusted
            by clients across Southeast Asia.
          </p>
        </div>

        <div>
          <h3 className="text-2xl  font-bold">Our Milestones</h3>
          <p className="text-gray-600 mt-2">
            A journey of growth, innovation, and impact.
          </p>
          {timelineData.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Kiri: Value Boxes */}
          <div className="grid gap-6">
            <div className="border rounded-xl p-6">
              <h4 className="font-semibold text-lg">Integrity First</h4>
              <p className="text-sm mt-2">
                We believe in doing the right thing — always. We maintain
                transparency and honesty in all aspects of our work.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold text-lg">Client-Centric Approach</h4>
              <p className="text-sm mt-2">
                Our clients&apos; success is our mission. Every solution we build is
                aligned with their goals and challenges.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold text-lg">Innovation Driven</h4>
              <p className="text-sm mt-2">
                We are passionate about leveraging the latest technology to
                build smart, sustainable solutions.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold text-lg">
                Collaboration Over Competition
              </h4>
              <p className="text-sm mt-2">
                We grow together through open communication, mutual respect, and
                teamwork — internally and with clients.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-semibold text-lg">Continuous Learning</h4>
              <p className="text-sm mt-2">
                The tech world evolves fast — and so do we. We encourage
                curiosity, upskilling, and a growth mindset at every level.
              </p>
            </div>
          </div>

          {/* Kanan: Title + Deskripsi */}
          <div className="sticky top-20 self-start">
            <h3 className="text-2xl font-bold">Our Core Values</h3>
            <p className="text-gray-600 mt-2">
              What we stand for as a company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
