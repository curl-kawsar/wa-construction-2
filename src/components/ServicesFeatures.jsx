import Image from "next/image";

export default function ServicesFeatures() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    {/* Left Column: Feature Blocks */}
                    <div className="space-y-8 md:space-y-10">
                        {/* Feature 1: Value Engineering */}
                        <div>
                            <h3 
                                className="font-bold text-gray-900 mb-2 md:mb-3"
                                style={{
                                    fontSize: 'clamp(20px, 3vw, 30px)',
                                }}
                            >
                                Value Engineering
                            </h3>
                            <p 
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                }}
                            >
                                We optimize materials and methods during pre-construction to
                                reduce costs without ever compromising quality or longevity.
                            </p>
                        </div>

                        {/* Feature 2: Predictive Scheduling */}
                        <div>
                            <h3 
                                className="font-bold text-gray-900 mb-2 md:mb-3"
                                style={{
                                    fontSize: 'clamp(20px, 3vw, 30px)',
                                }}
                            >
                                Predictive Scheduling
                            </h3>
                            <p 
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                }}
                            >
                                Utilizing advanced project management software, we provide
                                accurate timelines and proactively mitigate potential delays.
                            </p>
                        </div>

                        {/* Feature 3: Safety First Culture */}
                        <div>
                            <h3 
                                className="font-bold text-gray-900 mb-2 md:mb-3"
                                style={{
                                    fontSize: 'clamp(20px, 3vw, 30px)',
                                }}
                            >
                                Safety First Culture
                            </h3>
                            <p 
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                }}
                            >
                                Our zero-incident commitment is supported by stringent,
                                continuous training, protecting our teams, your site, and your
                                investment.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Excavator Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="w-full max-w-lg aspect-[4/3] relative">
                            {/* Placeholder for excavator line drawing image */}
                            <Image
                                src="/crane.png"
                                alt="Construction Excavator"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
