
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
        <section className="h-screen pl-15 pr-15 font-ibm flex-col items-center justify-items-center">
            <div className='p-10 bg-white py-20 px-20 rounded-4xl '>

                <h2 className='text-4xl font-bold font-mono mb-10'>
                    Empower Your Business with <br />
                    Our Cutting-Edge <span className='text-green-500 underline'>Features</span>
                </h2>

                <div className='flex flex-col md:flex-row gap-5'>

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
