import CompanyOverview from "./_components/CompanyOverview";
import Jumbotron from "./_components/Jumbotron";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto px-4 text-[#393E46]">
      <Jumbotron />
      <CompanyOverview />
      <Services />
      <Testimonials />
    </main>
  );
}
