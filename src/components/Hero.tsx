
import React from "react";
import { ArrowRight, FileSearch, FilePlus, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative bg-dot-pattern">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">AI-Powered</span> <br />
              Bill Processing
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              Let AI do the heavy lifting. BillBoy automatically extracts data from your bills and 
              fills in your templates, saving hours of manual work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/scan">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg font-medium text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button variant="outline" className="text-purple-700 border-purple-300 hover:border-purple-700 px-8 py-6 rounded-lg font-medium text-lg">
                  View Templates
                </Button>
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="inline-block h-1 w-1 rounded-full bg-purple-500 mr-1"></span>
              No credit card required
              <span className="mx-3">•</span>
              <span className="inline-block h-1 w-1 rounded-full bg-purple-500 mr-1"></span>
              14-day free trial
            </div>
          </div>
          
          <div className="relative animate-slide-in">
            <div className="glass-card rounded-2xl p-6 shadow-2xl">
              <img 
                src="https://placehold.co/600x400/EDE9FE/4C1D95?text=BillBoy+AI+Demo&font=montserrat"
                className="w-full rounded-lg object-cover shadow-lg"
                alt="BillBoy Demo"
              />
              <div className="absolute bottom-0 left-0 right-0 translate-y-1/3">
                <div className="grid grid-cols-3 gap-4 px-8">
                  {[
                    { icon: <FileSearch className="h-6 w-6 text-purple-700" />, title: "Scan Bills" },
                    { icon: <Database className="h-6 w-6 text-purple-700" />, title: "Extract Data" },
                    { icon: <FilePlus className="h-6 w-6 text-purple-700" />, title: "Fill Templates" },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded-lg p-4 shadow-lg text-center flex flex-col items-center gap-2"
                    >
                      {item.icon}
                      <h3 className="font-medium text-sm text-gray-800">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
