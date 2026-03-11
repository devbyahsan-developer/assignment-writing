"use client"

import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { blogs } from "@/data/blogs"

export default function BlogDetail() {

    const params = useParams()

    const blog = blogs.find((b) => b.slug === params.slug)

    if (!blog) return notFound()

    return (
        <section className="bg-[#F8FAFC] text-[#111827] py-20 font-[Inter]">

            <div className="max-w-4xl mx-auto px-6">

                <h1 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">
                    {blog.title}
                </h1>

                <p className="text-sm text-gray-500 mb-8">
                    Admin • {new Date(blog.created_at).toDateString()}
                </p>

                <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-12 shadow-md">

                    <Image
                        src={blog.featured_image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />

                </div>

                <div
                    className="prose prose-lg max-w-none text-gray-700 leading-8"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

            </div>

        </section>
    )
}