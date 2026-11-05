import ContactForm from "./components/ContactForm";
const phoneNumber = "254746278057";
const emailAddress = "billykiprop22@gmail.com";

const whatsappMessage = encodeURIComponent(
  "Hello SmartCraft Digital Writers, I would like to inquire about your services."
);

const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

const services = [
  {
    number: "01",
    title: "Academic & Research Support",
    description:
      "Research guidance, assignments, literature reviews, and academic editing.",
  },
  {
    number: "02",
    title: "Nursing & Clinical Support",
    description:
      "Nursing learning support, clinical documentation, and healthcare writing.",
  },
  {
    number: "03",
    title: "Statistics & Data Analysis",
    description:
      "Quantitative studies, data interpretation, and research analysis support.",
  },
  {
    number: "04",
    title: "Professional Writing",
    description:
      "CVs, business reports, proposals, proofreading, and professional documents.",
  },
  {
    number: "05",
    title: "Presentations & Slides",
    description:
      "Clear, organized presentations for academic and professional purposes.",
  },
  {
    number: "06",
    title: "Web Development",
    description:
      "Modern websites, digital solutions, and technical project development.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
 
<a href="#home" className="logo">
  <img
    src="/images/smartcraft-logo.png"
    alt="SmartCraft Digital Writers"
    className="navbar-logo"
  />
</a>


       <nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#portfolio">Projects</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
      className="nav-button"
        >
          Get Started
        </a>
      </header>

      <section className="hero" id="home">
  <div className="hero-content">
    <span className="eyebrow">
      WRITING | TECHNOLOGY | DIGITAL SOLUTIONS
    </span>
          <h1>
            Ideas into words.
            <br />
            <span>Solutions into reality.</span>
          </h1>

          <p>
            SmartCraft Digital Writers helps individuals, students,
            and businesses turn ideas into clear writing, professional
            documents, and practical digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-button">
              Explore Our Services
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-icon">✦</div>

          <h3>One destination.</h3>
          <h3>Multiple solutions.</h3>

          <p>
            Academic support, professional writing, data analysis,
            and digital development.
          </p>

          <div className="card-footer">
            <span>SMARTCRAFT</span>
            <span>01 / 06</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>

          <h2>Services designed around your needs</h2>

          <p>
            From academic guidance to digital development,
            find the support you need in one place.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Make an inquiry
              </a>
            </article>
          ))}
        </div>
      </section>
      
<section className="portfolio-section" id="portfolio">
  <div className="section-heading">
    <span className="eyebrow">OUR PROJECTS</span>

    <h2>Ideas brought to life</h2>

    <p>
      Explore selected digital projects that demonstrate
      creativity, practical solutions, and modern technology.
    </p>
  </div>

  <div className="portfolio-grid">
    <article className="portfolio-card">
      <div className="portfolio-visual portfolio-blue">
        <span>01</span>
        <h3>Business Websites</h3>
      </div>

      <div className="portfolio-content">
        <h3>Business Website Development</h3>

        <p>
          Modern websites designed to help businesses
          present their services and connect with customers.
        </p>

        <span className="portfolio-tag">Web Development</span>
      </div>
    </article>

    <article className="portfolio-card">
      <div className="portfolio-visual portfolio-purple">
        <span>02</span>
        <h3>Digital Platforms</h3>
      </div>

      <div className="portfolio-content">
        <h3>Digital Platform Solutions</h3>

        <p>
          Practical digital platforms built to organize
          information and improve everyday workflows.
        </p>

        <span className="portfolio-tag">Digital Solutions</span>
      </div>
    </article>

    <article className="portfolio-card">
      <div className="portfolio-visual portfolio-cyan">
        <span>03</span>
        <h3>Academic Projects</h3>
      </div>

      <div className="portfolio-content">
        <h3>Research & Documentation</h3>

        <p>
          Structured research documents, professional
          presentations, and clear written materials.
        </p>

        <span className="portfolio-tag">Writing & Research</span>
      </div>
    </article>
  </div>
</section>


   
<section className="about-section" id="about">
  <span className="eyebrow">ABOUT SMARTCRAFT</span>

  <h2>
    Creativity, knowledge, and technology working together.
  </h2>

  <p>
    SmartCraft Digital Writers is a digital service brand
    focused on writing, research support, data analysis,
    presentations, and website development.
  </p>

  <p>
    Our goal is to help individuals, students, and businesses
    communicate their ideas clearly, organize information,
    and develop practical digital solutions for their needs.
  </p>

  <p>
    We believe every project deserves attention to detail,
    clear communication, and a thoughtful approach.
    Whether it involves a written document, research project,
    presentation, or website, we aim to deliver work that
    is useful, professional, and easy to understand.
  </p>
</section>


     <section className="contact-section" id="contact">
  <span className="eyebrow">LET'S WORK TOGETHER</span>

  <h2>Have a project in mind?</h2>

  <p>
    Tell us what you need. Let's find the right solution
    for your project.
  </p>

  <ContactForm />
</section>

      <footer className="footer">
        <p>© 2026 SmartCraft Digital Writers. All rights reserved.</p>

        <a href="#home">Back to top</a>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with SmartCraft Digital Writers on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="27"
          height="27"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.32.22 11.87c0 2.1.55 4.16 1.6 5.97L0 24l6.34-1.66a11.9 11.9 0 0 0 5.76 1.47h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.46-8.46ZM12.1 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.48-4.45 9.92-9.93 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.7.62.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}
