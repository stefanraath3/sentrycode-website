"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    country: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            job_title: formData.jobTitle,
            company: formData.company,
            country: formData.country,
          },
        ]);

      if (error) throw error;

      setShowModal(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        company: "",
        country: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-white"
          >
            FIRST NAME: *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-white"
          >
            LAST NAME: *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            BUSINESS EMAIL ADDRESS: *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-white"
          >
            PHONE NUMBER: *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="mb-2 block text-sm font-medium text-white"
          >
            JOB TITLE: *
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-white"
          >
            COMPANY / INSTITUTION: *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-medium text-white"
          >
            COUNTRY: *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-white px-6 py-3 text-black transition duration-300 hover:bg-gray-200"
        >
          Submit
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 text-black">
            <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
            <p>
              Your form has been submitted successfully. We will get back to you
              soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 rounded bg-black px-4 py-2 text-white transition duration-300 hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
