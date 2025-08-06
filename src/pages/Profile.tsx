import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Download, 
  Mail, 
  Edit, 
  ChevronUp, 
  ChevronDown,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AI Chatbot Assistant",
    role: "Lead AI Engineer", 
    period: "Mar 2023 – Present",
    status: "Ongoing",
    description: "Designed and deployed an NLP-driven internal chatbot using transformer-based models for real-time employee support. Integrated the assistant with internal knowledge bases and implemented intent recognition and feedback handling.",
    skills: ["Python", "TensorFlow", "FastAPI", "Docker"]
  },
  {
    title: "Medical Image Classifier",
    role: "Machine Learning Engineer",
    period: "Jul 2022 – Feb 2023", 
    status: "Completed",
    description: "Developed a convolutional neural network (CNN) to detect anomalies in X-ray images. Improved accuracy by 12% with custom data augmentation and ensemble techniques. Deployed model using lightweight Flask API.",
    skills: ["Python", "PyTorch", "OpenCV", "Flask"]
  },
  {
    title: "Resume Screening Model",
    role: "AI Researcher",
    period: "Jan 2022 – Jun 2022",
    status: "Completed", 
    description: "Built an NLP-based model to rank candidate resumes against job descriptions. Enhanced HR efficiency by 60%. Included bias filtering and multi-language support.",
    skills: ["Python", "BERT", "scikit-learn", "Pandas", "Streamlit"]
  }
];

const skills = [
  "Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning",
  "NLP", "Scikit-learn", "HuggingFace", "OpenCV", "CUDA"
];

export default function Profile() {
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    education: false, 
    certifications: false,
    documents: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div>
          <Card className="p-6 shadow-soft">
            <div className="text-center mb-6">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="/lovable-uploads/cf58a85e-eb9b-4626-be06-95b100c24248.png" />
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">Lana Musaffer</h2>
              <p className="text-primary font-medium">AI Engineer</p>
              <p className="text-sm text-muted-foreground">R&D – Artificial Intelligence</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-muted-foreground mb-1">YEARS OF EXPERIENCE</p>
                  <p>5 Years</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground mb-1">PHONE</p>
                  <p>+970-598-893-123</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground mb-1">LOCATION</p>
                  <p>Ramallah, Palestine</p>
                </div>
                <div>
                  <p className="font-medium text-muted-foreground mb-1">EMAIL</p>
                  <p>LMusaffer@asaltech.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Button size="sm" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </Card>
        </div>

        {/* Right Column - Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Projects */}
          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Projects</h3>
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <Badge 
                      variant={project.status === 'Ongoing' ? 'default' : 'secondary'}
                      className={project.status === 'Ongoing' ? 'bg-expert-green text-expert-green-foreground' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    {project.period}
                  </div>
                  
                  <p className="text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Collapsible Sections */}
          {[
            { key: 'experience', title: 'Experience' },
            { key: 'education', title: 'Education' },
            { key: 'certifications', title: 'Certifications' },
            { key: 'documents', title: 'Contributed Documents' }
          ].map((section) => (
            <Card key={section.key} className="p-6 shadow-soft">
              <button
                onClick={() => toggleSection(section.key as keyof typeof expandedSections)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                {expandedSections[section.key as keyof typeof expandedSections] ? 
                  <ChevronUp className="h-5 w-5 text-muted-foreground" /> : 
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                }
              </button>
              
              {expandedSections[section.key as keyof typeof expandedSections] && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Content for {section.title} section would go here...
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}