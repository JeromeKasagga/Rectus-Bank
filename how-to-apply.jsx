// How to apply section
import { CheckCircle } from 'lucide-react';
import ApplyButton from '../Components/ApplyButton';

function Qualifications({ info }) {
    return (
        <div className='w-60 bg-xtra flex items-center gap-5 bg-gray-400 px-3 py-3 rounded-xl cursor-pointer transition-transform hover:scale-105'>
            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            <p className='font-mono text-lg font-bold'>{info}</p>
        </div>
    )
}

export default function HowToApply() {
    return (
        <section className="h-screen pl-15 pr-15 font-ibm flex-col">
            <div className='bg-white py-10 px-10 rounded-4xl flex flex-col gap-10 justify-between'>

                <div className='flex flex-col gap-8'>
                    <p className='font-mono font-bold text-4xl'>Do I <span className='text-green-500 underline'>Qualify?</span></p>
                    <div className='flex flex-wrap gap-10'>
                        <Qualifications info="CIBIL Score of 680 or higher" />
                        <Qualifications info="8 months bank statement" />
                        <Qualifications info="Based in India" />
                        <Qualifications info="Ideally 6+ months in the business" />
                        <Qualifications info="$100k in revenue" />
                    </div>
                </div>

            </div>


            <div className="flex flex-col gap-10 mt-20">

                {/* Section Header */}
                <div>
                    <h1 className="text-5xl text-center font-mono font-bold">
                        Three <span className="text-green-500 underline">Steps</span> to Funding Your Future
                    </h1>
                </div>

                {/* Main Content */}
                <div className="flex justify-between items-start gap-10">

                    {/* Left Card */}
                    <div className="w-1/2 bg-white p-10 rounded-4xl shadow-lg flex flex-col gap-5">
                        <div className="text-green-500 font-bold text-xl mb-5 font-mono">RECTUS BANK</div>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-gray-100 py-3 px-5 rounded-lg">
                                ✅ <span>Field 1</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-100 py-3 px-5 rounded-lg">
                                ✅ <span>Field 2</span>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-100 py-3 px-5 rounded-lg">
                                🖱️ <span>Field 3</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <ApplyButton />
                        </div>
                    </div>

                    {/* Right Steps */}
                    <div className="flex flex-col gap-10 w-1/2">
                        {/* Step 1 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h2 className="text-xl font-bold font-mono mb-2">Step 1: Submit your application</h2>
                                <p className="text-accent opacity-80">
                                    Provide us with some basic information about your business and financials to get started.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-green-100 text-green-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h2 className="text-xl font-bold font-mono mb-2">Step 2: Review and Approval</h2>
                                <p className="text-accent opacity-80">
                                    Our credit committee will review your application and work with you to ensure all necessary documents are provided.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-green-100 text-green-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h2 className="text-xl font-bold font-mono mb-2">Step 3: Finalize Your Loan</h2>
                                <p className="text-accent opacity-80">
                                    Complete the online checkout and receive your funds as soon as the same day.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
