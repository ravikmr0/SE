import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  HelpCircle,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="container mx-auto py-12 px-4 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Help Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Find answers to your questions and get the support you need.
          </motion.p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for help articles..."
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        {/* Quick Help Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FileText className="h-8 w-8 text-blue-500" />,
              title: "Documentation",
              description: "Browse our comprehensive guides and tutorials",
              action: "View Docs",
            },
            {
              icon: <HelpCircle className="h-8 w-8 text-green-500" />,
              title: "FAQs",
              description: "Find answers to commonly asked questions",
              action: "View FAQs",
            },
            {
              icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
              title: "Live Chat",
              description: "Chat with our support team in real-time",
              action: "Start Chat",
            },
            {
              icon: <Phone className="h-8 w-8 text-red-500" />,
              title: "Call Support",
              description: "Speak directly with our customer service",
              action: "Call Now",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-center">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline">{category.action}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Popular FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I reset my password?",
                answer:
                  "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link.",
              },
              {
                question: "How can I enroll in a course?",
                answer:
                  "You can enroll in a course by navigating to the course page and clicking the 'Enroll Now' button. Follow the payment instructions to complete your enrollment.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept credit/debit cards, net banking, UPI, and various digital wallets. We also offer EMI options for select courses.",
              },
              {
                question: "How do I access my course materials?",
                answer:
                  "After enrollment, you can access your course materials by logging into your account and navigating to 'My Courses'. Click on the course to view all available materials.",
              },
              {
                question: "What is your refund policy?",
                answer:
                  "We offer a 7-day refund policy for most courses. If you're not satisfied with the course, you can request a refund within 7 days of purchase.",
              },
              {
                question: "How long will I have access to the course?",
                answer:
                  "Once enrolled, you will have lifetime access to the course materials, including any future updates to the content.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All FAQs</Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Send us a message and our
                support team will get back to you as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue in detail..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Address</h4>
                    <p className="text-muted-foreground">
                      123 Education Street, Learning Hub, New Delhi - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-muted-foreground">
                      contact@sigmaedify.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Help Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Help Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Account & Profile",
                topics: [
                  "Account Creation",
                  "Profile Management",
                  "Password Reset",
                  "Account Verification",
                ],
              },
              {
                title: "Courses & Enrollment",
                topics: [
                  "Course Access",
                  "Enrollment Process",
                  "Course Materials",
                  "Certificates",
                ],
              },
              {
                title: "Payments & Billing",
                topics: [
                  "Payment Methods",
                  "Invoices",
                  "Refunds",
                  "EMI Options",
                ],
              },
              {
                title: "Technical Support",
                topics: [
                  "Video Playback Issues",
                  "Download Problems",
                  "Mobile App Support",
                  "Browser Compatibility",
                ],
              },
              {
                title: "Mock Tests & Assessments",
                topics: [
                  "Test Access",
                  "Result Analysis",
                  "Performance Reports",
                  "Test Submissions",
                ],
              },
              {
                title: "Mentorship & Doubt Solving",
                topics: [
                  "Scheduling Sessions",
                  "Doubt Resolution",
                  "Mentor Feedback",
                  "Study Plan",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="w-full mt-4 justify-between"
                    >
                      <span>View Articles</span>
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default HelpCenter;
