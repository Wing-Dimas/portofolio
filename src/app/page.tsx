import LandingPage from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio | Dimas Wing Bagas Bimantara",
  description:
    "portofolio dimas wing bagas bimantara | Software Enginering | Frontend Web Devoloper",
  keywords:
    "portofolio,dimas wing bagas bimantara,software engineering,frontend,web,devoloper",
};

export default function Page() {
  return <LandingPage />;
}
