import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Clock, User } from "lucide-react";

interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  score: number;
  timeTaken: number; // in seconds
  date: string;
  badge?: string;
}

interface LeaderboardProps {
  testId: string;
  testName: string;
  category: string;
  entries: LeaderboardEntry[];
  userRank?: LeaderboardEntry;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  testId,
  testName,
  category,
  entries,
  userRank,
}) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m ${remainingSeconds}s`;
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:
        return (
          <span className="w-5 h-5 inline-flex items-center justify-center">
            {rank}
          </span>
        );
    }
  };

  const getBadgeVariant = (badge?: string) => {
    if (!badge) return undefined;

    switch (badge.toLowerCase()) {
      case "gold":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "silver":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
      case "bronze":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100";
      case "top 10":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      default:
        return undefined;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">
            {testName} - {category}
          </p>
        </div>

        <Tabs defaultValue="all-time">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all-time">All Time</TabsTrigger>
              <TabsTrigger value="this-month">This Month</TabsTrigger>
              <TabsTrigger value="this-week">This Week</TabsTrigger>
            </TabsList>

            <Badge variant="outline" className="ml-auto">
              Total Participants: {entries.length}
            </Badge>
          </div>

          <TabsContent value="all-time">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                {/* User's rank if available */}
                {userRank && (
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <User className="mr-2 h-5 w-5 text-primary" />
                      Your Ranking
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b">
                            <th className="pb-2 font-medium">Rank</th>
                            <th className="pb-2 font-medium">Name</th>
                            <th className="pb-2 font-medium text-right">
                              Score
                            </th>
                            <th className="pb-2 font-medium text-right">
                              Time
                            </th>
                            <th className="pb-2 font-medium text-right">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                                {getRankIcon(userRank.rank)}
                              </div>
                              <span>{userRank.rank}</span>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center">
                                <span className="font-medium">
                                  {userRank.name}
                                </span>
                                {userRank.badge && (
                                  <Badge
                                    className={`ml-2 ${getBadgeVariant(userRank.badge)}`}
                                  >
                                    {userRank.badge}
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="py-3 text-right font-semibold">
                              {userRank.score}%
                            </td>
                            <td className="py-3 text-right">
                              {formatTime(userRank.timeTaken)}
                            </td>
                            <td className="py-3 text-right text-muted-foreground">
                              {userRank.date}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Leaderboard table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th className="pb-2 font-medium">Rank</th>
                        <th className="pb-2 font-medium">Name</th>
                        <th className="pb-2 font-medium text-right">Score</th>
                        <th className="pb-2 font-medium text-right">Time</th>
                        <th className="pb-2 font-medium text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry) => (
                        <tr key={entry.id} className="border-b last:border-0">
                          <td className="py-3 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                              {getRankIcon(entry.rank)}
                            </div>
                            <span>{entry.rank}</span>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center">
                              <span className="font-medium">{entry.name}</span>
                              {entry.badge && (
                                <Badge
                                  className={`ml-2 ${getBadgeVariant(entry.badge)}`}
                                >
                                  {entry.badge}
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="py-3 text-right font-semibold">
                            {entry.score}%
                          </td>
                          <td className="py-3 text-right">
                            {formatTime(entry.timeTaken)}
                          </td>
                          <td className="py-3 text-right text-muted-foreground">
                            {entry.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="this-month">
            {/* Similar structure as above, but filtered for this month */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  This feature will be available soon.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="this-week">
            {/* Similar structure as above, but filtered for this week */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  This feature will be available soon.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Rewards and Badges Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Rewards & Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-1">Gold Badge</h3>
                <p className="text-sm text-muted-foreground">
                  Top 1% performers
                </p>
              </div>

              <div className="p-4 border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Medal className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-1">Silver Badge</h3>
                <p className="text-sm text-muted-foreground">
                  Top 5% performers
                </p>
              </div>

              <div className="p-4 border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <Medal className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-semibold mb-1">Bronze Badge</h3>
                <p className="text-sm text-muted-foreground">
                  Top 10% performers
                </p>
              </div>

              <div className="p-4 border rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">Top 10</h3>
                <p className="text-sm text-muted-foreground">
                  Ranked in top 10
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
