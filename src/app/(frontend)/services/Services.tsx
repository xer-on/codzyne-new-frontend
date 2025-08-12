import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      price: "Starting at $5,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"],
      price: "Starting at $8,000",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
      price: "Starting at $2,000/month",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable backend solutions with secure APIs and database management.",
      features: ["REST & GraphQL APIs", "Database Design", "Cloud Deployment", "Security"],
      price: "Starting at $4,000",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security audits and solutions.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Monitoring"],
      price: "Starting at $3,000",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, efficiency, and user experience.",
      features: ["Speed Optimization", "Code Review", "Infrastructure", "Monitoring"],
      price: "Starting at $2,500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

  
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href={"contact-us"}>Contact US</Link>
              </Button>
            
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
