import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, BookOpen } from "lucide-react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface TutorialSection {
  id: string;
  title: string;
  topics: {
    id: string;
    title: string;
    path: string;
  }[];
}

interface TutorialLayoutProps {
  children: React.ReactNode;
  activeTopicId?: string;
  sections?: TutorialSection[];
}

const defaultSections: TutorialSection[] = [
  {
    id: "history",
    title: "History",
    topics: [
      {
        id: "ancient-history",
        title: "Ancient History",
        path: "/tutorials/history/ancient-history",
      },
      {
        id: "medieval-history",
        title: "Medieval History",
        path: "/tutorials/history/medieval-history",
      },
      {
        id: "modern-history",
        title: "Modern History",
        path: "/tutorials/history/modern-history",
      },
      {
        id: "freedom-struggle",
        title: "Indian Freedom Struggle",
        path: "/tutorials/history/freedom-struggle",
      },
    ],
  },
  {
    id: "politics",
    title: "Politics",
    topics: [
      {
        id: "indian-constitution",
        title: "Indian Constitution",
        path: "/tutorials/politics/indian-constitution",
      },
      {
        id: "governance",
        title: "Governance",
        path: "/tutorials/politics/governance",
      },
      {
        id: "international-relations",
        title: "International Relations",
        path: "/tutorials/politics/international-relations",
      },
    ],
  },
  {
    id: "economy",
    title: "Economy",
    topics: [
      {
        id: "basics",
        title: "Economic Basics",
        path: "/tutorials/economy/basics",
      },
      {
        id: "indian-economy",
        title: "Indian Economy",
        path: "/tutorials/economy/indian-economy",
      },
      {
        id: "budget",
        title: "Budget & Fiscal Policy",
        path: "/tutorials/economy/budget",
      },
      {
        id: "banking",
        title: "Banking & Finance",
        path: "/tutorials/economy/banking",
      },
    ],
  },
  {
    id: "science",
    title: "Science",
    topics: [
      { id: "physics", title: "Physics", path: "/tutorials/science/physics" },
      {
        id: "chemistry",
        title: "Chemistry",
        path: "/tutorials/science/chemistry",
      },
      { id: "biology", title: "Biology", path: "/tutorials/science/biology" },
      {
        id: "environment",
        title: "Environment & Ecology",
        path: "/tutorials/science/environment",
      },
    ],
  },
  {
    id: "static-gk",
    title: "Static GK",
    topics: [
      {
        id: "geography",
        title: "Geography",
        path: "/tutorials/static-gk/geography",
      },
      {
        id: "art-culture",
        title: "Art & Culture",
        path: "/tutorials/static-gk/art-culture",
      },
      {
        id: "awards",
        title: "Awards & Honors",
        path: "/tutorials/static-gk/awards",
      },
      { id: "sports", title: "Sports", path: "/tutorials/static-gk/sports" },
    ],
  },
];

const TutorialLayout: React.FC<TutorialLayoutProps> = ({
  children,
  activeTopicId,
  sections = defaultSections,
}) => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.map((s) => s.id),
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden p-4 border-b">
          <Button
            variant="outline"
            onClick={toggleSidebar}
            className="w-full flex items-center justify-between"
          >
            <span>Tutorial Menu</span>
            {isSidebarOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Sidebar */}
        <div
          className={cn(
            "border-r w-full md:w-72 lg:w-80 flex-shrink-0 transition-all duration-300 ease-in-out",
            isSidebarOpen ? "block" : "hidden md:block",
          )}
        >
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Tutorials</h2>
              </div>

              <div className="space-y-1">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className="border-b pb-2 mb-2 last:border-0"
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-between font-medium"
                      onClick={() => toggleSection(section.id)}
                    >
                      <span>{section.title}</span>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>

                    {expandedSections.includes(section.id) && (
                      <div className="ml-4 mt-1 space-y-1">
                        {section.topics.map((topic) => (
                          <Button
                            key={topic.id}
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-sm pl-4",
                              activeTopicId === topic.id &&
                                "bg-accent text-accent-foreground",
                            )}
                            onClick={() => navigate(topic.path)}
                          >
                            {topic.title}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto flex flex-col">
          <div className="container mx-auto py-8 px-4 flex-grow">
            {children}
          </div>
          <Footer />
          <LegalFooter />
        </div>
      </div>
    </div>
  );
};

export default TutorialLayout;
