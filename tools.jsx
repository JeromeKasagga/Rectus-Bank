// tools section
import calculator from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/calculator-img.png';
import odometer from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/odometer-img.png';
import seesaw from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/seesaw.png';
import bankAccount from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/seesaw.png';
import { CheckCircle } from "lucide-react";

export default function ToolsSection() {
    const toolsData = [
        {
            id: 1,
            title: "Loan Calculator",
            subtitle: "Easily estimate your monthly repayments",
            points: [
                "Input loan amount and interest rate",
                "Get estimate of monthly and total repayment",
                "Compare different loan options"
            ],
            buttonText: "Learn More",
            image: calculator
        },
        {
            id: 2,
            title: "Financial Statement Analyser",
            subtitle: "Understand your business's financial health",
            points: [
                "Input financial statements",
                "Generate financial ratios and analysis",
                "Understand the strengths and weaknesses of your business"
            ],
            buttonText: "Learn More",
            image: bankAccount
        },
        {
            id: 3,
            title: "Credit Score Simulator",
            subtitle: "Simulate different scenarios to improve your score",
            points: [
                "Input current credit information",
                "Simulate different scenarios",
                "Get tips on how to improve credit score"
            ],
            buttonText: "Learn More",
            image: odometer
        },
        {
            id: 4,
            title: "Loan Comparison Tool",
            subtitle: "Find the best loan for your business",
            points: [
                "Compare loan options from multiple lenders",
                "Get details on interest rates, fees and repayment terms",
                "Compare the overall costs of different loan options"
            ],
            buttonText: "Learn More",
            image: seesaw
        },
    ];

    return (
        <section className="h-screen pl-15 pr-15 font-ibm mt-100">
            <div className='bg-white py-10 px-5 rounded-4xl flex flex-col gap-20 items-center justify-between'>
                <div>
                    <h1 className='font-mono font-bold text-5xl text-center'>Streamline <span className='text-green-500 underline'>operations </span>with our tools</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {toolsData.map(({ id, title, subtitle, points, buttonText, image }) => (
                        <div
                            key={id}
                            className="bg-xtra shadow-md rounded-3xl p-8 flex flex-col gap-5 cursor-pointer">
                            <div className="flex items-center gap-4">
                                <img src={image} alt={title} className="w-12 h-12 object-contain" />
                                <div>
                                    <h2 className="font-mono font-bold text-xl">{title}</h2>
                                    <p className="text-accent opacity-80">{subtitle}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500 w-5 h-5" />
                                        <p className="text-sm text-gray-700">{point}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-6 w-fit flex items-center gap-2 border border-green-500 text-green-600 font-bold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors">
                                {buttonText} →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}