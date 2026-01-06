export default function QuoteSection() {
    return (
        <section className="bg-white pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                <p 
                    className="text-gray-700 leading-relaxed font-light"
                    style={{
                        fontSize: 'clamp(18px, 3vw, 36px)',
                    }}
                >
                    WA Construction is transforming the homeowner, renter, and landlord
                    experience, making it seamless and efficient. Our attention to detail
                    and commitment to excellence is unmatched!
                </p>
            </div>
        </section>
    );
}
