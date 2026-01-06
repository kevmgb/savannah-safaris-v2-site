import React from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { FeaturedDestinations } from "../components/FeaturedDestinations";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

