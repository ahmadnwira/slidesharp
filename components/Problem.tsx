const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          Don&apos;t let a confusing pitch cost you funding.
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
          Every slide is an opportunity – make them count.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Clarity and Impact</h3>
            <p>
              SlideSharp helps you craft a clear, crystal-clear pitch with a
              strong narrative that resonates with investors.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Insider Knowledge</h3>
            <p>
              Founded by YC alumni, we understand the unique challenges of
              early-stage fundraising.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
