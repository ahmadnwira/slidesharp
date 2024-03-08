"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What do I get exactly?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our slide-by-slide analysis covers: Clarity, Design, Content Relevance,
        Overall Impact.
        <br />
        The comprehensive summary saves time by quickly understanding your
        pitch&apos;s strengths and weaknesses. Prioritize what to fix for
        maximum results.
      </div>
    ),
  },
  {
    question: "Can I share my SlideSharp report with my team?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely! We encourage sharing your SlideSharp reports with your team.
        Collaboration is key to refining your pitch deck. The downloadable full
        report can be easily shared and discussed among team members.
      </div>
    ),
  },
  {
    question: "What if I need more than 15 uploads a month?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        If you find yourself needing more uploads, our All-In Plan offers up to
        30 uploads per month, providing ample opportunity for refinement and
        testing different versions of your pitch deck.
      </div>
    ),
  },
  {
    question: "Will my pitch deck be used to train your AI model?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely not. We respect the confidentiality and proprietary content
        of your pitch decks. They are never used to train our AI model, ensuring
        your intellectual property remains protected.
      </div>
    ),
  },
  {
    question: "Get the most out of your 30-minute consultation?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Prepare specific questions or areas where you seek deeper insights. It
        could range from asking for advice on improving your narrative flow,
        seeking clarity on certain feedback points, or strategies to enhance
        your design. The more prepared you are, the more value you&apso;ll get
        from the consultation.
      </div>
    ),
  },
  {
    question:
      "Is the option to hire a custom designer included in the All-In Plan cost?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        he option to hire a custom designer is available for an additional $99.
        This service is tailored for those who wish to elevate their pitch
        deck&apso;s design to a professional level, ensuring your visuals are as
        persuasive as your narrative.
      </div>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p>
        Yes! You can request a refund within 7 days of your purchase. Reach out
        by email.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">Cool, contact us by email</div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
