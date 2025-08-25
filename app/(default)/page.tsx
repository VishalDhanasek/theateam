export const metadata = {
  title: "Home",
  description: "The A Team Academy",
  kewwords: "The A Team",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import FancyTestimonialSliderPage from "@/app/fancy-testimonials-slider/page";
import Team from "@/components/our-team";
import Timeline from "@/components/timeline";
import Themes from "@/components/themes";
import Banner123 from "@/components/banner123";
import Takeaway from "@/components/takeaway";
import New from "@/components/ui/new";
import Bento from "@/components/ui/bentogrid";
import Bento1 from "@/components/bento2";
import New1 from "@/components/ui/new1";
import Organizers from "@/components/organizers";
import Timer3 from "@/components/timer";
import Faq from "@/components/faq";

export default function Home() {
  const faqs = [
    {
      title: "What makes The A Team Academy different from other institutes?",
      text: "At A Team Academy, we integrate AI-powered learning methods with traditional teaching. Our programs like AI Phonics, AI Abacus, AI Public Speaking, AI for Kids, and Vedic Maths are designed to make learning interactive, engaging, and future-ready. ",
      active: true,
    },
    {
      title: "Is AI-based learning suitable for young children?",
      text: "Yes! Our AI tools are carefully designed for child-friendly learning. They provide personalized practice, instant feedback, and fun activities that make learning simple and enjoyable for every child.",
      active: false,
    },
    {
      title: "Are the classes online, offline, or hybrid?",
      text: "We offer both offline and online learning options. Parents can choose what suits their child best. For offline, classes are conducted at our academy center; for online, interactive sessions are conducted live with teacher support.",
      active: false,
    },
    {
      title: "What age groups do you cater to?",
      text: "We have customized programs for children starting from age 4 up to age 14. Each course is designed to suit the child’s learning capacity at that age.",
      active: false,
    },
  ];
  return (
    <>
      <Hero />

      {/* <Organizers />
      <Timer3 countdownDays={54} /> */}
      <Features />
      <New />
      <Themes />
      <New1 />

      {/* <Testimonials />

      <Timeline/> */}
      <Faq faqs={faqs} />
      {/* <Takeaway/> */}
      <Banner123 />
    </>
  );
}
