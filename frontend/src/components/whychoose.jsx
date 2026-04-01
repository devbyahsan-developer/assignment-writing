'use client'

import Image from "next/image"

export default function WhyChooseBlue() {
    return (
        <section className="bg-[#F8FAFC] py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Why Choose <span className="text-emerald-600">Gulf Assignment Help</span>
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">
                        Professional academic writing services trusted by students across Oman and Gulf universities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-50 items-center">

                    {/* Features */}
                    <div className="space-y-6">

                        <Feature
                            title="Guaranteed A+ Quality"
                            text="Our academic experts follow university grading standards to deliver high quality assignments."
                        />

                        <Feature
                            title="100% Plagiarism-Free Work"
                            text="Every assignment is checked through plagiarism detection tools before delivery."
                        />

                        <Feature
                            title="On-Time Delivery"
                            text="We strictly follow deadlines to ensure timely submission of your assignments."
                        />

                        <Feature
                            title="24/7 Student Support"
                            text="Our support team is available anytime through WhatsApp and email."
                        />

                        <Feature
                            title="Unlimited Free Revisions"
                            text="We revise your assignment until it fully meets your expectations."
                        />

                    </div>

                    {/* Image */}
                    <div className="hidden md:flex justify-center ">
                        <Image
                            src="/image7.png"
                            alt="Student Assignment Help"
                            width={2200}
                            height={2200}
                            priority
                            className="w-full object-contain scale-125"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}


/* Feature Component */
function Feature({ title, text }) {
    return (
        <div className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

            <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>

            <div>
                <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{text}</p>
            </div>

        </div>
    )
}