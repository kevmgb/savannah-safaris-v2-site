import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--safari-brown)] to-[var(--safari-earth)] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-4xl md:text-5xl text-white">
          Ready for Your Kenyan Adventure?
        </h2>
        <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
          Join us for an unforgettable journey through Kenya's stunning landscapes and incredible wildlife. 
          Our expert team is ready to help you plan your perfect safari or trekking experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-[var(--safari-brown)] hover:bg-white/90 px-8 py-6 text-lg"
          >
            Plan Your Adventure
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
