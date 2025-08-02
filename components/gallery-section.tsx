"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Modern White Kitchen Cabinets",
    category: "Kitchen",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Luxury Bathroom Vanity",
    category: "Bathroom",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Custom Kitchen Island",
    category: "Kitchen",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Built-in Dining Room Cabinets",
    category: "Living",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Contemporary Cabinet Installation",
    category: "Kitchen",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bathroom Storage Cabinets",
    category: "Bathroom",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Custom Closet System",
    category: "Storage",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Traditional Kitchen Design",
    category: "Kitchen",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Office Built-in Cabinets",
    category: "Office",
  },
]

const categories = ["All", "Kitchen", "Bathroom", "Living", "Storage", "Office"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxImage(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-stone-800">Our Gallery</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects and see the quality craftsmanship that sets TD Cabinets apart.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-amber-800 hover:bg-amber-900 text-white"
                  : "hover:bg-amber-50 hover:text-amber-800"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-stone-800">{image.alt}</h3>
                <p className="text-sm text-stone-600">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              onClick={prevImage}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={nextImage}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[lightboxImage].src || "/placeholder.svg"}
                alt={filteredImages[lightboxImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{filteredImages[lightboxImage].alt}</h3>
                <p className="text-white/80">{filteredImages[lightboxImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
