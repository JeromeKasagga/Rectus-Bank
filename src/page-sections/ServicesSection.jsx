import { useState } from 'react';
import ApplyButton from '../Components/ApplyButton';
import img1 from '../assets/Images/hero-lady-img1.jpg';
import img2 from '../assets/Images/loan-man-img2.jpg';
import img3 from '../assets/Images/man-typing-on-laptop.jpg';

function TabHeader({ label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-4 md:px-9 md:py-5 rounded-2xl font-mono font-semibold text-lg md:text-xl shadow-sm cursor-pointer transition-colors ${
                isActive ? 'bg-secondary text-white shadow-lg' : 'bg-gray-50 text-gray-800'
            }`}>
            {label}
        </button>
    );
}

function ServicesSection() {
    const tabLabels = [
        { key: "lineOfCredit", label: "Business Line of Credit" },
        { key: "EquipmentFinancing", label: "Equipment Financing" },
        { key: "MerchantServices", label: "Merchant Services" }
    ];

    const [activeTab, setActiveTab] = useState(tabLabels[0].key);

    const services = [
        {
            key: "lineOfCredit",
            title: "Business Line Of Credit",
            description: "A flexible and convenient way to access funds for your business needs. Use it as you need it and only pay interest on what you borrow. Perfect for unexpected expenses.",
            subtitle1: "Benefits: ",
            benefit1: "Easy access to funds as well as and when needed",
            benefit2: "Flexible repayment options",
            benefit3: "Interest only on funds borrowed",
            imgUrl: img1
        },
        {
            key: "EquipmentFinancing",
            title: "Equipment Financing",
            description: "Helps your business purchase or lease necessary equipment without paying the full cost upfront. This could include machinery, vehicles, or technology.",
            subtitle1: "Benefits: ",
            benefit1: "upgrade your equipment easily as your business grows",
            benefit2: "Preserve your working capital",
            benefit3: "Enjoy tax benefits",
            imgUrl: img2
        },
        {
            key: "MerchantServices",
            title: "Merchant Services",
            description: "Helps your business purchase or lease necessary equipment without paying the full cost upfront. This could include machinery, vehicles, or technology.",
            subtitle1: "Benefits: ",
            benefit1: "POS systems, card readers & online payment gateways",
            benefit2: "Instant payout options available",
            benefit3: "Real-time analytics and sales tracking",
            imgUrl: img3
        }
    ];

    const activeService = services.find(service => service.key === activeTab);

    return (
        <section className="min-h-screen px-4 md:px-15 py-20 font-ibm">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-5 items-center text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-mona font-semibold">
                        Financial Freedom with <span className="text-secondary underline">Rectus</span>
                    </h1>
                    <p className="text-accent opacity-75 max-w-3xl">
                        Our offerrings are tailored to meet the unique needs and challenges of each business, and are designed to provide the funding and support necessary to help businesses reach their full potential.
                    </p>
                </div>
                
                <div className="w-full">
                    <div className="flex overflow-x-auto gap-4 mb-6 md:flex-row no-scrollbar">
                        {tabLabels.map(tab => (
                            <TabHeader
                                key={tab.key}
                                label={tab.label}
                                isActive={tab.key === activeTab}
                                onClick={() => setActiveTab(tab.key)}
                            />
                        ))}
                    </div>

                    {activeService && (
                        <div className='flex flex-col lg:flex-row gap-8 items-center justify-between w-full rounded-md mt-7'>
                            <div className='w-full lg:w-1/2 bg-white p-6 md:p-10 shadow-lg rounded-3xl flex flex-col gap-6'>
                                <h1 className='font-mono font-semibold text-2xl'>{activeService.title}</h1>
                                <p className='text-sm text-accent opacity-75 leading-5'>{activeService.description}</p>
                                <div>
                                    <h3 className='font-mono font-semibold text-md'>{activeService.subtitle1}</h3>
                                    <ul className="list-disc pl-5 space-y-2 mt-2">
                                        <li>{activeService.benefit1}</li>
                                        <li>{activeService.benefit2}</li>
                                        <li>{activeService.benefit3}</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <ApplyButton />
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <img 
                                    src={activeService.imgUrl} 
                                    alt={activeService.title} 
                                    className='w-full h-auto max-h-[400px] lg:max-h-[500px] rounded-3xl shadow-md object-cover'
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;