import { ServicesDetailSection } from "@/components/services-detail-section"
import { ConsultationForm } from "@/components/consultation-form"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20">
        <ServicesDetailSection />
        <section id="consultation-form" className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-stone-800">Get Your Free Consultation</h2>
              <ConsultationForm />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
