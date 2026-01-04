"use client";

import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/lib/config";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Contact
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>

              <p className="text-gray-600 mb-8">
                Whether you have a project in mind, a question, or just want to say hello, I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.email}`}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{PORTFOLIO_CONFIG.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-100">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{PORTFOLIO_CONFIG.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href={PORTFOLIO_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">Twitter</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-indigo-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-blue-100 mb-8">
            I&apos;m currently available for freelance projects and full-time opportunities.
          </p>
          <a
            href={`mailto:${PORTFOLIO_CONFIG.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Email Me Directly
          </a>
        </div>
      </section>
    </div>
  );
}
