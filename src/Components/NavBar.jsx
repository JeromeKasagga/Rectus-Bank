import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import rectusLogo from "../assets/Images/rectus-logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Why Choose Us', href: '#' },
    { name: 'Testimonials', href: '#' },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all ${scrolled ? 'bg-primary/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-15">
        <div className="flex justify-between items-center">
          {/* Logo - unchanged from original */}
          <div className="flex items-center">
            <img src={rectusLogo} alt="" srcset="" className='h-fit w-30' />
          </div>

          {/* Desktop Navigation - unchanged layout */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary hover:text-green-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary text-accent uppercase font-semibold text-xs p-3 px-4 font-ibm rounded-lg cursor-pointer  transition-colors">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-primary transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-primary hover:text-secondary py-2 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-secondary text-accent uppercase font-semibold text-xs p-3 px-4 font-ibm rounded-lg cursor-pointer hover:bg-green-600 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;