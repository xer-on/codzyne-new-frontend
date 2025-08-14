import Link from "next/link"
import { MapPin, Phone, Send, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactForm from "./contact-usform"

const BUSINESS_NAME = "CodeZyne"
const BUSINESS_ADDRESS = "679 West kazipara, Mirpur Dhaka 1216."
const BUSINESS_PHONE = "+880 1874-413876"

export default function ContactPage() {
  const mapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6036736406604!2d90.36971337607315!3d23.797123486979796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10048ab6a11%3A0xf409eaf0a6f2e79c!2sCodezyne!5e0!3m2!1sen!2sbd!4v1754828766723!5m2!1sen!2sbd"
  const mapsLink = "https://www.google.com/maps/place/Codezyne/@23.7971235,90.3697134,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c10048ab6a11:0xf409eaf0a6f2e79c!2sCodezyne!5e0!3m2!1sen!2sbd!4v1754828766723!5m2!1sen!2sbd"

  return (
    <main className="min-h-[100dvh]">
      {/* Header / intro */}
      <section className="relative border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-950/30 pointer-events-none" />
        <div className="relative container mx-auto px-4 md:px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{"Contact us"}</h1>
          <p className="mt-2 text-muted-foreground md:text-lg">
            {"Have a question or need help? Send us a message — we typically respond within one business day."}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Form */}
          <Card className="self-start">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-emerald-600" />
                {"Send a message"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Right: Map and details */}
          <Card className="self-start overflow-hidden">
            <CardHeader className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                {"Our location"}
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 mt-0.5" />
                  <span>{BUSINESS_NAME}</span>
                </div>
                <div className="flex items-start gap-2 mt-1">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>{BUSINESS_ADDRESS}</span>
                </div>
                <div className="flex items-start gap-2 mt-1">
                  <Phone className="h-4 w-4 mt-0.5" />
                  <a href={`tel:${BUSINESS_PHONE.replace(/[^+0-9]/g, "")}`} className="underline underline-offset-2">
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="rounded-lg border overflow-hidden bg-muted/10">
                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                  <iframe
                    title="Google Map showing business location"
                    src={mapsEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                    aria-label={"Map of " + BUSINESS_NAME + " at " + BUSINESS_ADDRESS}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <Link href={mapsLink} target="_blank" rel="noopener noreferrer">
                    {"Get directions"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
