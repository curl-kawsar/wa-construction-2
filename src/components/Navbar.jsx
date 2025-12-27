"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Left: Logo */}
                    <div className="flex-1 flex items-center justify-start">
                        {/* Placeholder for Logo */}
                        <div className="w-10 h-10"></div>
                    </div>

                    {/* Center: Desktop Menu Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-[#611A1A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-[#611A1A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-700 hover:text-[#611A1A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Services
                        </Link>
                    </div>

                    {/* Right: Contact Button & Mobile Menu Toggle */}
                    <div className="flex-1 flex items-center justify-end">
                        <div className="hidden md:block">
                            <button
                                className="text-white px-6 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-105"
                                style={{ backgroundColor: "#611A1A" }}
                            >
                                Contact us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#611A1A] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#611A1A]"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-[#611A1A] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-[#611A1A] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-700 hover:text-[#611A1A] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services
                        </Link>
                        <button
                            className="w-full text-left text-white block px-3 py-2 rounded-md text-base font-medium"
                            style={{ backgroundColor: "#611A1A" }}
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
