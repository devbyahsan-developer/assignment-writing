"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function FaqSection() {

    const [activeIndex, setActiveIndex] = useState(null)

    const faqs = [
        {
            question: "What distinguishes your assignment writing service from others in Pakistan?",
            answer:
                "We provide subject-specialist writers, on-time delivery, plagiarism-free content, unlimited revisions, and 24/7 dedicated customer support."
        },
        {
            question: "What subjects do you cover for assignment writing?",
            answer:
                "We cover Business, Management, Law, Health Care, IT, Finance, Marketing, Research Projects, and many other academic disciplines."
        },
        {
            question: "Can you handle urgent assignments with tight deadlines?",
            answer:
                "Yes, our expert team can handle urgent assignments without compromising quality or originality."
        },
        {
            question: "How do I place an order for assignment writing assistance?",
            answer:
                "You can place your order through our website form or contact our support team for quick guidance and assistance."
        },
        {
            question: "Do you provide revisions if the assignment doesn’t meet my expectations?",
            answer:
                "Yes, we offer free revisions to ensure your complete satisfaction with the final submission."
        },
        {
            question: "Can I communicate directly with the writer assigned to my assignment?",
            answer:
                "Yes, we allow structured communication to ensure transparency and clarity throughout the process."
        }
    ]

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="w-full bg-[#F8FAFC] py-24 text-black">

            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
                    Frequently Asked <span className="text-green-600">Questions</span>
                </h2>

                {/* Layout */}
                <div className="flex flex-col lg:flex-row items-start gap-16">

                    {/* Image (Hidden on Mobile & Tablet) */}
                    <div className="hidden lg:flex lg:w-[25%] justify-start mt-10">
                        <Image
                            src="/seo.png"
                            alt="FAQ"
                            width={420}
                            height={500}
                            className="object-contain drop-shadow-xl"
                        />
                    </div>

                    {/* FAQ Section */}
                    <div className="w-full lg:w-[75%] space-y-6">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-green-500/20 transition duration-300"
                            >

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center px-6 py-6 text-left"
                                >
                                    <span className="font-medium text-sm md:text-base pr-6">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={20}
                                        className={`text-green-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index
                                        ? "max-h-96 opacity-100 px-6 pb-6"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    )
}