import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ConsultationForm } from "@/components/consultation-form"

export function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-stone-800">Contact Us</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-stone-800">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Address</h3>
                  <p className="text-stone-600">
                    123 Cabinet Street
                    <br />
                    Craftsman City, CC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Phone</h3>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                  <p className="text-stone-600">info@tdcabinets.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">Business Hours</h3>
                  <div className="text-stone-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="w-full h-64 bg-stone-200 rounded-lg flex items-center justify-center">
                <p className="text-stone-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-stone-800">Request a Consultation</h2>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
