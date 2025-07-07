import Link from "next/link";
import { Button } from "./ui/button";


const Footer = () => {
  return (
    <footer className="bg-[#00ADB5] text-[#393E46] text-base-content px-6 md:px-10 py-10 font-[Montserrat]">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <aside className=" relative flex items-center gap-4">
          
          <div className="flex flex-col">
            <p className="font-bold text-lg">ARUNIKA</p>
            <p>Empowering Businesses with Technology</p>
          </div>
        </aside>
        {/* Footer Links */}
        <div className="flex flex-row  justify-between md:justify-end gap-6 w-full md:w-auto">
          <nav className="flex items-center">
            <Link href="/aboutus">
              <Button variant="link" className="text-[#393E46] cursor-pointer">
                About us
              </Button>
            </Link>
          </nav>
          <nav className="flex items-center">
            <Link href="/services">
              {" "}
              <Button variant="link" className="text-[#393E46] cursor-pointer">
                Services
              </Button>{" "}
            </Link>
          </nav>
          <nav className="flex  items-center ">
            <Link href="/">
              {" "}
              <Button variant="link" className="text-[#393E46] cursor-pointer">
                Contact{" "}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
