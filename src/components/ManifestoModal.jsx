import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ManifestoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        <X size={24} className="text-zinc-400 hover:text-white" />
                    </button>

                    <div className="p-8 md:p-12">
                        <div className="max-w-3xl mx-auto space-y-12">
                            {/* Header */}
                            <div className="text-center space-y-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-mono tracking-wider">
                                    THE MANIFESTO
                                </span>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                    Character is Currency.
                                </h2>
                                <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light italic border-l-2 border-primary/50 pl-6 my-8">
                                    "The current financial system is designed to exclude. It relies on backward-looking metrics—FICO scores, bank statements, and credit history—that penalize the young, the unbanked, and the unlucky."
                                </p>
                                <p className="text-xl text-zinc-300">
                                    We believe that trust is the fundamental unit of value in an economy. Not your balance sheet. Not your zip code. <strong>Your word.</strong>
                                </p>
                            </div>

                            <div className="grid gap-12">
                                {/* Section 01 */}
                                <div className="space-y-4">
                                    <div className="text-primary font-mono text-xl">01</div>
                                    <h3 className="text-2xl font-bold text-white">The Problem: FICO is Broken</h3>
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        Credit bureaus are black boxes. They profit from your data while keeping you in the dark. A single missed payment can ruin a decade of hard work. They measure compliance, not potential. They measure history, not humanity.
                                    </p>
                                </div>

                                {/* Section 02 */}
                                <div className="space-y-4">
                                    <div className="text-primary font-mono text-xl">02</div>
                                    <h3 className="text-2xl font-bold text-white">The Solution: Social Underwriting</h3>
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        P3 reintroduces the village to finance. Before banks, communities lent to each other based on reputation. If your neighbor vouched for you, you got the loan.
                                    </p>
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        We use AI to quantify this social capital. We analyze on-chain behavior, community endorsements, and repayment consistency to build a dynamic, forward-looking Reputation Score.
                                    </p>
                                </div>

                                {/* Section 03 */}
                                <div className="space-y-4">
                                    <div className="text-primary font-mono text-xl">03</div>
                                    <h3 className="text-2xl font-bold text-white">The Protocol: Code is Law, But Humans are Justice</h3>
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        Smart contracts ensure loans are funded instantly and repayments are transparent. But unlike cold DeFi protocols that liquidate you the moment a line crosses a chart, P3 offers redemption arcs.
                                    </p>
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        We allow for mentorship. We allow for "Fresh Start" grants. We build technology that serves people, not the other way around.
                                    </p>
                                </div>
                            </div>

                            {/* Footer Quote */}
                            <div className="pt-8 border-t border-white/10 text-center space-y-4">
                                <p className="text-xl md:text-2xl font-serif text-white/90">
                                    "We are building a future where your net worth is determined by your network, and your credit is determined by your character."
                                </p>
                                <div className="text-primary font-mono font-bold">— The P3 DAO</div>
                            </div>

                            <div className="flex justify-center pt-8">
                                <button onClick={onClose} className="glass-panel hover:bg-white/10 px-8 py-3 rounded-full text-white font-medium transition-colors flex items-center gap-2">
                                    Close Manifesto <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ManifestoModal;
