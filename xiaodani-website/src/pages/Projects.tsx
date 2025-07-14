import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Work Experience & Projects</h1>

      {/* Cabbage Systems */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800">Software Engineer – Cabbage Systems (Startup)</h2>
        <p className="text-md text-gray-500 mb-6">Current</p>

        <div className="space-y-6 pl-4 border-l-4 border-rose-500">
          <div>
            <h3 className="text-lg font-semibold text-rose-700">
              Sword and Supper – Game Development for Reddit (React, Phaser, Node.js)
            </h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Led asset preloading and optimization for smooth game loading and performance</li>
              <li>Developed UI components such as daily login rewards and player profile/stat modals</li>
              <li>Implemented debug features, including custom test encounters for faster iteration</li>
              <li>Built backend APIs for gameplay systems like health/life recovery logic</li>
              <li>Integrated Reddit Gold payment API to enable in-game purchases through the shop</li>
              <li>Worked across full stack in a fast-paced startup environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* D&S INC */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800">Software Engineer – D&S INC</h2>
        <p className="text-md text-gray-500 mb-6">Jan 2023 - Mar 2025</p>

        <div className="space-y-6 pl-4 border-l-4 border-blue-500">
          {/* Big Data */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Big Data Visualization Client (Python, PyQt5)</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Visualized Big Data with PyQt5 using lazy loading for large datasets</li>
            </ul>
          </div>

          {/* Ideabox */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Ideabox Platform Backend (Laravel, Docker, Linux)</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Integrated a SaaS boilerplate with Ideabox using Ploi deployment tools</li>
              <li>Configured Docker-based deployment pipelines for streamlined integration</li>
              <li>Customized base architecture to align with product goals</li>
            </ul>
          </div>

          {/* Ride Hailing */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Ride-Hailing App (React, Web Native)</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Developed core features for a driver-facing app in React for web/native platforms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Continental */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800">Software Engineer – Continental Automotive</h2>
        <p className="text-md text-gray-500 mb-6">Oct 2018 - Jun 2020</p>

        <div className="space-y-6 pl-4 border-l-4 border-green-500">
          {/* Artemmis */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">Artemmis HMI Instrument Cluster (Embedded C++)</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Debugged toolchains and supported UI/UX middleware development</li>
              <li>Maintained and resolved issues in AVICORE (graphics), AVIAN (animation), Brutus (data parser)</li>
              <li>Worked on automated tests (unit, acceptance) using Jenkins/CTC pipelines</li>
            </ul>
          </div>

          {/* CGIStudio */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">CGIStudio Integration for Nissan Project</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Integrated internal IIP system with CGIStudio-based HMI front-end</li>
              <li>Contributed to custom HMI features for automotive instrument clusters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* True Stats Lab */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800">Software Developer – True Stats Lab</h2>
        <p className="text-md text-gray-500 mb-6">Jun 2018 - Oct 2018</p>

        <div className="space-y-6 pl-4 border-l-4 border-purple-500">
          <div>
            <h3 className="text-lg font-semibold text-purple-700">Truuue Real Estate Backend (Django, Python)</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Implemented Elasticsearch for faster user-based search queries</li>
              <li>Improved data readability with pretty-JSON formatting tools</li>
              <li>Added Twilio SMS messaging for admin-client communication fallback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Koei Tecmo Singapore */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800">Software Developer – Koei Tecmo Singapore</h2>
        <p className="text-md text-gray-500 mb-6">Jan 2016 – Dec 2017</p>
        <div className="space-y-6 pl-4 border-l-4 border-yellow-500">
          <div>
            <h3 className="text-lg font-semibold text-yellow-700">
              100万人の三国志 – Full Stack Game Development (LAMP: Linux, Apache, MySQL, PHP)
            </h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              <li>Developed browser game for PC, SP, iOS, and Android based on Romance of the Three Kingdoms</li>
              <li>Main developer on “5★ System” game feature</li>
              <li>Created cross-platform achievement system using backend PHP/MySQL and frontend JavaScript, HTML/CSS</li>
              <li>Built browser-based help tool with enforced relational data validation to reduce human error</li>
              <li>Authored cronjobs in Linux to manage transactions across multiple databases/tables</li>
              <li>Refactored legacy PHP into modular components for scalability and maintainability</li>
              <li>Handled weekly production maintenance, customer issue triage, and analytics reporting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
