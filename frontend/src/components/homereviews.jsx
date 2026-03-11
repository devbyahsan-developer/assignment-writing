"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { reviews } from "@/data/review"
export default function HomeReviews() {

    const homeReviews = reviews.slice(0, 4)

    return (
        <section className="bg-[#F8FAFC] py-24 text-[#111827] font-[Inter]">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 font-[Poppins]">
                    Real Reviews from <span className="text-[#059669]">Real Students</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {homeReviews.map((item) => (

                        <div key={item.id} className="relative">

                            <div className="bg-emerald-50 rounded-3xl p-8 border border-[#059669]/30 shadow-md">

                                <div className="absolute -top-6 right-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white">

                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />

                                </div>

                                <h4 className="text-lg font-semibold font-[Poppins]">
                                    {item.name}
                                </h4>

                                <div className="flex gap-1 mt-2 text-yellow-400">

                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}

                                </div>

                                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                                    {item.review}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="text-center mt-14">

                    <Link
                        href="/reviews"
                        className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3 rounded-full text-sm font-medium transition"
                    >
                        Check All Reviews
                    </Link>

                </div>

            </div>

        </section>
    )
}