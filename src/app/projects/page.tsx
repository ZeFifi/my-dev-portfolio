import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/navigation-items";
import projectsImage from "../../../public/projects-image.jpg";
import Hero from "../components/Hero";
import Tag from "../components/Tag";

function Projects() {
  return (
    <main
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      style={{ margin: "0 auto" }}
    >
      <div className="w-full">
        <Hero
          image={projectsImage}
          title={
            <h1 className="text-2xl lg:text-7xl text-center lg:text-right font-bold mb-4">
              Mes projets
            </h1>
          }
          content={
            <p className="lg:text-lg lg:text-right font-light">
              Voici tous les{" "}
              <span className="bg-gradient-to-r font-bold from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
                projets
              </span>{" "}
              que j'ai mené pour mes divers clients.{" "}
            </p>
          }
        />
      </div>
      <div className="mt-20">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.url}
            target={project.isExternal ? "_blank" : "_self"}
          >
            <div className="bg-white p-4 border border-gray-150 mb-2 rounded-lg text-sm w-full">
              <Image
                className="mb-2"
                src={project.image}
                width={360}
                height={150}
                alt={project.name}
              />
              <p className="text-center">{project.name}</p>
              <div className="flex flex-wrap justify-between text-slate-500 mt-5">
                {project.technos.map((techno) => (
                  <Tag key={techno} content={techno} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Projects;
