import NavBar from "../Components/NavBar";
import ApplyButton from "../Components/ApplyButton";
import herolady from "/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/hero-lady-img4.jpg";
import { ArrowRight } from 'lucide-react';

// ... (previous imports remain the same)

function Hero() {
    return (
        <section className="bg-primary min-h-screen text-white font-ibm pt-3 rounded-bl-[100px] overflow-hidden">
            {/* Container with original green scheme classes */}
            <div className="px-4 md:px-15">
                <NavBar />
                <div className="w-full max-w-7xl mx-auto flex flex-col mt-10 md:mt-15">
                    <h1 className="font-mono font-thin text-4xl md:text-5xl lg:text-[65px] leading-none">
                        Unlock Your <span className="font-bold">Business</span> <br /> Potential with Rectus Bank
                    </h1>
                    
                    <div className="flex flex-col lg:flex-row justify-between mt-8 gap-8 lg:gap-20">
                        {/* Left text block */}
                        <div className="w-full lg:w-80 flex flex-col gap-6 md:gap-10">
                            <p className="text-primary">
                                Achieve business success with Rectus Bank. <br className="hidden md:block" /> 
                                Our comprehensive financial solutions help <br className="hidden md:block" /> 
                                unlock your business potential and take <br className="hidden md:block" /> 
                                your vision to the next level.
                            </p>
                            <div className="w-fit bg-white p-1 pr-2 flex gap-2 items-center rounded-xl border-2 border-color cursor-pointer hover:bg-gray-50 transition-colors">
                                <ApplyButton />
                                <ArrowRight className="w-5 h-5 text-accent" />
                            </div>
                        </div>
                        
                        {/* Image - position unchanged */}
                        <div className="order-last lg:order-none">
                            <img 
                                src={herolady} 
                                alt="customer smiling" 
                                className="h-auto w-full max-w-md lg:h-90 lg:w-70 rounded-lg object-cover"
                            />
                        </div>

                        {/* Vertical timeline - original green dots */}
                        <div className="relative flex-1 max-w-md text-white">
                            <div className="absolute left-3 top-0 h-full w-px bg-gray-500"></div>
                            <ol className="space-y-6 md:space-y-12 pl-8 relative z-10 text-primary">
                                {[
                                    "Fast, easy loan application",
                                    "Flexible repayment options",
                                    "Competitive interest rates"
                                ].map((text, i) => (
                                    <li key={i} className="relative">
                                        <span className="absolute -left-4 top-1.5 w-3 h-3 rounded-full bg-secondary border-1 border-color"></span>
                                        <span className="text-base font-medium">{text}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="flex items-center gap-3 mt-6 md:mt-8 pl-8">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-white"></div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-lg font-bold">12M</p>
                                    <p className="text-sm text-gray-300">Active Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;