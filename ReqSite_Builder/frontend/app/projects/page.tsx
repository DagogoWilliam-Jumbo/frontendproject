"use client";

import { ExternalLink, Github, Code2 } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/lib/config";

const techColors: { [key: string]: string } = {
  React: "bg-blue-100 text-blue-700 border-blue-200",
  "Node.js": "bg-green-100 text-green-700 border-green-200",
  PostgreSQL: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Stripe: "bg-purple-100 text-purple-700 border-purple-200",
  "Next.js": "bg-gray-100 text-gray-700 border-gray-200",
  TypeScript: "bg-blue-100 text-blue-700 border-blue-200",
  Tailwind: "bg-teal-100 text-teal-700 border-teal-200",
  Prisma: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Python: "bg-yellow-100 text-yellow-700 border-yellow-200",
  FastAPI: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Docker: "bg-cyan-100 text-cyan-700 border-cyan-200",
  Redis: "bg-red-100 text-red-700 border-red-200",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Projects
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of my recent work and side projects. Each project showcases different skills and technologies I&apos;ve worked with.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_CONFIG.projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
              >
                {/* Colored top bar */}
                <div className={`h-2 ${
                  index % 3 === 0 ? "bg-gradient-to-r from-blue-500 to-indigo-500" :
                  index % 3 === 1 ? "bg-gradient-to-r from-teal-500 to-emerald-500" :
                  "bg-gradient-to-r from-orange-500 to-amber-500"
                }`} />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          techColors[tech] || "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-medium hover:from-blue-700 hover:to-teal-600 transition-all shadow-lg shadow-blue-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
