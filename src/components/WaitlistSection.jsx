import React from 'react';

const WaitlistSection = () => {
    return (
        <section id="waitlist" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Join the <span className="text-primary">New Credit Economy</span>
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                        Don't let your social capital go to waste. Sign up for early access to P3 Protocol and start leveraging your reputation for liquidity.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://p3final.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-background text-lg font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,153,0.3)] inline-flex items-center gap-2"
                        >
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistSection;
