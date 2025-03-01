import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  Bell,
} from "lucide-react";

const LatestNews: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );

  const categories = [
    "All",
    "Exam Updates",
    "Notifications",
    "Results",
    "Study Tips",
    "Success Stories",
  ];

  const newsItems = [
    {
      id: 1,
      title: "UPSC Civil Services 2024 Notification Released",
      excerpt:
        "The Union Public Service Commission has released the official notification for Civil Services Examination 2024. Check eligibility, important dates, and application process.",
      date: "February 14, 2024",
      readTime: "3 min read",
      author: "Exam Team",
      category: "Notifications",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "SSC CGL 2023 Final Results Announced",
      excerpt:
        "Staff Selection Commission has declared the final results for Combined Graduate Level Examination 2023. Check your results and cut-off marks.",
      date: "January 28, 2024",
      readTime: "2 min read",
      author: "Results Team",
      category: "Results",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "5 Effective Strategies to Improve Your Answer Writing Skills",
      excerpt:
        "Discover proven techniques to enhance your answer writing skills for UPSC Mains examination. Learn how to structure your answers and present your thoughts effectively.",
      date: "January 15, 2024",
      readTime: "5 min read",
      author: "Mentorship Team",
      category: "Study Tips",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 4,
      title: "IBPS PO 2024 Calendar Released",
      excerpt:
        "Institute of Banking Personnel Selection has released the calendar for IBPS PO 2024 examination. Mark these important dates for your preparation.",
      date: "January 10, 2024",
      readTime: "2 min read",
      author: "Banking Team",
      category: "Exam Updates",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      title: "Meet Rahul Sharma: From Small Town to IAS Officer",
      excerpt:
        "Read the inspiring journey of Rahul Sharma who overcame numerous challenges to secure AIR 45 in UPSC CSE 2023 with Sigma Edify's guidance.",
      date: "December 28, 2023",
      readTime: "7 min read",
      author: "Success Team",
      category: "Success Stories",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 6,
      title: "New Batch for UPSC CSE 2025 Starting Soon",
      excerpt:
        "Sigma Edify is launching a comprehensive program for UPSC CSE 2025 aspirants. Early bird registrations open now with special discounts.",
      date: "December 20, 2023",
      readTime: "2 min read",
      author: "Course Team",
      category: "Exam Updates",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      title: "RRB NTPC 2023 Results Declared",
      excerpt:
        "Railway Recruitment Board has announced the results for Non-Technical Popular Categories Examination 2023. Check your results now.",
      date: "December 15, 2023",
      readTime: "2 min read",
      author: "Results Team",
      category: "Results",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80",
    },
    {
      id: 8,
      title: "How to Manage Time Effectively During Exam Preparation",
      excerpt:
        "Learn practical time management techniques to maximize your productivity during government exam preparation. Create a balanced study schedule.",
      date: "December 10, 2023",
      readTime: "4 min read",
      author: "Mentorship Team",
      category: "Study Tips",
      image:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    },
  ];

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === null ||
      selectedCategory === "All" ||
      item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.find((item) => item.featured);

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
            Latest News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Stay informed about exam notifications, results, and preparation
            tips for government exams.
          </motion.p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search news and updates..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ||
                    (category === "All" && selectedCategory === null)
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setSelectedCategory(category === "All" ? null : category)
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured News */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{featuredNews.category}</Badge>
                    <Badge
                      variant="outline"
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200"
                    >
                      <Bell className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6 gap-4">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {featuredNews.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {featuredNews.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {featuredNews.author}
                    </div>
                  </div>
                  <Button className="self-start">Read Full Article</Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredNews
              .filter((item) => !item.featured)
              .map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary">{news.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{news.title}</CardTitle>
                      <div className="flex items-center text-xs text-muted-foreground gap-3 mt-2">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {news.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {news.readTime}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm">
                        {news.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                      >
                        <span>Read More</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-accent rounded-lg">
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest exam
            notifications, results, and preparation tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="Enter your email address" type="email" />
            <Button>Subscribe</Button>
          </div>
        </motion.div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default LatestNews;
