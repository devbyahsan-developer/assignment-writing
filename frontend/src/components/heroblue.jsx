'use client'

import Image from "next/image"
import Link from "next/link"

export default function HeroExactMatch() {
    return (
        <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* IMAGE (Hidden only on mobile) */}
                    <div className="hidden md:flex justify-center -mt-70">
                        <Image
                            src="/image2.png"
                            alt="Student Assignment Help"
                            width={2200}
                            height={2200}
                            priority
                            className="w-full object-contain scale-125"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="text-center lg:text-left">

                        <h2 className="font-[Poppins] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-[#111827]">
                            Leading{" "}
                            <span className="text-[#059669]">
                                Assignment Writing Services in Gulf Countries
                            </span>{" "}
                            to Assist with Your Writing Needs Professionally
                        </h2>

                        <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed font-[Inter]">
                            Student life in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain
                            can be academically demanding. Tight deadlines and complex assignments
                            require expert assistance. Our professional writers provide
                            plagiarism-free assignments tailored to university requirements to help
                            students achieve academic excellence.
                        </p>

                        {/* FEATURES */}
                        <ul className="mt-6 space-y-4 text-gray-700 font-[Inter] text-sm sm:text-base">

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 bg-[#059669] rounded-full"></span>
                                <span>Qualified academic writers</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 bg-[#059669] rounded-full"></span>
                                <span>On-time delivery for urgent tasks</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 bg-[#059669] rounded-full"></span>
                                <span>100% original & plagiarism-free content</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 bg-[#059669] rounded-full"></span>
                                <span>Affordable pricing for Gulf students</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 bg-[#059669] rounded-full"></span>
                                <span>24/7 online customer support</span>
                            </li>

                        </ul>

                        {/* BUTTON */}
                        <div className="mt-7 sm:mt-8 flex justify-center lg:justify-start">
                            <Link
                                href="https://wa.me/971581485428"
                                target="_blank"
                                className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition-all duration-300"
                            >
                                Order Now
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
