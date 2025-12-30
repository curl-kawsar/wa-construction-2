"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="text-white relative"
            style={{
                backgroundImage: "url('/footer.png')",
                backgroundSize: "100% 50%",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0a0a0a",
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
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
                                {/* Using a standard img tag as per provided HTML, or Next.js Image if preferred. 
                    Sticking to simple img for direct compatibility with provided code structure unless specifically asked to optimize. 
                    However, Next.js Image is better. I will use a standard img tag for now to match exactly what might be expected relative to the 'public' folder paths.
                */}
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
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
                        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                        <div className="mb-6">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 bg-gray-900 border-2 border-[#611A1A] rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                                />
                                <button
                                    className="text-white px-6 py-2 rounded-lg hover:brightness-110 transition-colors font-medium whitespace-nowrap"
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
                                <p className="text-sm text-gray-400">Call Us at</p>
                                <p className="text-lg font-semibold text-white">
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
