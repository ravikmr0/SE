import React from "react";
import {
  ChevronDown,
  GraduationCap,
  BookOpen,
  TestTube,
  Library,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  type: "course" | "tutorial" | "mock" | "notes";
  icon: React.ReactNode;
}

interface CourseDropdownProps {
  items?: MenuItem[];
  onSelect?: (itemId: string) => void;
}

const defaultItems: MenuItem[] = [
  {
    id: "courses",
    name: "All Courses",
    description: "Browse all available courses",
    type: "course",
    icon: <GraduationCap className="mr-2 h-4 w-4" />,
  },
  {
    id: "tutorials",
    name: "Tutorials",
    description: "Learn with step-by-step guides",
    type: "tutorial",
    icon: <BookOpen className="mr-2 h-4 w-4" />,
  },
  {
    id: "mock-tests",
    name: "Mock Tests",
    description: "Practice with sample exams",
    type: "mock",
    icon: <TestTube className="mr-2 h-4 w-4" />,
  },
  {
    id: "notes",
    name: "Notes Library",
    description: "Access study materials",
    type: "notes",
    icon: <Library className="mr-2 h-4 w-4" />,
  },
];

const CourseDropdown: React.FC<CourseDropdownProps> = ({
  items = defaultItems,
  onSelect = () => {},
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <span>Learn</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[280px] p-2" align="start">
        <ScrollArea className="h-[280px]">
          {items.map((item) => (
            <DropdownMenuItem key={item.id} onClick={() => onSelect(item.id)}>
              <div className="flex items-center gap-2">
                {item.icon}
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CourseDropdown;
