import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Target, Award, Heart, Lightbulb, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About us</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We&apos;re a passionate team dedicated to delivering innovative solutions that help businesses thrive in the
            digital age. Our mission is to bridge the gap between technology and human needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <Card className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Our story</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2018, Acme Inc. started as a small team of developers and designers who believed that
                technology should be accessible, intuitive, and impactful. What began as a passion project has grown
                into a trusted partner for businesses worldwide.
              </p>
              <p>
                Today, we serve over 500+ clients across various industries, helping them transform their digital
                presence and achieve their business goals through innovative solutions and exceptional service.
              </p>
            </div>
          </Card>

          {/* Our Mission */}
          <Card className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Our mission</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                To empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and
                create meaningful connections with their customers.
              </p>
              <p>
                We believe in the power of collaboration, innovation, and continuous learning. Every project we
                undertake is an opportunity to push boundaries and deliver exceptional value.
              </p>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and approaches to solve complex challenges and stay ahead of the
                curve.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we deliver, ensuring quality and reliability in every
                project.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, fostering open communication and shared success.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Stats {s|} */}
        <Card className="p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the numbers</h2>
            <p className="text-gray-600 text-lg">Our impact in the digital landscape</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
          <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with innovative solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href={"contact-us"}>  Get in touch</Link>
            </Button>
       
          </div>
        </div>
      </div>
    </div>
  )
}
