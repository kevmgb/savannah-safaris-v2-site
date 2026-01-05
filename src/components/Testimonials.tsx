import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United States",
    review: "Our safari with Savannah Safaris was absolutely incredible! The guides were knowledgeable and passionate, and we saw the Big Five in their natural habitat. A truly unforgettable experience!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "James Chen",
    country: "Singapore",
    review: "The Mount Kenya trek exceeded all expectations. Our guide was professional, safety-conscious, and made the journey both challenging and enjoyable. The views from the summit were breathtaking!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Emma Schmidt",
    country: "Germany",
    review: "A perfect blend of adventure and culture. The day hikes were spectacular, and meeting local communities added a special dimension to our trip. Highly recommend for anyone visiting Kenya!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: "David Martinez",
    country: "Spain",
    review: "From start to finish, everything was seamless. The wildlife safari in Maasai Mara was a dream come true. Professional, safe, and incredibly well-organized. Will definitely return!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">What Our Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read experiences from international travelers who've explored Kenya with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Avatar and Info */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--safari-brown)] text-[var(--safari-brown)]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
