"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Omnichannel Inbox",
    date: "Q1",
    content: "Manage email, chat, social, and calls in one place.",
    category: "Core",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "AI Auto-Responder",
    date: "Q1",
    content: "Let AI instantly answer FAQs and reduce response times.",
    category: "AI",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "One-Click Migration",
    date: "Q2",
    content: "Switch from Zendesk, Freshdesk, or Zoho in minutes.",
    category: "Onboarding",
    icon: FileText,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "CRM Lite",
    date: "Q2",
    content: "See customer profiles, history, and sentiment at a glance.",
    category: "Core",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    date: "Q3",
    content: "Track performance with clear, real-time metrics.",
    category: "Reporting",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export default function Features() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}
