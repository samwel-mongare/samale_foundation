'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProgramCardProps {
  title: string
  description: string
  status: 'current' | 'completed' | 'upcoming'
  pillar: string
  slug: string
  image?: string
  index?: number
}

export default function ProgramCard({
  title,
  description,
  status,
  pillar,
  slug,
  image,
  index = 0,
}: ProgramCardProps) {
  const statusColors = {
    current: 'bg-green-500',
    completed: 'bg-blue-500',
    upcoming: 'bg-yellow-500',
  }

  const statusLabels = {
    current: 'CURRENT',
    completed: 'COMPLETED',
    upcoming: 'UPCOMING',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg"
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute right-4 top-4">
            <span
              className={`${statusColors[status]} rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white`}
            >
              {statusLabels[status]}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {pillar}
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{description}</p>
        
        <Link
          href={`/our-work/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
