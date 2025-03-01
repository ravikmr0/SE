import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
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
            About Sigma Edify
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Empowering aspirants to achieve their dreams through comprehensive
            exam preparation.
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2018, Sigma Edify began with a simple mission: to make
              quality education accessible to all government exam aspirants,
              regardless of their background or location.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small coaching center in New Delhi has now grown
              into a comprehensive online platform serving thousands of students
              across India. Our team of experienced educators, many of whom are
              former toppers themselves, are dedicated to helping students
              achieve their dreams.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to be one of India's fastest-growing e-learning
              platforms for government exam preparation, with a track record of
              successful candidates in UPSC, SSC, Banking, and other competitive
              exams.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Our Mission and Vision */}
        <div className="bg-accent rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize education by providing affordable, high-quality
                learning resources that help aspirants prepare effectively for
                government exams, thereby enabling them to secure their dream
                careers in public service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become India's most trusted e-learning platform for
                government exam preparation, known for our comprehensive
                content, innovative teaching methodologies, and student-centric
                approach.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Founder & CEO",
                bio: "Former IAS officer with 15 years of teaching experience",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
              },
              {
                name: "Priya Sharma",
                position: "Academic Director",
                bio: "UPSC topper (AIR 25) and education management expert",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
              },
              {
                name: "Amit Verma",
                position: "Head of Content",
                bio: "Specialized in creating exam-focused study materials",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
              },
              {
                name: "Neha Gupta",
                position: "Technology Lead",
                bio: "EdTech specialist with focus on interactive learning",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-primary/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from content creation to student support.",
              },
              {
                title: "Accessibility",
                description:
                  "We believe quality education should be accessible to all, regardless of geographical or financial constraints.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously innovate our teaching methodologies and technology to enhance the learning experience.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty and ethical conduct in all our operations.",
              },
              {
                title: "Student-Centric",
                description:
                  "We put our students' needs and success at the center of everything we do.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We are committed to constantly improving our courses, platform, and services based on feedback and results.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary/10 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're preparing for UPSC, SSC, Banking, or any other
            government exam, we're here to support your journey every step of
            the way.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Start Learning Today
          </button>
        </motion.div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default AboutUs;
