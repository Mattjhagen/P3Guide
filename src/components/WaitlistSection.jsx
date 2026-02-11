import React, { useState } from 'react';

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

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-2 md:p-3 rounded-2xl max-w-lg mx-auto overflow-hidden">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfhi5RvVS8poa33JxoZUYZdEh8-mCPxZlQz5zuAv4sosOVExw/viewform?embedded=true"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            className="bg-transparent"
                            title="P3 Waitlist Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistSection;
