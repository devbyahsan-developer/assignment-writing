export const metadata = {
    title: "Assignment Help Blogs | Academic Writing Tips for Students in UAE, Dubai & Gulf Countries",

    description:
        "Explore expert blogs about assignment help, essay writing, dissertation writing and academic success for university students in UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain.",

    keywords: [
        "assignment help UAE blog",
        "assignment writing tips Dubai",
        "essay writing help UAE",
        "dissertation writing Dubai",
        "assignment help Saudi Arabia",
        "academic writing Gulf countries",
        "research paper writing tips UAE",
        "student academic help Middle East"
    ],

    openGraph: {
        title: "Assignment Help Blogs | Academic Writing Tips for Gulf Students",
        description:
            "Read professional blogs about academic writing, essays, dissertations and assignment help for students in UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain.",
        type: "website",
        locale: "en_US",
        siteName: "Gulf Assignment Help",
    },
}



import Link from "next/link"
import Image from "next/image"
import { blogs } from "@/data/blogs"

export default function BlogsPage() {

    return (
        <section className="bg-[#F8FAFC] min-h-screen text-[#111827] py-20 px-6 font-[Inter]">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold mb-14 text-center font-[Poppins]">
                    Our <span className="text-[#059669]">Latest Blogs</span>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {blogs.map((blog) => (

                        <div
                            key={blog.slug}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#059669] transition duration-300 shadow-md hover:shadow-xl group"
                        >

                            <div className="relative w-full h-52 overflow-hidden">

                                <Image
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>

                            <div className="p-6">

                                <p className="text-sm text-[#059669] mb-2">
                                    Admin • {new Date(blog.created_at).toDateString()}
                                </p>

                                <h2 className="text-xl font-semibold mb-3 font-[Poppins]">
                                    {blog.title}
                                </h2>

                                <p className="text-gray-600 text-sm mb-5">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-[#059669] font-semibold hover:text-[#047857]"
                                >
                                    Read More →
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}