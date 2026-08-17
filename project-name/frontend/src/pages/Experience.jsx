import { experienceData } from '../utils/experienceData';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>
      <div className="list-block">
        {experienceData.map((item) => (
          <div key={item.role} className="list-item">
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <span>{item.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
