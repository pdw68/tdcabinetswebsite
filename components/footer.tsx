import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TD</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">TD Cabinets</h3>
                <p className="text-sm text-stone-300 -mt-1">Where Aesthetics Meet Endurance</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm">
              Professional cabinetry services with a commitment to quality craftsmanship and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-stone-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-stone-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-stone-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>Cabinet Installation</li>
              <li>Cabinet Maintenance</li>
              <li>Custom Cabinet Design</li>
              <li>Kitchen Renovation</li>
              <li>Bathroom Renovation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-stone-300">
              <p>
                123 Cabinet Street
                <br />
                Craftsman City, CC 12345
              </p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@tdcabinets.com</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-stone-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm text-stone-300">
          <p>&copy; {currentYear} TD Cabinets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
