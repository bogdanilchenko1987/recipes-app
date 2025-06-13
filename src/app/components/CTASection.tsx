export default function CTASection() {
  return (
    <section className="relative overflow-hidden  w-full  ">
      <div className="px-6 py-8 sm:px-6 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            Explore Recipes Now
          </h2>

          <p className="mt-1 text-4xl font-extrabold  sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cook&nbsp;
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-green-500 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth="12"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="relative">Healthy & Tasty Meals</span>
            </span>
          </p>

          <p className="max-w-3xl mt-5 mx-auto text-xl text-green-600">
            Explore new recipes every day and bring fresh flavors to your
            kitchen. Start cooking with us now!
          </p>
        </div>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 z-10 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#gradient)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#22c55e" />
            <stop offset="1" stopColor="#166534" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
