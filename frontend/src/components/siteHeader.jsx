

'use client'
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import {
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Menu,
    X,
    ChevronDown
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function SiteHeader() {

    const [mobileOpen, setMobileOpen] = useState(false)

    const services = [
        "Assignment writing",
        "Editing & paraphrasing",
        "Article Writing",
        "Case Study Writing",
        "Essay Writing",
        "Plagiarism Free Work",
        "Coursework Writing",
        "CV Writing",
        "Dissertation Writing",
        "Ghost Writing",
        "Personal Statement Writing",
        "PowerPoint Presentation"
    ]

    return (
        <header className="w-full font-[Inter]">

            {/* Top Contact Bar */}
            <div className="bg-[#0F172A] border-b border-[#059669] text-white">
                <div className="max-w-7xl mx-auto px-5 py-4">

                    <div className="flex flex-wrap justify-center sm:justify-end text-sm">
                        <div className="flex items-center gap-6">

                            <a
                                href="https://wa.me/971581485428"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-[#059669] transition-all duration-300"
                            >
                                <FaWhatsapp size={16} />
                                <span className="hidden md:inline">+971581485428</span>
                            </a>

                            <a
                                href="mailto:globalwriters666@gmail.com"
                                className="flex items-center gap-2 hover:text-[#059669] transition-all duration-300"
                            >
                                <Mail size={16} />
                                <span className="hidden md:inline">globalwriters666@gmail.com</span>
                            </a>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">

                                <a
                                    href="https://x.com/assignment4yoo?s=21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#059669] transition-all duration-300"
                                >
                                    <Twitter size={16} />
                                </a>

                                <a
                                    href="https://www.instagram.com/assignmenthelp.oman1?igsh=cTAwbHN4MmpuNml0&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#059669] transition-all duration-300"
                                >
                                    <Instagram size={16} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/university-projects-a859a5384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#059669] transition-all duration-300"
                                >
                                    <Linkedin size={16} />
                                </a>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex items-center justify-between py-4">

                        {/* Logo */}
                        {/* <div className="flex items-center gap-2 font-[Poppins]">
                            <span className="text-2xl font-bold text-[#059669]">
                                Gulf
                            </span>
                            <span className="text-2xl font-bold text-white">
                                Assignment Help
                            </span>
                        </div> */}
                        <Link href="/" className="flex items-center gap-2 font-[Poppins]">

                            <Image
                                src="/logo.png"
                                alt="Gulf Assignment Help"
                                width={38}
                                height={38}
                                priority
                                className="object-contain"
                            />

                            <span className="text-2xl font-bold text-[#059669]">
                                Gulf
                            </span>
                            <span className="text-2xl font-bold text-white">
                                Assignment Help
                            </span>

                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 font-medium text-white">

                            <Link href="/" className="hover:text-[#059669] transition-all duration-300">
                                Home
                            </Link>

                            <Link href="/about" className="hover:text-[#059669] transition-all duration-300">
                                About
                            </Link>

                            {/* Services Dropdown */}
                            <div className="relative group">

                                <div className="flex items-center gap-1 cursor-pointer hover:text-[#059669] transition-all duration-300">
                                    Services <ChevronDown size={16} />
                                </div>

                                <div className="
                                    absolute left-0 top-full mt-2
                                    w-64
                                    bg-[#0F172A]
                                    border border-[#059669]
                                    rounded-lg shadow-xl
                                    py-4
                                    opacity-0 invisible
                                    group-hover:opacity-100
                                    group-hover:visible
                                    transition-all duration-300
                                    z-50
                                ">

                                    {services.map((item, index) => (
                                        <button
                                            key={index}
                                            className="block w-full text-left px-6 py-2 text-sm hover:bg-[#059669] hover:text-white transition-all duration-300"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>

                            </div>

                            <Link href="/blogs" className="hover:text-[#059669] transition-all duration-300">
                                Blogs
                            </Link>

                            <Link href="/reviews" className="hover:text-[#059669] transition-all duration-300">
                                Reviews
                            </Link>

                            <Link href="/contact-us" className="hover:text-[#059669] transition-all duration-300">
                                Contact
                            </Link>

                            <a
                                href="https://wa.me/971581485428"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
                            >
                                Order Now
                            </a>

                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-white"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>

                    </div>

                    {/* Mobile Menu */}
                    {mobileOpen && (
                        <div className="lg:hidden pb-6">
                            <nav className="flex flex-col gap-4 text-white font-medium">

                                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                                <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>

                                <div>
                                    <p className="mb-2">Services</p>
                                    <div className="ml-4 flex flex-col gap-2 text-sm text-gray-300">
                                        {services.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                onClick={() => setMobileOpen(false)}
                                                className="hover:text-[#059669] transition-all duration-300"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/blogs" onClick={() => setMobileOpen(false)}>Blogs</Link>
                                <Link href="/reviews" onClick={() => setMobileOpen(false)}>Reviews</Link>
                                <Link href="/orders" onClick={() => setMobileOpen(false)}>Contact</Link>

                                <a
                                    href="https://wa.me/971581485428"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
                                >
                                    Order Now
                                </a>

                            </nav>
                        </div>
                    )}

                </div>
            </div>

        </header>
    )
}