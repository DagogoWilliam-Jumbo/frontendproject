"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/lib/config";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Experience
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            My professional journey and the milestones I&apos;ve achieved along the way.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-emerald-500 to-green-500 rounded-full" />

            <div className="space-y-12">
              {PORTFOLIO_CONFIG.experience.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-teal-500 rounded-full z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-8 md:ml-0`}>
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg shadow-teal-50 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300">
                      {/* Colored accent */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-500 rounded-l-2xl" style={{ left: '-1px' }} />

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {exp.role}
                          </h3>
                          <p className="text-teal-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-teal-100">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Computer Science Degree</h3>
              <p className="text-teal-600 text-sm mb-2">University of Technology</p>
              <p className="text-gray-500 text-sm">2016 - 2020</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-teal-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📜</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">AWS Solutions Architect</h3>
              <p className="text-emerald-600 text-sm mb-2">Amazon Web Services</p>
              <p className="text-gray-500 text-sm">2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
