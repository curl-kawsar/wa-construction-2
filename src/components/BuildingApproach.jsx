export default function BuildingApproach() {
    return (
        <section className="bg-black text-white relative w-full pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-10 md:pb-12 lg:pb-16 xl:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-[259px] min-h-[350px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[736px]">
            {/* Vector Lines Overlay - Responsive */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, opacity: 0.3 }}>
                {/* Left vertical line - responsive */}
                <div 
                    className="absolute top-0 bottom-0"
                    style={{
                        left: 'clamp(50px, 13.4%, 258px)',
                        width: '1px',
                        background: 'repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 2px, transparent 8px)',
                    }}
                />
                {/* Right vertical line - responsive */}
                <div 
                    className="absolute top-0 bottom-0"
                    style={{
                        left: 'clamp(300px, 86.6%, 1662px)',
                        width: '1px',
                        background: 'repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 2px, transparent 8px)',
                    }}
                />
                {/* Top horizontal line - responsive */}
                <div 
                    className="absolute left-0 right-0"
                    style={{
                        top: 'clamp(60px, 12.2%, 90px)',
                        height: '1px',
                        background: 'repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 2px, transparent 8px)',
                    }}
                />
                {/* Middle horizontal line - responsive */}
                <div 
                    className="absolute left-0 right-0"
                    style={{
                        top: 'clamp(150px, 34%, 250px)',
                        height: '1px',
                        background: 'repeating-linear-gradient(to right, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 2px, transparent 8px)',
                    }}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center lg:justify-end min-h-[350px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[544px]" style={{ zIndex: 2 }}>
                {/* Content block - center on mobile, right on desktop */}
                <div className="w-full max-w-full lg:max-w-[1200px] xl:max-w-[1404px]">
                    {/* Heading - Responsive font sizes */}
                    <div className="mb-3 md:mb-4 lg:mb-5 xl:mb-6 px-2 md:px-3 lg:px-4 xl:px-5">
                        <h2 
                            className="font-bold text-white"
                            style={{
                                fontSize: 'clamp(24px, 4vw, 56px)',
                                lineHeight: '1.15',
                                letterSpacing: 'clamp(-0.3px, -0.01em, -0.8px)',
                                color: '#f4f4f4',
                            }}
                        >
                        Building Beyond the Blueprint:
                        <br />
                        Our Integrated Approach
                    </h2>
                    </div>

                    {/* Body Text - Responsive font sizes */}
                    <div className="px-2 md:px-3 lg:px-4 xl:px-5">
                        <p 
                            className="font-light leading-relaxed"
                            style={{
                                fontSize: 'clamp(14px, 2.5vw, 32px)',
                                letterSpacing: '-0.2px',
                                color: '#808080',
                            }}
                        >
                            In construction, success is defined by meticulous planning and rigorous execution. Our difference lies in our Integrated Project Delivery (IPD) model. We manage every variable from pre-construction design review and value engineering to flawless on-site coordination and safety protocols. This holistic control minimizes change orders, accelerates timelines, and guarantees that the finished structure not only meets your specifications but exceeds the highest standards of structural integrity and functional design.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
