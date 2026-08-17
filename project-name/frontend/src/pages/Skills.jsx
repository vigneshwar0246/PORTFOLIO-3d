import { skillsData } from '../utils/skillsData';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
