"use client";

import Link from "next/link";
import { ArrowRight, Code2, Briefcase, Sparkles, Mail } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              {PORTFOLIO_CONFIG.name}
            </span>
          </h1>

          <p className="text-2xl text-gray-700 font-medium mb-4">
            {PORTFOLIO_CONFIG.title}
          </p>

          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            {PORTFOLIO_CONFIG.tagline}. Passionate about creating elegant solutions to complex problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-medium hover:from-blue-700 hover:to-teal-600 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Explore My Portfolio
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/projects"
              className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
              <p className="text-sm text-gray-500">
                Check out my latest work and side projects
              </p>
            </Link>

            <Link
              href="/experience"
              className="group p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
              <p className="text-sm text-gray-500">
                My professional journey and achievements
              </p>
            </Link>

            <Link
              href="/skills"
              className="group p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Skills</h3>
              <p className="text-sm text-gray-500">
                Technologies and tools I work with
              </p>
            </Link>

            <Link
              href="/contact"
              className="group p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-500">
                Let&apos;s connect and work together
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
