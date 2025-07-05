import { Button } from "@/components/ui/button";
const Jumbotron = () => {
  return (
    <section className=" container mx-auto py-[20vh] px-20 h-[100vh]">
      <div className="flex flex-col  gap-[40vh] ">
        <div className=" flex flex-col items-left gap-5 ">
          <h1 className="text-3xl font-bold">
            ARUNIKA – Empowering Businesses with Technology
          </h1>

          <p>Technology Solutions, For Your Future.</p>
        </div>

        <div className=" flex flex-col  items-left gap-5">
          <p>
            We help companies grow through innovative and efficient technology
            solutions.
          </p>
          <div className="flex gap-5">
            <Button>View Our Services</Button>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
