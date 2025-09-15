import {
  Inbox,
  Bot,
  ChevronsRight,
  User,
  BarChart,
  DollarSign,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Inbox,
    title: 'Omnichannel Inbox',
    description: 'Manage email, chat, social, and calls in one place.',
  },
  {
    icon: Bot,
    title: 'AI Auto-Responder',
    description: 'Let AI instantly answer FAQs and reduce response times.',
  },
  {
    icon: ChevronsRight,
    title: 'One-Click Migration',
    description: 'Switch from Zendesk, Freshdesk, or Zoho in minutes.',
  },
  {
    icon: User,
    title: 'CRM Lite',
    description: 'See customer profiles, history, and sentiment at a glance.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track performance with clear, real-time metrics.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Simple, transparent plans designed for startups.',
  },
];

export default function Features() {
  return (
    <section className="relative bg-black py-16 md:py-20 px-8">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Features that make Stalliq different
          </h2>
          <p className="mt-4 max-w-[600px] mx-auto text-base text-gray-300">
            Built for speed, simplicity, and powerful automation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative transform rounded-2xl bg-gradient-to-b from-[#181818] to-[#111111] p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:border-primary/30 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400 h-12">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#waitlist-form">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join the Waitlist
              </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
