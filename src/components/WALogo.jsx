export default function WALogo({ className = "", size = "default" }) {
    // Size variants
    const sizeClasses = {
        small: "text-xl md:text-2xl",
        default: "text-2xl md:text-3xl lg:text-4xl",
        large: "text-3xl md:text-4xl lg:text-5xl",
    };

    const emblemSizes = {
        small: "w-10 h-10 md:w-12 md:h-12",
        default: "w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20",
        large: "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28",
    };

    return (
        <div className={`flex items-center gap-2 md:gap-3 lg:gap-4 ${className}`}>
            {/* Circular Emblem */}
            <div
                className={`${emblemSizes[size]} rounded-full flex-shrink-0 relative`}
                style={{
                    background: "linear-gradient(180deg, #5C1010 0%, #8B2E2E 50%, #5C1010 100%)",
                    border: "2px solid white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
            >
                {/* Stylized construction scene inside emblem */}
                <div className="absolute inset-1.5 md:inset-2 flex items-end justify-center">
                    <div className="w-full h-full relative">
                        {/* Central building (A shape with windows) */}
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                            <div
                                className="w-3 h-8 md:w-4 md:h-10 bg-white relative"
                                style={{
                                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                }}
                            >
                                {/* Windows on building */}
                                <div className="absolute top-2 left-0.5 w-0.5 h-0.5 bg-black" />
                                <div className="absolute top-2 right-0.5 w-0.5 h-0.5 bg-black" />
                                <div className="absolute top-4 left-0.5 w-0.5 h-0.5 bg-black" />
                                <div className="absolute top-4 right-0.5 w-0.5 h-0.5 bg-black" />
                            </div>
                            <div className="w-3 h-4 md:w-4 md:h-5 bg-white mt-0.5" />
                        </div>
                        {/* Left crane */}
                        <div className="absolute left-0.5 top-1">
                            <div className="w-0.5 h-2 md:h-3 bg-white" />
                            <div className="w-1.5 md:w-2 h-0.5 bg-white mt-0.5" />
                        </div>
                        {/* Right crane */}
                        <div className="absolute right-0.5 top-1">
                            <div className="w-0.5 h-2 md:h-3 bg-white" />
                            <div className="w-1.5 md:w-2 h-0.5 bg-white mt-0.5" />
                        </div>
                        {/* Base (W shape foundation) */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" style={{
                            clipPath: "polygon(0% 0%, 25% 100%, 50% 0%, 75% 100%, 100% 0%)",
                        }} />
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
                <div className={`${sizeClasses[size]} font-bold leading-tight`}>
                    <span className="text-black">W</span>
                    <span
                        className="inline-block"
                        style={{
                            background: "linear-gradient(180deg, #8B2E2E 0%, #5C1010 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        A
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <span
                        className={`${sizeClasses[size]} font-bold text-black leading-tight`}
                        style={{ fontSize: "0.55em" }}
                    >
                        Construction
                    </span>
                    <div
                        className="h-0.5 md:h-1 flex-1"
                        style={{
                            background: "linear-gradient(90deg, #5C1010 0%, #8B2E2E 100%)",
                            minWidth: "40px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

