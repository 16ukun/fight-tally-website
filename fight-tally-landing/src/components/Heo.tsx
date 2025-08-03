// src/components/Hero.tsx
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight font-interi">
        Turn Fight Night into Payday
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
        Join the only app where fans control the fight. Predict, score, and
        debate every round.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#"
          className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transition"
        >
          Download on App Store
        </a>
        <a
          href="#"
          className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transition"
        >
          Get it on Google Play
        </a>
      </div>
    </section>
  );
}

export default Hero;
