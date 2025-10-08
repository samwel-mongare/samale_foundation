import { PortableTextBlock } from '@portabletext/types'

export interface Program {
  _id: string
  _type: 'program'
  title: string
  slug: { current: string }
  pillar: 'peace' | 'economic' | 'climate'
  shortDescription: string
  description?: PortableTextBlock[]
  cause?: PortableTextBlock[]
  impact?: PortableTextBlock[]
  solutions?: PortableTextBlock[]
  featuredImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  status: 'current' | 'completed' | 'upcoming'
  order?: number
}

export interface Story {
  _id: string
  _type: 'story'
  title: string
  slug: { current: string }
  excerpt: string
  content?: PortableTextBlock[]
  featuredImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  category: 'impact' | 'news' | 'update' | 'event'
  relatedProgram?: {
    _ref: string
    _type: 'reference'
  }
  author?: string
  publishedAt: string
  featured: boolean
}

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  slug: { current: string }
  position: string
  bio?: PortableTextBlock[]
  photo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  email?: string
  linkedin?: string
  twitter?: string
  order?: number
  category: 'leadership' | 'program' | 'board' | 'advisor'
}

export interface Partner {
  _id: string
  _type: 'partner'
  name: string
  slug: { current: string }
  logo: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  description?: string
  website?: string
  partnershipType: 'government' | 'ngo' | 'private' | 'international' | 'community'
  featured: boolean
  order?: number
}
