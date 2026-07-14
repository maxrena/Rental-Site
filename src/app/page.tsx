import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Properties from "@/components/properties";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import ApplicationForm from "@/components/application-form";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Properties />
        <WhyChooseUs />
        <Testimonials />
        <ApplicationForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
