"use client";

import Image from "next/image";

export default function Navbar() {
    return (
        <nav 
            className="w-full z-50 bg-white"
            style={{
                boxShadow: '0px 4px 100px 0px rgba(92, 16, 16, 0.1)',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[113px]">
                <div className="flex justify-between items-center h-16 md:h-20 lg:h-[75px]">
                    {/* Logo (left aligned) */}
                    <div className="flex items-center">
                        <Image 
                            src="/logo wa.jpeg" 
                            alt="WA Construction Logo" 
                            width={262}
                            height={40}
                            className="object-contain w-auto h-8 md:h-10 lg:h-[40px]"
                            priority
                        />
                    </div>

                    {/* Right side: Contact button */}
                    <div className="flex items-center">
                        {/* Contact Us Button */}
                        <a
                            href="tel:+14633333896"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'tel:+14633333896';
                            }}
                            className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg text-white font-normal transition-all hover:opacity-90 shadow-md cursor-pointer"
                            style={{ 
                                backgroundColor: "#611a1a",
                                boxShadow: '0px 4px 10px 0px rgba(32, 4, 4, 0.15)',
                                fontSize: 'clamp(12px, 1.5vw, 16px)',
                            }}
                        >
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5"
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
                            <span className="hidden sm:inline">Contact us</span>
                            <span className="sm:hidden">Call</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
