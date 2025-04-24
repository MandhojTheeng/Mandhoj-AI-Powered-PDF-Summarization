"use client";

import { FileText, Sparkles, ArrowRight, Upload, Clock, Check } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from '../common/nav-link';

export default function DemoSection() {
    return (
        <section className="py-24 sm:py-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                {/* Header with animated gradient text */}
                <div className="relative max-w-3xl mx-auto text-center mb-16">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-blue-100 opacity-30 blur-3xl transform rotate-12"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 animate-gradient-x pb-2">
                        See the Magic in Action
                    </h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Transform your documents into clear, concise summaries in seconds
                    </p>
                </div>

                {/* Interactive Demo Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Background decorative elements */}
                    <div className="absolute -top-10 -left-10 w-72 h-72 bg-rose-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                    {/* Main demo interface */}
                    <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/50">
                        {/* Demo Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100">
                                    <FileText className="w-5 h-5 text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">research-paper.pdf</h3>
                                    <p className="text-sm text-gray-500">15 pages • 4.2MB</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-rose-600">
                                    <Clock className="w-4 h-4" />
                                    Processing...
                                </div>
                                <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-rose-500 rounded-full animate-progress"></div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Content */}
                        <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                            {/* Original Document */}
                            <div className="p-8 border-r border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="font-semibold text-gray-900">Original Document</h4>
                                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">Page 1 of 15</span>
                                </div>
                                <div className="prose prose-gray prose-sm max-w-none">
                                    <h3 className="text-lg font-semibold mb-4">Introduction to Neural Networks</h3>
                                    <p className="mb-4">Artificial Neural Networks (ANNs) have revolutionized the field of machine learning and artificial intelligence. This comprehensive study explores the fundamental principles, architectures, and applications of neural networks in modern computing systems.</p>
                                    <p className="mb-4">The research examines various types of neural networks, including feedforward networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs), analyzing their respective strengths and limitations in different application domains.</p>
                                    <p className="mb-4">Furthermore, we investigate the impact of deep learning architectures on practical applications such as image recognition, natural language processing, and autonomous systems. The study also addresses key challenges in training neural networks, including optimization techniques and hyperparameter tuning.</p>
                                </div>
                            </div>

                            {/* AI Summary */}
                            <div className="p-8 bg-gradient-to-br from-rose-50/50 to-transparent">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-rose-500" />
                                        <h4 className="font-semibold text-gray-900">AI Summary</h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-500" />
                                        <span className="text-sm text-green-600">Generated in 2.3s</span>
                                    </div>
                                </div>
                                <div className="prose prose-rose prose-sm max-w-none">
                                    <div className="p-6 bg-white rounded-xl shadow-sm border border-rose-100/50">
                                        <h5 className="font-medium text-gray-900 mb-3">Key Points:</h5>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-400"></span>
                                                <span>Introduction to Artificial Neural Networks (ANNs) and their impact on ML/AI</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-400"></span>
                                                <span>Overview of network types: feedforward, CNN, RNN</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-400"></span>
                                                <span>Applications in image recognition, NLP, and autonomous systems</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-400"></span>
                                                <span>Discussion of training challenges and optimization techniques</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Footer */}
                        <div className="flex items-center justify-between p-6 border-t border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-gray-600">High accuracy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-sm text-gray-600">AI-powered</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-sm text-gray-600">Real-time processing</span>
                                </div>
                            </div>
                            <NavLink href="/#pricing">
                                <Button 
                                    size="lg"
                                    className="bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-full px-8 py-6 flex items-center gap-2 group transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
                                >
                                    Try It Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
} 