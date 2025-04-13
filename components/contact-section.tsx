import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-light-blue bg-opacity-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-vibrant-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We're here to answer your questions and help schedule your child's visit.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-white rounded-3xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588.6137792212263!2d-82.3997839!3d36.3381106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a62cf06f76045%3A0x1215a154cd92249e!2s2333%20Knob%20Creek%20Rd%20%2312%2C%20Johnson%20City%2C%20TN%2037604!5e0!3m2!1sen!2sus!4v1712876284826!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[350px]"
            ></iframe>
          </div>
          <div>
            <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-vibrant-blue bg-opacity-20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-vibrant-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <div className="text-gray-600">2333 Knob Creek Rd #12, Johnson City, TN 37604</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-vibrant-blue bg-opacity-20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-vibrant-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">(423) 283-7722</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-vibrant-blue bg-opacity-20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-vibrant-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">jcpdschedule@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-vibrant-blue bg-opacity-20 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-vibrant-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Office Hours</div>
                    <div className="text-gray-600">
                      Monday - Thursday: 8:00 AM - 4:30 PM
                      <br />
                      Friday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="book" className="bg-light-blue bg-opacity-30 rounded-2xl p-6 text-center w-full mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to Schedule?</h3>
              <p className="text-gray-600 mb-4">Call us to book your child's appointment.</p>
              <a
                href="tel:4232837722"
                className="inline-block bg-vibrant-blue hover:bg-muted-blue text-gray-800 px-6 py-3 rounded-full transition-colors font-medium"
              >
                Call Now: (423) 283-7722
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
