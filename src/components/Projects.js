import { BookOpenIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-90 font-body">
            <div className="container px-5 pb-4 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium font-title mb-4 text-white">
                        Websites I've Built
                    </h1>
//                     <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
//                     </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map(project => (
                        <a href={project.link} target="_blank" rel="noreferrer" key={project.image} className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="w-full object-cover object-center rounded-sm" src={project.image} />
                                <div className="px-8 py-10 absolute inset-0 z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-500 flex flex-col justify-center">
                                    <h2 className="tracking-widest text-sm font-title font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="font-title text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    )) }
                </div>
            </div>
        </section>
    )
}
