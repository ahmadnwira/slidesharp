import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Secure Funding with Unmatched Clarity and Focus.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Perfect your pitch deck with SlideSharp. Our AI pinpoints clarity
          gaps, design flaws, and flow issues, providing actionable feedback to
          craft a compelling story that secures a &apos;Yes&apos;.
        </p>
        <button className="btn btn-primary btn-wide">
          Start Using {config.appName}
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <p>
          TODO: A simple visual of a before/after slide example could be very
          impactful.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
