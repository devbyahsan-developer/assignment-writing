"use client"

import Link from "next/link"

export default function WorkSamples() {

    const samples = [
        {
            title: "Supporting Journey",
            level: "Higher Diploma",
            pages: "12 Pages",
            format: "Harvard",
            file: "/samples/supporting-journey.pdf"
        },
        {
            title: "Strategic Management",
            level: "Bachelors Level",
            pages: "20 Pages",
            format: "Harvard",
            file: "/samples/strategy.docx"
        },
        {
            title: "Critical Thinking",
            level: "Bachelors Level",
            pages: "11 Pages",
            format: "APA 7th Edition",
            file: "/samples/critical-thinking.pdf"
        }
    ]

    return (
        <section className="w-full bg-[#F8FAFC] py-24 text-[#111827] font-[Inter]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                        Check Out Our <span className="text-[#059669]">Work Samples</span>
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Explore high-quality assignments completed by our expert writers across various academic disciplines.
                    </p>

                </div>


                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {samples.map((sample, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                border border-gray-200
                                rounded-2xl
                                p-8
                                shadow-lg
                                hover:shadow-[#059669]/20
                                transition duration-500
                            "
                        >

                            <h3 className="text-xl font-semibold text-[#059669] mb-6 text-center font-[Poppins]">
                                Assignment
                            </h3>


                            <div className="space-y-4 text-sm">

                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">Title:</span>
                                    <span className="font-medium">{sample.title}</span>
                                </div>



                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">Academic Level:</span>
                                    <span className="font-medium">{sample.level}</span>
                                </div>

                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="text-gray-500">Pages:</span>
                                    <span className="font-medium">{sample.pages}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">Format:</span>
                                    <span className="font-medium">{sample.format}</span>
                                </div>

                            </div>


                            {/* Buttons */}

                            <div className="mt-8 flex flex-col gap-4">

                                <a
                                    href={sample.file}
                                    download
                                    className="
                                        text-center
                                        bg-[#059669]
                                        hover:bg-[#047857]
                                        text-white
                                        py-2.5
                                        rounded-full
                                        text-sm
                                        font-medium
                                        transition duration-300
                                    "
                                >
                                    Download Sample
                                </a>


                                <a
                                    href="https://wa.me/971581485428"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-center
                                        border border-[#059669]
                                        text-[#059669]
                                        hover:bg-[#059669] hover:text-white
                                        py-2.5
                                        rounded-full
                                        text-sm
                                        font-medium
                                        transition duration-300
                                    "
                                >
                                    Order Now
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}