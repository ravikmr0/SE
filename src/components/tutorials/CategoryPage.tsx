import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
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

interface Topic {
  id: string;
  title: string;
  description: string;
  path: string;
}

interface CategoryData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  topics: Topic[];
}

const categories: Record<string, CategoryData> = {
  history: {
    id: "history",
    title: "History",
    description:
      "Explore the rich tapestry of Indian history from ancient civilizations to the freedom struggle",
    icon: <History className="h-12 w-12" />,
    color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
    topics: [
      {
        id: "ancient-history",
        title: "Ancient History",
        description:
          "Indus Valley Civilization, Vedic Period, Mauryan Empire and more",
        path: "/tutorials/history/ancient-history",
      },
      {
        id: "medieval-history",
        title: "Medieval History",
        description:
          "Delhi Sultanate, Mughal Empire, Vijayanagara Empire and regional kingdoms",
        path: "/tutorials/history/medieval-history",
      },
      {
        id: "modern-history",
        title: "Modern History",
        description:
          "British conquest, socio-religious reforms, and early nationalist movements",
        path: "/tutorials/history/modern-history",
      },
      {
        id: "freedom-struggle",
        title: "Indian Freedom Struggle",
        description: "From the Revolt of 1857 to Independence in 1947",
        path: "/tutorials/history/freedom-struggle",
      },
    ],
  },
  politics: {
    id: "politics",
    title: "Politics",
    description:
      "Understand the political framework of India and its position in global affairs",
    icon: <LandPlot className="h-12 w-12" />,
    color: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
    topics: [
      {
        id: "indian-constitution",
        title: "Indian Constitution",
        description:
          "Structure, key features, fundamental rights, and constitutional amendments",
        path: "/tutorials/politics/indian-constitution",
      },
      {
        id: "governance",
        title: "Governance",
        description:
          "Structure of Indian governance, Union and State executives, local governance",
        path: "/tutorials/politics/governance",
      },
      {
        id: "international-relations",
        title: "International Relations",
        description:
          "India's foreign policy, relations with major powers and neighbors",
        path: "/tutorials/politics/international-relations",
      },
    ],
  },
  economy: {
    id: "economy",
    title: "Economy",
    description:
      "Master the economic concepts essential for understanding India's economic landscape",
    icon: <Lightbulb className="h-12 w-12" />,
    color: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
    topics: [
      {
        id: "basics",
        title: "Economic Basics",
        description:
          "Fundamental economic concepts, demand and supply, national income, money and banking",
        path: "/tutorials/economy/basics",
      },
      {
        id: "indian-economy",
        title: "Indian Economy",
        description:
          "Structure, key sectors, economic reforms, and major policies",
        path: "/tutorials/economy/indian-economy",
      },
      {
        id: "budget",
        title: "Budget & Fiscal Policy",
        description:
          "Union Budget, revenue and capital budgets, fiscal policy instruments",
        path: "/tutorials/economy/budget",
      },
      {
        id: "banking",
        title: "Banking & Finance",
        description:
          "Banking system, monetary policy, financial inclusion initiatives",
        path: "/tutorials/economy/banking",
      },
    ],
  },
  science: {
    id: "science",
    title: "Science",
    description: "Explore scientific concepts relevant to government exams",
    icon: <Microscope className="h-12 w-12" />,
    color:
      "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
    topics: [
      {
        id: "physics",
        title: "Physics",
        description:
          "Key concepts in mechanics, electricity, magnetism, and modern physics",
        path: "/tutorials/science/physics",
      },
      {
        id: "chemistry",
        title: "Chemistry",
        description: "Organic, inorganic, and physical chemistry concepts",
        path: "/tutorials/science/chemistry",
      },
      {
        id: "biology",
        title: "Biology",
        description: "Human physiology, cell biology, genetics, and ecology",
        path: "/tutorials/science/biology",
      },
      {
        id: "environment",
        title: "Environment & Ecology",
        description:
          "Biodiversity, conservation, pollution, and environmental policies",
        path: "/tutorials/science/environment",
      },
    ],
  },
  "static-gk": {
    id: "static-gk",
    title: "Static GK",
    description:
      "Build your general knowledge foundation with these essential topics",
    icon: <Globe className="h-12 w-12" />,
    color: "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100",
    topics: [
      {
        id: "geography",
        title: "Geography",
        description:
          "Physical, human, and economic geography of India and the world",
        path: "/tutorials/static-gk/geography",
      },
      {
        id: "art-culture",
        title: "Art & Culture",
        description:
          "Indian art forms, architecture, dance, music, and cultural traditions",
        path: "/tutorials/static-gk/art-culture",
      },
      {
        id: "awards",
        title: "Awards & Honors",
        description:
          "National and international awards, prizes, and recognitions",
        path: "/tutorials/static-gk/awards",
      },
      {
        id: "sports",
        title: "Sports",
        description:
          "Major sporting events, tournaments, trophies, and famous personalities",
        path: "/tutorials/static-gk/sports",
      },
    ],
  },
};

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();

  if (!categoryId || !categories[categoryId]) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="container mx-auto py-12 px-4 text-center flex-grow">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="mb-8">The category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/tutorials")}>
            Back to Tutorials
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const category = categories[categoryId];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="container mx-auto py-12 px-4 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center p-4 rounded-full mb-6 ${category.color}`}
          >
            {category.icon}
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {category.title} Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {category.topics.map((topic) => (
            <Card
              key={topic.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(topic.path)}
            >
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Tutorials */}
        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => navigate("/tutorials")}>
            <BookOpen className="mr-2 h-4 w-4" />
            Back to All Tutorials
          </Button>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default CategoryPage;
