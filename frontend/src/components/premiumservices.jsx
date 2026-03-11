"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function PremiumServices() {

    const sliderRef = useRef(null)

    const [isPaused, setIsPaused] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    /* STATIC SERVICES */

    const services = [
        {
            title: "Assignment Writing",
            description:
                "High quality assignments tailored according to university guidelines."
        },
        {
            title: "Dissertation Help",
            description:
                "Complete dissertation support from proposal to final submission."
        },
        {
            title: "Research Papers",
            description:
                "Professional academic research papers with proper citations and references."
        },
        {
            title: "Case Study Writing",
            description:
                "Well structured case studies with deep research and academic formatting."
        },
        {
            title: "Essay Writing",
            description:
                "Custom essays written according to university standards and deadlines."
        },
        {
            title: "Homework Help",
            description:
                "Expert help for homework and academic tasks across multiple subjects."
        }
    ]


    /* SCREEN DETECTION */

    useEffect(() => {

        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreen()
        window.addEventListener("resize", checkScreen)

        return () => window.removeEventListener("resize", checkScreen)

    }, [])


    /* AUTO SCROLL (DESKTOP) */

    useEffect(() => {

        if (isMobile) return

        let animationFrame
        const speed = 0.5

        const animate = () => {

            if (!isPaused && sliderRef.current) {

                sliderRef.current.scrollLeft += speed

                if (
                    sliderRef.current.scrollLeft >=
                    sliderRef.current.scrollWidth / 2
                ) {
                    sliderRef.current.scrollLeft = 0
                }

            }

            animationFrame = requestAnimationFrame(animate)
        }

        animate()

        return () => cancelAnimationFrame(animationFrame)

    }, [isPaused, isMobile])


    /* DUPLICATE SERVICES FOR LOOP */

    const displayServices =
        !isMobile && services.length > 4
            ? [...services, ...services]
            : services


    return (
        // bg - [#F8FAFC]
        <section className="bg-[#F8FAFC] text-[#111827] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">

            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-14 font-[Poppins]">
                Our <span className="text-[#059669]">Excellent Premium Quality</span> Services
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

                {/* LEFT CARD */}

                <div className="hidden lg:flex lg:min-w-[280px] border-2 border-[#059669] rounded-xl p-8 items-center justify-center text-xl font-semibold bg-emerald-50 font-[Poppins]">
                    Our Premium Services
                </div>


                {/* SLIDER */}

                <div className="overflow-hidden w-full">

                    <div
                        ref={sliderRef}
                        className={`flex gap-6 items-stretch overflow-x-auto no-scrollbar ${isMobile ? "snap-x snap-mandatory" : ""
                            }`}
                    >

                        {displayServices.map((service, i) => (

                            <div
                                key={i}
                                onMouseEnter={() => !isMobile && setIsPaused(true)}
                                onMouseLeave={() => !isMobile && setIsPaused(false)}
                                className="
                                snap-start
                                min-w-[85%]
                                sm:min-w-[45%]
                                md:min-w-[300px]
                                lg:min-w-[23%]
                                bg-white
                                border border-gray-200
                                rounded-xl
                                p-6 sm:p-8
                                shadow-lg
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition-all duration-300
                                cursor-pointer
                                flex flex-col
                                font-[Inter]
                                "
                            >

                                <h3 className="text-[#059669] font-semibold text-lg mb-4 text-center font-[Poppins]">
                                    {service.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-600 text-center flex-grow">
                                    {service.description}
                                </p>

                                <a
                                    href="https://wa.me/971581485428"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        mt-6
                                        self-center
                                        px-5 py-2
                                        text-sm
                                        bg-[#059669]
                                        hover:bg-[#047857]
                                        text-white
                                        font-semibold
                                        rounded-lg
                                        shadow-md
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        "
                                >
                                    Order Now
                                </a>


                                {/* <a
                                    href="https://wa.me/971581485428"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
                                >
                                    Order Now
                                </a> */}

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}