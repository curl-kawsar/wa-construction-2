"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
        Autoplay({ delay: 3000 }),
    ]);

    // Placeholder images for the slider using a generic construction/architecture theme 
    // since we don't have the specific house images yet.
    // In a real scenario, these would be local imports or URLs to the actual assets.
    const slides = [
        "/hero-slide-1.png",
        "/hero-slide-2.png",
        "/hero-slide-4.png",
        "/hero-slide-5.png",
        "/slider 7.jpg"
    ];

    return (
        <section className="bg-[#FFFAEB] relative w-full overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[348px] relative">
                {/* Main Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center pt-6 md:pt-8 lg:pt-12 xl:pt-16 pb-8 md:pb-12 lg:pb-16 xl:pb-20 relative">
                    {/* Left Column: Text */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-12 xl:mb-16">
                            <h1 
                                className="font-bold text-gray-900 leading-tight"
                                style={{
                                    fontSize: 'clamp(28px, 4.5vw, 56px)',
                                    lineHeight: '1.15',
                                    letterSpacing: 'clamp(-0.5px, -0.02em, -1px)',
                                    color: '#1a1a1a',
                                }}
                            >
                                Building the <br />
                                Foundations of <br />
                                Tomorrow, Today
                            </h1>
                            <p 
                                className="text-gray-600 max-w-full lg:max-w-[589px]"
                                style={{
                                    fontSize: 'clamp(14px, 1.8vw, 22px)',
                                    color: '#474747',
                                }}
                            >
                                For over 20 years, Wa Construction has specialized in delivering complex projects with precision, safety, and guaranteed on-time completion
                            </p>
                        </div>
                        <a
                            href="tel:+14633333896"
                            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-normal transition-all hover:opacity-90 shadow-lg"
                            style={{ 
                                backgroundColor: "#611A1A",
                                fontSize: 'clamp(16px, 2vw, 24px)',
                                boxShadow: '0px 24px 30px 0px rgba(32, 4, 4, 0.15)',
                            }}
                        >
                            Lets have a discovery call
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                ></path>
                            </svg>
                        </a>
                    </div>

                    {/* Right Column: Wireframe Image */}
                    <div className="relative z-10 flex justify-center lg:justify-end items-center order-1 lg:order-2">
                        <div 
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[711px] aspect-square lg:aspect-auto relative"
                            style={{
                                height: 'clamp(250px, 35vw, 550px)',
                            }}
                        >
                            <Image 
                                src="/hero-wireframe.png" 
                                alt="Architectural Sketch" 
                                fill 
                                className="object-contain" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Image Slider */}
            <div className="w-full bg-white relative z-20 pt-8 md:pt-12 pb-8 md:pb-12">
                {/* Carousel Container */}
                <div className="embla overflow-hidden px-4 sm:px-6 md:px-8" ref={emblaRef}>
                    <div className="embla__container flex">
                        {slides.map((src, index) => (
                            <div 
                                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0" 
                                key={index}
                            >
                                <div 
                                    className="h-48 sm:h-56 md:h-64 relative mx-1 md:mx-2"
                                >
                                    <Image src={src} alt={`Project Image ${index + 1}`} fill className="object-cover rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
