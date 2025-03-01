import React from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
} from "lucide-react";

interface TutorialContentProps {
  title: string;
  content: React.ReactNode;
  prevTutorial?: {
    title: string;
    path: string;
  };
  nextTutorial?: {
    title: string;
    path: string;
  };
}

const TutorialContent: React.FC<TutorialContentProps> = ({
  title,
  content,
  prevTutorial,
  nextTutorial,
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {/* Tutorial Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
        {content}
      </div>

      {/* Feedback and Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b mb-8">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Was this helpful?
          </span>
          <Button variant="outline" size="sm" className="gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>Yes</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <ThumbsDown className="h-4 w-4" />
            <span>No</span>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Bookmark className="h-4 w-4" />
            <span>Save</span>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        {prevTutorial ? (
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => (window.location.href = prevTutorial.path)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous: {prevTutorial.title}</span>
          </Button>
        ) : (
          <div></div>
        )}

        {nextTutorial && (
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => (window.location.href = nextTutorial.path)}
          >
            <span>Next: {nextTutorial.title}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TutorialContent;
