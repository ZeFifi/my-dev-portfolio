import Me from "./components/Me";

import CV from "./components/CV/CV";

export default function Home() {
  return (
    <main
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      style={{ margin: "0 auto" }}
    >
      <div className="w-full">
        <Me
          title={
            <h1 className="text-7xl text-right font-bold mb-4">
              Développeur front-end
            </h1>
          }
          content={
            <p className="text-lg text-right font-light">
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
