import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--safari-dark)] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl text-white">Savannah Safaris</h3>
            <p className="text-white/80 text-sm">
              Experience authentic Kenyan adventures with expert-led safaris and trekking tours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4 text-white">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Travel Tips</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@savannahsafaris.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 Savannah Safaris. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
