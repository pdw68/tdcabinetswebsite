import { FeedbackForm } from "@/components/feedback-form"
import { Footer } from "@/components/footer"

export default function FeedbackPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-stone-800">Share Your Experience</h1>
            <p className="text-center text-stone-600 mb-12">
              We value your feedback and would love to hear about your experience with TD Cabinets.
            </p>
            <FeedbackForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
