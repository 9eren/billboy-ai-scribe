
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
  {
    id: 1,
    name: "Utility Bills",
    description: "Extract data from electricity, water, and gas bills automatically.",
    image: "https://placehold.co/400x300/C4B5FD/4C1D95?text=Utility+Template&font=montserrat",
    popular: true
  },
  {
    id: 2,
    name: "Internet Provider",
    description: "Process internet and telecommunications bills with ease.",
    image: "https://placehold.co/400x300/DDD6FE/4C1D95?text=Internet+Template&font=montserrat",
    popular: false
  },
  {
    id: 3,
    name: "Credit Card Statement",
    description: "Quickly extract key details from credit card statements.",
    image: "https://placehold.co/400x300/EDE9FE/4C1D95?text=Credit+Card+Template&font=montserrat",
    popular: true
  },
  {
    id: 4,
    name: "Insurance Bills",
    description: "Process health, home, or auto insurance statements.",
    image: "https://placehold.co/400x300/F5F3FF/4C1D95?text=Insurance+Template&font=montserrat",
    popular: false
  },
  {
    id: 5,
    name: "Rental/Mortgage",
    description: "Extract data from rent receipts or mortgage statements.",
    image: "https://placehold.co/400x300/C4B5FD/4C1D95?text=Rental+Template&font=montserrat",
    popular: false
  }
];

const TemplateShowcase: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const visibleTemplates = 3;

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? templates.length - visibleTemplates : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === templates.length - visibleTemplates ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
            Ready-Made Templates
          </h2>
          <p className="text-lg text-gray-700">
            Choose from our collection of pre-built templates or create custom ones to suit your specific needs.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {templates.map((template, index) => {
              const isVisible = index >= current && index < current + visibleTemplates;
              
              return (
                <div
                  key={template.id}
                  className={cn(
                    "w-full md:w-1/3 flex-shrink-0 transition-all duration-500 transform",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"
                  )}
                  style={{ 
                    transform: isVisible ? `translateX(${(index - current) * 100}%)` : "translateX(-100%)",
                    transitionDelay: `${(index - current) * 100}ms`
                  }}
                >
                  <Card className="h-full overflow-hidden border-purple-100 hover:border-purple-300 transition-all duration-300 animate-scale-in">
                    <div className="relative">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-48 object-cover"
                      />
                      {template.popular && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{template.name}</h3>
                      <p className="text-gray-600 mb-4">{template.description}</p>
                      <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:border-purple-700">
                        View Template
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-purple-200 hover:bg-purple-50 z-10 hidden md:flex"
            onClick={previousSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-purple-200 hover:bg-purple-50 z-10 hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-8 md:mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
