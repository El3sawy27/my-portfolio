import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section ruled">
      <div className="container two-col">
        <div>
          <p className="section-label">04 / EXPERIENCE</p>
          <h2>
            Learning by
            <br />
            <span>building & teaching.</span>
          </h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">2026 — PRESENT</div>
            <div>
              <h3>Programming Instructor · iSchool</h3>
              <p>
                Teaching programming concepts, breaking down technical problems,
                and helping learners build practical projects.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">2025</div>
            <div>
              <h3>MEAN Stack Web Development · NTI</h3>
              <p>
                210-hour training covering JavaScript, Angular, Node.js,
                Express.js and MongoDB through practical exercises and projects.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">2025</div>
            <div>
              <h3>B.Sc. Computer Science · Menoufia University</h3>
              <p>Faculty of Computers & Information · Graduated June 2025.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
