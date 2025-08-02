import { Wrench, Hammer, Palette, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Cabinet Installation",
    description: "Professional installation of kitchen and bathroom cabinets with precision and care.",
  },
  {
    icon: Hammer,
    title: "Cabinet Maintenance",
    description: "Keep your cabinets looking new with our comprehensive maintenance services.",
  },
  {
    icon: Palette,
    title: "Custom Cabinet Design",
    description: "Bespoke cabinet solutions tailored to your space and style preferences.",
  },
  {
    icon: Home,
    title: "Kitchen & Bathroom Renovation",
    description: "Complete renovation services to transform your kitchen and bathroom spaces.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-stone-800">Our Services</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From custom design to professional installation, we offer comprehensive cabinetry solutions for your home or
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <service.icon className="w-10 h-10 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-800">{service.title}</h3>
              <p className="text-stone-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-amber-800 hover:bg-amber-900 text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
