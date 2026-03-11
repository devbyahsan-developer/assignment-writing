import './globals.css'
import SiteHeader from '@/components/siteHeader'
import SiteFooter from '@/components/sitefooter'
import WhatsAppFloat from '@/components/whatsappfloat'

export const metadata = {
  title: "Assignment Help UAE | Essay & Dissertation Writing Services in Dubai, Saudi Arabia, Oman",

  description:
    "Professional assignment help for students in UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. Get expert assistance for essays, dissertations, research papers, coursework and academic writing with plagiarism-free work and on-time delivery.",

  keywords: [
    "assignment help UAE",
    "assignment help Dubai",
    "assignment help Saudi Arabia",
    "assignment help Oman",
    "assignment help Qatar",
    "assignment help Kuwait",
    "assignment help Bahrain",
    "essay writing service UAE",
    "dissertation writing help Dubai",
    "research paper writing Gulf countries",
    "academic writing services Middle East",
    "coursework writing UAE",
    "thesis writing Dubai",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Assignment Help UAE | Professional Academic Writing Services",
    description:
      "Expert academic writing services for students in UAE, Dubai, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain. Get plagiarism-free assignments, essays, dissertations and research papers.",
    type: "website",
    locale: "en_US",
    siteName: "Gulf Assignment Help",
  },

  twitter: {
    card: "summary_large_image",
    title: "Assignment Help UAE | Essay & Dissertation Writing Services",
    description:
      "Professional academic writing support for students in Gulf countries including UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <SiteHeader />

        {children}

        <SiteFooter />
        <WhatsAppFloat />

      </body>
    </html>
  )
}