
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TemplateShowcase from "@/components/TemplateShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <TemplateShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
