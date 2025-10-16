import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockStories } from "./mockData";

export interface Story {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  status: "current" | "upcoming" | "completed";
  readingTime: number;
  featuredImage: {
    asset: { url: string };
    alt: string;
  };
  content: PortableTextBlock[];
  relatedProgram?: { title: string; link: string };
}
interface SanityImageValue {
  asset: { url: string };
  alt?: string;
  caption?: string;
}

import type { PortableTextReactComponents } from "@portabletext/react";

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: (props: { value: SanityImageValue }) => {
      const value = props.value;
      return (
        <div className="my-6">
          <Image
            src={value.asset.url}
            alt={value.alt || "Story image"}
            width={800}
            height={500}
            className="rounded-xl object-cover w-full"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 text-center mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: (props: any) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        {props.children}
      </h2>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: (props: any) => (
      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
        {props.children}
      </h3>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: (props: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{props.children}</p>
    ),
  },
};

// ----------------------
// 📄 Page Component
// ----------------------
export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = mockStories.find((s) => s.slug.current === slug);

  if (!story) return notFound();

  const relatedStories = mockStories
    .filter((s) => s.category === story.category && s.slug.current !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 🖼️ Featured Image */}
      {story.featuredImage?.asset?.url && (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={story.featuredImage.asset.url}
            alt={story.featuredImage.alt || story.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-6xl px-4 drop-shadow-lg">
              {story.title}
            </h1>
          </div>
        </div>
      )}

      {/* 📜 Story Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <Card className="shadow-md border border-gray-100">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <Badge variant="secondary" className="text-sm capitalize">
                {story.category}
              </Badge>
              <span className="text-sm text-gray-500">
                {new Date(story.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {story.author && (
              <p className="text-sm text-gray-600 mb-2">By {story.author}</p>
            )}

            {story.relatedProgram && (
              <p className="text-sm text-blue-600 mb-4">
                Related Program: {story.relatedProgram.title}
              </p>
            )}

            <Separator className="my-6" />

            <PortableText value={story.content} components={components} />

            {story.readingTime && (
              <p className="text-gray-400 text-sm mt-10">
                ⏱️ Estimated reading time: {story.readingTime} min
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* 🌍 Related Stories */}
      {relatedStories.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Related Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((item) => (
              <Link key={item._id} href={`/stories/${item.slug.current}`}>
                <Card className="hover:shadow-lg transition rounded-xl overflow-hidden">
                  {item.featuredImage?.asset?.url && (
                    <Image
                      src={item.featuredImage.asset.url}
                      alt={item.featuredImage.alt || item.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(item.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
