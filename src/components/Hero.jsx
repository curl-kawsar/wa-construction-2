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
        "/hero-slide-3.png",
        "/hero-slide-4.png",
        "/hero-slide-5.png"
    ];

    return (
        <section className="bg-[#FFFAEB] pt-12 md:pt-20 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Hero Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 relative">

                    {/* Left Column: Text (appears second on mobile) */}
                    <div className="relative z-10 order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Building the <br />
                            Foundations of <br />
                            Tomorrow, Today
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-lg">
                            For over 20 years, Wa Construction has specialized in delivering
                            complex projects with precision, safety, and guaranteed on-time
                            completion
                        </p>
                        <a
                            href="tel:+14633333896"
                            className="inline-block text-white px-8 py-3 rounded-md font-medium text-lg transition-transform transform hover:scale-105 shadow-md"
                            style={{ backgroundColor: "#611A1A" }}
                        >
                            Let's Make a Discovery Call
                        </a>
                    </div>

                    {/* Right Column: Wireframe Image (appears first on mobile) */}
                    <div className="relative z-10 flex justify-center items-center order-1 md:order-2">
                        {/* Using a placeholder for the wireframe image. 
                 The user provided an image that contained a wireframe sketch. 
                 We will assume there's a file named 'hero-wireframe.png' or similar, 
                 or we can use a generic placeholder for now.
             */}
                        <div className="w-full max-w-md aspect-square relative">
                            {/* Visual placeholder for the wireframe if specific image missing */}

                            <Image src="/hero-wireframe.png" alt="Architectural Sketch" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Image Slider */}
            <div className="w-full bg-white relative z-20">
                {/* Carousel Container */}
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                        {slides.map((src, index) => (
                            <div className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0" key={index}>
                                <div className="h-64 relative border-r border-white">
                                    <Image src={src} alt={`Project Image ${index + 1}`} fill className="object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
