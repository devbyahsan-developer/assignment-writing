

'use client'

import Link from "next/link"

export default function Hero() {
    return (
        <section
            className="relative text-white py-40 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')"
            }}
        >

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* CONTENT */}
                <div className="max-w-2xl">

                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Leading{" "}
                        <span className="text-emerald-500">
                            Assignment Writing Services
                        </span>{" "}
                        in Gulf Countries
                    </h1>

                    <p className="mt-6 text-gray-200 text-lg">
                        Professional academic writers helping university students with assignments,
                        dissertations, research papers and case studies.
                    </p>

                    {/* FEATURES */}
                    <ul className="mt-6 space-y-2 text-gray-200">

                        <li>✔ 100% Plagiarism Free</li>
                        <li>✔ Qualified Academic Experts</li>
                        <li>✔ On Time Delivery</li>
                        <li>✔ 24/7 Student Support</li>

                    </ul>

                    {/* BUTTONS */}
                    <div className="mt-8 flex gap-4 flex-wrap">

                        <a
                            href="https://wa.me/971581485428"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
                        >
                            Order Now
                        </a>

                        <a
                            href="https://wa.me/971581485428"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                        >
                            WhatsApp
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}