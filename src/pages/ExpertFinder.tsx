import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Award, Send, Bot } from "lucide-react";

const searchOptions = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Find by Skill",
    description: "Search experts with specific technical skills"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Browse by Department", 
    description: "View experts grouped by their department"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Find Mentor",
    description: "Find experienced people in a skill area"
  }
];

const mockResults = [
  {
    name: "Rawand Ali",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    avatar: "/placeholder-avatar.jpg"
  },
  {
    name: "Sarah Johnson", 
    role: "Senior Frontend Developer",
    department: "Engineering",
    skills: ["React", "Vue.js", "CSS", "JavaScript"],
    avatar: "/placeholder-avatar.jpg"
  },
  {
    name: "Mike Chen",
    role: "React Developer",
    department: "Engineering", 
    skills: ["React", "Redux", "Testing", "GraphQL"],
    avatar: "/placeholder-avatar.jpg"
  }
];

export default function ExpertFinder() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);

  const handleSendMessage = () => {
    if (!query.trim()) return;
    
    const newConversation = [
      ...conversation,
      { type: 'user' as const, message: query },
      { 
        type: 'bot' as const, 
        message: `I found 3 React experts that match your criteria. Here are the top matches:` 
      }
    ];
    
    setConversation(newConversation);
    setShowResults(true);
    setQuery("");
  };

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-4 bg-primary/10 rounded-2xl">
            <Bot className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Expert Search Assistant</h1>
        <p className="text-muted-foreground">
          Ask me to find experts by skills, department, role, or project experience
        </p>
      </div>

      {/* Search Options - Only show when no conversation */}
      {conversation.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {searchOptions.map((option, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-all cursor-pointer">
              <div className="flex justify-center mb-3">
                {option.icon}
              </div>
              <h3 className="font-semibold text-primary mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </Card>
          ))}
        </div>
      )}

      {/* Conversation Area */}
      {conversation.length > 0 && (
        <div className="flex-1 mb-6 overflow-y-auto">
          <div className="space-y-4 max-w-4xl mx-auto">
            {conversation.map((item, index) => (
              <div key={index} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {item.type === 'bot' && (
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    </Avatar>
                    <div className="bg-card border rounded-2xl rounded-tl-sm p-4 max-w-lg shadow-soft">
                      <p className="text-sm">{item.message}</p>
                    </div>
                  </div>
                )}
                {item.type === 'user' && (
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-4 max-w-lg">
                    <p className="text-sm">{item.message}</p>
                  </div>
                )}
              </div>
            ))}
            
            {/* Results */}
            {showResults && (
              <div className="space-y-3">
                {mockResults.map((expert, index) => (
                  <Card key={index} className="p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{expert.name}</h4>
                          <p className="text-sm text-muted-foreground">{expert.role} • {expert.department}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {expert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center space-x-2 p-4 bg-card border rounded-2xl shadow-soft">
          <span className="text-muted-foreground text-sm">type</span>
          <Input
            placeholder="Ask me to find experts...(e.g., 'Find React developers')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground/60"
          />
          <Button 
            size="sm" 
            onClick={handleSendMessage}
            disabled={!query.trim()}
            className="rounded-xl p-2"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}