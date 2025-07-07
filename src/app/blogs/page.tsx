import BlogList from "../(home)/_components/BlogList";

// Data dummy atau bisa diganti import dari CMS/API
const blogs = [
  {
    id: "arunika-next-gen-consulting",
    title: "Next-Gen Consulting: How ARUNIKA Transforms Businesses",
    excerpt:
      "Discover how our team leverages modern tech stacks and strategic insight to empower clients across industries...",
    author: "Laras Putri",
    date: "2024-06-18",
  },
  {
    id: "cloud-adoption-smarter",
    title: "Is Your Business Cloud-Ready? Here's What You Should Know",
    excerpt:
      "Cloud adoption can save costs and boost performance — but only when done right. Learn the pitfalls and strategies.",
    author: "Rafi Pranata",
    date: "2024-07-02",
  },
  {
    id: "uiux-case-study",
    title: "Case Study: Designing a Frictionless Fintech Experience",
    excerpt:
      "We dive into our recent project for a fintech startup and the design principles that improved conversion by 40%.",
    author: "Kevin Tan",
    date: "2024-07-01",
  },
];

const BlogListPage = () => {
  return (
    <section className="container min-h-screen mt-10 font-[Montserrat] text-[#393E46] mx-auto px-6 md:px-20 py-20 space-y-12 ">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Insights & Stories from ARUNIKA</h1>
        <p className="text-muted-foreground">
          Explore articles, case studies, and ideas from our team of consultants, developers, and designers.
        </p>
      </div>

      {/* Panggil komponen BlogList dengan data */}
      <BlogList  />
    </section>
  );
};

export default BlogListPage;