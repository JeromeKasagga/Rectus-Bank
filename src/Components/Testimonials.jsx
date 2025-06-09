// Testimonials component
import { useState } from 'react';
import img1 from '/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/testimonial-1.jpg';

export default function Testimonials() {
    const testimonialData = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Startup Founder",
            title: "Game-Changer for My Startup",
            details: "Rectus Bank provided the flexibility and support my startup needed to scale quickly. Their team truly understands modern entrepreneurs.",
            imgUrl: img1,
            rating: "5.0 rating"
        },
        {
            id: 2,
            name: "Maria Gonzalez",
            role: "Freelance Designer",
            title: "Incredible Support & Service",
            details: "I’ve never worked with a bank that offers this level of personalized service. Rectus Bank made the loan process simple and stress-free.",
            imgUrl: img1,
            rating: "4.8 rating"
        },
        {
            id: 3,
            name: "Samuel Lee",
            role: "Restaurant Owner",
            title: "Helped Us Through Tough Times",
            details: "During challenging periods, Rectus Bank was a reliable partner. Their quick approval and fair terms helped us stay afloat and thrive.",
            imgUrl: img1,
            rating: "5.0 rating"
        },
        {
            id: 4,
            name: "Fatima Ahmed",
            role: "Online Retailer",
            title: "Smooth and Transparent Process",
            details: "From start to finish, everything was transparent and easy to understand. I felt supported at every step. Highly recommended!",
            imgUrl: img1,
            rating: "4.9 rating"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerPage = 3;

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => 
            Math.min(prevIndex + 1, testimonialData.length - testimonialsPerPage)
        );
    };

    return (
        <section className="h-screen pl-15 pr-15 font-ibm">
            <div className='flex flex-col gap-10 justify-between mt-20 font-ibm bg-red-400'>

                <div>
                    <h3>Empowering Communities</h3>
                    <h1>Our positive <span className="text-secondary underline">Social Impact</span></h1>
                    <p>Our lending solutions are designed to help businesses achieve their goals and drive economic growth in their local area.</p>
                </div>

                <div className='flex justify-between'>
                    {testimonialData
                        .slice(currentIndex, currentIndex + testimonialsPerPage)
                        .map(({ id, title, name, role, details, imgUrl, rating }) => (
                            <div key={id} className='h-80 w-120 bg-white rounded-4xl p-8 flex flex-col justify-between cursor-pointer'>
                                <h2 className='font-mono font-bold text-xl'>{title}</h2>
                                <p className='text-accent opacity-80'>{details}</p>
                                <div className='flex justify-between items-center '>
                                    <div className='flex gap-5 justify-center items-center'>
                                        <img src={imgUrl} alt="" className='h-20 w-20 rounded-lg' />
                                        <div>
                                            <p className='font-mono font-bold text-lg'>{name}</p>
                                            <p className='text-accent opacity-80'>{role}</p>
                                        </div>
                                    </div>
                                    <p>{rating}</p>
                                </div>
                            </div>
                        ))}
                </div>

                <div className='flex justify-center gap-4 mt-4'>
                    <button 
                        onClick={handlePrev} 
                        disabled={currentIndex === 0} 
                        className='px-4 py-2 bg-secondary text-white rounded disabled:opacity-50'>
                        Prev
                    </button>
                    <button 
                        onClick={handleNext} 
                        disabled={currentIndex >= testimonialData.length - testimonialsPerPage} 
                        className='px-4 py-2 bg-secondary text-white rounded disabled:opacity-50'>
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
