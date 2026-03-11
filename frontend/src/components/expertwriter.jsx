"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ExpertWriters() {

    const trackRef = useRef(null)

    const [isPaused, setIsPaused] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    /* STATIC WRITERS */

    const writers = [
        {
            name: "Dr. David Anderson",
            image: "/writers/writer1.png",
            rate: "4.9 / 5",
            projects: "Completed 100+ Projects",
            description:
                "PhD in Business Administration with over 8 years of academic writing experience.",
            skills: ["Business", "Management", "Marketing", "Case Studies"],
        },
        {
            name: "Dr. Sophia Bennett",
            image: "/writers/writer2.png",
            rate: "4.8 / 5",
            projects: "Completed 150+ Projects",
            description:
                "Master’s in Computer Science specializing in research papers and programming assignments.",
            skills: ["Computer Science", "Programming", "AI", "Algorithms"],
        },
        {
            name: "Prof. Daniel Carter",
            image: "/writers/writer3.png",
            rate: "4.9 / 5",
            projects: "Completed 200+ Projects",
            description:
                "Economics expert with experience in dissertations and complex research projects.",
            skills: ["Economics", "Finance", "Statistics", "Research"],
        },
        {
            name: "Dr. Olivia Matthews",
            image: "/writers/writer4.png",
            rate: "4.7 / 5",
            projects: "Completed 100+ Projects",
            description:
                "Academic writing specialist in psychology and social sciences.",
            skills: ["Psychology", "Sociology", "Essays", "Research Papers"],
        },
        {
            name: "Dr. Christopher Hughes",
            image: "/writers/writer5.png",
            rate: "4.8 / 5",
            projects: "Completed 200+ Projects",
            description:
                "Engineering graduate with expertise in technical assignments and reports.",
            skills: ["Engineering", "Mathematics", "Physics", "Technical Reports"],
        },
    ]


    /* SCREEN CHECK */

    useEffect(() => {

        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreen()
        window.addEventListener("resize", checkScreen)

        return () => window.removeEventListener("resize", checkScreen)

    }, [])


    /* AUTO SLIDER */

    useEffect(() => {

        if (isMobile) return

        let animationFrame
        const speed = 0.6

        const animate = () => {

            if (!isPaused && trackRef.current) {

                trackRef.current.scrollLeft += speed

                if (
                    trackRef.current.scrollLeft >=
                    trackRef.current.scrollWidth / 2
                ) {
                    trackRef.current.scrollLeft = 0
                }

            }

            animationFrame = requestAnimationFrame(animate)
        }

        animate()

        return () => cancelAnimationFrame(animationFrame)

    }, [isPaused, isMobile])


    /* DUPLICATE FOR INFINITE LOOP */

    const duplicated =
        !isMobile && writers.length > 4
            ? [...writers, ...writers]
            : writers


    return (

        <section className="w-full bg-[#F8FAFC] py-20 text-[#111827] overflow-hidden font-[Inter]">

            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <h2 className="text-center text-2xl md:text-4xl font-bold mb-12 font-[Poppins]">
                    Meet Our Expert Assignment Writers
                </h2>


                {/* SLIDER */}

                <div
                    ref={trackRef}
                    className={`flex gap-6 overflow-x-auto no-scrollbar ${isMobile ? "snap-x snap-mandatory" : ""}`}
                >

                    {duplicated.map((writer, index) => (

                        <div
                            key={index}
                            onMouseEnter={() => !isMobile && setIsPaused(true)}
                            onMouseLeave={() => !isMobile && setIsPaused(false)}
                            className="
                            snap-start
                            min-w-[85%]
                            sm:min-w-[70%]
                            md:min-w-[48%]
                            bg-white
                            rounded-2xl
                            border border-[#059669]
                            shadow-xl
                            flex-shrink-0
                            transition duration-500
                            "
                        >

                            {/* HEADER */}

                            <div className="h-20 md:h-24 bg-gradient-to-r from-[#059669] to-[#047857] rounded-t-2xl relative">

                                <div className="absolute -bottom-8 left-5 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#059669] overflow-hidden">

                                    <Image
                                        src={writer.image}
                                        alt={writer.name}

                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover object-top"
                                    />

                                </div>

                            </div>


                            {/* CONTENT */}

                            <div className="pt-12 px-5 pb-6">

                                <h3 className="text-lg md:text-xl font-semibold font-[Poppins]">
                                    {writer.name}
                                </h3>

                                <div className="text-yellow-400 text-sm mt-1">
                                    ★★★★★
                                </div>

                                <p className="text-xs md:text-sm text-gray-500 mt-2">
                                    Rated: {writer.rate}
                                </p>

                                <p className="text-xs md:text-sm text-[#059669] font-medium">
                                    {writer.projects}
                                </p>

                                <p className="text-gray-600 text-xs md:text-sm mt-3 leading-relaxed">
                                    {writer.description}
                                </p>


                                {/* SKILLS */}

                                <div className="grid grid-cols-2 gap-2 mt-5">

                                    {writer.skills.map((skill, i) => (

                                        <div
                                            key={i}
                                            className="
                                            text-[10px]
                                            md:text-xs
                                            text-center
                                            bg-emerald-50
                                            border
                                            border-[#059669]
                                            px-2
                                            py-1
                                            rounded-full
                                            "
                                        >
                                            {skill}
                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )
}