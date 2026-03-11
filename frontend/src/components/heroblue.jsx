'use client'

import Image from "next/image"
import Link from "next/link"

export default function HeroExactMatch() {
    return (
        <section className="bg-[#F8FAFC] py-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/image2.png"
                        alt="Student Assignment Help"
                        width={450}
                        height={450}
                        className="w-full max-w-md object-cover"
                        priority
                    />
                </div>

                {/* CONTENT */}
                <div>

                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Leading{" "}
                        <span className="text-emerald-600">
                            Assignment Writing Services in Gulf Countries
                        </span>{" "}
                        to Assist with Your Writing Needs Professionally
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        Student life in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain can be academically demanding.
                        Tight deadlines and complex assignments require expert assistance. Our professional writers provide
                        plagiarism-free assignments tailored to university requirements to help students achieve academic excellence.
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-700">

                        <li className="flex items-start">
                            <span className="text-emerald-600 mr-3 text-lg">■</span>
                            Qualified academic writers
                        </li>

                        <li className="flex items-start">
                            <span className="text-emerald-600 mr-3 text-lg">■</span>
                            On-time delivery for urgent tasks
                        </li>

                        <li className="flex items-start">
                            <span className="text-emerald-600 mr-3 text-lg">■</span>
                            100% original & plagiarism-free content
                        </li>

                        <li className="flex items-start">
                            <span className="text-emerald-600 mr-3 text-lg">■</span>
                            Affordable pricing for Gulf students
                        </li>

                        <li className="flex items-start">
                            <span className="text-emerald-600 mr-3 text-lg">■</span>
                            24/7 online customer support
                        </li>

                    </ul>

                    {/* BUTTON */}
                    <div className="mt-8">
                        <a
                            href="https://wa.me/971581485428"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
                        >
                            Order Now
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}