"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copied!`);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section className="container mt-10 font-[Montserrat] min-h-screen text-[#393E46] mx-auto px-6 md:px-20 py-20 space-y-16">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">
          We're here to help and answer any questions you might have.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="flex flex-col gap-6">
          <div
            onClick={() => handleCopy("hello@arunika.id", "Email")}
            className="cursor-pointer border rounded-xl p-6 bg-[#F0F0F0] hover:bg-[#e0e0e0] transition text-center md:text-left"
          >
            <h1 className="text-lg font-semibold">Email Us</h1>
            <p className="text-sm text-muted-foreground mt-1">
              hello@arunika.id
            </p>
            {copied === "Email" && (
              <p className="text-green-600 text-sm mt-1">
                Copied to clipboard!
              </p>
            )}
          </div>

          <div
            onClick={() => handleCopy("+62 812 3456 7890", "WhatsApp Number")}
            className="cursor-pointer border rounded-xl p-6 bg-[#F0F0F0] hover:bg-[#e0e0e0] transition text-center md:text-left"
          >
            <h1 className="text-lg font-semibold">WhatsApp</h1>
            <p className="text-sm text-muted-foreground mt-1">
              +62 812 3456 7890
            </p>
            {copied === "WhatsApp Number" && (
              <p className="text-green-600 text-sm mt-1">
                Copied to clipboard!
              </p>
            )}
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-[#F0F0F0] space-y-2 text-center md:text-left">
          <h1 className="text-lg font-semibold">Our Office</h1>
          <p className="text-sm text-muted-foreground">
            Jl. Kemang Raya No. 88A
            <br />
            Jakarta Selatan, DKI Jakarta
            <br />
            Indonesia 12730
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
