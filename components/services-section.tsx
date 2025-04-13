import { Smile, Shield, HeartPulse, Baby, Sparkles, Clock } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-vibrant-blue" />,
      title: "Preventive Care",
      description: "Regular check-ups, cleanings, fluoride treatments, and sealants to protect growing smiles.",
    },
    {
      icon: <Smile className="h-10 w-10 text-vibrant-blue" />,
      title: "Restorative Dentistry",
      description:
        "Gentle, child-friendly fillings, crowns, and treatments to repair damaged teeth and maintain oral health.",
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-vibrant-blue" />,
      title: "Sedation Dentistry",
      description:
        "Safe, comfortable options for anxious children or complex dental procedures at Niswonger Children's Hospital and in-office with a team of medical pediatric anesthesiologist, nurse, and EMT.",
    },
    {
      icon: <Baby className="h-10 w-10 text-vibrant-blue" />,
      title: "Pediatric Dentistry",
      description:
        "Comprehensive dental care tailored specifically for children from infancy through adolescence. Early dental visits and guidance for parents on caring for baby teeth.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-vibrant-blue" />,
      title: "Emergency Care",
      description: "Prompt attention for dental injuries, toothaches, and unexpected dental issues.",
    },
    {
      icon: <Clock className="h-10 w-10 text-vibrant-blue" />,
      title: "Special Needs Dentistry",
      description: "Specialized care for children with physical, developmental, or behavioral challenges.",
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-vibrant-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer comprehensive dental care designed specifically for children from infancy through adolescence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light-cyan bg-opacity-30 rounded-2xl p-6 transition-transform hover:transform hover:scale-105"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
