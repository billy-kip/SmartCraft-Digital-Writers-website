
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `
Hello SmartCraft Digital Writers,

My name is ${name}.
My email is ${email}.
Service needed: ${service}

Project details:
${details}

I would like to inquire about your services.
    `;

    const whatsappLink = `https://wa.me/254746278057?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Needed</label>
        <select
          id="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          required
        >
          <option value="">Choose a service</option>
          <option>Academic & Research Support</option>
          <option>Nursing & Clinical Support</option>
          <option>Statistics & Data Analysis</option>
          <option>Professional Writing</option>
          <option>Presentations & Slides</option>
          <option>Web Development</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="details">Project Details</label>
        <textarea
          id="details"
          placeholder="Tell us about your project or what you need..."
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          rows={5}
          required
        />
      </div>

      <button type="submit" className="contact-submit">
        Submit Inquiry on WhatsApp
      </button>
    </form>
  );
}
