import React from "react";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/sections/Footer";
import { projects } from "../constants/index"; // You can define this list
import { Link } from "react-router-dom";
import TitleHeader from "../componenets/TitleHeader";
import GlowCard from "../componenets/GlowCard.jsx";

const ProjectsPage = () => {
  return (
    <>
      <NavBar />

      <main className="px-6 py-20 max-w-7xl mt-12 mb-12 mx-auto">
        <TitleHeader title="All Projects" sub="Selected Work & Builds" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-12">
          {projects.map((project) => (
            <Link to={`/projects/${project.slug}`} key={project.slug}>
                <GlowCard card={project}>
                    <div className="bg-black-200 p-4 rounded-lg hover:shadow-lg transition duration-300">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md mb-4 object-top"
                        />
                        <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                        <p className="text-white-50 mt-2">{project.description}</p>
                    </div>
              </GlowCard>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectsPage;
