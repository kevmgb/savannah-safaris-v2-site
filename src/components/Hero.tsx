import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1732027198077-4e29b491d15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwc3Vuc2V0fGVufDF8fHx8MTc2NzYwNzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kenyan Savannah"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
          Explore Kenya with Expert-Led Safari & Trekking Adventures
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl opacity-90">
          Discover authentic Kenyan wildlife safaris, breathtaking hikes, and multi-day trekking experiences guided by local experts
        </p>
        <Button 
          size="lg" 
          className="bg-[var(--safari-brown)] hover:bg-[var(--safari-earth)] text-white px-8 py-6 text-lg"
        >
          View Our Tours
        </Button>
      </div>
    </div>
  );
}
