import React, { useState, useEffect } from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Clock,
  Flag,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  BarChart,
  Users,
  FileText,
  Target,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define question interface
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
}

// Define test results interface
interface TestResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  skippedQuestions: number;
  timeTaken: number;
  subjectPerformance: Record<
    string,
    {
      total: number;
      correct: number;
      score: number;
    }
  >;
  answeredQuestions: {
    questionId: number;
    userAnswer: number | null;
    isCorrect: boolean;
  }[];
}

// Generate 100 questions with 4 options each
const generateQuestions = (): Question[] => {
  const questions: Question[] = [];

  // English questions (25)
  for (let i = 0; i < 25; i++) {
    questions.push({
      id: i + 1,
      text: `English Question ${i + 1}: Choose the correct meaning of the underlined phrase in the sentence.`,
      options: [
        `Option A for English question ${i + 1}`,
        `Option B for English question ${i + 1}`,
        `Option C for English question ${i + 1}`,
        `Option D for English question ${i + 1}`,
      ],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for English question ${i + 1}. This explains why the correct answer is the right choice.`,
      subject: "English",
    });
  }

  // Reasoning questions (25)
  for (let i = 0; i < 25; i++) {
    questions.push({
      id: i + 26,
      text: `Reasoning Question ${i + 1}: Analyze the given pattern and identify the missing element.`,
      options: [
        `Option A for Reasoning question ${i + 1}`,
        `Option B for Reasoning question ${i + 1}`,
        `Option C for Reasoning question ${i + 1}`,
        `Option D for Reasoning question ${i + 1}`,
      ],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Reasoning question ${i + 1}. This explains the logical pattern and why the correct answer fits.`,
      subject: "Reasoning",
    });
  }

  // Mathematics questions (25)
  for (let i = 0; i < 25; i++) {
    questions.push({
      id: i + 51,
      text: `Mathematics Question ${i + 1}: Solve the following problem.`,
      options: [
        `Option A for Mathematics question ${i + 1}`,
        `Option B for Mathematics question ${i + 1}`,
        `Option C for Mathematics question ${i + 1}`,
        `Option D for Mathematics question ${i + 1}`,
      ],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for Mathematics question ${i + 1}. This shows the step-by-step solution to the problem.`,
      subject: "Mathematics",
    });
  }

  // GK/GS questions (25)
  for (let i = 0; i < 25; i++) {
    const subSubjects = ["History", "Polity", "Economy", "Science"];
    const subSubject =
      subSubjects[Math.floor(Math.random() * subSubjects.length)];

    questions.push({
      id: i + 76,
      text: `${subSubject} Question ${i + 1}: ${getGKQuestionText(subSubject, i)}`,
      options: [
        `Option A for ${subSubject} question ${i + 1}`,
        `Option B for ${subSubject} question ${i + 1}`,
        `Option C for ${subSubject} question ${i + 1}`,
        `Option D for ${subSubject} question ${i + 1}`,
      ],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `Explanation for ${subSubject} question ${i + 1}. This provides the factual background and context for the correct answer.`,
      subject: `GK/GS (${subSubject})`,
    });
  }

  return questions;
};

// Helper function to generate GK question text based on sub-subject
const getGKQuestionText = (subSubject: string, index: number): string => {
  switch (subSubject) {
    case "History":
      return "Which of the following historical events occurred first?";
    case "Polity":
      return "Which article of the Indian Constitution deals with the following provision?";
    case "Economy":
      return "Which economic concept is best described by the following statement?";
    case "Science":
      return "Which scientific principle explains the following phenomenon?";
    default:
      return "Choose the correct answer for the following question.";
  }
};

enum TestState {
  INTRO,
  TAKING_TEST,
  RESULTS,
}

const SpecificTest: React.FC = () => {
  const [testState, setTestState] = useState<TestState>(TestState.INTRO);
  const [questions] = useState<Question[]>(generateQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(100).fill(null),
  );
  const [markedForReview, setMarkedForReview] = useState<boolean[]>(
    Array(100).fill(false),
  );
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [testResults, setTestResults] = useState<TestResults | null>(null);

  // Timer effect
  useEffect(() => {
    if (testState !== TestState.TAKING_TEST || timeLeft <= 0) {
      if (testState === TestState.TAKING_TEST && timeLeft <= 0) {
        handleTestCompletion();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, testState]);

  const handleStartTest = () => {
    setTestState(TestState.TAKING_TEST);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const toggleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentQuestionIndex] =
      !newMarkedForReview[currentQuestionIndex];
    setMarkedForReview(newMarkedForReview);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmitTest = () => {
    setIsSubmitDialogOpen(true);
  };

  const confirmSubmit = () => {
    setIsSubmitDialogOpen(false);
    handleTestCompletion();
  };

  const handleTestCompletion = () => {
    // Calculate results
    const timeTaken = 60 * 60 - timeLeft;
    const subjectPerformance: Record<
      string,
      { total: number; correct: number; score: number }
    > = {};
    let correctAnswers = 0;

    const answeredQuestions = questions.map((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === question.correctAnswer;

      if (isCorrect) correctAnswers++;

      // Track subject performance
      const subject = question.subject.split(" ")[0]; // Get main subject category
      if (!subjectPerformance[subject]) {
        subjectPerformance[subject] = { total: 0, correct: 0, score: 0 };
      }

      subjectPerformance[subject].total++;
      if (isCorrect) subjectPerformance[subject].correct++;

      return {
        questionId: question.id,
        userAnswer,
        isCorrect,
      };
    });

    // Calculate subject scores
    Object.keys(subjectPerformance).forEach((subject) => {
      const { total, correct } = subjectPerformance[subject];
      subjectPerformance[subject].score = (correct / total) * 100;
    });

    const results: TestResults = {
      score: (correctAnswers / questions.length) * 100,
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers:
        questions.length -
        correctAnswers -
        answers.filter((a) => a === null).length,
      skippedQuestions: answers.filter((a) => a === null).length,
      timeTaken,
      subjectPerformance,
      answeredQuestions,
    };

    setTestResults(results);
    setTestState(TestState.RESULTS);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${remainingSeconds}s`;
  };

  const getQuestionStatus = (index: number) => {
    if (markedForReview[index]) return "review";
    if (answers[index] !== null) return "answered";
    return "unanswered";
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-blue-600 dark:text-blue-400";
    if (score >= 40) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-600";
    if (score >= 60) return "bg-blue-600";
    if (score >= 40) return "bg-yellow-600";
    return "bg-red-600";
  };

  const handleBackToTests = () => {
    window.location.href = "/mock-tests";
  };

  const handleRetryTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers(Array(100).fill(null));
    setMarkedForReview(Array(100).fill(false));
    setTimeLeft(60 * 60);
    setTestResults(null);
    setTestState(TestState.INTRO);
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
              onClick={handleBackToTests}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mock Tests
            </Button>

            <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-primary-foreground p-6">
                <h1 className="text-2xl font-bold mb-2">
                  Comprehensive Mock Test (100 Questions)
                </h1>
                <p>
                  Test your knowledge across English, Reasoning, Mathematics,
                  and General Knowledge
                </p>
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
                        <span>Duration: 60 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span>Questions: 100 MCQs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-muted-foreground" />
                        <span>Difficulty: Medium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span>Attempted by: 2,345 students</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold mb-3">
                      Subjects Covered
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-100">
                        English (25 Questions)
                      </div>
                      <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm dark:bg-purple-900 dark:text-purple-100">
                        Reasoning (25 Questions)
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm dark:bg-green-900 dark:text-green-100">
                        Mathematics (25 Questions)
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm dark:bg-amber-900 dark:text-amber-100">
                        GK/GS (25 Questions)
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
                    <li>• There is no negative marking in this test</li>
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
          <div className="flex flex-col h-full">
            {/* Header with timer and progress */}
            <div className="bg-card shadow-sm p-4 sticky top-0 z-10">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="text-xl font-bold">Comprehensive Mock Test</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">100 Questions</Badge>
                    <Badge
                      variant="outline"
                      className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                    >
                      Medium
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span
                      className={`font-mono ${timeLeft < 300 ? "text-red-500 font-bold" : ""}`}
                    >
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                  <Button variant="destructive" onClick={handleSubmitTest}>
                    Submit Test
                  </Button>
                </div>
              </div>
              <Progress
                value={((currentQuestionIndex + 1) / questions.length) * 100}
                className="h-2"
              />
              <div className="flex justify-between text-sm mt-1">
                <span>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(
                    ((currentQuestionIndex + 1) / questions.length) * 100,
                  )}
                  % completed
                </span>
              </div>
            </div>

            {/* Main content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Question and options */}
              <div className="flex-1 p-6 overflow-y-auto">
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        Question {currentQuestionIndex + 1}:{" "}
                        {questions[currentQuestionIndex].text}
                      </CardTitle>
                      <Badge>{questions[currentQuestionIndex].subject}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {questions[currentQuestionIndex].options.map(
                        (option, index) => (
                          <div
                            key={index}
                            className={`p-4 border rounded-md cursor-pointer transition-colors ${answers[currentQuestionIndex] === index ? "bg-primary/10 border-primary" : "hover:bg-accent"}`}
                            onClick={() => handleAnswerSelect(index)}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[currentQuestionIndex] === index ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"}`}
                              >
                                {answers[currentQuestionIndex] === index && (
                                  <CheckCircle className="h-4 w-4" />
                                )}
                              </div>
                              <span>{option}</span>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={toggleMarkForReview}
                    className={
                      markedForReview[currentQuestionIndex]
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        : ""
                    }
                  >
                    <Flag className="mr-2 h-4 w-4" />
                    {markedForReview[currentQuestionIndex]
                      ? "Marked for Review"
                      : "Mark for Review"}
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={goToPreviousQuestion}
                      disabled={currentQuestionIndex === 0}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={goToNextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Question palette */}
              <div className="w-64 bg-card border-l p-4 overflow-y-auto hidden md:block">
                <h3 className="font-semibold mb-3">Question Palette</h3>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, index) => {
                    const status = getQuestionStatus(index);
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`h-8 w-8 p-0 ${currentQuestionIndex === index ? "border-primary" : ""} ${
                          status === "answered"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : ""
                        } ${status === "review" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" : ""}`}
                        onClick={() => goToQuestion(index)}
                      >
                        {index + 1}
                      </Button>
                    );
                  })}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-green-100 dark:bg-green-900 rounded"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-yellow-100 dark:bg-yellow-900 rounded"></div>
                    <span>Marked for Review</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 border rounded"></div>
                    <span>Not Visited</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={handleSubmitTest}
                  >
                    Submit Test
                  </Button>
                </div>
              </div>
            </div>

            {/* Submit confirmation dialog */}
            <AlertDialog
              open={isSubmitDialogOpen}
              onOpenChange={setIsSubmitDialogOpen}
            >
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Submit Test?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to submit your test? This action
                    cannot be undone.
                    {answers.filter((a) => a === null).length > 0 && (
                      <div className="mt-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                        <AlertTriangle className="h-5 w-5" />
                        <span>
                          You have {answers.filter((a) => a === null).length}{" "}
                          unanswered questions.
                        </span>
                      </div>
                    )}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={confirmSubmit}>
                    Submit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}

        {testState === TestState.RESULTS && testResults && (
          <div className="container mx-auto py-8 px-4">
            <Button
              variant="outline"
              className="mb-6"
              onClick={handleBackToTests}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mock Tests
            </Button>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Test Results</h1>
                <p className="text-muted-foreground">
                  Here's how you performed on this test
                </p>
              </div>

              {/* Score Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Overall Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div
                        className={`text-5xl font-bold mb-2 ${getScoreColor(testResults.score)}`}
                      >
                        {Math.round(testResults.score)}%
                      </div>
                      <Progress
                        value={testResults.score}
                        className="h-2 mb-4"
                        indicatorClassName={getProgressColor(testResults.score)}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Questions Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>Correct</span>
                        </div>
                        <span className="font-semibold">
                          {testResults.correctAnswers} /{" "}
                          {testResults.totalQuestions}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                          <span>Incorrect</span>
                        </div>
                        <span className="font-semibold">
                          {testResults.incorrectAnswers} /{" "}
                          {testResults.totalQuestions}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-2"></div>
                          <span>Skipped</span>
                        </div>
                        <span className="font-semibold">
                          {testResults.skippedQuestions} /{" "}
                          {testResults.totalQuestions}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Time & Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-blue-500 mr-2" />
                          <span>Time Taken</span>
                        </div>
                        <span className="font-semibold">
                          {formatTime(testResults.timeTaken)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-purple-500 mr-2" />
                          <span>Your Rank</span>
                        </div>
                        <span className="font-semibold">156 / 2,345</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Target className="h-5 w-5 text-green-500 mr-2" />
                          <span>Percentile</span>
                        </div>
                        <span className="font-semibold">93.4%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Subject Performance */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Subject-wise Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(testResults.subjectPerformance).map(
                      ([subject, data]) => (
                        <div key={subject}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{subject}</span>
                            <span
                              className={`font-semibold ${getScoreColor(data.score)}`}
                            >
                              {Math.round(data.score)}% ({data.correct}/
                              {data.total})
                            </span>
                          </div>
                          <Progress
                            value={data.score}
                            className="h-2"
                            indicatorClassName={getProgressColor(data.score)}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Question Review */}
              <Card>
                <CardHeader>
                  <CardTitle>Question Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All Questions</TabsTrigger>
                      <TabsTrigger value="correct">
                        Correct ({testResults.correctAnswers})
                      </TabsTrigger>
                      <TabsTrigger value="incorrect">
                        Incorrect ({testResults.incorrectAnswers})
                      </TabsTrigger>
                      <TabsTrigger value="skipped">
                        Skipped ({testResults.skippedQuestions})
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-6">
                      {questions.slice(0, 10).map((question, index) => {
                        const userAnswer =
                          testResults.answeredQuestions[index].userAnswer;
                        const isCorrect =
                          testResults.answeredQuestions[index].isCorrect;
                        const isSkipped = userAnswer === null;

                        return (
                          <div
                            key={question.id}
                            className="border rounded-lg p-4"
                          >
                            <div className="flex items-start gap-2 mb-3">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${isCorrect ? "bg-green-100 text-green-700" : isSkipped ? "bg-gray-100 text-gray-700" : "bg-red-100 text-red-700"}`}
                              >
                                {isCorrect ? (
                                  <CheckCircle className="h-4 w-4" />
                                ) : isSkipped ? (
                                  <span className="text-xs font-bold">S</span>
                                ) : (
                                  <XCircle className="h-4 w-4" />
                                )}
                              </div>
                              <div>
                                <h3 className="font-medium">
                                  Question {index + 1}: {question.text}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Subject: {question.subject}
                                </p>
                              </div>
                            </div>

                            <div className="ml-8 space-y-2">
                              {question.options.map((option, optIndex) => (
                                <div
                                  key={optIndex}
                                  className={`p-3 border rounded-md ${optIndex === question.correctAnswer ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : optIndex === userAnswer ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800" : ""}`}
                                >
                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center ${optIndex === question.correctAnswer ? "border-green-500 text-green-500" : optIndex === userAnswer ? "border-red-500 text-red-500" : "border-gray-300"}`}
                                    >
                                      {optIndex === question.correctAnswer && (
                                        <CheckCircle className="h-3 w-3" />
                                      )}
                                      {optIndex === userAnswer &&
                                        optIndex !== question.correctAnswer && (
                                          <XCircle className="h-3 w-3" />
                                        )}
                                    </div>
                                    <span
                                      className={`${optIndex === question.correctAnswer ? "text-green-700 dark:text-green-300" : optIndex === userAnswer ? "text-red-700 dark:text-red-300" : ""}`}
                                    >
                                      {option}
                                    </span>
                                  </div>
                                </div>
                              ))}

                              {/* Explanation */}
                              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-800">
                                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                                  Explanation:
                                </p>
                                <p className="text-sm mt-1 text-blue-700 dark:text-blue-200">
                                  {question.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {questions.length > 10 && (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground mb-2">
                            Showing 10 of {questions.length} questions
                          </p>
                          <Button variant="outline">Load More Questions</Button>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="correct">
                      {/* Similar structure for correct questions */}
                      <div className="text-center py-4 text-muted-foreground">
                        Showing correct answers section
                      </div>
                    </TabsContent>

                    <TabsContent value="incorrect">
                      {/* Similar structure for incorrect questions */}
                      <div className="text-center py-4 text-muted-foreground">
                        Showing incorrect answers section
                      </div>
                    </TabsContent>

                    <TabsContent value="skipped">
                      {/* Similar structure for skipped questions */}
                      <div className="text-center py-4 text-muted-foreground">
                        Showing skipped questions section
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button variant="outline" onClick={handleRetryTest}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retry This Test
                </Button>
                <Button variant="default">
                  <BarChart className="mr-2 h-4 w-4" />
                  View Leaderboard
                </Button>
                <Button variant="default" onClick={handleBackToTests}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Take Another Test
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default SpecificTest;
