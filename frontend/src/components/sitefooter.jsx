"use client"

import Link from "next/link"
import Image from "next/image"
import {
    Instagram,
    Linkedin,
    Twitter,
    Mail
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function SiteFooter() {

    return (
        <footer className="relative bg-[#0F172A] text-gray-300 pt-20 pb-8 overflow-hidden font-[Inter]">

            {/* Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(5,150,105,0.08),_transparent_60%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1 */}
                    <div>

                        <h3 className="text-2xl font-bold text-white mb-6 font-[Poppins]">
                            <span className="text-[#059669]">Gulf</span> Assignment Help
                        </h3>

                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            GulfAssignmentHelp.com provides professional academic writing services for
                            students studying in universities across the Gulf region including the UAE,
                            Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain. Our services are designed
                            to provide structured academic guidance and reference materials while
                            maintaining complete confidentiality and academic integrity.
                        </p>

                        {/* Contact */}
                        <div className="space-y-3 text-sm">

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

                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">

                            <a
                                href="https://www.instagram.com/assignmenthelp.oman1?igsh=cTAwbHN4MmpuNml0&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#059669] transition"
                            >
                                <Instagram size={18} />
                            </a>

                            <a
                                href="https://x.com/assignment4yoo?s=21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#059669] transition"
                            >
                                <Twitter size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/university-projects-a859a5384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#059669] transition"
                            >
                                <Linkedin size={18} />
                            </a>

                        </div>

                        {/* Payment Logos */}
                        <div className="flex flex-wrap gap-4 mt-8 items-center">

                            <div className="relative w-[60px] h-[30px]">
                                <Image
                                    src="/payments/muscat.png"
                                    alt="Muscat Bank"
                                    fill
                                    sizes="60px"
                                    className="object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>

                            <div className="relative w-[60px] h-[30px]">
                                <Image
                                    src="/payments/visa.png"
                                    alt="Visa"
                                    fill
                                    sizes="60px"
                                    className="object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>

                            <div className="relative w-[60px] h-[30px]">
                                <Image
                                    src="/payments/mastercard.png"
                                    alt="Mastercard"
                                    fill
                                    sizes="60px"
                                    className="object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>

                            <div className="relative w-[60px] h-[30px]">
                                <Image
                                    src="/payments/monzo.png"
                                    alt="Monzo"
                                    fill
                                    sizes="60px"
                                    className="object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>

                            <div className="relative w-[60px] h-[30px]">
                                <Image
                                    src="/payments/mashreq.png"
                                    alt="Mashreq Bank"
                                    fill
                                    sizes="60px"
                                    className="object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>

                        </div>

                    </div>

                    {/* Column 2 */}
                    <div>

                        <h4 className="text-white font-semibold mb-6 border-b border-[#059669] pb-2 font-[Poppins]">
                            Policies
                        </h4>

                        <ul className="space-y-3 text-sm">

                            <li><Link href="/about" className="hover:text-[#059669] transition">About Us</Link></li>
                            <li><Link href="/reviews" className="hover:text-[#059669] transition">Reviews</Link></li>
                            <li><Link href="/blogs" className="hover:text-[#059669] transition">Blogs</Link></li>
                            <li><Link href="/contact-us" className="hover:text-[#059669] transition">Order Now</Link></li>
                            <li><Link href="/contact-us" className="hover:text-[#059669] transition">Contact Us</Link></li>
                            <li><Link href="/terms" className="hover:text-[#059669] transition">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-[#059669] transition">Privacy Policy</Link></li>
                            <li><Link href="/refund" className="hover:text-[#059669] transition">Refund Policy</Link></li>

                        </ul>

                    </div>

                    {/* Column 3 */}
                    <div>

                        <h4 className="text-white font-semibold mb-6 border-b border-[#059669] pb-2 font-[Poppins]">
                            Services
                        </h4>

                        <ul className="space-y-3 text-sm">

                            <li><Link href="/" className="hover:text-[#059669] transition">Academic Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Article Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Case Study Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Essay Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Copywriting</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Coursework Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">CV Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Dissertation Writing</Link></li>

                        </ul>

                    </div>

                    {/* Column 4 */}
                    <div>

                        <h4 className="text-white font-semibold mb-6 border-b border-[#059669] pb-2 font-[Poppins]">
                            More Services
                        </h4>

                        <ul className="space-y-3 text-sm">

                            <li><Link href="/" className="hover:text-[#059669] transition">Personal Statement Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">PowerPoint Presentation</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Research Paper Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Research Proposal Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">SOP Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Term Paper Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Thesis Writing</Link></li>
                            <li><Link href="/" className="hover:text-[#059669] transition">Web Content Writing</Link></li>

                        </ul>

                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-[#059669] pt-6 text-center">
                    <div className="bg-[#059669] text-white py-3 rounded-full text-sm font-semibold">
                        © {new Date().getFullYear()} Gulf Assignment Help. All Rights Reserved.
                    </div>
                </div>

            </div>

        </footer>
    )
}