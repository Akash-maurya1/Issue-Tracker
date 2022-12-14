import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      
     
      {/* Instagram */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href=" https://www.instagram.com/invites/contact/?i=njjqgzkbrur2&utm_content=8rh67ja"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.linkedin.com/in/akash-maurya-8747a8229/"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://github.com/Akash-maurya1"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2023 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">
      Akash.com
    </a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}

export default Footer
