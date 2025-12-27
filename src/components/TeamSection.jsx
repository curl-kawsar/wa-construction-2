import Image from "next/image";

const teamMembers = [
    {
        name: "Erin Begy",
        role: "COO",
        image: "/erin.png",
        description:
            "Our Chief Operating Officer is the driving force behind our daily operations, known for an exceptional work ethic, relentless passion, and inspiring leadership. She is like a wave that keeps everything flowing steadily guiding the team through challenges with grace and momentum.",
    },
    {
        name: "Laura Leigh",
        role: "Head of HR",
        image: "/laura.png",
        description:
            "Our Head of HR brings a radiant, uplifting presence to the heart of our team. With a fun-loving spirit and a deep sense of empathy, she creates an environment where everyone feels valued, heard, and truly part of something bigger. Her personality lights up the workplace, turning routine moments into meaningful connections.",
    },
];

export default function TeamSection() {
    return (
        <section className="bg-white py-8 md:py-12 relative overflow-hidden">
            {/* Dotted pattern background using border color */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle, #5C1010 1px, transparent 2px)",
                    backgroundSize: "24px 24px",
                }}
            ></div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                        Leadership
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Our Team
                    </h2>
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-[2px] overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #661111 0%, #3C0C0C 100%)",
                            }}
                        >
                            <div
                                className="rounded-2xl p-8 md:p-10 text-center h-full"
                                style={{
                                    background: "linear-gradient(180deg, #151515 0%, #3C0C0C 100%)",
                                }}
                            >
                                {/* Profile Image */}
                                <div className="mx-auto mb-6 w-28 h-28 md:w-32 md:h-32 relative">
                                    <div
                                        className="w-full h-full rounded-full p-[2px] overflow-hidden"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #661111 0%, #3C0C0C 100%)",
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                                    {member.role}
                                </p>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
