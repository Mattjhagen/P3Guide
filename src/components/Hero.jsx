import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Share2 } from 'lucide-react';
import ManifestoModal from './ManifestoModal';

const Hero = () => {
    const [isManifestoOpen, setIsManifestoOpen] = useState(false);

    const handleShare = () => {
        const text = encodeURIComponent("My Social Credit Score is Better Than Collateral. @P3Protocol");
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    };

    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Social Credit Score Protocol
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                    Your Social Credit Score is <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                        Better Than Collateral.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
                    Traditional banks reject you for having a "thin file". We look at the whole picture.
                    P3 analyzes your social capital and on-chain history to unlock instant liquidity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <button className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                        Check My Score <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => setIsManifestoOpen(true)}
                        className="glass-panel hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                    >
                        View Manifesto
                    </button>
                    <button
                        onClick={handleShare}
                        className="glass-panel hover:bg-white/5 text-zinc-400 hover:text-white px-6 py-4 rounded-full font-medium text-lg transition-all flex items-center gap-2"
                        title="Share to X"
                    >
                        <Share2 size={20} />
                    </button>
                </div>

                <div className="mt-20 grid md:grid-cols-3 gap-6">
                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">No FICO Required</h3>
                        <p className="text-zinc-400 text-sm">We don't care about your bank history. We care about your on-chain reputation.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Fresh Start Program</h3>
                        <p className="text-zinc-400 text-sm">Start small, repay on time, and automatically unlock larger credit lines.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Community Vouching</h3>
                        <p className="text-zinc-400 text-sm">Boost your score by getting vouched for by trusted community members.</p>
                    </div>
                </div>
            </div>

            <ManifestoModal isOpen={isManifestoOpen} onClose={() => setIsManifestoOpen(false)} />
        </section>
    );
};

export default Hero;
