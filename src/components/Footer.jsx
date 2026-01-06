"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="text-white relative overflow-hidden"
            style={{
                backgroundColor: "#1e1e1e",
            }}
        >
            {/* Buildings Background Image - matching Figma */}
            <div 
                className="absolute left-0 right-0 mix-blend-overlay pointer-events-none"
                style={{
                    top: '131px',
                    aspectRatio: '1440/296',
                    opacity: 0.6,
                    backgroundImage: "url('/footer.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
                    {/* Column 1: Logo and Brand */}
                    <div>
                        <div className="flex flex-col items-center mb-4">
                            <div
                                className="flex items-center justify-center relative"
                                style={{
                                    width: "clamp(150px, 20vw, 220px)",
                                    height: "clamp(150px, 20vw, 220px)",
                                    minWidth: "150px",
                                    minHeight: "150px",
                                }}
                            >
                                <img
                                    alt="WA Management & Consulting Logo"
                                    className="object-contain"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: "transparent",
                                    }}
                                    src="/logo.png"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 
                            className="font-semibold mb-3 md:mb-4"
                            style={{
                                fontSize: 'clamp(16px, 2vw, 18px)',
                            }}
                        >
                            Quick Links
                        </h3>
                        <nav className="space-y-2">
                            <Link
                                href="/"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                About us
                            </Link>
                            <a href="tel:+14633333896" className="block text-left text-gray-300 hover:text-white transition-colors">
                                Contact us
                            </a>
                            <button className="block text-left text-gray-300 hover:text-white transition-colors">
                                Privacy Policy
                            </button>
                        </nav>
                    </div>

                    {/* Column 3: Stay Connected */}
                    <div>
                        <h3 
                            className="font-semibold mb-3 md:mb-4"
                            style={{
                                fontSize: 'clamp(16px, 2vw, 18px)',
                            }}
                        >
                            Stay Connected
                        </h3>
                        <div className="mb-6">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 bg-gray-900 border-2 border-[#611A1A] rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 text-sm sm:text-base"
                                />
                                <button
                                    className="text-white px-4 sm:px-6 py-2 rounded-lg hover:brightness-110 transition-colors font-medium whitespace-nowrap text-sm sm:text-base"
                                    style={{ backgroundColor: "#611A1A" }}
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                                style={{ borderColor: "#611A1A" }}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    ></path>
                                </svg>
                            </div>
                            <a href="tel:+14633333896" className="hover:opacity-80 transition-opacity">
                                <p 
                                    className="text-gray-400"
                                    style={{
                                        fontSize: 'clamp(12px, 1.5vw, 14px)',
                                    }}
                                >
                                    Call Us at
                                </p>
                                <p 
                                    className="font-semibold text-white"
                                    style={{
                                        fontSize: 'clamp(14px, 2vw, 18px)',
                                    }}
                                >
                                    (463) 333-3896
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                {/* <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2023 WA Management & Consulting. All rights reserved.
                    </p>
                </div> */}
            </div>
        </footer>
    );
}
