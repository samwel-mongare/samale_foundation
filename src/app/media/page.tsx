"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StoryCard from "@/components/ui/StoryCard";

// Mock data - replace with data from Sanity
const stories = [
  {
    title: "From Conflict to Cohesion: A Peace Ambassador's Story",
    excerpt:
      "Meet Adan, a young leader who is transforming his community through dialogue and mediation.",
    category: "Impact Story",
    slug: "adan-peace-ambassador",
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2070",
    publishedAt: "2024-09-15T10:00:00Z",
  },
  {
    title: "Samale Foundation Launches New Women in Business Initiative",
    excerpt:
      "The new program aims to support 500 women entrepreneurs in Wajir with training and funding.",
    category: "News",
    slug: "women-in-business-launch",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2070",
    publishedAt: "2024-10-01T09:00:00Z",
  },
  {
    title: "Climate-Smart Agriculture Transforms Livelihoods in Marsabit",
    excerpt:
      "Farmers are adopting regenerative techniques, leading to increased yields and resilience.",
    category: "Update",
    slug: "climate-smart-agriculture-marsabit",
    image:
      "https://images.unsplash.com/photo-1620754234242-83a5a7a5a55f?q=80&w=2070",
    publishedAt: "2024-08-22T14:30:00Z",
  },
  {
    title: "Annual Peace and Development Conference Announced",
    excerpt:
      "Join us in Nairobi for a two-day conference on integrated solutions for Northern Kenya.",
    category: "Event",
    slug: "annual-conference-2024",
    image:
      "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2070",
    publishedAt: "2024-09-05T11:00:00Z",
  },
  {
    title: "A Weaver's Tale: How a VSLA Changed Fatuma's Life",
    excerpt:
      "Fatuma, a member of a Village Savings and Loan Association, has built a thriving weaving business.",
    category: "Impact Story",
    slug: "fatuma-vsla-story",
    image:
      "https://images.unsplash.com/photo-1515041219749-595b06123139?q=80&w=2070",
    publishedAt: "2024-07-18T09:00:00Z",
  },
  {
    title: "Partnership with County Government of Garissa Strengthened",
    excerpt:
      "A new MOU will enhance collaboration on water projects and youth employment initiatives.",
    category: "News",
    slug: "garissa-partnership-mou",
    image:
      "https://images.unsplash.com/photo-1579179543019-38084ba037a6?q=80&w=2070",
    publishedAt: "2024-09-28T16:00:00Z",
  },
];

export default function MediaPage() {
  const [filter, setFilter] = useState("all");

  const filteredStories = stories.filter((story) => {
    if (filter === "all") return true;
    return story.category.toLowerCase().replace(" ", "") === filter;
  });

  const categories = ["All", "Impact Story", "News", "Update", "Event"];

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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Media Centre
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Read our latest stories, news, and updates from the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setFilter(category.toLowerCase().replace(" ", ""))
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === category.toLowerCase().replace(" ", "") ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted"}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Story Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStories.map((story, index) => (
              <StoryCard
                key={story.slug}
                title={story.title}
                excerpt={story.excerpt}
                category={story.category}
                slug={story.slug}
                image={story.image}
                publishedAt={story.publishedAt}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
