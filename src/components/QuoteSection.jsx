export default function QuoteSection() {
    return (
        <section className="bg-white pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-24 relative overflow-hidden">
            {/* Vector Lines Overlay - Responsive */}
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }}>
                {/* Left vertical line - responsive */}
                <div 
                    className="absolute top-0 bottom-0"
                    style={{
                        left: 'clamp(50px, 13.4%, 258px)',
                        width: '1px',
                        background: 'rgba(0, 0, 0, 0.1)',
                    }}
                />
                {/* Center vertical line - responsive */}
                <div 
                    className="absolute top-0 bottom-0"
                    style={{
                        left: 'clamp(200px, 49.4%, 949px)',
                        width: '1px',
                        background: 'rgba(0, 0, 0, 0.1)',
                    }}
                />
                {/* Right vertical line - responsive */}
                <div 
                    className="absolute top-0 bottom-0"
                    style={{
                        left: 'clamp(300px, 86.5%, 1660px)',
                        width: '1px',
                        background: 'rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative" style={{ zIndex: 2 }}>
                <p 
                    className="text-gray-700 leading-relaxed font-light"
                    style={{
                        fontSize: 'clamp(18px, 3vw, 36px)',
                    }}
                >
                    WA Construction is transforming the homeowner, renter, and landlord
                    experience, making it seamless and efficient. Our attention to detail
                    and commitment to excellence is unmatched!
                </p>
            </div>
        </section>
    );
}
