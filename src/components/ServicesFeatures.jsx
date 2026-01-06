"use client";

import Image from "next/image";
import { useState } from "react";

export default function ServicesFeatures() {
    const [selectedFeature, setSelectedFeature] = useState(0);

    const features = [
        {
            title: "Value Engineering",
            description: "We optimize materials and methods during pre-construction to reduce costs without ever compromising quality or longevity.",
            image: "/crane.png",
        },
        {
            title: "Predictive Scheduling",
            description: "Utilizing advanced project management software, we provide accurate timelines and proactively mitigate potential delays.",
            image: "/predictive-scheduling.png",
        },
        {
            title: "Safety First Culture",
            description: "Our zero-incident commitment is supported by stringent, continuous training, protecting our teams, your site, and your investment.",
            image: "/safety-culture.png",
        },
    ];

    return (
        <section className="bg-white pt-12 md:pt-16 lg:pt-24 pb-0 relative overflow-hidden" style={{ marginBottom: '-48px' }}>
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
                {/* Horizontal lines - matching Figma design */}
                <div 
                    className="absolute left-0 right-0"
                    style={{
                        top: 'clamp(80px, 12.6%, 112px)',
                        height: '1px',
                        background: 'rgba(0, 0, 0, 0.1)',
                    }}
                />
                <div 
                    className="absolute left-0 right-0"
                    style={{
                        bottom: '0px',
                        height: '1px',
                        background: 'rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative" style={{ zIndex: 2 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    {/* Left Column: Feature Blocks */}
                    <div className="space-y-8 md:space-y-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedFeature(index)}
                                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                                style={{
                                    opacity: selectedFeature === index ? 1 : 0.7,
                                }}
                            >
                                <h3 
                                    className="font-bold text-gray-900 mb-2 md:mb-3 transition-colors duration-300"
                                    style={{
                                        fontSize: 'clamp(20px, 3vw, 30px)',
                                        color: selectedFeature === index ? '#1a1a1a' : '#4a4a4a',
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p 
                                    className="text-gray-600 leading-relaxed transition-colors duration-300"
                                    style={{
                                        fontSize: 'clamp(14px, 2vw, 16px)',
                                        color: selectedFeature === index ? '#4b5563' : '#6b7280',
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Dynamic Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="w-full max-w-lg aspect-[4/3] relative overflow-hidden">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="absolute inset-0 transition-opacity duration-500"
                                    style={{
                                        opacity: selectedFeature === index ? 1 : 0,
                                        pointerEvents: selectedFeature === index ? 'auto' : 'none',
                                    }}
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
