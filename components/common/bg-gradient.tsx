import React from 'react';

export default function BgGradient({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className="relative isolate bg-white">
            {/* Primary gradient - top */}
            <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
            >
                <div 
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#dbeafe] via-[#93c5fd] to-[#60a5fa] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Secondary gradient - middle right */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-2xl"
            >
                <div
                    style={{
                        clipPath: 'polygon(20% 30%, 60% 0%, 100% 20%, 100% 70%, 80% 100%, 20% 100%, 0% 70%, 0% 30%)'
                    }}
                    className="relative left-[calc(50%+5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#eff6ff] via-[#bfdbfe] to-[#93c5fd] opacity-30 sm:left-[calc(50%+10rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Accent gradient - bottom */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl"
            >
                <div
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                    }}
                    className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f1f5f9] via-[#dbeafe] to-[#bfdbfe] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    );
}