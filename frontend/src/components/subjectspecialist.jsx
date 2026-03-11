"use client"

import {
    HeartPulse,
    Briefcase,
    BarChart3,
    Calculator,
    DollarSign,
    Megaphone,
    Scale,
    Crown,
    Lightbulb,
    Globe,
    Plane,
    Truck
} from "lucide-react"

export default function SubjectSpecialists() {

    const subjects = [
        { name: "Corporate Strategy & Innovation", icon: Briefcase },
        { name: "Financial Reporting & Analysis", icon: Calculator },
        { name: "Global Business & Trade", icon: Globe },
        { name: "Human Resource & Leadership Studies", icon: Crown },
        { name: "Healthcare Management & Policy", icon: HeartPulse },
        { name: "Digital Marketing & Branding", icon: Megaphone },
        { name: "Commercial & International Law", icon: Scale },
        { name: "Entrepreneurship & Business Development", icon: BarChart3 },
        { name: "Banking & Investment Management", icon: DollarSign },
        { name: "Research Methodology & Dissertation Support", icon: Lightbulb },
        { name: "Tourism & Hospitality Management", icon: Plane },
        { name: "Operations & Supply Chain Systems", icon: Truck }
    ]

    return (
        <section className="relative w-full bg-[#F8FAFC] py-24 text-[#111827] overflow-hidden font-[Inter]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-bold leading-snug font-[Poppins]">
                        Get Assistance from{" "}
                        <span className="text-[#059669]">Subject-Specific Experts</span>{" "}
                        Across Diverse Academic Fields
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        Our qualified specialists provide reliable academic guidance tailored to your discipline and study level.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">

                    {subjects.map((item, index) => {

                        const Icon = item.icon

                        return (
                            <div key={index} className="relative flex flex-col items-center">

                                {/* Icon Circle */}
                                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#059669] flex items-center justify-center bg-emerald-50 shadow-md">
                                    <Icon size={28} className="text-[#059669]" />
                                </div>

                                {/* Vertical Line */}
                                <div className="w-[2px] h-6 bg-[#059669]/50"></div>

                                {/* Pill Box */}
                                <div className="
                                    w-full
                                    text-center
                                    border
                                    border-dashed
                                    border-[#059669]
                                    rounded-full
                                    py-3
                                    text-sm
                                    hover:bg-[#047857]
                                    hover:text-white
                                    hover:border-[#047857]
                                    transition
                                    duration-300
                                ">
                                    {item.name}
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>

        </section>
    )
}