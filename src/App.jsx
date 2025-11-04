import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Home,
  Shield,
  ArrowUp,
  Wrench,
  FileText,
  Rocket,
  TrendingUp,
  Building2,
  Zap,
  Sun,
  Droplets,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Award,
  Settings,
  Users
} from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-cyan origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-brand-cyan rounded-lg flex items-center justify-center">
                <Home className="w-7 h-7 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold">DR House Lifting</h1>
                <p className="text-xs text-brand-cyan">Professional Elevation Solutions</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-brand-cyan transition-colors">Services</a>
              <a href="#technology" className="hover:text-brand-cyan transition-colors">Technology</a>
              <a href="#process" className="hover:text-brand-cyan transition-colors">Process</a>
              <a href="#contact" className="bg-brand-cyan text-black px-6 py-2 rounded-lg font-semibold hover:bg-brand-cyan/90 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://drhouselifting.com/wp-content/uploads/2025/11/718295767-Don-brekke-1-e1707774263281-topaz-upscale-4x.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Lift You Up<br />
              <span className="text-gradient">When You Need It Most</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional house lifting services in Florida using advanced Failsafe technology.
              Custom solutions for foundation repairs, flood prevention, and structural elevation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-brand-cyan text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-cyan/90 transition-all inline-flex items-center justify-center"
              >
                Request Consultation
                <ChevronRight className="ml-2" />
              </a>
              <a
                href="#technology"
                className="border-2 border-brand-cyan text-brand-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-cyan/10 transition-all inline-flex items-center justify-center"
              >
                Our Technology
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowUp className="w-6 h-6 animate-bounce rotate-180" />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-zinc-950 py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-brand-cyan mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-brand-cyan mb-1">100+</h3>
              <p className="text-gray-400">Successful Lifts</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield className="w-12 h-12 text-brand-cyan mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-brand-cyan mb-1">Certified</h3>
              <p className="text-gray-400">Failsafe Technology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-brand-cyan mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-brand-cyan mb-1">Expert</h3>
              <p className="text-gray-400">Trained Team</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="w-12 h-12 text-brand-cyan mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-brand-cyan mb-1">FL +</h3>
              <p className="text-gray-400">Regional Service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Lifting Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From custom house lifting to complete setup and logistics, we provide end-to-end solutions
              tailored to your specific structural needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Custom House Lifting",
                description: "Tailored lifting solutions for residential and commercial structures of any size, designed to meet your specific requirements and site conditions.",
                features: ["Site-Specific Planning", "Custom Engineering", "Flexible Solutions"]
              },
              {
                icon: Settings,
                title: "Setup & Logistics",
                description: "Complete project coordination from planning to execution, ensuring seamless operations with minimal disruption to your property.",
                features: ["Equipment Positioning", "Site Safety", "Timeline Management"]
              },
              {
                icon: Wrench,
                title: "Foundation Repairs",
                description: "Access for foundation contractors to repair or completely rebuild foundations using current technology and materials.",
                features: ["Foundation Access", "Repair Support", "Quality Assurance"]
              },
              {
                icon: Droplets,
                title: "Flood Prevention",
                description: "Elevate your structure above flood zones to protect your investment and meet insurance requirements.",
                features: ["Elevation Planning", "Compliance Support", "Insurance Benefits"]
              },
              {
                icon: TrendingUp,
                title: "Property Value Enhancement",
                description: "Increase your home's resale value and usable space by expanding crawlspaces and adding square footage.",
                features: ["Value Addition", "Space Expansion", "ROI Optimization"]
              },
              {
                icon: Zap,
                title: "System Upgrades",
                description: "Easy access for installing or reconfiguring heating, electrical, and plumbing systems to increase efficiency.",
                features: ["System Access", "Energy Efficiency", "Modern Updates"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-brand-cyan transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-brand-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section - Arrow Lift System */}
      <section id="technology" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-brand-cyan/10 border border-brand-cyan/30 rounded-full px-6 py-2 mb-6">
              <Award className="w-5 h-5 text-brand-cyan mr-2" />
              <span className="text-brand-cyan font-semibold">Exclusive Failsafe Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient">Arrow Advantage</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're one of the few companies in the United States authorized to use Failsafe's revolutionary
              Arrow lift system—a game-changing alternative to traditional house lifting methods.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://drhouselifting.com/wp-content/uploads/2025/11/20230915_131319-Don-brekke-scaled-e1707774623272.jpg"
                alt="Arrow Lift System in Action"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-6">Why the Arrow System is Superior</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <Rocket className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Continuous Drive Technology</h4>
                    <p className="text-gray-400">
                      Lift structures up to 25 feet in a single pass without any resets—dramatically
                      faster than traditional methods that require constant adjustments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <Shield className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Unmatched Safety</h4>
                    <p className="text-gray-400">
                      Provides a completely clear workspace beneath elevated structures with no wood
                      cribbing—the safest elevation method available in the market today.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <TrendingUp className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Superior Load Capacity</h4>
                    <p className="text-gray-400">
                      Each tower supports up to 20 tons, with four towers providing 80 tons total capacity.
                      Easily scalable for larger structures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <Zap className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Maximum Efficiency</h4>
                    <p className="text-gray-400">
                      Eliminates labor-intensive wood cribbing and constant jack repositioning, reducing
                      project time and costs significantly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comparison Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-brand-cyan/30 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Arrow System vs. Traditional Methods
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-brand-cyan rounded-full mr-3"></div>
                  <h4 className="font-bold text-lg text-brand-cyan">Arrow Lift System</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Single-pass lifts up to 25 feet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">No wood cribbing required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Clear workspace underneath</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Reduced labor and time costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Enhanced worker safety</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <h4 className="font-bold text-lg text-gray-400">Traditional Hydraulic Jacking</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 border-2 border-gray-600 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                    <span className="text-gray-500">Multiple resets required</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 border-2 border-gray-600 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                    <span className="text-gray-500">Wood cribbing needed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 border-2 border-gray-600 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                    <span className="text-gray-500">Cluttered work area</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 border-2 border-gray-600 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                    <span className="text-gray-500">Higher labor costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 border-2 border-gray-600 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                    <span className="text-gray-500">Limited workspace access</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Project Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A streamlined, professional approach ensuring your project is completed safely,
              efficiently, and to the highest standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                step: "01",
                title: "Pre-Project Planning",
                description: "We visit your site to review the project scope, understand your expectations, and discuss the complete lifting process in detail.",
                details: [
                  "Comprehensive site assessment",
                  "Project scope definition",
                  "Timeline estimation",
                  "Cost transparency"
                ]
              },
              {
                icon: Building2,
                step: "02",
                title: "Plans & Permits",
                description: "We coordinate with structural engineers to develop construction documents and guide the permitting process for compliance.",
                details: [
                  "Engineer coordination",
                  "Building permit acquisition",
                  "Construction documentation",
                  "Foundation contractor guidance"
                ]
              },
              {
                icon: Rocket,
                step: "03",
                title: "Project Lift Off",
                description: "Our expert team arrives on-site to execute the lift with precision, ensuring safety protocols and providing access for repairs.",
                details: [
                  "Safety walk and utility check",
                  "Area securing and access creation",
                  "Beam and tower positioning",
                  "Controlled elevation execution"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-brand-cyan transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <phase.icon className="w-12 h-12 text-brand-cyan" />
                    <span className="text-6xl font-bold text-brand-cyan/10">{phase.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-gray-400 mb-6">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-brand-cyan mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-brand-cyan/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Advantages of <span className="text-gradient">Lifting Your House</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                House lifting isn't just about elevation—it's an investment in your property's
                future, safety, and value.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Increase Resale Value",
                    description: "Add significant value to your property with additional living space and modern foundation infrastructure."
                  },
                  {
                    icon: Building2,
                    title: "Additional Square Footage",
                    description: "Transform crawlspaces into usable areas for bedrooms, offices, media rooms, bathrooms, and more."
                  },
                  {
                    icon: Wrench,
                    title: "Foundation Modernization",
                    description: "Completely rebuild your foundation using current technology, materials, and building codes."
                  },
                  {
                    icon: Zap,
                    title: "Energy Efficiency",
                    description: "Install new heating, electrical, and plumbing systems or reconfigure existing ones for maximum efficiency."
                  },
                  {
                    icon: Sun,
                    title: "Enhanced Aesthetics",
                    description: "Create more natural light inside and improve your home's curb appeal with a fresh exterior aesthetic."
                  },
                  {
                    icon: Droplets,
                    title: "Eliminate Basement Issues",
                    description: "Solve water leakage, sloped foundations, and low ceiling height problems permanently."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start bg-black/50 border border-zinc-800 rounded-lg p-6 hover:border-brand-cyan transition-all"
                  >
                    <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                      <benefit.icon className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img
                src="https://drhouselifting.com/wp-content/uploads/2025/11/20230607_150540-Don-brekke-scaled-e1707671370888.jpg"
                alt="House Lifting Project"
                className="rounded-xl shadow-2xl"
              />
              <img
                src="https://drhouselifting.com/wp-content/uploads/2025/11/20230608_155824-Don-brekke-scaled-e1707671350705.jpg"
                alt="Foundation Work"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-cyan/10 to-black border-y border-brand-cyan/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Elevate Your Property?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join over 100 satisfied customers who have trusted us with their house lifting projects.
              Let's discuss how we can help you.
            </p>
            <a
              href="#contact"
              className="bg-brand-cyan text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-cyan/90 transition-all inline-flex items-center"
            >
              Schedule Your Consultation
              <ChevronRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We're one of the few US companies authorized to use Failsafe technology.
                Contact us today to discuss your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:drhouselifting@gmail.com" className="text-gray-400 hover:text-brand-cyan transition-colors">
                      drhouselifting@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href="tel:2183269093" className="text-gray-400 hover:text-brand-cyan transition-colors">
                      218.326.9093
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Service Area</h4>
                    <p className="text-gray-400">
                      Florida & Surrounding States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-brand-cyan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Exclusive Technology Partner</h4>
                    <p className="text-gray-400 text-sm">
                      DR House Lifting is proud to be one of the select few companies in the United States
                      with authorization to utilize Failsafe's revolutionary Arrow and Atlas lifting systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <select className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors">
                    <option>Select a service</option>
                    <option>Foundation Repair</option>
                    <option>Flood Prevention</option>
                    <option>Space Expansion</option>
                    <option>System Upgrades</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-cyan text-black py-4 rounded-lg font-bold text-lg hover:bg-brand-cyan/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold">DR House Lifting</h3>
                <p className="text-xs text-gray-400">Professional Elevation Solutions</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} DR House Lifting. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Authorized Failsafe Technology Partner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
