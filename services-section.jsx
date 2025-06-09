import { useState } from 'react';
import ApplyButton from '../Components/ApplyButton';
import img1 from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/loan=man-img1.jpg';
import img2 from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/loan-man-img2.jpg';
import img3 from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/man-typing-on-laptop.jpg';


// Tab Header Component
function TabHeader({ label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-9 py-5 rounded-2xl font-mono font-semibold text-xl shadow-sm cursor-pointer ${isActive ? 'bg-secondary text-white shadow-lg' : 'bg-gray-50 text-gray-800'
                }`}>
            {label}
        </button >
    )

}

// Services section
function ServicesSection() {
    // Tab labels/Titles
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
        <section className="h-screen pl-15 pr-15 font-ibm">
            <div className="w-290 flex flex-col gap-10 justify-items-center items-center mt-15">
                <div className="flex flex-col gap-5 justify-between justify-items-center items-center">
                    <h1 className="text-5xl font-mona font-semibold">Financial Freedom with <span className="text-secondary underline">Rectus</span></h1>
                    <p className="text-accent opacity-75">Our offerrings are tailored to meet the unique needs and challenges of each business, and are <br /> designed to provide the funding and support necessary to help businesses reach their full potential.</p>
                </div>
                <div>
                    <div className='flex flex-row justify-between'>
                        {tabLabels.map(tab => (
                            <TabHeader
                                key={tab.key}
                                label={tab.label}
                                isActive={tab.key === activeTab}
                                onClick={() => setActiveTab(tab.key)}
                            />
                        ))}
                    </div>

                    <div>
                        {activeService && (
                            <div key={activeService.key} className='flex gap-20 items-center justify-between w-full rounded-md mt-7'>
                                <div className=' h-100 p-10 pb-15 mt-0 w-1/2 bg-white shadow-lg rounded-[45px] flex flex-col justify-between'>
                                    <h1 className='font-mono font-semibold text-2xl'>{activeService.title}</h1>
                                    <p className=' text-sm text-accent opacity-75 leading-5'>{activeService.description}</p>
                                    <div>
                                        <h3 className='font-mono font-semibold text-md'>{activeService.subtitle1}</h3>
                                        <ul>
                                            <li>{activeService.benefit1}</li>
                                            <li>{activeService.benefit2}</li>
                                            <li>{activeService.benefit3}</li>
                                        </ul>
                                    </div>
                                    <ApplyButton />
                                </div>
                                <div className='w-1/2'>
                                    <img src={activeService.imgUrl} alt="service image" srcset="" className='h-100 rounded-[45px] shadow-xs' />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServicesSection;