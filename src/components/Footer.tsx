
import React from "react";
import { FileText, Mail, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-7 w-7 text-purple-300" />
              <span className="font-bold text-xl">BillBoy</span>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              Automate your bill processing with AI. BillBoy simplifies data extraction and 
              form filling, saving you time and reducing errors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-purple-100">Product</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-purple-100">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-purple-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-12 pt-6 text-purple-400 text-sm text-center">
          © {new Date().getFullYear()} BillBoy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
