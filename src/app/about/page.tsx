"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Handshake } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      year: "2020",
      title: "Foundation Established",
      description:
        "Samale Foundation was founded to address the interconnected challenges of peace, economic development, and climate change in Northern Kenya.",
    },
    {
      year: "2021",
      title: "First Peace Forums",
      description:
        "Launched community peace forums in Mandera, bringing together elders, youth, and women to dialogue on conflict prevention.",
    },
    {
      year: "2022",
      title: "Economic Empowerment Programs",
      description:
        "Initiated vocational training and market linkage programs, empowering over 500 youth and women entrepreneurs.",
    },
    {
      year: "2023",
      title: "Climate Resilience Initiative",
      description:
        "Established tree nurseries and introduced energy-saving cookstoves, benefiting 1,000+ households.",
    },
    {
      year: "2024",
      title: "Expanding Partnerships",
      description:
        "Formed strategic partnerships with county governments, National Youth Council, and international organizations.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Local Ownership",
      description:
        "We believe in community-led solutions that empower local stakeholders to drive sustainable change.",
    },
    {
      icon: Eye,
      title: "Integrated Approach",
      description:
        "We address peace, economic development, and climate change as interconnected challenges requiring holistic solutions.",
    },
    {
      icon: Users,
      title: "Youth & Women Focus",
      description:
        "We prioritize empowering youth and women as key agents of transformation in their communities.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "We work collaboratively with governments, CBOs, and the private sector to maximize impact.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">About Us</h1>
            <p className="text-lg md:text-xl opacity-90">
              Building a more peaceful, prosperous, and sustainable Northern
              Kenya through integrated community-led solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground">
                We envision a Northern Kenya where communities live in peace,
                youth and women are economically empowered, and natural
                ecosystems are restored and protected for future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                To deliver integrated solutions for peace, economic empowerment,
                and climate resilience by empowering youth and women,
                strengthening community cohesion, and improving livelihoods
                through local ownership and strategic partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Integrated Model */}
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
              The Integrated Model
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our approach recognizes that peace, livelihoods, and climate are
              interconnected
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg border bg-card p-8 shadow-sm"
            >
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Conflict in Northern Kenya is often driven by competition over
                scarce resources like water and pasture, exacerbated by climate
                change. Economic marginalization leaves youth vulnerable to
                radicalization. Environmental degradation further reduces
                livelihood opportunities.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Samale Foundation addresses these challenges holistically:
                peace-building creates stability for economic activities;
                economic empowerment reduces resource-based conflicts; climate
                resilience ensures sustainable livelihoods. This integrated
                approach creates a virtuous cycle of peace, prosperity, and
                environmental restoration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide our work and partnerships
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Key milestones in our mission to transform Northern Kenya
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-[''] after:absolute after:left-[7px] after:top-6 after:h-full after:w-0.5 after:bg-border after:content-[''] last:after:hidden"
                >
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <div className="mb-2 text-sm font-semibold text-primary">
                      {item.year}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl" id="partners">
              Our Partners
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We work with county governments, national agencies, local CBOs,
              and the private sector
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl rounded-lg border bg-card p-8 shadow-sm"
          >
            <div className="space-y-4 text-center text-muted-foreground">
              <p>
                County Governments: Mandera, Wajir, Garissa, Marsabit, Isiolo
              </p>
              <p>National Youth Council</p>
              <p>Local Community-Based Organizations</p>
              <p>Private Sector Partners</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
