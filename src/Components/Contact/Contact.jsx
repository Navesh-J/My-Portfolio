import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data to console
    console.log("Form submitted", formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-24">
      <h2 className="text-center text-3xl font-serif text-[#dddddd] mb-6">
        Contact Me
      </h2>
      <p className="text-lg text-[#f9b9c1] mb-6">
        Feel free to send a message through the form below, or reach out via the
        provided details.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex gap-10">
          <div className="flex-1">
            <label
              htmlFor="name"
              className=" block text-lg font-semibold text-[#f4bec4]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-[#3d2c2e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-[#f4bec4]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-[#3d2c2e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-[#f4bec4]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="2"
            className="w-full p-3 mt-2 border border-[#3d2c2e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-[#3d2c2e] text-white text-lg font-semibold rounded-md hover:bg-[#e0d7c6] hover:text-[#3d2c2e] transition duration-300 hover:scale-105"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info (Optional) */}
      <div className="mt-10">
        <h3 className="text-2xl font-serif text-[#f4bec4]">Connect with me:</h3>
        <div className="flex gap-8 items-center space-x-6 mt-5 py-1">
          {/* Gmail Icon */}
          <a
            href="mailto:your-email@example.com?subject=Hello%20There&body=I%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#755256] hover:text-[#e0d7c6] transition duration-300 transform hover:scale-125"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/naveshj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#755256] hover:text-[#e0d7c6] transition duration-300 transform hover:scale-125"
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Navesh-J"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#755256] hover:text-[#e0d7c6] transition duration-300 transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;