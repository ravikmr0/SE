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
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  Users,
  Award,
  Target,
  Shield,
  Check,
  CreditCard,
  FileText,
} from "lucide-react";

const CareerGuide: React.FC = () => {
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
            Career Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive resources to help you navigate your government job
            journey from preparation to success.
          </motion.p>
        </div>

        {/* Career Paths Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Civil Services",
                icon: <Briefcase className="h-10 w-10 text-blue-500" />,
                description:
                  "Join the prestigious administrative services like IAS, IPS, IFS and shape national policies.",
                exams: [
                  "UPSC Civil Services",
                  "State Public Service Commission",
                ],
                color: "bg-blue-50 dark:bg-blue-900/20",
              },
              {
                title: "Banking & Finance",
                icon: <CreditCard className="h-10 w-10 text-green-500" />,
                description:
                  "Build a stable career in the banking sector with opportunities in public and private banks.",
                exams: [
                  "IBPS PO/Clerk",
                  "SBI PO/Clerk",
                  "RBI Grade B",
                  "NABARD",
                ],
                color: "bg-green-50 dark:bg-green-900/20",
              },
              {
                title: "Staff Selection",
                icon: <Users className="h-10 w-10 text-purple-500" />,
                description:
                  "Join various central government departments through SSC examinations.",
                exams: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC Stenographer"],
                color: "bg-purple-50 dark:bg-purple-900/20",
              },
              {
                title: "Railways",
                icon: <Briefcase className="h-10 w-10 text-red-500" />,
                description:
                  "Be part of one of the world's largest railway networks with diverse job profiles.",
                exams: ["RRB NTPC", "RRB Group D", "RRB ALP", "RRB JE"],
                color: "bg-red-50 dark:bg-red-900/20",
              },
              {
                title: "Teaching",
                icon: <GraduationCap className="h-10 w-10 text-amber-500" />,
                description:
                  "Shape the future generation through teaching positions in government schools and colleges.",
                exams: ["CTET", "KVS", "NVS", "UGC NET", "CSIR NET"],
                color: "bg-amber-50 dark:bg-amber-900/20",
              },
              {
                title: "Defense Services",
                icon: <Shield className="h-10 w-10 text-slate-500" />,
                description:
                  "Serve the nation by joining the armed forces through various entry schemes.",
                exams: ["NDA", "CDS", "AFCAT", "Indian Navy Entrance Test"],
                color: "bg-slate-50 dark:bg-slate-900/20",
              },
            ].map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full hover:shadow-md transition-shadow ${career.color}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{career.title}</CardTitle>
                      {career.icon}
                    </div>
                    <CardDescription className="mt-2">
                      {career.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">Popular Exams:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {career.exams.map((exam, i) => (
                        <li key={i}>{exam}</li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Explore Career Path
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exam Calendar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Exam Calendar</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Exam Name</th>
                  <th className="border p-3 text-left">Notification Date</th>
                  <th className="border p-3 text-left">Application Deadline</th>
                  <th className="border p-3 text-left">Exam Date</th>
                  <th className="border p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "UPSC Civil Services Prelims 2024",
                    notification: "February 14, 2024",
                    deadline: "March 5, 2024",
                    examDate: "May 26, 2024",
                  },
                  {
                    name: "SSC CGL 2024",
                    notification: "April 2, 2024",
                    deadline: "May 3, 2024",
                    examDate: "July 15-30, 2024",
                  },
                  {
                    name: "IBPS PO 2024",
                    notification: "August 1, 2024",
                    deadline: "August 21, 2024",
                    examDate: "October 12, 2024",
                  },
                  {
                    name: "RRB NTPC 2024",
                    notification: "March 20, 2024",
                    deadline: "April 19, 2024",
                    examDate: "June 10-30, 2024",
                  },
                  {
                    name: "CTET July 2024",
                    notification: "May 5, 2024",
                    deadline: "June 5, 2024",
                    examDate: "July 7, 2024",
                  },
                ].map((exam, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    }
                  >
                    <td className="border p-3 font-medium">{exam.name}</td>
                    <td className="border p-3">{exam.notification}</td>
                    <td className="border p-3">{exam.deadline}</td>
                    <td className="border p-3">{exam.examDate}</td>
                    <td className="border p-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Full Exam Calendar
            </Button>
          </div>
        </div>

        {/* Preparation Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Preparation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Set Clear Goals
                  </h3>
                  <p className="text-muted-foreground">
                    Define your target exam, understand its pattern, and set
                    realistic timelines for preparation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Master the Basics
                  </h3>
                  <p className="text-muted-foreground">
                    Focus on building strong fundamentals before moving to
                    advanced topics. Create a solid foundation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Time Management
                  </h3>
                  <p className="text-muted-foreground">
                    Create a balanced study schedule that covers all subjects
                    and includes regular revision and practice tests.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Regular Practice
                  </h3>
                  <p className="text-muted-foreground">
                    Solve previous years' question papers and take regular mock
                    tests to assess your preparation level.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Group Study</h3>
                  <p className="text-muted-foreground">
                    Join study groups or discussion forums to exchange ideas and
                    clarify doubts with peers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Stay Consistent
                  </h3>
                  <p className="text-muted-foreground">
                    Maintain consistency in your preparation. Regular study is
                    more effective than cramming at the last minute.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interview Preparation */}
        <div className="mb-16 bg-accent rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Interview Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Ace Your Government Job Interview
              </h3>
              <p className="text-muted-foreground mb-4">
                The interview is a crucial stage in many government job
                selection processes. Our comprehensive interview preparation
                resources help you:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Understand common interview questions and prepare effective
                    answers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Develop confidence through mock interview sessions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Learn proper etiquette, body language, and communication
                    skills
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Stay updated on current affairs and domain-specific
                    knowledge
                  </span>
                </li>
              </ul>
              <Button className="mt-6">Explore Interview Resources</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Interview preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Career Counseling CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-primary/10 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            Need Personalized Career Guidance?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a one-on-one session with our career counselors who are experts
            in government job opportunities and preparation strategies.
          </p>
          <Button size="lg">Schedule Career Counseling</Button>
        </motion.div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default CareerGuide;
