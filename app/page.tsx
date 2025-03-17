import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Layers } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Gamma Technologies
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                Innovative software solutions for the modern world
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-blue-600 hover:bg-white/10">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide end-to-end software development solutions tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-2 bg-blue-100 rounded-full">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Custom Software Development</h3>
              <p className="text-sm text-gray-500">
                Bespoke software solutions designed to address your specific business challenges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-2 bg-blue-100 rounded-full">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">AI & Machine Learning</h3>
              <p className="text-sm text-gray-500">
                Intelligent solutions that leverage the latest in artificial intelligence and machine learning.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-2 bg-blue-100 rounded-full">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Web & Mobile Applications</h3>
              <p className="text-sm text-gray-500">
                Responsive and intuitive applications for web and mobile platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Gamma Technologies</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded with a vision to transform businesses through technology.
              </p>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Gamma Technologies is a forward-thinking software development company dedicated to creating innovative
                solutions that drive business growth. As a new player in the industry, we bring fresh perspectives and
                cutting-edge approaches to software development.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Let's discuss how Gamma Technologies can help you achieve your goals.
              </p>
            </div>
            <div className="mx-auto">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}