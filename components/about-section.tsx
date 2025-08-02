import { Award, Users, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stone-800">About TD Cabinets</h2>
          <p className="text-lg text-stone-600 mb-12 leading-relaxed">
            With years of experience in the cabinetry industry, TD Cabinets has built a reputation for delivering
            exceptional craftsmanship and unparalleled customer service. We specialize in creating beautiful, functional
            spaces that stand the test of time.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Quality Craftsmanship</h3>
              <p className="text-stone-600">
                Every cabinet is built with precision and attention to detail, using only the finest materials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Customer Focused</h3>
              <p className="text-stone-600">
                We work closely with each client to bring their vision to life, ensuring complete satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">Timely Delivery</h3>
              <p className="text-stone-600">
                We respect your time and complete projects efficiently without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
