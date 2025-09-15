"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CreditCard, Globe, Package, Clock, HelpCircle } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    icon: CreditCard,
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied, you can get a full refund within the first 30 days of your purchase.",
  },
  {
    icon: Package,
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account dashboard. The changes will be prorated based on your billing cycle.",
  },
  {
    icon: Clock,
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. Once canceled, you will still have access to the features until the end of your current billing period.",
  },
  {
    icon: HelpCircle,
    question: "Do you offer phone support?",
    answer:
      "We offer phone support for our Enterprise plan customers. For other plans, we provide support via email and live chat with a fast response time.",
  },
  {
    icon: Globe,
    question: "Is Stalliq available in other languages?",
    answer:
      "Currently, Stalliq is only available in English. We are working on adding support for more languages in the future. Stay tuned for updates!",
  },
]

export default function Faq() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-6">
        <div className="col-span-1">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-400">
              Can't find the answer you're looking for? Reach out to our{" "}
              <Link
                href="#contact"
                className="font-medium text-primary transition-colors hover:underline"
              >
                customer support
              </Link>{" "}
              team.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <faq.icon className="h-6 w-6 text-primary" />
                    <span className="text-lg font-medium text-white">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-10 text-gray-400">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
