"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadershipSection() {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
        <section className="bg-white py-12 md:py-20 lg:py-24 xl:py-28 pb-0 relative overflow-hidden" style={{ marginBottom: '-48px' }}>
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
            {/* Background Image with subtle animation */}
            <div
                className="absolute inset-0 pointer-events-none bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: "url('/ceo-bg.png')",
                    backgroundSize: "40%",
                    opacity: isHovered ? 0.4 : 0.25,
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                }}
            ></div>

            {/* Dotted pattern background using border color */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle, #5C1010 1px, transparent 2px)",
                    backgroundSize: "24px 24px",
                }}
            ></div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/30 to-white/60"></div>

            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative" style={{ zIndex: 10 }}>
                {/* CEO Profile */}
                <div className="mb-4 md:mb-6">
                    {/* Profile Image Container with Border - Enhanced with hover effect */}
                    <div
                        className="mx-auto mb-10 inline-block p-2 rounded-full transition-all duration-500 ease-out cursor-pointer"
                        style={{
                            backgroundColor: "#5C1010",
                            boxShadow: isHovered
                                ? "0 20px 60px -15px rgba(92, 16, 16, 0.5), 0 0 40px rgba(92, 16, 16, 0.2)"
                                : "0 10px 40px -10px rgba(92, 16, 16, 0.3)",
                            transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-white relative">
                            <Image
                                src="/ceo-profile.png"
                                alt="Dr. Waleed Alzahrani PhD"
                                width={224}
                                height={224}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                                style={{
                                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                                }}
                            />
                            {/* Subtle shine effect on hover */}
                            <div
                                className="absolute inset-0 rounded-full transition-opacity duration-500"
                                style={{
                                    background:
                                        "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                                    opacity: isHovered ? 1 : 0,
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Name with fade-in animation */}
                    <h2
                        className="font-bold text-gray-900 mb-3 transition-all duration-300"
                        style={{
                            fontSize: 'clamp(24px, 4vw, 36px)',
                            letterSpacing: isHovered ? "0.02em" : "0",
                        }}
                    >
                        Dr. Waleed Alzahrani PhD
                    </h2>

                    {/* Title with subtle underline animation */}
                    <div className="relative inline-block mb-8">
                        <p className="text-lg font-medium" style={{ color: "#5C1010" }}>
                            Chief Executive Officer
                        </p>
                        <div
                            className="absolute -bottom-1 left-1/2 h-0.5 transition-all duration-500 ease-out"
                            style={{
                                backgroundColor: "#5C1010",
                                width: isHovered ? "100%" : "0%",
                                transform: "translateX(-50%)",
                            }}
                        ></div>
                    </div>

                    {/* Description */}
                    <p 
                        className="text-gray-600 leading-relaxed max-w-2xl mx-auto px-4"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 18px)',
                        }}
                    >
                        Dr. Waleed Alzahrani is a distinguished investor and visionary founder whose firsthand experience owning and scaling a large real estate portfolio shapes WA MAC's unwavering commitment to providing the best home experience for landlords, tenants, and homeowners.
                    </p>
                </div>

                {/* COO Note Section with hover animation */}
                <div className="pt-2 md:pt-3 group cursor-pointer" onClick={() => router.push('/coo-note')}>
                    {/* Icon with bounce animation on hover */}
                    <div className="mx-auto mb-4 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <Image
                            src="/coo-icon.png"
                            alt="COO Icon"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Label */}
                    <p 
                        className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 18px)',
                        }}
                    >
                        A Note From the COO
                    </p>
                </div>
            </div>
        </section>
    );
}
