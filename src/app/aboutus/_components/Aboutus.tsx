const Aboutus = () => {
  return (
    <section className="container mt-10 mx-auto px-6 md:px-20 py-20 space-y-20 font-[Montserrat]">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">How It All Started</h1>
        <p>
          ARUNIKA was founded in 2019 by a group of passionate technologists in
          Jakarta, Indonesia, who believed that digital transformation should be
          accessible to businesses of all sizes. Born from the frustration of
          seeing many companies struggle with outdated systems, ARUNIKA set out
          to bridge the gap between business needs and impactful digital
          solutions.
        </p>
        <p>
          From humble beginnings as a four-person consultancy, we quickly gained
          traction by delivering high-quality results and building strong client
          relationships. In 2020, we secured our first enterprise client in the
          retail sector, which enabled us to grow into a full-fledged team of
          engineers and strategists.
        </p>
        <p>
          Over the years, we expanded our services to include cloud
          infrastructure, UI/UX design, and digital strategy. By 2023, we had
          successfully launched an internal SaaS productivity tool and partnered
          with global tech giants like AWS and Google Cloud. Today, ARUNIKA
          serves more than 30 clients across Southeast Asia, with projects
          spanning e-commerce, fintech, and healthcare.
        </p>
        <ul className="list-disc pl-6 mt-4 text-sm text-muted-foreground">
          <li>
            <strong>2019:</strong> Founded in Jakarta
          </li>
          <li>
            <strong>2020:</strong> First enterprise client & team expansion
          </li>
          <li>
            <strong>2021:</strong> Diversified into cloud and UI/UX services
          </li>
          <li>
            <strong>2023:</strong> Launched SaaS tool & partnered with AWS
          </li>
          <li>
            <strong>2024:</strong> Scaled to 50+ team members across the region
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p>
          We&apos;re a diverse group of thinkers, builders, and collaborators
          who share a passion for technology and meaningful impact. Every member
          brings unique expertise and energy to our work.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <li>
            <h1 className="font-semibold">
              Muhammad Hanif Fauzi – Co-Founder & CEO
            </h1>
            <p className="text-sm text-muted-foreground">
              A visionary leader with 10+ years in enterprise software, Hanif
              drives the company&apos;s strategic direction and long-term
              growth.
            </p>
          </li>
          <li>
            <h1 className="font-semibold">Laras Putri – Head of Design</h1>
            <p className="text-sm text-muted-foreground">
              With a deep eye for user experience, Laras leads our UI/UX team to
              craft intuitive and impactful digital interfaces.
            </p>
          </li>
          <li>
            <h1 className="font-semibold">
              Rafi Pranata – Lead Software Engineer
            </h1>
            <p className="text-sm text-muted-foreground">
              A full-stack specialist who ensures our solutions are scalable,
              maintainable, and aligned with modern tech standards.
            </p>
          </li>
          <li>
            <h1 className="font-semibold">Maya Santoso – Cloud Architect</h1>
            <p className="text-sm text-muted-foreground">
              Certified AWS Solutions Architect, Maya helps clients modernize
              their infrastructure with secure and scalable cloud solutions.
            </p>
          </li>
          <li>
            <h1 className="font-semibold">
              Andre Wijaya – Business Strategist
            </h1>
            <p className="text-sm text-muted-foreground">
              Andre bridges the gap between tech and business, aligning product
              development with client goals and ROI.
            </p>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Our Culture</h1>
        <p>
          We believe that strong values are the foundation of a strong company.
          At ARUNIKA, we don&apos;t just work together — we grow together.
        </p>
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div className="border rounded-xl p-6">
            <h1 className="font-semibold">Integrity First</h1>
            <p className="text-sm text-muted-foreground mt-2">
              We believe in doing the right thing — always. Transparency and
              honesty are non-negotiable.
            </p>
          </div>
          <div className="border rounded-xl p-6">
            <h1 className="font-semibold">Client-Centric Mindset</h1>
            <p className="text-sm text-muted-foreground mt-2">
              We succeed when our clients succeed. Everything we build aligns
              with their goals.
            </p>
          </div>
          <div className="border rounded-xl p-6">
            <h1 className="font-semibold">Innovation Driven</h1>
            <p className="text-sm text-muted-foreground mt-2">
              We embrace change and challenge the norm to build future-proof
              solutions.
            </p>
          </div>
          <div className="border rounded-xl p-6">
            <h1 className="font-semibold">Collaboration Over Competition</h1>
            <p className="text-sm text-muted-foreground mt-2">
              We value teamwork, open dialogue, and shared growth over
              individual wins.
            </p>
          </div>
          <div className="border rounded-xl p-6">
            <h1 className="font-semibold">Continuous Learning</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Tech evolves fast — and so do we. Lifelong learning is embedded in
              our culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
