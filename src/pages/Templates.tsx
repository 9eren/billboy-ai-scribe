
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, FileText, Star, Clock, Filter, Settings } from "lucide-react";

type Template = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  starred: boolean;
  lastUsed: string;
};

const templateData: Template[] = [
  {
    id: 1,
    name: "Electric Bill",
    description: "Template for processing electricity bills from major providers.",
    image: "https://placehold.co/400x300/C4B5FD/4C1D95?text=Electric+Bill&font=montserrat",
    category: "Utility",
    starred: true,
    lastUsed: "2 days ago"
  },
  {
    id: 2,
    name: "Water Bill",
    description: "Process water utility bills with automatic data extraction.",
    image: "https://placehold.co/400x300/DDD6FE/4C1D95?text=Water+Bill&font=montserrat",
    category: "Utility",
    starred: false,
    lastUsed: "1 week ago"
  },
  {
    id: 3,
    name: "Internet & Cable",
    description: "Template for internet and cable service providers.",
    image: "https://placehold.co/400x300/EDE9FE/4C1D95?text=Internet+Bill&font=montserrat",
    category: "Telecom",
    starred: true,
    lastUsed: "3 days ago"
  },
  {
    id: 4,
    name: "Cell Phone",
    description: "Mobile phone bill template with data and call usage sections.",
    image: "https://placehold.co/400x300/F5F3FF/4C1D95?text=Phone+Bill&font=montserrat",
    category: "Telecom",
    starred: false,
    lastUsed: "2 weeks ago"
  },
  {
    id: 5,
    name: "Credit Card Statement",
    description: "Process credit card statements with transaction categorization.",
    image: "https://placehold.co/400x300/C4B5FD/4C1D95?text=Credit+Card&font=montserrat",
    category: "Financial",
    starred: true,
    lastUsed: "Today"
  },
  {
    id: 6,
    name: "Rent Receipt",
    description: "Template for processing monthly rental receipts and payments.",
    image: "https://placehold.co/400x300/DDD6FE/4C1D95?text=Rent+Receipt&font=montserrat",
    category: "Housing",
    starred: false,
    lastUsed: "1 month ago"
  }
];

const Templates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [templates, setTemplates] = useState<Template[]>(templateData);

  const toggleStar = (id: number) => {
    setTemplates(templates.map(template => 
      template.id === id ? { ...template, starred: !template.starred } : template
    ));
  };

  const filteredTemplates = templates.filter(template => {
    // Filter by search query
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = activeCategory === 'all' || template.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(templates.map(t => t.category.toLowerCase())))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Templates</h1>
              <p className="text-gray-600">Browse, create and manage your bill templates</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700 animate-fade-in">
              <Plus className="mr-2 h-4 w-4" /> Create Template
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="relative animate-fade-in">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search templates..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Categories</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-3 flex justify-between items-center border-b border-gray-100 last:border-0 hover:bg-purple-50 transition-colors ${
                        activeCategory === category ? "bg-purple-50 text-purple-700 font-medium" : ""
                      }`}
                    >
                      <span className="capitalize">{category}</span>
                      {activeCategory === category && (
                        <div className="h-2 w-2 rounded-full bg-purple-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">View</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button className="w-full text-left px-4 py-3 flex items-center gap-3 border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <Star className="h-4 w-4 text-gray-500" />
                    <span>Starred</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 flex items-center gap-3 border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Recent</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-purple-50 transition-colors">
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span>All Templates</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              <Tabs defaultValue="grid" className="w-full animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                  
                  <Button variant="outline" size="sm" className="text-gray-600 border-gray-200">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                
                <TabsContent value="grid" className="mt-0">
                  {filteredTemplates.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No templates found</h3>
                      <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredTemplates.map((template, index) => (
                        <Card key={template.id} className="overflow-hidden animate-scale-in hover:shadow-md transition-shadow" style={{ animationDelay: `${index * 50}ms` }}>
                          <div className="relative h-40">
                            <img
                              src={template.image}
                              alt={template.name}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => toggleStar(template.id)}
                              className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                            >
                              <Star 
                                className={`h-5 w-5 ${template.starred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} 
                              />
                            </button>
                          </div>
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                            <CardDescription className="text-xs text-gray-500 flex items-center gap-1">
                              <span className="capitalize">{template.category}</span>
                              <span>•</span>
                              <span>Last used {template.lastUsed}</span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex justify-between">
                            <Button variant="outline" className="text-purple-600 border-purple-200">Preview</Button>
                            <Button className="bg-purple-600 hover:bg-purple-700">Use</Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="list" className="mt-0">
                  {filteredTemplates.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No templates found</h3>
                      <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                  ) : (
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-3 border-b grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase">
                        <div className="col-span-5">Name</div>
                        <div className="col-span-3">Category</div>
                        <div className="col-span-2">Last Used</div>
                        <div className="col-span-2 text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        {filteredTemplates.map((template, index) => (
                          <div 
                            key={template.id} 
                            className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors animate-fade-in"
                            style={{ animationDelay: `${index * 30}ms` }}
                          >
                            <div className="col-span-5 flex items-center gap-4">
                              <button onClick={() => toggleStar(template.id)}>
                                <Star 
                                  className={`h-4 w-4 ${template.starred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} 
                                />
                              </button>
                              <div>
                                <h4 className="font-medium text-gray-900">{template.name}</h4>
                                <p className="text-sm text-gray-500 line-clamp-1">{template.description}</p>
                              </div>
                            </div>
                            <div className="col-span-3">
                              <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                                {template.category}
                              </span>
                            </div>
                            <div className="col-span-2 text-sm text-gray-500">{template.lastUsed}</div>
                            <div className="col-span-2 flex justify-end gap-2">
                              <Button variant="outline" size="sm" className="h-8 text-xs">Preview</Button>
                              <Button size="sm" className="h-8 text-xs bg-purple-600 hover:bg-purple-700">Use</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
