import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ExpertCardProps {
  name: string;
  role: string;
  department: string;
  avatar?: string;
  skills: string[];
  onViewProfile?: () => void;
  onContact?: () => void;
}

export function ExpertCard({ 
  name, 
  role, 
  department, 
  avatar, 
  skills, 
  onViewProfile,
  onContact 
}: ExpertCardProps) {
  return (
    <Card className="p-4 rounded-xl shadow-soft hover:shadow-medium transition-all">
      <div className="flex items-center space-x-3 mb-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-semibold text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{role} • {department}</p>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={onViewProfile}
          className="text-xs"
        >
          View Profile
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-1">
        {skills.slice(0, 4).map((skill, index) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
          >
            {skill}
          </Badge>
        ))}
        {skills.length > 4 && (
          <Badge variant="secondary" className="text-xs bg-muted">
            +{skills.length - 4}
          </Badge>
        )}
      </div>
    </Card>
  );
}