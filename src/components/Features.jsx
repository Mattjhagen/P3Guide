import React from 'react';
import { Brain, Users, Zap, Lock, Globe, Award } from 'lucide-react';

const features = [
    {
        icon: <Brain size={24} />,
        title: "AI Risk Analysis",
        description: "Our proprietary AI analyzes thousands of data points to determine your true creditworthiness, beyond just FICO."
    },
    {
        icon: <Users size={24} />,
        title: "Social Underwriting",
        description: "Leverage your social network. Friends can vouch for you, increasing your borrowing power and lowering rates."
    },
    {
        icon: <Zap size={24} />,
        title: "Instant Liquidity",
        description: "Approved loans are funded instantly via smart contracts. No waiting for bank transfers or approvals."
    },
    {
        icon: <Lock size={24} />,
        title: "Smart Contract Escrow",
        description: "Funds are secured by audited smart contracts, ensuring safety for both borrowers and lenders."
    },
    {
        icon: <Globe size={24} />,
        title: "Borderles Finance",
        description: "Access capital from anywhere in the world. P3 is a global protocol open to everyone."
    },
    {
        icon: <Award size={24} />,
        title: "Reputation Building",
        description: "Build your on-chain credit history. A strong P3 score unlocks opportunities across the DeFi ecosystem."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 px-6 bg-zinc-900/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">The Future of Credit</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        P3 replaces archaic banking systems with code and community trust.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                            <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
