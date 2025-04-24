import { Upload, FileText, Sparkles, Zap, Clock, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from '../common/nav-link';
import BgGradient from '../common/bg-gradient';

export default function Demo() {
    return (
        <BgGradient>
            <section className="py-24 sm:py-32 relative">
                {/* Decorative separator */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-200">
                            Interactive Experience
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-gray-900">See the Magic in Action</span>
                            <span className="block text-rose-600">Transform your documents into clear, concise summaries in seconds</span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Experience the power of our advanced AI technology firsthand. Simply upload any PDF document 
                            and watch as Mandhoj analyzes, processes, and generates a comprehensive summary that captures 
                            the essence of your content. Perfect for research papers, business reports, academic articles, 
                            and more. No sign-up required for this demo.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative flex flex-col items-center p-8 sm:p-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md ring-1 ring-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-full max-w-md">
                                <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                                    <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <NavLink href="/#pricing">
                                    <Button 
                                        size="lg" 
                                        className="relative group overflow-hidden rounded-lg bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Start Summarizing
                                            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-rose-500/20 to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Button>
                                </NavLink>
                            </div>

                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                                <div className="flex flex-col items-center p-4 bg-gray-50/50 rounded-lg">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-500 mb-3">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">Lightning Fast</h3>
                                    <p className="text-xs text-gray-500 text-center">Process documents in seconds with our optimized AI engine</p>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-gray-50/50 rounded-lg">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-500 mb-3">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">PDF Support</h3>
                                    <p className="text-xs text-gray-500 text-center">Compatible with all standard PDF formats and layouts</p>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-gray-50/50 rounded-lg">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-500 mb-3">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">Secure Upload</h3>
                                    <p className="text-xs text-gray-500 text-center">Your documents are encrypted and never stored permanently</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Decorative separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </section>
        </BgGradient>
    );
} 