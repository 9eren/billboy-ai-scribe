
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <FileText className="h-14 w-14 text-purple-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Bill Processing?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Join thousands of users who save hours each month by letting AI handle their bill data extraction.
          </p>
          <div className="flex justify-center">
            <Link to="/scan">
              <Button className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-6 rounded-lg font-medium text-lg">
                Start Using BillBoy <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
