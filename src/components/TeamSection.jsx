import Image from "next/image";

const teamMembers = [
    {
        name: "Erin Begy",
        role: "COO",
        image: "/erin.png",
        description:
            "Our Chief Operating Officer is the driving force behind our daily operations, known for an exceptional work ethic, relentless passion, and inspiring leadership. She is like a wave that keeps everything flowing steadily guiding the team through challenges with grace and momentum. ",
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
            {/* Dotted pattern background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle, #5C1010 1px, transparent 2px)",
                    backgroundSize: "24px 24px",
                }}
            ></div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 max-w-[768px] mx-auto px-4">
                    <p 
                        className="font-semibold mb-2 text-gray-900"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 20px)',
                            lineHeight: '1.5',
                        }}
                    >
                        Leadership
                    </p>
                    <h2 
                        className="font-bold text-gray-900"
                        style={{
                            fontSize: 'clamp(28px, 4vw, 48px)',
                            lineHeight: '1.2',
                        }}
                    >
                        Our Team
                    </h2>
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden"
                            style={{
                                background: "linear-gradient(180deg, #151515 0%, #3c0c0c 100%)",
                                border: "2px solid rgba(102, 17, 17, 0.9)",
                            }}
                        >
                            <div
                                className="rounded-2xl h-full flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:py-10 gap-4 md:gap-6"
                                style={{
                                    background: "linear-gradient(180deg, #151515 0%, #3c0c0c 100%)",
                                }}
                            >
                                {/* Profile Image */}
                                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Name and Role */}
                                <div className="flex flex-col items-center gap-2 md:gap-4 w-full">
                                    {/* Name */}
                                    <h3 
                                        className="text-white text-center font-normal"
                                        style={{
                                            fontSize: 'clamp(20px, 3vw, 32px)',
                                        }}
                                    >
                                        {member.name}
                                    </h3>

                                    {/* Role */}
                                    <p 
                                        className="text-white text-center font-normal"
                                        style={{
                                            fontSize: 'clamp(16px, 2.5vw, 24px)',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        {member.role}
                                    </p>
                                </div>

                                {/* Description */}
                                <p 
                                    className="text-white font-light text-center leading-relaxed px-2"
                                    style={{
                                        fontSize: 'clamp(14px, 2vw, 20px)',
                                        letterSpacing: '-0.2px',
                                        maxWidth: '518px',
                                    }}
                                >
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
