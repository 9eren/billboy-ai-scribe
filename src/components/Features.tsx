
import React from "react";
import { ScanText, FileText, FileUp, FileSparkles, Gauge, Lock } from "lucide-react";

const features = [
  {
    icon: <ScanText className="h-10 w-10 text-purple-600" />,
    title: "AI-Powered Scanning",
    description: "Our advanced AI technology reads and understands bill contents automatically, eliminating manual data entry."
  },
  {
    icon: <FileText className="h-10 w-10 text-purple-600" />,
    title: "Pre-built Templates",
    description: "Choose from our library of templates for common bill types or create custom ones for your specific needs."
  },
  {
    icon: <FileUp className="h-10 w-10 text-purple-600" />,
    title: "Batch Processing",
    description: "Process multiple bills at once, saving time and streamlining your workflow."
  },
  {
    icon: <FileSparkles className="h-10 w-10 text-purple-600" />,
    title: "Custom Templates",
    description: "Create your own templates with a user-friendly drag-and-drop interface tailored to your requirements."
  },
  {
    icon: <Gauge className="h-10 w-10 text-purple-600" />,
    title: "Fast & Accurate",
    description: "Convert bills to filled templates in seconds with high accuracy and confidence scores."
  },
  {
    icon: <Lock className="h-10 w-10 text-purple-600" />,
    title: "Secure & Private",
    description: "Your data never leaves your device. All processing happens locally for maximum security."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-purple-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-700">
            BillBoy comes packed with everything you need to automate your bill processing workflow and save hours of manual work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-purple-100 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
