// --------------- CardInfo Component ----------------
function CardInfo({ title, details, containerClass }) {
    return (
        <div className={`${containerClass}`}>
            <div>
                <h2 className='text-xl font-semibold mb-2'>{title}</h2>
                <p className='text-gray-600'>{details}</p>
            </div>
        </div>
    );
}

// --------------- Main App / Section ----------------
export default function FeatureSection() {
    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 font-ibm flex flex-col items-center">
            <div className="w-full max-w-7xl py-16 bg-white rounded-4xl">
                <h2 className='text-3xl md:text-4xl font-bold font-mono mb-6 md:mb-10 lg:mb-14 text-center px-4'>
                    Empower Your Business with <br />
                    Our Cutting-Edge <span className='text-green-500 underline'>Features</span>
                </h2>

                {/* Cards Container */}
                <div className='flex flex-col md:flex-row gap-6 px-4'>

                    {/* Left Column */}
                    <div className='flex flex-col gap-5 flex-1'>
                        <CardInfo
                            title="Expert Advice and Support"
                            details="Our dedicated team is here to help you every step of the way, with expert guidance and tailored advice."
                            containerClass="flex items-center bg-blue-50 rounded-xl p-6 shadow-md cursor-pointer"
                        />

                        <CardInfo
                            title="Wide Range of Loan Products"
                            details="Choose from a variety of loan options, including short-term working capital and long-term investments."
                            containerClass="flex items-center bg-white rounded-xl p-6 shadow-md cursor-pointer"
                        />
                    </div>

                    {/* Right Column */}
                    <div className='flex flex-col gap-5 flex-1'>
                        <CardInfo
                            title="Transparent Fees & Terms"
                            details="Understand exactly what you’re paying for, with no hidden fees or confusing terms."
                            containerClass="flex items-center bg-white rounded-xl p-6 shadow-md cursor-pointer"
                        />

                        <CardInfo
                            title="Dedicated Customer Support"
                            details="Access 24/7 customer support from our experienced team, to assist you with any inquiries, or guidance you may need."
                            containerClass="flex items-center bg-blue-50 rounded-xl p-6 shadow-md cursor-pointer"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
