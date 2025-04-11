
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Home, Upload, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <FileText className="h-8 w-8 text-purple-600" />
              <span className="font-bold text-xl text-purple-900">BillBoy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/templates" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Templates
            </Link>
            <Link to="/scan" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Scan Bills
            </Link>
            <div className="pl-4 border-l border-gray-200">
              <Link to="/login">
                <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transform transition-transform duration-200 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 flex flex-col space-y-4 items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link 
              to="/templates"
              className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-5 w-5" />
              Templates
            </Link>
            <Link 
              to="/scan"
              className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Upload className="h-5 w-5" />
              Scan Bills
            </Link>
            <div className="pt-6 w-full border-t border-gray-100">
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                <Button variant="default" className="w-full bg-purple-600 hover:bg-purple-700">
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
