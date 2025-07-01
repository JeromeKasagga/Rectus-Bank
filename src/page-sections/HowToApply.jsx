import { CheckCircle } from 'lucide-react';
import ApplyButton from '../Components/ApplyButton';

function Qualifications({ info }) {
    return (
        <div className='w-full sm:w-60 bg-xtra flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all hover:scale-[1.02]'>
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
            <p className='font-mono text-base md:text-lg font-bold'>{info}</p>
        </div>
    );
}

export default function HowToApply() {
    return (
        <section className="min-h-screen px-4 md:px-15 py-12 md:py-16 font-ibm">
            <div className='max-w-7xl mx-auto'>
                <div className='bg-white py-8 md:py-10 px-6 md:px-10 rounded-3xl md:rounded-4xl flex flex-col gap-8'>
                    <p className='font-mono font-bold text-3xl md:text-4xl'>Do I <span className='text-secondary underline'>Qualify?</span></p>
                    <div className='flex flex-wrap gap-4 md:gap-10'>
                        <Qualifications info="CIBIL Score of 680 or higher" />
                        <Qualifications info="8 months bank statement" />
                        <Qualifications info="Based in Uganda" />
                        <Qualifications info="Ideally 6+ months in the business" />
                        <Qualifications info="$100k in revenue" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-8 mt-10 md:mt-16">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-mono font-bold">
                            Three <span className="text-secondary underline">Steps</span> to Funding Your Future
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 rounded-3xl shadow-lg flex flex-col gap-5">
                            <div className="text-secondary font-bold text-lg md:text-xl mb-4 font-mono">RECTUS BANK</div>
                            <div className="flex flex-col gap-3">
                                {["Field 1", "Field 2", "Field 3"].map((field, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-gray-100 py-3 px-5 rounded-lg">
                                        {i < 2 ? "✅" : "🖱️"} <span>{field}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center mt-4'>
                                <ApplyButton />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 md:gap-10 w-full lg:w-1/2">
                            {[
                                {
                                    step: 1,
                                    title: "Submit your application",
                                    desc: "Provide us with some basic information about your business and financials to get started."
                                },
                                {
                                    step: 2,
                                    title: "Review and Approval",
                                    desc: "Our credit committee will review your application and work with you to ensure all necessary documents are provided."
                                },
                                {
                                    step: 3,
                                    title: "Finalize Your Loan",
                                    desc: "Complete the online checkout and receive your funds as soon as the same day."
                                }
                            ].map(({ step, title, desc }) => (
                                <div key={step} className="flex items-start gap-4 md:gap-5">
                                    <div className={`${step === 1 ? 'bg-secondary' : 'bg-accent bg-opacity-20'} text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl flex-shrink-0`}>
                                        {step}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold font-mono mb-2">Step {step}: {title}</h2>
                                        <p className="text-accent opacity-80">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}