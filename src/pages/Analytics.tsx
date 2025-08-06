import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Search, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

const analyticsData = [
  { month: 'Jan', searches: 150, experts: 1180 },
  { month: 'Feb', searches: 180, experts: 1195 },
  { month: 'Mar', searches: 165, experts: 1205 },
  { month: 'Apr', searches: 200, experts: 1215 },
  { month: 'May', searches: 250, experts: 1220 },
  { month: 'Jun', searches: 220, experts: 1220 },
];

const departmentData = [
  { name: 'Engineering', experts: 450, searches: 180 },
  { name: 'Design', experts: 120, searches: 65 },
  { name: 'Product', experts: 85, searches: 45 },
  { name: 'Marketing', experts: 95, searches: 30 },
  { name: 'Data Science', experts: 75, searches: 55 },
];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Insights into expert searches and platform usage
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Searches</p>
              <p className="text-xl font-bold">2,847</p>
              <p className="text-xs text-green-600">+12% from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-expert-teal/20 rounded-lg">
              <Users className="h-5 w-5 text-expert-teal-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Users</p>
              <p className="text-xl font-bold">1,456</p>
              <p className="text-xs text-green-600">+8% from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-expert-pink/20 rounded-lg">
              <Target className="h-5 w-5 text-expert-pink-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <p className="text-xl font-bold">94.2%</p>
              <p className="text-xs text-green-600">+2.1% from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-expert-green/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-expert-green-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Response Time</p>
              <p className="text-xl font-bold">2.4 min</p>
              <p className="text-xs text-green-600">-0.5 min from last month</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Search Trends */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Search Trends</h3>
            <Badge variant="outline">Last 6 Months</Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Line 
                type="monotone" 
                dataKey="searches" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Department Analytics */}
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Department Analytics</h3>
            <Badge variant="outline">Experts vs Searches</Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Bar dataKey="experts" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="searches" fill="hsl(var(--expert-teal))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center text-sm">
              <div className="w-3 h-3 bg-primary rounded mr-2" />
              <span>Experts</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-3 h-3 bg-expert-teal rounded mr-2" />
              <span>Searches</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Popular Search Terms */}
      <Card className="p-6 shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Most Searched Skills This Month</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { skill: 'React', count: 234 },
            { skill: 'Python', count: 189 },
            { skill: 'AWS', count: 156 },
            { skill: 'Node.js', count: 134 },
            { skill: 'TypeScript', count: 121 },
            { skill: 'Docker', count: 98 },
            { skill: 'Kubernetes', count: 87 },
            { skill: 'PostgreSQL', count: 76 },
            { skill: 'GraphQL', count: 65 },
            { skill: 'Vue.js', count: 54 },
            { skill: 'Machine Learning', count: 48 },
            { skill: 'Figma', count: 42 }
          ].map((item, index) => (
            <div key={index} className="p-3 bg-muted rounded-lg text-center">
              <p className="font-medium text-sm">{item.skill}</p>
              <p className="text-xs text-muted-foreground">{item.count} searches</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}