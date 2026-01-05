import { Users, Shield, Heart, Star } from "lucide-react";

const features = [
  {
    title: "Experienced Local Guides",
    description: "Our expert guides are born and raised in Kenya, providing authentic insights and deep knowledge of the land and wildlife.",
    icon: Users
  },
  {
    title: "Safety & Reliability",
    description: "We prioritize your safety with well-maintained equipment, comprehensive insurance, and proven emergency protocols.",
    icon: Shield
  },
  {
    title: "Authentic Experiences",
    description: "Connect with local communities and experience Kenya beyond the tourist trail with culturally immersive activities.",
    icon: Heart
  },
  {
    title: "Small Group Tours",
    description: "Enjoy personalized attention with small group sizes or opt for private tours tailored to your preferences.",
    icon: Star
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-[var(--safari-green)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">Why Choose Savannah Safaris</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional safari and trekking experiences that exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--safari-brown)] mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
