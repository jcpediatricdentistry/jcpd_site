import Link from "next/link"
import { SmileIcon as Tooth, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-gray py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo/JCPD_true_transparent.png"
                alt="Johnson City Pediatric Dentistry Logo"
                className="h-12 w-auto"
              />
              {/*<Tooth className="h-8 w-8 text-vibrant-blue" />*/}
              <span className="font-semibold text-gray-800">
                Johnson City<br />Pediatric Dentistry</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Providing specialized dental care for children in a friendly, comfortable environment designed just for
              kids.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-2 rounded-full text-vibrant-blue hover:text-muted-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full text-vibrant-blue hover:text-muted-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full text-vibrant-blue hover:text-muted-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-vibrant-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-vibrant-blue transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-gray-600 hover:text-vibrant-blue transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-vibrant-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Office Hours</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span>8:00 AM - 4:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-vibrant-blue border-opacity-20 mt-12 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Johnson City Pediatric Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
