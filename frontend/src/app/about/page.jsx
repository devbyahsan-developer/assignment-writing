export const metadata = {
    title: "About Gulf Assignment Help | Academic Writing Services in UAE, Saudi Arabia, Oman",

    description:
        "Learn about Gulf Assignment Help, a trusted academic writing service for university students in UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. We provide professional assistance for assignments, essays, dissertations and research papers.",

    keywords: [
        "assignment help UAE",
        "assignment help Dubai",
        "assignment help Saudi Arabia",
        "assignment help Oman",
        "assignment help Qatar",
        "assignment help Kuwait",
        "assignment help Bahrain",
        "essay writing UAE",
        "dissertation writing Dubai",
        "research paper writing Gulf countries",
        "academic writing Middle East"
    ],

    openGraph: {
        title: "About Gulf Assignment Help | Academic Writing Services in Gulf Countries",
        description:
            "Professional academic writing support for students studying in universities across UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain.",
        type: "website",
        locale: "en_US",
        siteName: "Gulf Assignment Help",
    },
};

export default function AboutPage() {
    return (
        <section className="bg-[#F8FAFC] text-[#111827] font-[Inter]">

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-[Poppins]">
                    About <span className="text-[#059669]">Gulf Assignment Help</span>
                </h1>

                <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                    Gulf Assignment Help is a trusted academic writing service supporting
                    university students across the Gulf region including the UAE, Saudi Arabia,
                    Qatar, Oman, Kuwait, and Bahrain. We provide professional assistance with
                    assignments, dissertations, essays, research papers, and academic projects
                    while maintaining strict confidentiality and academic integrity.
                </p>
            </div>

            {/* Who We Are */}
            <div className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-[Poppins]">
                    Who We Are
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                    Gulf Assignment Help is a professional academic support platform
                    designed for students studying in universities and colleges across
                    the Middle East. Our team includes experienced academic writers,
                    researchers, and editors who specialize in various academic disciplines
                    including business, management, healthcare, engineering, and social sciences.
                </p>

                <p className="text-gray-600 leading-relaxed">
                    Many universities in the Gulf region follow international academic
                    standards such as UK, US, and Australian curricula. Our experts are
                    familiar with these standards and provide well-structured academic
                    content that meets university guidelines. Over the years we have
                    assisted thousands of students with coursework, case studies,
                    dissertations, research proposals, and editing services.
                </p>
            </div>

            {/* Mission Section */}
            <div className="bg-[#F8FAFC] py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-[Poppins]">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to provide reliable and professional assignment help
                        for students studying in Gulf universities while maintaining the
                        highest academic standards. We aim to support students facing tight
                        deadlines, complex research topics, and academic pressure by offering
                        structured guidance and expert-written reference materials that help
                        them perform better in their academic journey.
                    </p>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 font-[Poppins]">
                    Why Choose Gulf Assignment Help?
                </h2>

                <div className="grid md:grid-cols-2 gap-10 text-gray-600">

                    <div>
                        <h3 className="font-semibold text-[#111827] mb-3">✔ Qualified Academic Experts</h3>
                        <p>Our writers are subject specialists with strong academic and research backgrounds.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#111827] mb-3">✔ 100% Plagiarism-Free Work</h3>
                        <p>All assignments are written from scratch with proper citations and references.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#111827] mb-3">✔ On-Time Delivery</h3>
                        <p>We strictly follow university deadlines and can handle urgent assignments efficiently.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#111827] mb-3">✔ Confidential & Secure</h3>
                        <p>Your personal information and academic details remain completely private.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#111827] mb-3">✔ Affordable Student Pricing</h3>
                        <p>We offer competitive pricing suitable for international students studying in Gulf universities.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#111827] mb-3">✔ 24/7 Student Support</h3>
                        <p>Our support team is available anytime to guide you throughout the process.</p>
                    </div>

                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#0F172A] py-16 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-[Poppins]">
                    Need Professional Assignment Help in the Gulf?
                </h2>

                <p className="text-gray-300 mb-6">
                    Get expert academic support for your assignments, essays, and dissertations today.
                </p>

                <a
                    href="https://wa.me/971581485428"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                    Order Now
                </a>
            </div>

        </section>
    );
}