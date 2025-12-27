import Image from "next/image";

export default function ServicesFeatures() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Feature Blocks */}
                    <div className="space-y-10">
                        {/* Feature 1: Value Engineering */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Value Engineering
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                We optimize materials and methods during pre-construction to
                                reduce costs without ever compromising quality or longevity.
                            </p>
                        </div>

                        {/* Feature 2: Predictive Scheduling */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Predictive Scheduling
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Utilizing advanced project management software, we provide
                                accurate timelines and proactively mitigate potential delays.
                            </p>
                        </div>

                        {/* Feature 3: Safety First Culture */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Safety First Culture
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
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
