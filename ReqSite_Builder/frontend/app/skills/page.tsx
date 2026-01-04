"use client";

import { Sparkles, Code, Wrench, Layers, Brain } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/lib/config";

const categoryConfig: { [key: string]: { icon: React.ReactNode; gradient: string; badgeClass: string } } = {
  languages: {
    icon: <Code className="w-6 h-6 text-white" />,
    gradient: "from-blue-500 to-indigo-500",
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
  },
  frameworks: {
    icon: <Layers className="w-6 h-6 text-white" />,
    gradient: "from-teal-500 to-emerald-500",
    badgeClass: "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200",
  },
  tools: {
    icon: <Wrench className="w-6 h-6 text-white" />,
    gradient: "from-orange-500 to-amber-500",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200",
  },
  other: {
    icon: <Brain className="w-6 h-6 text-white" />,
    gradient: "from-indigo-500 to-blue-500",
    badgeClass: "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200",
  },
};

const categoryLabels: { [key: string]: string } = {
  languages: "Programming Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools & Platforms",
  other: "Other Skills",
};

export default function SkillsPage() {
  const skillCategories = Object.entries(PORTFOLIO_CONFIG.skills);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Skills
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Technologies, tools, and methodologies I use to bring ideas to life.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map(([category, skills]) => {
              const config = categoryConfig[category];
              return (
                <div
                  key={category}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-xl flex items-center justify-center`}>
                      {config.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {categoryLabels[category]}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors cursor-default ${config.badgeClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proficiency Bars */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Competencies
          </h2>

          <div className="space-y-6">
            {[
              { name: "Frontend Development", level: 95, color: "from-blue-500 to-indigo-500" },
              { name: "Backend Development", level: 90, color: "from-teal-500 to-emerald-500" },
              { name: "Database Design", level: 85, color: "from-orange-500 to-amber-500" },
              { name: "DevOps & CI/CD", level: 80, color: "from-indigo-500 to-blue-500" },
              { name: "System Architecture", level: 75, color: "from-pink-500 to-rose-500" },
            ].map((skill) => (
              <div key={skill.name} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Always Learning
          </h2>
          <p className="text-gray-600 mb-8">
            Currently exploring and expanding my knowledge in these areas:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["Rust", "Web3", "Machine Learning", "Kubernetes", "GraphQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
              >
                🚀 {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
