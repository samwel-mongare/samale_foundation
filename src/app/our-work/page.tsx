"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProgramCard from "@/components/ui/ProgramCard";

// Mock data - replace with data from Sanity
const programs = [
  {
    title: "Youth Peace Ambassadors",
    description:
      "Training young leaders to mediate conflicts and promote peace in their communities.",
    status: "current",
    pillar: "Peace & Security",
    slug: "youth-peace-ambassadors",
    image:
      "https://images.unsplash.com/photo-1527525443430-92a76b5b6b26?q=80&w=2070",
  },
  {
    title: "Women in Business",
    description:
      "Providing entrepreneurship training and start-up capital for women-led enterprises.",
    status: "current",
    pillar: "Economic Development",
    slug: "women-in-business",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070",
  },
  {
    title: "Regenerative Agriculture",
    description:
      "Promoting sustainable farming practices to restore soil health and improve food security.",
    status: "current",
    pillar: "Climate Change & Sustainability",
    slug: "regenerative-agriculture",
    image:
      "https://images.unsplash.com/photo-1597916819332-29c0a5216394?q=80&w=2070",
  },
  {
    title: "Community Dialogue Forums",
    description:
      "Facilitating dialogue between different clans and communities to resolve resource-based conflicts.",
    status: "completed",
    pillar: "Peace & Security",
    slug: "community-dialogue-forums",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070",
  },
  {
    title: "Vocational Skills Training",
    description:
      "Equipping youth with marketable skills in trades like masonry, tailoring, and mechanics.",
    status: "current",
    pillar: "Economic Development",
    slug: "vocational-skills-training",
    image:
      "https://images.unsplash.com/photo-1554231994-22a6099397a8?q=80&w=2070",
  },
  {
    title: "Clean Energy Solutions",
    description:
      "Distributing energy-saving cookstoves and promoting solar energy to reduce deforestation.",
    status: "upcoming",
    pillar: "Climate Change & Sustainability",
    slug: "clean-energy-solutions",
    image:
      "https://images.unsplash.com/photo-1509390643499-458ca46a8ab1?q=80&w=2070",
  },
];

export default function OurWorkPage() {
  const [filter, setFilter] = useState("all");

  const filteredPrograms = programs.filter((program) => {
    if (filter === "all") return true;
    return program.pillar.toLowerCase().includes(filter.toLowerCase());
  });

  const pillars = [
    "All",
    "Peace & Security",
    "Economic Development",
    "Climate Change & Sustainability",
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                key={program.slug}
                title={program.title}
                description={program.description}
                status={program.status as any}
                pillar={program.pillar}
                slug={program.slug}
                image={program.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
