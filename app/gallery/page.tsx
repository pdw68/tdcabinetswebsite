import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
    </main>
  )
}
