
import Hero from "@/components/hero"
import HeroBlue from "@/components/heroblue"
import WhyChooseBlue from "@/components/whychoose"
import PremiumServices from "@/components/premiumservices"
import ExpertWriters from "@/components/expertwriter"
import EasyProcess from "@/components/easpyprocess"
import WorkSamples from "@/components/worksamples"
import SubjectSpecialists from "@/components/subjectspecialist"
import HomeReviews from "@/components/homereviews"
import FaqSection from "@/components/faqsection"



export default function Home() {
  return (
    <>
      <Hero />
      <HeroBlue />
      <WhyChooseBlue />
      <PremiumServices />
      <ExpertWriters />
      <EasyProcess />
      <WorkSamples />
      <SubjectSpecialists />
      <HomeReviews />
      <FaqSection />
    </>
  )
}