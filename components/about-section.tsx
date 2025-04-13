import { Slideshow } from "./slideshow"

export function AboutSection() {
  // Sample images for the slideshow
  const aboutImages = [
    {
      src: "/about/IMG_5214_front.JPG",
      alt: "Our modern pediatric dental office",
    },
    {
      src: "/about/IMG_5214_front.JPG",
      alt: "Our friendly dental team",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Kid-Friendly+Environment",
      alt: "Our kid-friendly treatment rooms",
    },
    {
      src: "/placeholder.svg?height=400&width=500&text=Play+Area",
      alt: "Children's play area in our waiting room",
    },
  ]

  return (
    <section id="about" className="section-padding bg-light-mint bg-opacity-30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-gray-800 mb-4">About Our Practice</h2>
          <div className="w-20 h-1 bg-muted-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-light-blue rounded-full opacity-50"></div>
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden p-1">
              <Slideshow images={aboutImages} interval={6000} className="aspect-[4/3] w-full" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Caring & Kid-Focused Dental Team</h3>
            <p className="text-gray-600 mb-4">
              At Johnson City Pediatric Dentistry, we transform little smiles into big adventures! Our cheerful,
              highly-skilled team creates a fun, fear-free experience — full of giggles, kindness, and gentle care for
              kids of all ages.
            </p>
            <p className="text-gray-600 mb-4">
              We know children have unique dental needs — and we're here to meet them with compassion and expertise. Our
              board-certified pediatric dentists specialize in creating a positive, personalized experience for every
              child, every visit.
            </p>
            <p className="text-gray-600 mb-6">
              From our bright, colorful office to interactive activities and our warm, welcoming staff, everything is
              designed to make dental care easy and even enjoyable. We help kids build confidence and healthy habits
              that last a lifetime.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-muted-blue font-bold text-xl mb-1">10+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-muted-blue font-bold text-xl mb-1">5,000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-muted-blue font-bold text-xl mb-1">100%</div>
                <div className="text-gray-600">Kid-Friendly</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-muted-blue font-bold text-xl mb-1">4.9/5</div>
                <div className="text-gray-600">Parent Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
