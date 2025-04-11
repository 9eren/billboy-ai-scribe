
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileUp, 
  FileText, 
  Check, 
  AlertCircle,
  Loader2, 
  PanelLeftOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Scan: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    // Check if it's a PDF or image
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file format",
        description: "Please upload a PDF, JPEG, or PNG file.",
        variant: "destructive"
      });
      return;
    }
    
    setFile(selectedFile);
    toast({
      title: "File uploaded",
      description: `${selectedFile.name} is ready to process.`,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const simulateScan = () => {
    setScanning(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setScanComplete(true);
            setScanning(false);
            toast({
              title: "Scanning complete",
              description: "Your bill has been successfully processed!",
            });
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };
  
  const resetForm = () => {
    setFile(null);
    setScanComplete(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Scan Bills</h1>
              <p className="text-gray-600">Upload a bill to extract data and fill your templates</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - Upload */}
            <div className="lg:col-span-2">
              <Card className="p-6 animate-fade-in">
                <div 
                  className={`border-2 border-dashed rounded-lg p-10 transition-colors ${
                    isDragging 
                      ? "border-purple-500 bg-purple-50" 
                      : file 
                        ? "border-green-500 bg-green-50" 
                        : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="text-center">
                    {file ? (
                      <div className="space-y-4">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">File ready to scan</h3>
                        <p className="text-sm text-gray-500 mb-2">{file.name} ({(file.size / 1024).toFixed(1)} KB)</p>
                        
                        {scanning ? (
                          <div className="space-y-4">
                            <Loader2 className="animate-spin h-8 w-8 text-purple-600 mx-auto" />
                            <p className="text-purple-600">Processing your bill...</p>
                            <Progress value={progress} className="h-2" />
                            <p className="text-sm text-gray-500">Extracting data from your document</p>
                          </div>
                        ) : (
                          scanComplete ? (
                            <div className="space-y-4">
                              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="h-8 w-8 text-green-600" />
                              </div>
                              <h3 className="text-lg font-medium text-gray-900">Scan complete!</h3>
                              <p className="text-sm text-gray-500">Data successfully extracted from your bill</p>
                              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                                <Button 
                                  onClick={resetForm}
                                  variant="outline"
                                  className="border-purple-200 text-purple-700"
                                >
                                  Scan Another
                                </Button>
                                <Button className="bg-purple-600 hover:bg-purple-700">
                                  Fill Template
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="flex justify-center gap-3">
                                <Button 
                                  onClick={resetForm}
                                  variant="outline"
                                  className="border-gray-200"
                                >
                                  Change File
                                </Button>
                                <Button 
                                  onClick={simulateScan} 
                                  className="bg-purple-600 hover:bg-purple-700"
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  Start Scanning
                                </Button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <>
                        <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                          <Upload className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Drag & Drop your bill here</h3>
                        <p className="mt-1 text-sm text-gray-500 mb-6">or click to browse files</p>
                        <div className="flex justify-center">
                          <label className="cursor-pointer">
                            <Input 
                              type="file" 
                              className="hidden"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={handleInputChange}
                            />
                            <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
                              <FileUp className="h-4 w-4 mr-2" />
                              Browse Files
                            </div>
                          </label>
                        </div>
                        <p className="mt-4 text-xs text-gray-500">Supports PDF, JPEG, PNG (Max 10MB)</p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Instructions */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <AlertCircle className="h-4 w-4 mr-2 text-purple-600" />
                    Tips for best results
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                    <li>Ensure the bill image is clear and well-lit</li>
                    <li>All relevant information should be visible and not cut off</li>
                    <li>Flatten wrinkles and avoid shadows when scanning physical documents</li>
                    <li>For multi-page bills, combine them into a single PDF</li>
                  </ul>
                </div>
              </Card>
            </div>
            
            {/* Right side - Recent templates */}
            <div className="lg:col-span-1">
              <Card className="p-6 animate-slide-in">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <PanelLeftOpen className="h-5 w-5 mr-2 text-purple-600" />
                  Recent Templates
                </h3>
                
                <div className="space-y-3">
                  {[
                    { name: "Electric Bill", date: "Used 2 days ago" },
                    { name: "Water Bill", date: "Used 1 week ago" },
                    { name: "Internet & Cable", date: "Used 3 days ago" }
                  ].map((template, index) => (
                    <div 
                      key={index} 
                      className="p-3 border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-purple-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-900">{template.name}</h4>
                          <p className="text-xs text-gray-500">{template.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link to="/templates">
                    <Button variant="outline" className="w-full border-purple-200 text-purple-700">
                      View All Templates
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">No template yet?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Create a custom template to extract exactly the data you need from your bills.
                  </p>
                  <Link to="/templates/create">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Template
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scan;
