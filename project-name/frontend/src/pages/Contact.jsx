import { personalData } from '../utils/personalData';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <div className="contact-box">
        <p>Email: {personalData.email}</p>
        <p>Phone: {personalData.phone}</p>
        <p>Location: {personalData.location}</p>
      </div>
    </section>
  );
}
