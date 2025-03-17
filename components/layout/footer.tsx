import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600"></div>
              <span className="text-lg font-bold">Gamma Technologies</span>
            </div>
            <p className="text-sm text-gray-500">Innovative software solutions for the modern world.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600">
                  Web & Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-blue-600">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">
                123 Tech Park, Innovation Street
                <br />
                San Francisco, CA 94103
              </li>
              <li className="text-sm text-gray-500">info@gammatechnologies.com</li>
              <li className="text-sm text-gray-500">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Gamma Technologies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}