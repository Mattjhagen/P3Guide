import React from 'react';

const DeckViewer = () => {
    return (
        <section id="deck" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Investment Deck</h2>
                    <p className="text-zinc-400">
                        Learn more about the vision and roadmap for P3 Protocol.
                    </p>
                </div>

                <div className="glass-panel rounded-3xl overflow-hidden aspect-video w-full relative">
                    <iframe
                        src="https://p3final.netlify.app/?deck=true"
                        title="P3 Pitch Deck"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default DeckViewer;
