import { personalData } from '../utils/personalData';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">{personalData.name}</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
