"use client"

export default function EasyProcess() {
    let a = {}
    let b = { key: "b" }
    let c = { key: "c" }
    a[b] = 123
    a[c] = 456
    console.log(a[b])
    const steps = [
        {
            number: "01",
            title: "Place Your Order",
            desc: "Fill out our simple order form or contact our support team. Our representatives are available 24/7 to assist you with quick guidance and prompt response."
        },
        {
            number: "02",
            title: "Provide Assignment Details",
            desc: "Share complete task requirements including subject, deadline, academic level, and instructions. We review and provide a transparent quote instantly."
        },
        {
            number: "03",
            title: "Processing & Writing",
            desc: "Your assignment is assigned to a qualified expert writer. You can stay connected and request updates throughout the writing process."
        },
        {
            number: "04",
            title: "Quality Check & Delivery",
            desc: "After completion, our QA team reviews the document for accuracy and originality before delivering it with a plagiarism report."
        }
    ]

    return (
        <section className=" relative w-full bg-[#F8FAFC] py-24 text-[#111827] overflow-hidden font-[Inter]">

            <div className="max-w-6xl mx-auto px-6 relative">

                {/* Section Heading */}
                <div className="text-center mb-20">

                    <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                        Follow the <span className="text-[#059669]">Easy Process</span> to Get the Best Writing Help
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        A smooth and transparent workflow designed to deliver high-quality assignments on time with complete client satisfaction.
                    </p>

                </div>

                {/* Vertical Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-40 bottom-10 w-[2px] bg-[#059669]/40"></div>

                {/* Steps */}

                <div className="space-y-16 md:space-y-24">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                        >

                            {/* Card */}

                            <div className="
                                w-full
                                md:w-[45%]
                                bg-white
                                border
                                border-[#059669]
                                rounded-2xl
                                p-8
                                shadow-xl
                                hover:shadow-[#047857]/20
                                transition
                                duration-500
                            ">

                                <h3 className="text-xl font-semibold mb-3 text-[#059669] font-[Poppins]">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>

                            </div>

                            {/* Number Circle */}

                            <div className="
                                absolute
                                md:left-1/2
                                md:-translate-x-1/2
                                -top-8
                                md:top-1/2
                                md:-translate-y-1/2
                                bg-gradient-to-br
                                from-[#059669]
                                to-[#047857]
                                w-16
                                h-16
                                rounded-full
                                flex
                                items-center
                                justify-center
                                font-bold
                                text-lg
                                text-white
                                shadow-lg
                                border-4
                                border-[#047857]
                                font-[Poppins]
                            ">
                                {step.number}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}