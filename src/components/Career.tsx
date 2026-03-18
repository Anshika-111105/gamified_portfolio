import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Bluestock Fintech</h5>
              </div>
              <h3>February 2026 - April 2026</h3>
            </div>
            <p>
              Engineered a high-performance, offline-first daily puzzle platform with a deterministic engine using
              TypeScript, React, PostgreSQL, Prisma ORM, IndexedDB, SHA-256 Hashing, Jest.
              Reduced server costs and achieved 95+ Lighthouse performance scores.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Veridia.io</h5>
              </div>
              <h3>June 2025 - July 2025</h3>
            </div>
            <p>
              Developed and deployed a scalable full-stack platform using ReactJS, Node.js, MongoDB, Express.js, 
              RESTful APIs, and State Management,focusing on modular architecture and optimized user registration workflows.
              Refined state management to streamline the user onboarding experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
