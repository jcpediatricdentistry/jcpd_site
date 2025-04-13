import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-light-cyan to-white">
      {/*<div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">*/}
      <div className="container mx-auto grid gap-12 items-center">

        <div className="text-center">
          <h1 className="font-bold text-gray-800 mb-4">
            We take <span className="text-vibrant-blue">All Dental Insurance Plans!</span>
          </h1>
          {/*<p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            <li className="flex items-start gap-2">
              <span className="h-4 w-4 rounded-md bg-vibrant-blue mt-1 flex-shrink-0"></span>
              <span className="text-sm font-bold text-teal-800">✓</span>
              
              <span>Comprehensive dental care tailored for children of all ages — from toddlers to teens.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-4 w-4 rounded-md bg-vibrant-blue mt-1 flex-shrink-0"></span>
              <span>Expert pediatric dental care in a warm, comforting environment created just for kids.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-4 w-4 rounded-md bg-vibrant-blue mt-1 flex-shrink-0"></span>
              <span>
                We accept most major dental insurance plans. Don't see your provider?{" "}
                <strong>Contact us — we're happy to help.</strong>
              </span>
            </li>
          </p>*/}
          {/*<ul className="text-gray-600 text-left space-y-4 mb-8 max-w-lg mx-auto md:mx-0">*/}
          <ul className="text-gray-600 text-center space-y-4 mb-8 max-w-lg mx-auto">

            <li className="flex items-start gap-3">
              <div className="relative h-5 w-5 flex-shrink-0 mt-1">
                <div className="absolute inset-0 rounded-full bg-vibrant-blue" />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">✓</span>
                </div>
                <span>Comprehensive dental care tailored for children of all ages — from toddlers to teens.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="relative h-5 w-5 flex-shrink-0 mt-1">
                <div className="absolute inset-0 rounded-full bg-vibrant-blue" />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">✓</span>
                </div>
                <span>Expert pediatric dental care in a warm, comforting environment created just for kids.</span>
            </li>
              <li className="flex items-start gap-3">
                <div className="relative h-5 w-5 flex-shrink-0 mt-1">
                  <div className="absolute inset-0 rounded-full bg-vibrant-blue" />
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">✓</span>
                  </div>
                  <span>We accept most major dental insurance plans. Don't see your provider?{" "}
                  <strong>Contact us — we're happy to help.</strong>
                  </span>
                </li>
              </ul>

          {/*<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">*/}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#book"
              className="bg-vibrant-blue hover:bg-muted-blue text-gray-800 px-8 py-3 rounded-full transition-colors font-medium text-lg"
            >
              Book Appointment
            </Link>
            <Link
              href="#about"
              className="bg-light-blue hover:bg-muted-blue text-gray-800 px-8 py-3 rounded-full transition-colors font-medium text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-light-blue rounded-full opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-vibrant-blue rounded-full opacity-30"></div>
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Smiling dentist with child patient"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
