import React from "react";
import {
  Bell,
  BookOpen,
  Briefcase,
  Check,
  ChevronRight,
  Clock,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface NotificationItem {
  id: string;
  type: "course" | "job" | "test";
  title: string;
  description: string;
  time: string;
  read: boolean;
}

interface NotificationsPanelProps {
  notifications?: NotificationItem[];
  onNotificationClick?: (id: string) => void;
  className?: string;
  isOpen?: boolean;
}

const defaultNotifications: NotificationItem[] = [
  {
    id: "1",
    type: "course",
    title: "New Course Content Available",
    description:
      "UPSC Civil Services 2024 preparation material has been updated",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "job",
    title: "New Job Alert",
    description: "SSC CGL 2024 applications are now open",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "test",
    title: "Test Results Available",
    description: "Your mock test results for IBPS PO are ready",
    time: "2 hours ago",
    read: true,
  },
];

const NotificationsPanel = ({
  notifications = defaultNotifications,
  onNotificationClick = () => {},
  className,
  isOpen = true,
}: NotificationsPanelProps) => {
  if (!isOpen) return null;

  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-4 w-4" />;
      case "job":
        return <Briefcase className="h-4 w-4" />;
      case "test":
        return <Clock className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <div
      className={cn(
        "fixed right-4 top-16 w-80 rounded-md border bg-white shadow-lg",
        className,
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <span className="text-sm text-muted-foreground">
          {notifications.filter((n) => !n.read).length} unread
        </span>
      </div>
      <Separator />
      <ScrollArea className="h-[400px]">
        <div className="flex flex-col gap-1 p-2">
          {notifications.map((notification) => (
            <button
              key={notification.id}
              className={cn(
                "flex items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-accent",
                !notification.read && "bg-accent/50",
              )}
              onClick={() => onNotificationClick(notification.id)}
            >
              <div className="mt-1 text-primary">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{notification.title}</p>
                  {!notification.read && (
                    <span className="flex h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {notification.time}
                </p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </ScrollArea>
      <Separator />
      <div className="p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <Check className="h-4 w-4" /> Mark all as read
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
