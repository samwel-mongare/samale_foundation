"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProgramCard from "@/components/ui/ProgramCard";
import { mockStories } from "../blogs/[slug]/mockData";

export default function OurWorkPage() {
  const [filter, setFilter] = useState("all");

  const filteredPrograms = mockStories.filter((program) => {
    if (filter === "all") return true;
    return program.category.toLowerCase().includes(filter.toLowerCase());
  });

  const pillars = [
    "All",
    "Peace & Resilience",
    "Economic Development",
    "Climate Resilience",
    "Clean Energy",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Our Work</h1>
            <p className="text-lg md:text-xl opacity-90">
              Discover our programs and initiatives aimed at creating lasting
              change in Northern Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {pillars.map((pillar) => (
              <button
                key={pillar}
                onClick={() => setFilter(pillar.toLowerCase().split(" ")[0])}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === pillar.toLowerCase().split(" ")[0] ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted"}`}
              >
                {pillar}
              </button>
            ))}
          </motion.div>

          {/* Program Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program, index) => (
              <ProgramCard
                key={program.slug.current}
                title={program.title}
                description={program.excerpt}
                status={program.status as "current" | "completed" | "upcoming"}
                pillar={program.category}
                slug={program.slug.current}
                image={program.featuredImage?.asset?.url || ""}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
