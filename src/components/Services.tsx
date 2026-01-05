import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mountain, Camera, Backpack } from "lucide-react";

const services = [
  {
    title: "Day Hikes",
    description: "Experience stunning trails and landscapes on guided day hikes through Kenya's most beautiful regions. Perfect for all fitness levels.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1571636240366-1606c4a13f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMEtlbnlhfGVufDF8fHx8MTc2NzYwNzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Wildlife Safaris",
    description: "Get up close with Africa's magnificent wildlife in their natural habitat. Expert guides ensure unforgettable encounters and photography opportunities.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMHNhZmFyaSUyMEFmcmljYXxlbnwxfHx8fDE3Njc2MDcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Trekking Adventures",
    description: "Embark on multi-day expeditions to Kenya's peaks and valleys. Immerse yourself in nature with camping under the stars.",
    icon: Backpack,
    image: "https://images.unsplash.com/photo-1676981405728-e5ec4e112a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVra2luZyUyMGFkdmVudHVyZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3Njc2MDcwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-[var(--safari-sand)]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">Our Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated selection of authentic Kenyan adventures, each designed to provide unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Icon className="w-6 h-6 text-[var(--safari-brown)]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
