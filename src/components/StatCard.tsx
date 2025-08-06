import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  variant: "blue" | "teal" | "pink" | "green";
}

const variantClasses = {
  blue: "bg-gradient-blue text-expert-blue-foreground",
  teal: "bg-gradient-teal text-expert-teal-foreground", 
  pink: "bg-gradient-pink text-expert-pink-foreground",
  green: "bg-gradient-green text-expert-green-foreground"
};

export function StatCard({ icon, title, value, variant }: StatCardProps) {
  return (
    <Card className={cn(
      "p-6 rounded-2xl border-0 shadow-soft transition-all hover:shadow-medium",
      variantClasses[variant]
    )}>
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-sm opacity-80">{title}</p>
        </div>
      </div>
    </Card>
  );
}