"use client";

import Link from "next/link";
import Experience from "./Experience";
import Testimonials from "./Testimonials";

import { experiences } from "../../../../data/experiences";
import { testimonials } from "../../../../data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function CV() {
  return (
    <div className="mt-20">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-bold">Mon CV</h1>
        <Link
          href={"cv-philippe-pinceloup-dev-front.pdf"}
          rel="noopener noreferrer"
          target="_blank"
          download
        >
          <li className="flex text-sm bg-white hover:bg-gradient-to-r from-sky-400 to-blue-500 hover:text-white p-2 rounded-lg border border-gray-150">
            <i className="fi fi-rr-download mr-2"></i>
            Télécharger au format PDF
          </li>
        </Link>
      </div>
      <h2 className="text-md mb-5 mt-9">Expérience</h2>
      {experiences.map((experience) => (
        <div
          className="bg-white p-4 border border-gray-150 mb-2 rounded-lg"
          key={experience.id}
        >
          <Experience
            logo={experience.logo}
            position={experience.position}
            company={experience.company}
            duration={experience.duration}
            where={experience.where}
            summary={experience.summary}
            lists={experience.lists}
            skills={experience.skills}
          />
        </div>
      ))}
      <h2 className="text-md mb-5 mt-9">Ce qu'ils disent de moi</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="bg-white p-4 border border-gray-150 mb-2 rounded-lg">
                <Testimonials
                  picture={testimonial.picture}
                  person={testimonial.person}
                  company={testimonial.company}
                  position={testimonial.position}
                  reference={testimonial.reference}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CV;
