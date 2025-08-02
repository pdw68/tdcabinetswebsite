"use client"

import { Wrench, Hammer, Palette, Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Wrench,
    title: "Cabinet Installation",
    description:
      "Professional installation of kitchen and bathroom cabinets with precision and care. Our experienced team ensures perfect alignment, proper mounting, and seamless integration with your existing space.",
    features: [
      "Precise measurements and fitting",
      "Professional mounting and alignment",
      "Hardware installation and adjustment",
      "Quality assurance inspection",
    ],
  },
  {
    icon: Hammer,
    title: "Cabinet Maintenance",
    description:
      "Keep your cabinets looking new with our comprehensive maintenance services. We provide regular upkeep, repairs, and refinishing to extend the life of your investment.",
    features: [
      "Regular cleaning and conditioning",
      "Hardware adjustment and replacement",
      "Surface refinishing and touch-ups",
      "Preventive maintenance programs",
    ],
  },
  {
    icon: Palette,
    title: "Custom Cabinet Design",
    description:
      "Bespoke cabinet solutions tailored to your space and style preferences. From concept to completion, we create unique designs that perfectly match your vision and functional needs.",
    features: [
      "3D design visualization",
      "Custom sizing and configuration",
      "Material and finish selection",
      "Functional optimization",
    ],
  },
  {
    icon: Home,
    title: "Kitchen & Bathroom Renovation",
    description:
      "Complete renovation services to transform your kitchen and bathroom spaces. We handle everything from planning to installation, creating beautiful and functional spaces.",
    features: [
      "Complete space planning",
      "Plumbing and electrical coordination",
      "Countertop and backsplash installation",
      "Project management and timeline",
    ],
  },
]

export function ServicesDetailSection() {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-stone-800">Our Services</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            From custom design to professional installation, we offer comprehensive cabinetry solutions for your home or
            business. Each service is delivered with our commitment to quality and customer satisfaction.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-amber-800" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-stone-800">{service.title}</h2>
                <p className="text-lg text-stone-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-stone-700">
                      <ArrowRight className="w-4 h-4 text-amber-800 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button onClick={scrollToForm} className="bg-amber-800 hover:bg-amber-900 text-white">
                  Enquire Now
                </Button>
              </div>

              <div className="lg:w-1/2">
                <img
                  src={`/placeholder.svg?height=400&width=600&query=${service.title.toLowerCase()} service showcase`}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
