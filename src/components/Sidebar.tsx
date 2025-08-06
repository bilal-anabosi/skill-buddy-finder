import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, BarChart3, User, LogOut, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: Users,
      label: "Expert Finder",
      path: "/expert-finder",
    },
    {
      icon: BarChart3,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: User,
      label: "Profile",
      path: "/profile",
    },
    {
      icon: Sparkles,
      label: "Analytics",
      path: "/analytics",
    },
  ];

  return (
    <div className={cn("flex h-screen w-64 flex-col bg-card border-r", className)}>
      {/* User Profile Section */}
      <div className="flex items-center space-x-3 p-6 border-b">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/lovable-uploads/cf58a85e-eb9b-4626-be06-95b100c24248.png" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">L_Musaffer</span>
          <span className="text-xs text-muted-foreground">LMusaffer@asaltech.com</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
            (item.path === "/dashboard" && location.pathname === "/");
          
          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-soft" 
                  : "hover:bg-accent"
              )}
              onClick={() => navigate(item.path)}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-5 w-5" />
          LOGOUT
        </Button>
      </div>
    </div>
  );
}