import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

// Define the pricing plan type
type PricingPlan = {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    paymentLink: string;
    priceId: string;
};

// Available pricing plans
const pricingPlans: PricingPlan[] = [
    {
        id: 'basic',
        name: 'Basic',
        price: 9,
        description: 'For personal use and small projects',
        features: [
            '5 PDF summaries per month',
            'Basic analytics',
            'Priority support',
            'PDF and image file support',
        ],
        paymentLink: '',
        priceId: '',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 29,
        description: 'For teams and larger projects',
        features: [
            'Unlimited PDF summaries',
            'Priority Processing',
            '24/7 Support',
            'PDF and image file support',
        ],
        paymentLink: '',
        priceId: '',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 99,
        description: 'For Large Enterprises and special projects',
        features: [
            'Unlimited PDF summaries',
            'Priority Processing',
            '24/7 Support',
            'PDF and image file support',
            'Advanced analytics',
            'Markdown Export',
        ],
        paymentLink: '',
        priceId: '',
    },
];

// Pricing card component
const PricingCard: React.FC<PricingPlan> = (plan) => {
    const { id, name, price, description, features, paymentLink } = plan;
    
    return (
        <div className="relative w-full max-w-xs">
            <div 
                className={cn(
                    "relative flex flex-col h-full gap-3 z-10 p-6 rounded-xl border border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300",
                    id === 'pro' && "border-rose-500 border-2 shadow-md"
                )}
            >
                {/* Plan header */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold capitalize">{name}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
                
                {/* Price display */}
                <div className="mt-2">
                    <div className="flex items-baseline">
                        <span className="text-3xl font-bold">${price}</span>
                        <span className="ml-1 text-gray-500 text-sm">/month</span>
                    </div>
                </div>
                
                {/* Features list */}
                <div className="mt-4 space-y-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-rose-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
                
                {/* CTA button */}
                <div className="mt-auto pt-4">
                    <Link 
                        href={paymentLink || "#"} 
                        className={cn(
                            "block w-full py-2 px-4 text-center rounded-lg font-medium transition-all text-sm",
                            id === 'pro' 
                                ? "bg-rose-500 text-white hover:bg-rose-600" 
                                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        )}
                    >
                        Buy Now <ArrowRight size={16} className="inline ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Main pricing section component
export default function PricingSection() {
    return (
        <section id="pricing" className="py-16 sm:py-20">            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Simple, <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Transparent</span> Pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that works best for your needs. All plans include our core features.
                    </p>
                </div>
                
                {/* Pricing cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {pricingPlans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}