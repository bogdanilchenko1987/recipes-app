import Button from "./Button";

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center  text-center"
      style={{ backgroundImage: "url('/img/bg-2.jpg')" }}
    >
      <div className="relative z-10 max-w-3xl px-8 md:px-16">
        <h1 className="text-2xl  md:text-6xl font-extrabold mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Find meals that match your taste and time.
        </p>
        <Button href="/#recipes" label="Search Recipes" />
      </div>
    </section>
  );
}
