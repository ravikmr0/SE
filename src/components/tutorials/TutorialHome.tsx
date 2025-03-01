import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  History,
  LandPlot,
  Lightbulb,
  Microscope,
  Globe,
} from "lucide-react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";

interface TutorialCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
}

const categories: TutorialCategory[] = [
  {
    id: "history",
    title: "History",
    description:
      "Ancient, Medieval, Modern History and Indian Freedom Struggle",
    icon: <History className="h-8 w-8" />,
    color: "bg-blue-100 dark:bg-blue-900",
    path: "/tutorials/history",
  },
  {
    id: "politics",
    title: "Politics",
    description: "Indian Constitution, Governance and International Relations",
    icon: <LandPlot className="h-8 w-8" />,
    color: "bg-red-100 dark:bg-red-900",
    path: "/tutorials/politics",
  },
  {
    id: "economy",
    title: "Economy",
    description: "Economic Basics, Indian Economy, Budget and Banking",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "bg-green-100 dark:bg-green-900",
    path: "/tutorials/economy",
  },
  {
    id: "science",
    title: "Science",
    description: "Physics, Chemistry, Biology and Environment",
    icon: <Microscope className="h-8 w-8" />,
    color: "bg-purple-100 dark:bg-purple-900",
    path: "/tutorials/science",
  },
  {
    id: "static-gk",
    title: "Static GK",
    description: "Geography, Art & Culture, Awards and Sports",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-amber-100 dark:bg-amber-900",
    path: "/tutorials/static-gk",
  },
];

const TutorialHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="container mx-auto py-12 px-4 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Government Exam Tutorials</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning resources for all major government exams.
            Structured content with examples and practice questions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/tutorials/${category.id}`)}
            >
              <CardHeader className="pb-2">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} mb-2`}
                >
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Explore Tutorials</span>
                  <BookOpen className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-accent rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Our Tutorials?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Structured Learning</h3>
              <p className="text-sm text-muted-foreground">
                Organized content with clear progression from basics to advanced
                topics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Exam-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Content tailored specifically for government exam patterns and
                requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Practice questions, examples and visual aids to enhance
                understanding
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose a subject category above or explore our most popular
            tutorials below.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate("/tutorials/history/modern-history")}
            >
              Modern History
            </Button>
            <Button
              onClick={() =>
                navigate("/tutorials/politics/indian-constitution")
              }
            >
              Indian Constitution
            </Button>
            <Button
              onClick={() => navigate("/tutorials/economy/indian-economy")}
            >
              Indian Economy
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default TutorialHome;
