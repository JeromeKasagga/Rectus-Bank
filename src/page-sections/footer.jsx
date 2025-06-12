import ApplyButton from "../Components/ApplyButton";
import img1 from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/hero-lady-img1.jpg';

export default function Footer() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 mt-28 mb-10 font-ibm">
            {/* Call to Action Section */}
            <div className="w-full max-w-7xl mx-auto text-white p-8 sm:p-12 md:p-16 bg-primary rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Text Block */}
                    <div className="flex flex-col space-y-6 max-w-xl">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono leading-tight">
                                Ready to grow your <br />
                                <span className='text-green-500 underline'>business?</span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl mt-4">
                                Apply for your business loan today
                            </p>
                        </div>
                        <ApplyButton />
                    </div>

                    {/* Image */}
                    <div className="hidden md:block">
                        <img src={img1} alt="Business woman" className="h-80 w-64 rounded-xl object-cover" />
                    </div>
                </div>

                {/* Contact + Social Links */}
                <div className="mt-16 pt-8 border-t border-gray-600">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-300">
                        <div className="text-center md:text-left">
                            <p>Support@rectusbank.com</p>
                            <p className="mt-2">Care@rectusbank.com</p>
                        </div>
                        <div className="flex space-x-6">
                            {['WhatsApp', 'Telegram', 'Twitter'].map((platform) => (
                                <a key={platform} href="#" className="hover:text-green-500">
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto mt-16 px-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-secondary">RECTUS BANK</h2>
                        <p className="text-gray-400">
                            Rectus specializes in providing business loans to small and medium-sized businesses in their local area.
                        </p>
                        <div className="space-y-2 text-gray-400">
                            <p>Support@rectusbank.com</p>
                            <p>+123 456789</p>
                        </div>
                    </div>

                    {/* Company Links */}
                    <FooterLinks title="Company" links={['Home', 'About Us', 'Products', 'Why Choose Us', 'Impact on Society', 'Testimonials']} />

                    {/* Explore Links */}
                    <FooterLinks title="Explore" links={['FAQs', 'How it Works', 'Qualifications', 'Tool Kits', 'Market Place']} />

                    {/* Quick Links */}
                    <FooterLinks title="Quick Links" links={['Apply Now', 'Contact Us', 'Blog', 'Privacy Policy', 'Terms of Service']} />
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-5 text-center text-gray-400 text-sm">
                    <p>© rectusbank 2025, All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

// Reusable Footer Link Column
function FooterLinks({ title, links }) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
