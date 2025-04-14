import React from 'react';

export default function BgGradient({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className="relative isolate min-h-[90vh] overflow-hidden bg-white/80">
            {/* Primary gradient - top */}
            <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div 
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-[#93c5fd] via-[#3b82f6] to-[#1d4ed8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Secondary gradient - middle right */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath: 'polygon(20% 30%, 60% 0%, 100% 20%, 100% 70%, 80% 100%, 20% 100%, 0% 70%, 0% 30%)'
                    }}
                    className="relative left-[calc(50%+5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] opacity-30 sm:left-[calc(50%+10rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Accent gradient - bottom left */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                    }}
                    className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-[#bfdbfe] via-[#60a5fa] to-[#3b82f6] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Subtle overlay gradient */}
            <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/25 to-white/5 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}