const destinations = [
  {
    name: "Mount Kenya",
    caption: "Africa's second highest peak with stunning alpine scenery",
    image: "https://images.unsplash.com/photo-1618856445394-259e67220916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhfGVufDF8fHx8MTc2NzYwNzAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Maasai Mara",
    caption: "World-renowned wildlife reserve, home to the Great Migration",
    image: "https://images.unsplash.com/photo-1730801117505-a78356526b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWFzYWklMjBNYXJhJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzY3NjA3MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Great Rift Valley",
    caption: "Dramatic landscapes and diverse ecosystems",
    image: "https://images.unsplash.com/photo-1636636985438-4154b379aac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaWZ0JTIwVmFsbGV5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzYwNzAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Sacred Forests",
    caption: "Ancient woodlands rich in biodiversity and culture",
    image: "https://images.unsplash.com/photo-1751561484816-6b4ccc114646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3Njc2MDcwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FeaturedDestinations() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">Featured Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore Kenya's most breathtaking landscapes and iconic natural wonders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="mb-2 text-white">{destination.name}</h3>
                <p className="text-sm text-white/90">
                  {destination.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
