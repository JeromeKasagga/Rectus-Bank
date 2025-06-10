// Page footer
import ApplyButton from "../Components/ApplyButton";
import img1 from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/hero-lady-img1.jpg';

export default function Footer() {
    return (
        <section className="h-screen mt-140 pb-60 pl-15 pr-15 font-ibm flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl text-white p-8 bg-primary rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-mono leading-13">
                                Ready to grow your <br />
                                <span className='text-green-500 underline'>business?</span>
                            </h2>
                            <p className="text-xl md:text-2xl mt-4">
                                Apply for your business loan today
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <ApplyButton />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src={img1} alt="Business woman" className="h-80 w-64 rounded-xl object-cover" />
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-600">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300">
                            <p>Support@rectusbank.com</p>
                            <p className="mt-2">Care@rectusbank.com</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-green-500">
                                WhatsApp
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-500">
                                Telegram
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-500">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* actual foot */}


            <div className="max-w-7xl mx-auto mt-15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-secondary">RECTUS BANK</h2>
                        <p className="text-gray-400">
                            Rectus specializes in providing business loans to small and medium-sized businesses in their local area.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-400">Support@rectusbank.com</p>
                            <p className="text-gray-400">+123 456789</p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Products', 'Why Choose Us', 'Impact on Society', 'Testimonials'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Explore</h3>
                        <ul className="space-y-2">
                            {['FAQs', 'How it Works', 'Qualifications', 'Tool Kits', 'Market Place'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Apply Now', 'Contact Us', 'Blog', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-5 text-center text-gray-400">
                    <p>© rectusbank 2025, All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

