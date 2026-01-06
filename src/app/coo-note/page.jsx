"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function COONotePage() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 py-8 sm:py-12 min-h-[calc(100vh-200px)]">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 z-20 bg-white rounded-full p-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Go back"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </button>

                <div
                    className={`w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                    }`}
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        transition: "1s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <Image
                            alt="A Note from Our COO"
                            fetchPriority="high"
                            width={1200}
                            height={1600}
                            decoding="async"
                            className="w-full h-auto object-contain"
                            src="/letter wa construction.jpeg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

