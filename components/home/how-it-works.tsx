import { FileText, Sparkles, Brain } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from '../common/nav-link';

export default function HowItWorks() {
    return (
        <section className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center rounded-full px-5 py-1.5 text-base font-medium bg-rose-50 text-rose-500 ring-1 ring-inset ring-rose-100 mb-4">
                        Simple Process
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        How Mandhoj <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Transform your lengthy documents into clear, concise summaries in three simple steps
                    </p>
                </div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {/* Step 1 */}
                    <div className="relative group">
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 transition-all duration-300 group-hover:translate-y-[-4px]">
                            <div className="flex items-center justify-center w-12 h-12 bg-rose-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-6 h-6 text-rose-500 group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-rose-600 transition-colors duration-300">Upload Your PDF</h3>
                            <p className="text-gray-600">
                                Simply upload your PDF document to our secure platform. We support various document formats.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 transition-all duration-300 group-hover:translate-y-[-4px]">
                            <div className="flex items-center justify-center w-12 h-12 bg-rose-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Brain className="w-6 h-6 text-rose-500 group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-rose-600 transition-colors duration-300">AI Processing</h3>
                            <p className="text-gray-600">
                                Our advanced AI analyzes your document, understanding context and key information.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 transition-all duration-300 group-hover:translate-y-[-4px]">
                            <div className="flex items-center justify-center w-12 h-12 bg-rose-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-6 h-6 text-rose-500 group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-rose-600 transition-colors duration-300">Get Your Summary</h3>
                            <p className="text-gray-600">
                                Receive a clear, concise summary of your document, highlighting the most important points.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
