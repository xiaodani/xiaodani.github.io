import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-4">
        Feel free to reach out to me via email or find me on GitHub:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Email:{" "}
          <a
            href="mailto:chienming1990@gmail.com"
            className="text-blue-500 hover:underline"
          >
            chienming1990@gmail.com
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/xiaodani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/yourusername
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
