import { personalData } from '../utils/personalData';

export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <p className="eyebrow">Hello, I am</p>
        <h1>{personalData.name}</h1>
        <h2>{personalData.title}</h2>
        <p>
          Add your short intro here. This section is where your profile image and resume link can be placed.
        </p>
        <div className="hero-actions">
          <a href={personalData.resume} target="_blank" rel="noreferrer">Download Resume</a>
          <a href="#projects">View Projects</a>
        </div>
      </div>

      <div className="profile-image-box">
        <img src={personalData.profileImage} alt={personalData.name} />
      </div>
    </section>
  );
}
