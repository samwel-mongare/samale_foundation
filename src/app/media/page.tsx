"use client";

import { motion } from "framer-motion";
import StoryCard from "@/components/ui/StoryCard";
import { mockStories } from "../blogs/[slug]/mockData";

export default function MediaPage() {
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
          {/* Story Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockStories.map((story, index) => (
              <StoryCard
                key={story.slug.current}
                title={story.title}
                excerpt={story.excerpt}
                category={story.category}
                slug={story.slug.current}
                image={story.featuredImage?.asset?.url || ""}
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
