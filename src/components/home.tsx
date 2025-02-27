import React from "react";
import Header from "./navigation/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  TestTube,
  Briefcase,
  Check,
  CreditCard,
  CalendarDays,
  Shield,
  Users,
  Trophy,
  Target,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeProps {
  isLoggedIn?: boolean;
}

const features = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Expert Faculty",
    description: "Learn from experienced educators and top rankers",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Comprehensive Content",
    description: "Well-structured study materials and resources",
  },
  {
    icon: <TestTube className="h-6 w-6" />,
    title: "Regular Mock Tests",
    description: "Practice with exam-pattern questions",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Job Updates",
    description: "Latest notifications and career guidance",
  },
];

const stats = [
  {
    value: "15K+",
    label: "Active Students",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
  {
    value: "100+",
    label: "Expert Faculty",
  },
  {
    value: "50+",
    label: "Courses",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "per month",
    description: "Perfect for getting started",
    features: [
      "Access to basic courses",
      "Limited mock tests",
      "Basic study materials",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹1,999",
    duration: "per month",
    description: "Best for serious aspirants",
    features: [
      "Access to all courses",
      "Unlimited mock tests",
      "Complete study materials",
      "Priority support",
      "Live doubt clearing",
      "Performance analytics",
    ],
  },
  {
    name: "Premium",
    price: "₹2,999",
    duration: "per month",
    description: "For maximum preparation",
    features: [
      "Everything in Pro",
      "1-on-1 mentorship",
      "Interview preparation",
      "Personalized feedback",
      "Career guidance",
      "Lifetime access",
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: <Youtube className="h-5 w-5" />,
  },
];

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Our Courses", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Latest News", href: "#" },
  { name: "Career Guide", href: "#" },
  { name: "Help Center", href: "#" },
];

const popularExams = [
  { name: "UPSC Civil Services", href: "#" },
  { name: "SSC CGL", href: "#" },
  { name: "Bank PO", href: "#" },
  { name: "Railway RRB", href: "#" },
  { name: "Teaching (CTET)", href: "#" },
  { name: "Defence Services", href: "#" },
];

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "123 Education Street, Learning Hub, New Delhi - 110001",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "+91 98765 43210",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "contact@sigmaedify.com",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Monday - Saturday: 9:00 AM - 7:00 PM",
  },
];

const legalLinks = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Refund Policy", href: "#" },
];

const paymentFeatures = [
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Multiple payment options with end-to-end encryption",
  },
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Flexible Plans",
    description: "Choose monthly or yearly subscriptions",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Money Back Guarantee",
    description: "7-day refund policy for your peace of mind",
  },
];

const Home = ({ isLoggedIn = false }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={isLoggedIn} />

      {/* Hero Section */}
      <section className="py-20 bg-[#050c1c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-10 animate-grid-spin"></div>

        {/* Animated blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-fast"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl"
              >
                Prepare for Government Exams with Confidence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl mb-8 text-gray-300"
              >
                Join thousands of successful candidates who have achieved their
                dreams with our comprehensive exam preparation platform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <Button
                  size="lg"
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* 3D Animated LMS System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative w-full max-w-md aspect-square"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl animate-float-slow">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-white/20 rounded"></div>
                      <div className="w-8 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-2">
                    <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-white/20 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-white/10 rounded"></div>
                      <div className="aspect-video bg-white/10 rounded"></div>
                      <div className="aspect-video bg-white/10 rounded"></div>
                      <div className="aspect-video bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-0 w-56 h-56 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-xl animate-float-medium">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-white/20 rounded"></div>
                      <div className="w-8 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-2">
                    <div className="flex justify-between mb-2">
                      <div className="w-16 h-4 bg-white/20 rounded"></div>
                      <div className="w-8 h-4 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-white/30 rounded-full"></div>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-white/30 rounded-full"></div>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-10 w-60 h-60 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-xl animate-float-fast">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-white/20 rounded"></div>
                      <div className="w-8 h-1 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-lg p-2">
                    <div className="grid grid-cols-3 gap-1 mb-3">
                      <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-white/20"></div>
                      </div>
                      <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-white/20"></div>
                      </div>
                      <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-white/20"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-white/20 rounded"></div>
                      <div className="w-full h-2 bg-white/20 rounded"></div>
                      <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to crack your dream exam
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that best suits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        {plan.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="default">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-center md:text-left"
              >
                <div className="mx-auto md:mx-0">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Preparation?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful candidates who have achieved their
            goals with Sigma Edify.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="default">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/sigmaedify.svg" alt="Logo" className="h-8 w-8" />
                <span className="font-bold text-xl">Sigma Edify</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering aspirants to achieve their dreams through
                comprehensive exam preparation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Exams */}
            <div>
              <h3 className="font-semibold mb-4">Popular Exams</h3>
              <ul className="space-y-2">
                {popularExams.map((exam) => (
                  <li key={exam.name}>
                    <a
                      href={exam.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {exam.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start space-x-3">
                    <span className="text-primary mt-0.5">{info.icon}</span>
                    <span className="text-muted-foreground text-sm">
                      {info.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sigma Edify. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
