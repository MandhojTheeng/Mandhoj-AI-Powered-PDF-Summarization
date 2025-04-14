import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from './nav-link';

export default function Header() {
    const isLoggedIn = false;
    return (
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <nav className="container flex items-center justify-between py-4 lg:px-8 px-4 mx-auto">
                <div className="flex lg:flex-1">
                    <NavLink href="/" className="flex items-center gap-2 shrink-0">
                        <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-rose-500 hover:rotate-12 
                        transform transition duration-300 ease-in-out" />
                        <span className="font-extrabold text-lg lg:text-xl text-gray-900">Mandhoj</span>
                    </NavLink>
                </div>

                <div className="hidden md:flex lg:justify-center gap-6 lg:gap-10 items-center">
                    <NavLink href="/#pricing">Pricing</NavLink>
                    {isLoggedIn && <NavLink href="/dashboard">Your summaries</NavLink>}
                </div>

                <div className="flex lg:justify-end lg:flex-1 items-center gap-4">
                    {isLoggedIn ? (
                        <div className="flex gap-4 items-center">
                            <NavLink href="/upload">
                                <Button variant="outline" size="sm">Upload PDF</Button>
                            </NavLink>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <NavLink href="/sign-in">
                                <Button variant="ghost" size="sm">Sign In</Button>
                            </NavLink>
                            <Button size="sm" className="bg-rose-500 hover:bg-rose-600 text-white">
                                Get Started
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}