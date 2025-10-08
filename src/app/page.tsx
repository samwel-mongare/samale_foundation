"use client";

import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, TrendingUp, Leaf, ArrowRight } from "lucide-react";

export default function Home() {
  const pillars = [
    {
      icon: Shield,
      title: "Peace & Security",
      description:
        "Community peace forums, youth ambassadors, and alternative justice systems to strengthen social cohesion and prevent conflict.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description:
        "Vocational training, market linkages, and entrepreneurship programs to empower youth and women economically.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Leaf,
      title: "Climate Change & Sustainability",
      description:
        "Tree nurseries, regenerative farming, and energy-saving cookstoves to restore ecosystems and build climate resilience.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  const impactStats = [
    { number: "10,000+", label: "Lives Impacted" },
    { number: "50+", label: "Communities Served" },
    { number: "15", label: "Active Programs" },
    { number: "25+", label: "Partner Organizations" },
  ];

  return (
    <>
      <Hero
        title="Integrated Solutions for Northern Kenya"
        subtitle="Empowering communities through peace, economic development, and climate resilience"
        ctaText="LEARN MORE"
        ctaLink="/our-work"
        badge="NEW INITIATIVE"
        backgroundImage="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072"
      />

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At Samale Foundation, we work to deliver integrated solutions for
              peace, economic empowerment, and climate resilience in Northern
              Kenya. We empower youth and women while restoring natural
              ecosystems, strengthening community cohesion, and improving
              livelihoods through local ownership and partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Three Pillars
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We address the interconnected challenges facing Northern Kenya
              through an integrated approach
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  <div
                    className={`mb-4 inline-flex rounded-full ${pillar.bgColor} p-4`}
                  >
                    <Icon className={`h-8 w-8 ${pillar.color}`} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{pillar.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {pillar.description}
                  </p>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Impact</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Making a difference in Northern Kenya through community-led
              initiatives
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Get Involved
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join us in building a more peaceful, prosperous, and sustainable
              Northern Kenya. Together, we can create lasting change.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-white/90"
              >
                Partner With Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white hover:text-primary"
              >
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
