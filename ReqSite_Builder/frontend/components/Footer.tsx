"use client";

import { PORTFOLIO_CONFIG } from "@/lib/config";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-blue-100 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">
              {PORTFOLIO_CONFIG.name}
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
