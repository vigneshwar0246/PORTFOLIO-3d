import { personalData } from '../utils/personalData';

export default function About() {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-layout">
        <img src={personalData.aboutImage} alt="About me" />
        <div>
          <p>
            Add your bio here. This section can contain your education, interests, and short background.
          </p>
          <p>
            Replace this text later with your real story, experience, and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
