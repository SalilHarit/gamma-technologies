import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">Meet the team behind Gamma Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Gamma Technologies was founded with a vision to create innovative software solutions that address
                real-world challenges. As technology enthusiasts with extensive experience in the industry, our founders
                Salil Harit and Kunaal Gadhalay saw an opportunity to build a company that combines technical excellence
                with a deep understanding of business needs.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Though we're a new company, our team brings years of collective experience in software development,
                project management, and business strategy. We're committed to delivering high-quality solutions that
                help our clients succeed in an increasingly digital world.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Gamma Technologies office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-sm text-gray-500">
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-sm text-gray-500">
                  We are committed to delivering high-quality work that exceeds expectations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-sm text-gray-500">
                  We believe in working closely with our clients to ensure their needs are met.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed">
                Meet the founders behind Gamma Technologies
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-8">
            {/* Founder 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-[300px] w-full">
                <Image src="/placeholder.svg?height=600&width=600" alt="Salil Harit" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">Salil Harit</h3>
                <p className="text-gray-500">Co-Founder</p>
                <p className="mt-4 text-sm text-gray-500">
                  With a background in software engineering and business management, Salil brings technical expertise
                  and strategic vision to Gamma Technologies.
                </p>
                <div className="mt-4 flex space-x-4 justify-center">
                  <Link href="#" className="text-gray-500 hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-blue-600">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-blue-600">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Kunaal Gadhalay"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">Kunaal Gadhalay</h3>
                <p className="text-gray-500">Founder & CEO</p>
                <p className="mt-4 text-sm text-gray-500">
                  Kunaal is a technology enthusiast with deep expertise in software architecture and emerging
                  technologies, driving innovation at Gamma Technologies.
                </p>
                <div className="mt-4 flex space-x-4 justify-center">
                  <Link href="#" className="text-gray-500 hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-blue-600">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-blue-600">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}