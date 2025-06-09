import NavBar from "../Components/NavBar";
import ApplyButton from "../Components/ApplyButton";
import herolady from "/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/hero-lady-img4.jpg";
import { ArrowRight } from 'lucide-react';

function Hero() {
    return (
        <section className="bg-primary h-screen text-white font-ibm pt-3 rounded-bl-[100px]">
            <div className="pl-15 pr-15">
                <NavBar />
                <div className="w-290 flex flex-col mt-15">
                    <h1 className="font-mono font-thin text-[65px] leading-none">Unlock Your  <span className="font-bold">Business</span> <br /> Potential with Rectus Bank</h1>
                    <div className="flex justify-between mt-8 gap-20">
                        <div className="w-80 flex flex-col gap-10">
                            <p className="text-primary">Achieve business success with Rectus Bank. <br /> Our comprehensive financial solutions help <br /> unlock your business potential and take <br /> your vision to the next level. </p>
                            <div className="w-fit bg-white p-1 pr-2 flex  gap-2 items-center rounded-xl border-2 border-color cursor-pointer">
                                <ApplyButton />
                                <ArrowRight className="w-5 h-5 text-accent" />
                            </div>
                        </div>
                        <div>
                            <img src={herolady} alt="customer smiling" srcset="" className="h-90 w-70 rounded-lg" />
                        </div>

                        {/* The vertical timeline */}
                        <div className="relative flex-1 max-w-md text-white">
                            {/* Vertical Line */}
                            <div className="absolute left-3 top-0 h-full w-px bg-gray-500"></div>

                            {/* List Items */}
                            <ol className="space-y-12 pl-8 relative z-10 text-primary">
                                {[
                                    "Fast, easy loan application",
                                    "Flexible repayment options",
                                    "Competitive interest rates"
                                ].map((text, i) => (
                                    <li key={i} className="relative">
                                        {/* Green dot */}
                                        <span className="absolute -left-4 top-1.5 w-3 h-3 rounded-full bg-secondary border-1 border-(--border-color)"></span>
                                        <span className="text-base font-medium">{text}</span>
                                    </li>
                                ))}
                            </ol>

                            {/* User count */}
                            <div className="flex items-center gap-3 mt-8 pl-8">
                                {/* Avatars */}
                                <div className="flex -space-x-2">
                                    <img src="/user1.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="/user2.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="/user3.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                                {/* User Stats */}
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