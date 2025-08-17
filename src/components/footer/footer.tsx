// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Footer() {
  
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-4">
                <span className="text-purple-400">Code</span>
                <span className="text-purple-300">Zyne</span>
              </div>
              <p className="text-gray-400">Leading IT company providing innovative laboratory information systems.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Laboratory Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Data Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>679 West kazipara, Mirpur Dhaka 1216 Bangladesh</p>
                <p>codezynesoft@gmail.com</p>
                <p>+8801874-413876</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeZyne Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
