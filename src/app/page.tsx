import CV from "./components/CV/CV";
import Hero from "./components/Hero";

import Avatar from "../../public/avatar.jpeg";

export default function Home() {
  return (
    <main
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      style={{ margin: "0 auto" }}
    >
      <div className="w-full">
        <Hero
          image={Avatar}
          title={
            <h1 className="text-2xl lg:text-7xl text-center lg:text-right font-bold mb-4">
              Développeur front-end
            </h1>
          }
          content={
            <p className="lg:text-lg lg:text-right font-light">
              Je m'appelle{" "}
              <span className="bg-gradient-to-r font-bold from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
                Philippe Pinceloup
              </span>{" "}
              et je suis développeur front spécialisé sur{" "}
              <span className="font-medium">React</span>,{" "}
              <span className="font-medium">NextJS</span> et{" "}
              <span className="font-medium">TailwindCSS</span> depuis 6 ans.
            </p>
          }
        />
      </div>
      <CV />
    </main>
  );
}
