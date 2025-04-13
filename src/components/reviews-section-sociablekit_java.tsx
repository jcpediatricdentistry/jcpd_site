import { useEffect } from "react"

export default function ParentReviewsSection() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js"
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="reviews" className="py-16 md:py-24 bg-citrus-cream">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-citrus-mint mb-6">Parent Reviews</h2>
        <div className="sk-ww-google-reviews" data-embed-id="25543184" />
      </div>
    </section>
  )
}
