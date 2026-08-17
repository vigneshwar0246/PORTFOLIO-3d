import { educationData } from '../utils/educationData';

export default function Education() {
  return (
    <section id="education" className="section education">
      <h2>Education</h2>
      <div className="list-block">
        {educationData.map((item) => (
          <div key={item.degree} className="list-item">
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
