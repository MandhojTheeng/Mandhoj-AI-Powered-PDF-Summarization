import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import NavLink from "../common/nav-link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray-100/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
            <div className="relative mx-auto flex flex-col items-center justify-center px-4 py-20 sm:py-24 lg:py-32 max-w-7xl text-center">
                <div className="mb-8">
                    <div className="relative inline-block">
                        {/* Subtle outer glow */}
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-rose-100/20 via-rose-300/20 to-rose-100/20 blur-lg"></div>
                        {/* Soft inner glow */}
                        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200 opacity-50 blur-[2px]"></div>
                        {/* Gentle gradient border */}
                        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200"></div>
                        <Badge variant="secondary" className="relative px-5 py-1.5 text-sm font-medium bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-200 rounded-full">
                            <Sparkles className="h-4 w-4 mr-2 text-rose-400" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-600 font-medium">
                                Powered by Advanced AI
                            </span>
                        </Badge>
                    </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 max-w-3xl mx-auto">
                    Transform PDFs into <span className="text-rose-600">concise summaries</span> in seconds
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Save hours of reading time. Get the key insights from lengthy documents with our AI-powered summarization technology.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <NavLink href="/#pricing">
                        <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                            Try Mandhoj Free
                        </Button>
                    </NavLink>
                    <Button size="lg" variant="outline" className="border border-gray-200 px-8 py-6 text-lg rounded-lg hover:bg-gray-50">
                        See How It Works
                    </Button>
                </div>
                
                <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span>Secure & private</span>
                    </div>
                    <div className="flex items-center bg-gray-50/50 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span>Instant results</span>
                    </div>
                </div>
            </div>
        </section>
    );
}