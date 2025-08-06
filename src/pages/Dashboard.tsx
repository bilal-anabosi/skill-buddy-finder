import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { ExpertCard } from "@/components/ExpertCard";
import { Users, Building, CheckCircle, Search, ArrowRight, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const searchData = [
  { month: 'Jan', searches: 150 },
  { month: 'Feb', searches: 180 },
  { month: 'Mar', searches: 165 },
  { month: 'Apr', searches: 200 },
  { month: 'May', searches: 250 },
  { month: 'Jun', searches: 220 },
  { month: 'Jul', searches: 200 }
];

const searchTypeData = [
  { name: 'Total Searches', value: 321, color: '#8B5CF6' },
  { name: 'Skill-Based Search', value: 202, color: '#F97316' },
  { name: 'Project-Based Search', value: 110, color: '#10B981' }
];

const skillsData = [
  { name: 'React', percentage: 34 },
  { name: 'Python', percentage: 28 },
  { name: 'Figma', percentage: 22 },
  { name: 'AWS', percentage: 16 }
];

const recentExperts = [
  {
    name: "Rawand Ali",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    skills: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    name: "Saja Saif",
    role: "Senior Full Stack Developer", 
    department: "Engineering",
    skills: ["Python", "Django", "PostgreSQL", "Docker"]
  },
  {
    name: "Bilal Khaled",
    role: "Senior Full Stack Developer",
    department: "Engineering", 
    skills: ["Vue.js", "Laravel", "MySQL", "Redis"]
  }
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, Lana!</h1>
          <Button variant="outline" size="sm" className="mt-2 text-primary">
            Find help fast using the chatbot! <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-card border rounded-lg">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">31 July 2026</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Users className="h-6 w-6" />}
          title="Total Experts"
          value="1220"
          variant="blue"
        />
        <StatCard
          icon={<Building className="h-6 w-6" />}
          title="Departments Covered"
          value="12"
          variant="teal"
        />
        <StatCard
          icon={<CheckCircle className="h-6 w-6" />}
          title="Active Users Today"
          value="489"
          variant="pink"
        />
        <StatCard
          icon={<Search className="h-6 w-6" />}
          title="Searches This Week"
          value="89"
          variant="green"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Searches Over Time */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Searches Over Time</h3>
              <Badge variant="outline">6 Month</Badge>
            </div>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">Searches</p>
              <p className="text-xs text-primary">252 expert searches</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={searchData}>
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

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Types */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Search Types</h3>
              <div className="relative">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={searchTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {searchTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {searchTypeData.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-muted-foreground">{item.name} {item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Searched Skills */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Top Searched Skills</h3>
              <div className="space-y-4">
                {skillsData.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.percentage}% of Searches</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column - Recent Experts */}
        <div>
          <Card className="p-6 shadow-soft">
            <h3 className="text-lg font-semibold mb-2">Recent Experts</h3>
            <p className="text-sm text-muted-foreground mb-4">newly added or updated expert profiles</p>
            <div className="space-y-3">
              {recentExperts.map((expert, index) => (
                <ExpertCard
                  key={index}
                  name={expert.name}
                  role={expert.role}
                  department={expert.department}
                  skills={expert.skills}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}