import { Star } from "lucide-react"

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-padding bg-light-cyan bg-opacity-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-800 mb-4">Parent Reviews</h2>
          <div className="w-20 h-1 bg-vibrant-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See what parents are saying about their children's experiences at Johnson City Pediatric Dentistry.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Reviews</h3>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-vibrant-blue fill-vibrant-blue" />
              ))}
            </div>
            <p className="text-gray-600 mt-2">4.9 out of 5 based on 120+ reviews</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 text-center">
            <p className="text-gray-600 italic mb-4">
              This is a placeholder for the Google Reviews widget. The actual reviews from Google will be displayed
              here.
            </p>
            <p className="text-sm text-gray-500">
              Google reviews will be embedded via a third-party widget in this section.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-vibrant-blue fill-vibrant-blue" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Dr. Johnson and the entire team are amazing with kids! My daughter used to be terrified of the dentist,
                but now she looks forward to her visits. They make dental care fun and stress-free."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-vibrant-blue rounded-full mr-3 flex items-center justify-center text-white font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
                <div>
                  <div className="font-medium text-gray-800">Happy Parent</div>
                  <div className="text-sm text-gray-500">Johnson City</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
