"use client";

import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-start h-20 items-center">
                    {/* Logo (left aligned) */}
                    <div className="flex">
                        <Image 
                            src="/navlogo.png" 
                            alt="WA Construction Logo" 
                            width={180}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
