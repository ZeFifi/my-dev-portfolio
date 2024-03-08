import { apps } from "../../../data/apps";
import { technos } from "../../../data/technos";
import { vsCodeAddons } from "../../../data/vsCodeAddons";
import stackImage from "../../../public/stack-image.jpg";
import Hero from "../components/Hero";
import StackBlock from "../components/StackBlock";

const Stack = () => {
  return (
    <main
      className="mx-auto lg:relative lg:left-[143px] w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      style={{ margin: "0 auto" }}
    >
      <div className="w-full">
        <Hero
          image={stackImage}
          title={
            <h1 className="text-2xl lg:text-7xl text-center lg:text-right font-bold mb-4">
              Ma Stack
            </h1>
          }
          content={
            <p className="lg:text-lg lg:text-right font-light">
              Voici toutes les{" "}
              <span className="bg-gradient-to-r font-bold from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
                technos
              </span>{" "}
              et{" "}
              <span className="bg-gradient-to-r font-bold from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
                applications
              </span>{" "}
              que j'utilise afin de mener à bien tous mes projets.{" "}
            </p>
          }
        />
      </div>
      <div className="mt-20">
        <StackBlock
          array={technos}
          className="mb-9 grid grid-cols-3 gap-2"
          title="Mes technos"
          hasLogoOnly
        />
        <StackBlock array={apps} className="mb-9" title="Mes apps" />
        <StackBlock
          array={vsCodeAddons}
          className="mb-9"
          title="Mes extensions VS Code"
        />
      </div>
    </main>
  );
};

export default Stack;
