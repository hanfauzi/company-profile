import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"], // semua range
  subsets: ["latin"],
});