import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                Comprehensive software solutions tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {/* Service 1 */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Custom Software Development</CardTitle>
                <CardDescription>Tailored solutions for your business</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500 mb-4">
                  We design and develop custom software applications that address your specific business challenges and
                  requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Enterprise applications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Integration solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Legacy system modernization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Web & Mobile Applications</CardTitle>
                <CardDescription>Engaging digital experiences</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500 mb-4">
                  We create responsive, user-friendly applications for web and mobile platforms that deliver exceptional
                  user experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Progressive web apps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Native mobile applications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Cross-platform solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>E-commerce platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>AI & Machine Learning</CardTitle>
                <CardDescription>Intelligent solutions</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500 mb-4">
                  We leverage artificial intelligence and machine learning to build intelligent systems that automate
                  processes and provide valuable insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Computer vision</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Recommendation systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Additional Services</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed">
                Complementary offerings to enhance your software solutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
            {/* Additional Service 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We help businesses migrate to the cloud and build cloud-native applications that are scalable, secure,
                  and cost-effective.
                </p>
              </CardContent>
            </Card>

            {/* Additional Service 2 */}
            <Card>
              <CardHeader>
                <CardTitle>DevOps & CI/CD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We implement DevOps practices and continuous integration/continuous deployment pipelines to streamline
                  your development process.
                </p>
              </CardContent>
            </Card>

            {/* Additional Service 3 */}
            <Card>
              <CardHeader>
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We create intuitive, user-friendly interfaces that enhance user experience and drive engagement with
                  your applications.
                </p>
              </CardContent>
            </Card>

            {/* Additional Service 4 */}
            <Card>
              <CardHeader>
                <CardTitle>Consulting & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We provide expert guidance on technology selection, architecture design, and digital transformation
                  strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg/relaxed">
                How we approach software development projects
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4 lg:gap-12 mt-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold">Discovery</h3>
              <p className="text-sm text-gray-500">
                We work with you to understand your business needs and project requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-sm text-gray-500">
                We create a detailed project plan with timelines, milestones, and deliverables.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-sm text-gray-500">
                We build your solution using agile methodologies with regular updates and feedback.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold">Delivery</h3>
              <p className="text-sm text-gray-500">
                We deploy your solution and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}