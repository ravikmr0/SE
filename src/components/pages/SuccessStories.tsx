import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, Award, Trophy, GraduationCap } from "lucide-react";

const SuccessStories: React.FC = () => {
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
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Meet our students who turned their dreams into reality with
            dedication, hard work, and Sigma Edify's guidance.
          </motion.p>
        </div>

        {/* Featured Success Story */}
        <div className="bg-accent rounded-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
                  Featured Story
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Rahul Sharma, IAS (AIR 45)
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <div className="relative pl-8 mb-6">
                <Quote className="absolute left-0 top-0 h-6 w-6 text-primary/40" />
                <p className="text-lg italic">
                  Sigma Edify transformed my UPSC preparation journey. The
                  structured courses, expert guidance, and personalized feedback
                  helped me secure AIR 45 in my very first attempt. The mock
                  interviews were particularly helpful in building my confidence
                  for the personality test.
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                Rahul joined our UPSC comprehensive program after completing his
                engineering degree. With consistent effort and our strategic
                guidance, he cleared all three stages of the examination with
                excellent scores.
              </p>
              <Button className="self-start">Watch Rahul's Interview</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] md:min-h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="Rahul Sharma"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Patel",
                achievement: "SSC CGL (Rank 12)",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
                testimonial:
                  "The SSC CGL course at Sigma Edify is exceptionally well-structured. The shortcuts and techniques taught helped me solve questions quickly and accurately.",
              },
              {
                name: "Arun Kumar",
                achievement: "SBI PO",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                testimonial:
                  "The banking awareness section and mock tests were game-changers for my SBI PO preparation. The interview preparation module was particularly helpful.",
              },
              {
                name: "Neha Singh",
                achievement: "UPSC CSE (AIR 137)",
                image:
                  "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                testimonial:
                  "After two unsuccessful attempts, I joined Sigma Edify. The mentorship and strategy sessions completely changed my approach, helping me secure a top rank.",
              },
              {
                name: "Vikram Reddy",
                achievement: "RRB NTPC",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                testimonial:
                  "Coming from a rural background, I found the bilingual content and affordable courses at Sigma Edify perfect for my needs. Cleared RRB NTPC in my first attempt!",
              },
              {
                name: "Meera Joshi",
                achievement: "CTET (Both Papers)",
                image:
                  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                testimonial:
                  "The child development and pedagogy sections were explained so clearly. The practice questions matched the actual exam pattern perfectly.",
              },
              {
                name: "Rajat Sharma",
                achievement: "IBPS PO",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                testimonial:
                  "The sectional tests and speed improvement techniques helped me excel in the IBPS PO exam. The current affairs updates were comprehensive and exam-focused.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-bold">{story.name}</h3>
                      <p className="text-white/90 text-sm">
                        {story.achievement}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="relative pl-6 mb-4">
                      <Quote className="absolute left-0 top-0 h-4 w-4 text-primary/40" />
                      <p className="text-sm italic text-muted-foreground">
                        {story.testimonial}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Success Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
                value: "15,000+",
                label: "Students Trained",
              },
              {
                icon: <Trophy className="h-8 w-8 text-yellow-500" />,
                value: "5,000+",
                label: "Selections",
              },
              {
                icon: <Award className="h-8 w-8 text-purple-500" />,
                value: "200+",
                label: "Top 100 Ranks",
              },
              {
                icon: <Star className="h-8 w-8 text-red-500" />,
                value: "95%",
                label: "Success Rate",
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
                <p className="text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exam-wise Success */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Exam-wise Success Rate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                exam: "UPSC Civil Services",
                rate: "92%",
                selections: "500+",
                topRanks: "50+ in Top 100",
              },
              {
                exam: "SSC Exams",
                rate: "95%",
                selections: "2000+",
                topRanks: "100+ in Top 500",
              },
              {
                exam: "Banking Exams",
                rate: "97%",
                selections: "1500+",
                topRanks: "200+ in Top 1000",
              },
              {
                exam: "Teaching Exams",
                rate: "94%",
                selections: "800+",
                topRanks: "150+ in Top 500",
              },
            ].map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{data.exam}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-2xl font-bold text-primary">
                    {data.rate}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent p-3 rounded-md text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      Selections
                    </p>
                    <p className="font-bold">{data.selections}</p>
                  </div>
                  <div className="bg-accent p-3 rounded-md text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      Top Ranks
                    </p>
                    <p className="font-bold">{data.topRanks}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Share Your Story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary/10 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">Share Your Success Story</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you a Sigma Edify student who has achieved success in your
            exams? We'd love to hear your story and feature it on our platform
            to inspire others.
          </p>
          <Button size="lg">Submit Your Story</Button>
        </motion.div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default SuccessStories;
