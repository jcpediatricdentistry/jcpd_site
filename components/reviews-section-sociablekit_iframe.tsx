"use client"

export default function ParentReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-citrus-cream">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-citrus-mint mb-6">Parent Reviews</h2>
        <div className="w-full max-w-5xl mx-auto rounded-2xl shadow-md overflow-hidden">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25543184"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
