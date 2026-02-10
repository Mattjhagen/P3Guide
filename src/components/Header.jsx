import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold font-mono tracking-tighter">
                    P3<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#fresh-start" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Fresh Start</a>
                    <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">How it Works</a>
                    <a href="#deck" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pitch Deck</a>
                    <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
                        Launch App
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4">
                    <a href="#fresh-start" className="text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Fresh Start</a>
                    <a href="#features" className="text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>How it Works</a>
                    <a href="#deck" className="text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Pitch Deck</a>
                    <button className="w-full bg-white text-black py-3 rounded-full font-semibold">
                        Launch App
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
