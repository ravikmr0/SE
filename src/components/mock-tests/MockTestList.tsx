import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BarChart, Timer } from "lucide-react";

interface MockTest {
  id: string;
  title: string;
  category: string;
  duration: string;
  questionsCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  participants: number;
}

const mockTests: MockTest[] = [
  {
    id: "1",
    title: "UPSC Prelims Full Mock",
    category: "UPSC",
    duration: "2 hours",
    questionsCount: 100,
    difficulty: "Advanced",
    participants: 1234,
  },
  {
    id: "2",
    title: "SSC CGL Tier 1 Practice",
    category: "SSC",
    duration: "1 hour",
    questionsCount: 50,
    difficulty: "Intermediate",
    participants: 2156,
  },
  {
    id: "3",
    title: "Bank PO Quantitative",
    category: "Banking",
    duration: "30 mins",
    questionsCount: 25,
    difficulty: "Beginner",
    participants: 987,
  },
];

const getDifficultyColor = (difficulty: MockTest["difficulty"]) => {
  switch (difficulty) {
    case "Beginner":
      return "text-green-500";
    case "Intermediate":
      return "text-yellow-500";
    case "Advanced":
      return "text-red-500";
    default:
      return "text-primary";
  }
};

export default function MockTestList() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Mock Tests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Practice with exam-pattern questions and track your progress
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {test.title}
                      </CardTitle>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {test.category}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${getDifficultyColor(test.difficulty)}`}
                    >
                      {test.difficulty}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {test.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {test.questionsCount} Questions
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {test.participants.toLocaleString()} Attempts
                      </span>
                    </div>
                  </div>
                  <Button className="w-full" variant="default">
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
