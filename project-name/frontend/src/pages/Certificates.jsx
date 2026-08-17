import { certificatesData } from '../utils/certificatesData';

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div key={cert.title} className="certificate-card">
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
