// Page navigation bar

import ApplyButton from "./ApplyButton";
import rectuslogo from "/Users/JeromeMikaelson/Documents/PROGRAMMING/REACT LESSONS/React Projects/Rectus-Bank/src/assets/Images/rectus-logo.png"

function NavBar() {
    return (
        <div className="flex items-center justify-between font-ibm text-sm cursor-pointer">
            <div>
                <img src={rectuslogo} alt="Rectus-Bank-Logo" srcset="" className="h-10" />
            </div>
            <nav>
               <ul className="flex gap-8">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>FEATURES</li>
                <li>HOW TO APPLY</li>
                <li>TOOLS</li>
                <li>MORE</li>
               </ul>
            </nav>
            <ApplyButton />
        </div>
    );
}

export default NavBar;