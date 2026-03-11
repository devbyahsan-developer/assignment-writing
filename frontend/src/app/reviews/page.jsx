export const metadata = {
    title: "Student Reviews | Assignment Help UAE, Dubai, Saudi Arabia",

    description:
        "Read genuine student reviews about our assignment help, essay writing and dissertation services for universities in UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain.",

    keywords: [
        "assignment help UAE reviews",
        "assignment help Dubai reviews",
        "essay writing service UAE reviews",
        "assignment help Saudi Arabia reviews",
        "dissertation writing Dubai reviews",
        "academic writing services Gulf countries reviews"
    ],

    openGraph: {
        title: "Student Reviews | Gulf Assignment Help",
        description:
            "See what students from UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain say about our academic writing services.",
        type: "website",
        locale: "en_US",
        siteName: "Gulf Assignment Help",
    }
}



import { Star } from "lucide-react"
import Image from "next/image"
import { reviews } from "@/data/review"

export default function ReviewsPage() {

    return (
        <section className="bg-[#F8FAFC] py-24 text-[#111827] min-h-screen font-[Inter]">

            <div className="max-w-6xl mx-auto px-6">

                <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center font-[Poppins]">
                    Student <span className="text-[#059669]">Reviews</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-12">

                    {reviews.map((item) => (

                        <div
                            key={item.id}
                            className="relative bg-emerald-50 rounded-3xl p-8 border border-[#059669]/30 shadow-md hover:shadow-lg transition"
                        >

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
                                "{item.review}"
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}