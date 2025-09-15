"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Inbox, Bot, ChevronsRight, User, BarChart, DollarSign, type LucideIcon } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featuresList: Feature[] = [
  {
    icon: Inbox,
    title: "Omnichannel Inbox",
    description: "Manage email, chat, social, and calls in one place.",
  },
  {
    icon: Bot,
    title: "AI Auto-Responder",
    description: "Let AI instantly answer FAQs and reduce response times.",
  },
  {
    icon: ChevronsRight,
    title: "One-Click Migration",
    description: "Switch from Zendesk, Freshdesk, or Zoho in minutes.",
  },
  {
    icon: User,
    title: "CRM Lite",
    description: "See customer profiles, history, and sentiment at a glance.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track performance with clear, real-time metrics.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Simple, transparent plans designed for startups.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-black py-16 md:py-20 lg:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Features that make Stalliq different
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-base text-gray-300">
            Built for speed, simplicity, and powerful automation.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card 
              key={index}
              className="group relative transform-gpu overflow-hidden rounded-2xl bg-gradient-to-b from-[#181818] to-[#111111] transition-transform duration-300 ease-in-out will-change-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-30" style={{boxShadow: 'inset 0 0 0 1px hsl(var(--primary))'}} />
              <CardContent className="relative z-10 flex flex-col items-start p-6 text-left">
                <div className="mb-4 rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link href="#waitlist-form">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Join the Waitlist
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
