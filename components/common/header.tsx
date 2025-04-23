'use client';

import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from './nav-link';
import { useAuth, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';

export default function Header() {
    const { isSignedIn } = useAuth();
    
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
            <nav className="container flex items-center justify-between py-4 lg:px-8 px-4 mx-auto">
                <div className="flex lg:flex-1">
                    <NavLink href="/" className="flex items-center gap-2 shrink-0">
                        <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-rose-500 hover:rotate-12 
                        transform transition duration-300 ease-in-out" />
                        <span className="font-extrabold text-lg lg:text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Mandhoj</span>
                    </NavLink>
                </div>

                <div className="hidden md:flex lg:justify-center gap-6 lg:gap-10 items-center">
                    <NavLink href="/#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">Pricing</NavLink>
                    {isSignedIn && <NavLink href="/dashboard" className="text-gray-600 hover:text-rose-500 transition-colors">Your summaries</NavLink>}
                </div>

                <div className="flex lg:justify-end lg:flex-1 items-center gap-4">
                    {isSignedIn ? (
                        <div className="flex gap-4 items-center">
                            <NavLink href="/upload">
                                <Button variant="outline" size="sm" className="border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                                    Upload PDF
                                </Button>
                            </NavLink>
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <SignInButton mode="modal">
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                            <NavLink href="/#pricing">
                                <Button 
                                    size="sm" 
                                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white shadow-sm hover:shadow transition-all duration-300"
                                >
                                    Get Started
                                </Button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}