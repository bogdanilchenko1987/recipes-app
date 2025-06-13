import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About App</h2>
          <p className="text-gray-700 text-lg">
            Reci.App is a handy place to search for recipes, ingredients,
            kitchen and cooking time. You can quickly find out what you want to
            cook, look at the ingredients and cooking details, and also set the
            filters for ease of use.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/img/bg-4.jpg"
            alt="About the app"
            width={600}
            height={400}
            className="rounded shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="/img/bg-3.jpg"
            alt="Tech stack"
            width={600}
            height={400}
            className="rounded shadow-md object-cover w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About test project</h2>
          <p className="text-gray-700 text-lg">
            This app was created as a test project for the Front-end JS engineer
            position. The development includes Next.js (App Router), TypeScript,
            Tailwind CSS, Spoonacular API, and also implements SSR, component
            separation, dynamic routes etc.
          </p>
        </div>
      </div>
    </section>
  );
}
