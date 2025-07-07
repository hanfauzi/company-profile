import { Button } from "@/components/ui/button";
import Link from "next/link";

const Jumbotron = () => {
  return (
    <section className="container mx-auto px-6 py-24 md:py-[20vh] md:px-20 min-h-screen flex items-center font-[Montserrat]">
      <div className="flex flex-col gap-20 md:gap-[40vh] w-full">
        {/* Top Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <h1 className="text-2xl md:text-4xl font-bold">
            ARUNIKA – Empowering Businesses with Technology
          </h1>
          <p className="text-base md:text-lg">
            Technology Solutions, For Your Future.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <p className="text-base md:text-lg max-w-xl">
            We help companies grow through innovative and efficient technology
            solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/services">
              <Button className="w-full md:w-auto bg-[#393E46] cursor-pointer">View Our Services</Button>
            </Link>
            <Link href="/aboutus">
              <Button className="w-full cursor-pointer md:w-auto" variant="outline" >
                Learn More About Our Company
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
