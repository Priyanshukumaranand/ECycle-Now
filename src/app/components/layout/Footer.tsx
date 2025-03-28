import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-5 drop-shadow-[0_-2px_5px_rgba(0,0,0,0.25)]">
            <div className="text-center">
                <p className="text-gray-300">All rights reserved &copy; <Link href="/" className="text-white font-bold">ECycleNow</Link></p>
            </div>
        </footer>
    );
}

export default Footer;