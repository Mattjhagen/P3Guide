import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden">
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default Layout;
