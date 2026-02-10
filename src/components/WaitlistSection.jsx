import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

const WaitlistSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Encode form data for Netlify
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "waitlist", email: email })
        })
            .then(() => setStatus('success'))
            .catch(error => {
                console.error(error);
                setStatus('error');
            });
    };

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

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-2 md:p-3 rounded-2xl max-w-lg mx-auto">
                        {status === 'success' ? (
                            <div className="text-green-400 font-medium py-3 px-4 flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-300">
                                <CheckCircle size={20} />
                                <span>You're on the list! We'll be in touch soon.</span>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col md:flex-row gap-2 relative"
                                name="waitlist"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                            >
                                <input type="hidden" name="form-name" value="waitlist" />
                                <div hidden>
                                    <input name="bot-field" />
                                </div>

                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black/20 text-white pl-10 pr-4 py-3 rounded-xl border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-zinc-600"
                                        disabled={status === 'submitting'}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    {status === 'submitting' ? 'Joining...' : (
                                        <>
                                            Join Waitlist <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                    {status === 'error' && (
                        <p className="text-red-400 text-sm mt-4">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                    <p className="text-xs text-zinc-500 mt-6">
                        By joining, you agree to receive updates about P3 Protocol. We respect your privacy.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WaitlistSection;
