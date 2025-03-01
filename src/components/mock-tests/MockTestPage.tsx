import React, { useState } from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import MockTestInterface, { TestResults } from "./MockTestInterface";
import TestResultsComponent from "./TestResults";
import Leaderboard from "./Leaderboard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample data for demonstration
const sampleQuestions = [
  {
    id: 1,
    text: "Which of the following is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
    explanation:
      "New Delhi is the capital city of India. It is also the seat of all three branches of the Government of India.",
    subject: "Geography",
  },
  {
    id: 2,
    text: "The Constitution of India was adopted on:",
    options: [
      "15 August 1947",
      "26 January 1950",
      "26 November 1949",
      "30 January 1948",
    ],
    correctAnswer: 2,
    explanation:
      "The Constitution of India was adopted on 26 November 1949 and came into effect on 26 January 1950, which is celebrated as Republic Day in India.",
    subject: "Polity",
  },
  {
    id: 3,
    text: "Who is known as the 'Father of the Indian Constitution'?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "B.R. Ambedkar",
      "Sardar Vallabhbhai Patel",
    ],
    correctAnswer: 2,
    explanation:
      "Dr. B.R. Ambedkar is known as the 'Father of the Indian Constitution'. He was the Chairman of the Drafting Committee of the Constituent Assembly.",
    subject: "Polity",
  },
  {
    id: 4,
    text: "Which of the following rivers does NOT flow into the Arabian Sea?",
    options: ["Narmada", "Tapti", "Godavari", "Mahi"],
    correctAnswer: 2,
    explanation:
      "Godavari flows into the Bay of Bengal, while Narmada, Tapti, and Mahi flow into the Arabian Sea.",
    subject: "Geography",
  },
  {
    id: 5,
    text: "The Fiscal Deficit in the Union Budget does NOT include:",
    options: [
      "Borrowings",
      "Other liabilities",
      "State's share of taxes and duties",
      "Interest payments",
    ],
    correctAnswer: 3,
    explanation:
      "Fiscal Deficit is the difference between total expenditure and total receipts excluding borrowings. Interest payments are included in the expenditure side of the budget.",
    subject: "Economy",
  },
  {
    id: 6,
    text: "Which of the following is NOT a Fundamental Right guaranteed by the Indian Constitution?",
    options: [
      "Right to Equality",
      "Right to Freedom",
      "Right to Property",
      "Right to Constitutional Remedies",
    ],
    correctAnswer: 2,
    explanation:
      "Right to Property was originally a Fundamental Right but was removed by the 44th Amendment in 1978. It is now a legal right under Article 300A.",
    subject: "Polity",
  },
  {
    id: 7,
    text: "The Monetary Policy in India is formulated by:",
    options: [
      "Ministry of Finance",
      "NITI Aayog",
      "Reserve Bank of India",
      "Planning Commission",
    ],
    correctAnswer: 2,
    explanation:
      "The Monetary Policy in India is formulated by the Reserve Bank of India (RBI). The Monetary Policy Committee (MPC) of the RBI is responsible for fixing the benchmark interest rate.",
    subject: "Economy",
  },
  {
    id: 8,
    text: "Which of the following mountain ranges is the oldest in India?",
    options: ["Himalayas", "Aravalli", "Western Ghats", "Vindhya"],
    correctAnswer: 1,
    explanation:
      "The Aravalli Range is the oldest mountain range in India and one of the oldest mountain systems in the world.",
    subject: "Geography",
  },
  {
    id: 9,
    text: "The concept of 'Welfare State' in the Indian Constitution is embodied in:",
    options: [
      "Fundamental Rights",
      "Directive Principles of State Policy",
      "Preamble",
      "Fundamental Duties",
    ],
    correctAnswer: 1,
    explanation:
      "The concept of 'Welfare State' is embodied in the Directive Principles of State Policy (Part IV, Articles 36-51) of the Indian Constitution.",
    subject: "Polity",
  },
  {
    id: 10,
    text: "Which of the following is NOT a member of BRICS?",
    options: ["Brazil", "Russia", "Indonesia", "South Africa"],
    correctAnswer: 2,
    explanation:
      "BRICS is an acronym for an association of five major emerging economies: Brazil, Russia, India, China, and South Africa. Indonesia is not a member of BRICS.",
    subject: "International Relations",
  },
];

const sampleLeaderboardEntries = [
  {
    id: "1",
    rank: 1,
    name: "Rahul Sharma",
    score: 95,
    timeTaken: 1250,
    date: "2023-06-15",
    badge: "Gold",
  },
  {
    id: "2",
    rank: 2,
    name: "Priya Patel",
    score: 92,
    timeTaken: 1320,
    date: "2023-06-16",
    badge: "Silver",
  },
  {
    id: "3",
    rank: 3,
    name: "Amit Kumar",
    score: 90,
    timeTaken: 1400,
    date: "2023-06-14",
    badge: "Bronze",
  },
  {
    id: "4",
    rank: 4,
    name: "Sneha Gupta",
    score: 88,
    timeTaken: 1280,
    date: "2023-06-17",
    badge: "Top 10",
  },
  {
    id: "5",
    rank: 5,
    name: "Vikram Singh",
    score: 85,
    timeTaken: 1350,
    date: "2023-06-15",
    badge: "Top 10",
  },
  {
    id: "6",
    rank: 6,
    name: "Neha Sharma",
    score: 82,
    timeTaken: 1420,
    date: "2023-06-16",
    badge: "Top 10",
  },
  {
    id: "7",
    rank: 7,
    name: "Rajesh Verma",
    score: 80,
    timeTaken: 1380,
    date: "2023-06-14",
    badge: "Top 10",
  },
  {
    id: "8",
    rank: 8,
    name: "Ananya Desai",
    score: 78,
    timeTaken: 1450,
    date: "2023-06-17",
    badge: "Top 10",
  },
  {
    id: "9",
    rank: 9,
    name: "Karan Malhotra",
    score: 75,
    timeTaken: 1320,
    date: "2023-06-15",
    badge: "Top 10",
  },
  {
    id: "10",
    rank: 10,
    name: "Pooja Reddy",
    score: 72,
    timeTaken: 1400,
    date: "2023-06-16",
    badge: "Top 10",
  },
];

const userRank = {
  id: "42",
  rank: 42,
  name: "You",
  score: 65,
  timeTaken: 1520,
  date: "2023-06-18",
};

enum TestState {
  INTRO,
  TAKING_TEST,
  RESULTS,
  LEADERBOARD,
}

const MockTestPage: React.FC = () => {
  const [testState, setTestState] = useState<TestState>(TestState.INTRO);
  const [testResults, setTestResults] = useState<TestResults | null>(null);

  const handleStartTest = () => {
    setTestState(TestState.TAKING_TEST);
  };

  const handleTestComplete = (results: TestResults) => {
    setTestResults(results);
    setTestState(TestState.RESULTS);
  };

  const handleViewLeaderboard = () => {
    setTestState(TestState.LEADERBOARD);
  };

  const handleRetry = () => {
    setTestState(TestState.TAKING_TEST);
  };

  const handleTakeAnotherTest = () => {
    setTestState(TestState.INTRO);
  };

  const handleBackToList = () => {
    // In a real app, this would navigate back to the test list
    window.location.href = "/mock-tests";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-grow">
        {testState === TestState.INTRO && (
          <div className="container mx-auto py-12 px-4">
            <Button
              variant="outline"
              className="mb-6"
              onClick={handleBackToList}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mock Tests
            </Button>

            <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground p-6">
                <h1 className="text-2xl font-bold mb-2">
                  UPSC Prelims General Studies Mock Test
                </h1>
                <p>Test your knowledge with this comprehensive mock test</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-3">
                      Test Information
                    </h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>Duration: 30 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span>Questions: 10 MCQs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-muted-foreground" />
                        <span>Difficulty: Medium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span>Attempted by: 1,245 students</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold mb-3">
                      Subjects Covered
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-100">
                        Polity
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm dark:bg-green-900 dark:text-green-100">
                        Geography
                      </div>
                      <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm dark:bg-purple-900 dark:text-purple-100">
                        Economy
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm dark:bg-amber-900 dark:text-amber-100">
                        History
                      </div>
                      <div className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm dark:bg-red-900 dark:text-red-100">
                        International Relations
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent p-4 rounded-lg mb-6">
                  <h2 className="text-lg font-semibold mb-2">Instructions</h2>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • Each question has four options with one correct answer
                    </li>
                    <li>
                      • You can mark questions for review and return to them
                      later
                    </li>
                    <li>
                      • The timer will start as soon as you begin the test
                    </li>
                    <li>
                      • Results will be displayed immediately after submission
                    </li>
                    <li>
                      • You can review your answers after completing the test
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <Button size="lg" onClick={handleStartTest}>
                    Start Test Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {testState === TestState.TAKING_TEST && (
          <MockTestInterface
            testId="upsc-prelims-1"
            testName="UPSC Prelims General Studies Mock Test"
            duration={30} // 30 minutes
            questions={sampleQuestions}
            category="UPSC"
            difficulty="Medium"
            onComplete={handleTestComplete}
          />
        )}

        {testState === TestState.RESULTS && testResults && (
          <TestResultsComponent
            results={testResults}
            questions={sampleQuestions}
            onRetry={handleRetry}
            onViewLeaderboard={handleViewLeaderboard}
            onTakeAnotherTest={handleTakeAnotherTest}
          />
        )}

        {testState === TestState.LEADERBOARD && (
          <div className="container mx-auto py-8 px-4">
            <Button
              variant="outline"
              className="mb-6"
              onClick={() => setTestState(TestState.RESULTS)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Results
            </Button>

            <Leaderboard
              testId="upsc-prelims-1"
              testName="UPSC Prelims General Studies Mock Test"
              category="UPSC"
              entries={sampleLeaderboardEntries}
              userRank={userRank}
            />
          </div>
        )}
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default MockTestPage;
