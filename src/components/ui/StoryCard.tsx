"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

interface StoryCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: Promise<string> | string;
  image: string;
  publishedAt: string;
  index?: number;
}

export default function StoryCard({
  title,
  excerpt,
  category,
  slug,
  image,
  publishedAt,
  index = 0,
}: StoryCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg"
    >
      <Link href={`/blogs/${slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </div>

          <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-4 text-sm font-semibold text-primary group-hover:underline">
            Read More →
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
