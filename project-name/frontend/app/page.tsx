"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

const RESUME_URL = "/resume.pdf";
const socials = {
  github: "https://github.com/vigneshwar0246",
  linkedin: "https://www.linkedin.com/in/vigneshwar0246/",
  leetcode: "https://leetcode.com/u/vigneshwar_vicky/",
};

const skillGroups = [
  ["Programming", ["Python", "Java", "C", "C++"]],
  ["Web", ["HTML5", "CSS3", "JavaScript", "React.js"]],
  ["Databases", ["MySQL", "MongoDB"]],
  ["AI / ML DOMAIN", ["Machine Learning", "Deep Learning", "NLP"]],
  ["Libraries", ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]],
  ["Developer tools", ["Git", "GitHub", "Visual Studio Code", "Google Colab", "Jupyter Notebook"]],
  ["Core CS", ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]],
] as const;

const projects = [
  { n: "01", mark: "NLP", title: "Fake Review Detection", subtitle: "Machine Learning", description: "An NLP-based classification system designed to identify deceptive online reviews.", tech: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "Naive Bayes"], highlights: ["Text preprocessing, TF-IDF and feature extraction", "Compared Logistic Regression and Naive Bayes", "Achieved 88.9% accuracy using Logistic Regression"] },
  { n: "02", mark: "HV", title: "Health Vault", subtitle: "Patient information management", description: "A web application for storing and managing patient health records in an organized interface.", tech: ["React.js", "MongoDB", "JavaScript", "HTML", "CSS"], highlights: ["Built a responsive React.js interface", "Implemented MongoDB integration", "Focused on scalability, usability and organized health-data storage"] },
  { n: "03", mark: "G", title: "Virus Spread Simulation", subtitle: "Graph algorithms", description: "A graph-based simulation for analyzing disease transmission across connected networks.", tech: ["Python", "Graph Algorithms"], highlights: ["Used graph traversal techniques", "Visualized spread patterns and network dynamics", "Studied connected-system behaviour with graph algorithms"] },
];

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    brain: <><path d="M9.5 4.5A3 3 0 0 0 4 6v1.2a3.5 3.5 0 0 0-1 6.5V15a4 4 0 0 0 6.5 3.1V4.5ZM14.5 4.5A3 3 0 0 1 20 6v1.2a3.5 3.5 0 0 1 1 6.5V15a4 4 0 0 1-6.5 3.1V4.5Z"/><path d="M9.5 8H7M14.5 8H17M9.5 13H7M14.5 13H17"/></>,
    spark: <><path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
    close: <><path d="M6 6l12 12M18 6 6 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState("");
  const [active, setActive] = useState("home");
  const [modal, setModal] = useState<number | null>(null);
  const [photoError, setPhotoError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const go = (id: string) => {
    setEntered(true); setMenu(false);
    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      history.replaceState(null, "", `#${id}`);
      window.scrollTo({ top: Math.max(0, target.offsetTop - 72), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }, 1050);
  };

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor-dot");
    const halo = document.querySelector<HTMLElement>(".cursor-halo");
    if (!cursor || !halo || matchMedia("(pointer: coarse)").matches) return;
    let hx = 0, hy = 0, mx = 0, my = 0, frame = 0;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; cursor.style.transform = `translate(${mx}px,${my}px)`; };
    const tick = () => { hx += (mx - hx) * .14; hy += (my - hy) * .14; halo.style.transform = `translate(${hx}px,${hy}px)`; frame = requestAnimationFrame(tick); };
    addEventListener("mousemove", move); tick();
    return () => { removeEventListener("mousemove", move); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { setActive(entry.target.id); entry.target.classList.add("is-visible"); }
    }), { rootMargin: "-35% 0px -50%", threshold: 0.01 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [entered]);

  useEffect(() => {
    if (modal === null) return;
    document.body.classList.add("locked");
    requestAnimationFrame(() => modalRef.current?.querySelector<HTMLElement>("button")?.focus());
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
      if (e.key === "Tab" && modalRef.current) {
        const focusable = [...modalRef.current.querySelectorAll<HTMLElement>('button,a,[tabindex]:not([tabindex="-1"])')];
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    addEventListener("keydown", onKey);
    return () => { removeEventListener("keydown", onKey); document.body.classList.remove("locked"); lastTrigger.current?.focus(); };
  }, [modal]);

  const showToast = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 3600); };
  const resume = () => {
    if (RESUME_URL) {
      const a = document.createElement("a");
      a.href = RESUME_URL;
      a.download = "Vigneshwar_T_Resume.pdf";
      a.click();
    } else {
      showToast("Resume link will be added soon. Please contact me for a copy.");
    }
  };
  const backToPortal = () => {
    setEntered(false); setMenu(false); setModal(null);
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    window.scrollTo({ top: 0, behavior: "auto" });
    window.setTimeout(() => document.querySelector<HTMLElement>(".key-portfolio")?.focus(), 250);
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget, data = new FormData(form);
    const name = String(data.get("name") || "").trim(), email = String(data.get("email") || "").trim(), message = String(data.get("message") || "").trim();
    const errors: Record<string,string> = {};
    if (name.length < 2) errors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
    if (message.length < 10) errors.message = "Please write at least 10 characters.";
    form.querySelectorAll<HTMLElement>(".field-error").forEach(x => x.textContent = "");
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input,textarea").forEach(x => x.removeAttribute("aria-invalid"));
    const first = Object.keys(errors)[0];
    Object.entries(errors).forEach(([key, value]) => { form.querySelector<HTMLElement>(`#${key}-error`)!.textContent = value; (form.elements.namedItem(key) as HTMLElement).setAttribute("aria-invalid", "true"); });
    if (first) return (form.elements.namedItem(first) as HTMLElement).focus();
    form.reset(); showToast("Thanks for reaching out! This demo form is ready to connect to an email service.");
  };

  return <>
    <div className="cursor-dot"/><div className="cursor-halo"/>
    <a className="skip" href="#home">Skip to content</a>
    <div className={`portal key-portal ${entered ? "portal--open" : ""}`} aria-hidden={entered}>
      <div className="portal-noise"/><div className="blur-word word-one">THINK</div><div className="blur-word word-two">BUILD</div>
      <div className="portal-top"><span className="mini-logo"><i/><i/><i/><i/></span><span>VIGNESHWAR T · AI / ML</span><span className="top-links">PROJECTS&nbsp;&nbsp;&nbsp; ABOUT&nbsp;&nbsp;&nbsp; CONTACT</span></div>
      <div className="portal-scene">
        <div className="deck-shadow"/>
        <div className="key-deck" onMouseMove={e => {
          const box = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--deck-y", `${((e.clientX-box.left)/box.width-.5)*10}deg`);
          e.currentTarget.style.setProperty("--deck-x", `${-((e.clientY-box.top)/box.height-.5)*10}deg`);
        }} onMouseLeave={e => {e.currentTarget.style.setProperty("--deck-y", "-18deg");e.currentTarget.style.setProperty("--deck-x", "54deg");}}>
          <div className="deck-bed"/>
          <a className="keycap key-portfolio" href="#home" onClick={() => setEntered(true)}><small>01</small><strong>PORTFOLIO</strong><span>OPEN</span></a>
          <a className="keycap key-about" href="#about" onClick={() => setEntered(true)}><small>02</small><strong>ABOUT</strong><span>PROFILE</span></a>
          <a className="keycap key-work" href="#projects" onClick={() => setEntered(true)}><small>03</small><strong>PROJECTS</strong><span>WORK</span></a>
          <a className="keycap key-contact" href="#contact" onClick={() => setEntered(true)}><small>04</small><strong>CONTACT</strong><span>CONNECT</span></a>
        </div>
      </div>
      <p className="portal-hint">Choose a key · every key opens a different destination</p>
    </div>

    <header className="site-header"><a className="brand" href="#home" aria-label="Vigneshwar T home">VIGNESHWAR <em>T.</em></a>
      <button className="portal-back-btn" onClick={backToPortal} aria-label="Return to the four-key button menu">← Back</button>
      <nav className={menu ? "nav-open" : ""} aria-label="Main navigation">{["home","about","skills","projects","education","achievements","contact"].map(id => <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={() => setMenu(false)}>{id}</a>)}</nav>
      <button className="resume-btn" onClick={resume}>Resume <Icon name="arrow" size={16}/></button><button className="menu-btn" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation"><Icon name={menu ? "close" : "menu"}/></button>
    </header>

    <main className={entered ? "site-entered" : ""}>
      <section id="home" className="hero reveal"><div className="hero-copy"><div className="eyebrow"><span/> Open to learning, building & collaborating</div><p className="kicker">AI & MACHINE LEARNING UNDERGRADUATE</p><h1>Building intelligent solutions for <i>real-world</i> problems.</h1><p className="hero-text">AI & Machine Learning undergraduate with hands-on experience in Machine Learning, Deep Learning, NLP, and full-stack web development.</p><div className="hero-actions"><button className="primary" onClick={() => go("projects")}>View my projects <Icon name="arrow"/></button><button className="secondary" onClick={() => go("contact")}>Contact me</button></div><div className="hero-meta"><span><Icon name="location" size={17}/> Erode, Tamil Nadu, India</span><span className="social-row"><a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={socials.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a></span></div></div>
        <div className="portrait-wrap" aria-label="Vigneshwar T profile portrait"><div className="portrait-back"/><div className="portrait-ring"/><div className="portrait-card tilt-card">{!photoError ? <img src="/images/profile/my-photo1.png" alt="Vigneshwar T" onError={() => setPhotoError(true)}/> : <div className="portrait-fallback">VT</div>}<div className="portrait-shade"/><div className="portrait-label"><span>VIGNESHWAR T</span><small>AI · ML · WEB</small></div></div><div className="float-tag tag-a">PYTHON</div><div className="float-tag tag-b">NLP</div><div className="float-tag tag-c">REACT</div></div>
      </section>

      <section id="about" className="section reveal"><SectionHead index="01" label="About me" title={<>Curious mind.<br/><i>Practical builder.</i></>}/><div className="about-grid"><p className="lead">I am an AI & Machine Learning undergraduate passionate about developing data-driven applications and intelligent software systems. I enjoy solving real-world problems using machine learning, natural language processing, software engineering, and emerging AI technologies. I continuously work to strengthen my problem-solving, data structures, algorithms, and development skills.</p><div className="about-cards">{[["brain","AI & Machine Learning","Building data-driven models and intelligent applications."],["code","Full-Stack Development","Creating responsive experiences with modern web technologies."],["spark","Problem Solving","Strengthening algorithms and analytical thinking through practice."]].map(x => <article key={x[1]} className="mini-card tilt-card"><Icon name={x[0]}/><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

      <section id="skills" className="section reveal"><SectionHead index="02" label="Capabilities" title={<>Technical <i>toolkit.</i></>}/><div className="skills-grid">{skillGroups.map(([name, skills], i) => <article className="skill-card tilt-card" key={name}><div className="skill-top"><span>0{i+1}</span><h3>{name}</h3></div><div className="chips">{skills.map(s => <span key={s}>{s}</span>)}</div></article>)}</div></section>

      <section id="projects" className="section projects reveal"><SectionHead index="03" label="Selected work" title={<>Featured <i>projects.</i></>}/><p className="section-intro">A selection of projects where AI, data, and development come together.</p><div className="project-list">{projects.map((p, i) => <article className="project-card tilt-card" key={p.n}><div className="project-visual"><span>{p.mark}</span><div className="node n1"/><div className="node n2"/><div className="node n3"/><div className="line l1"/><div className="line l2"/></div><div className="project-content"><div className="project-no">PROJECT / {p.n}</div><h3>{p.title}</h3><p className="project-sub">{p.subtitle}</p><p>{p.description}</p><div className="chips compact">{p.tech.slice(0,4).map(t => <span key={t}>{t}</span>)}</div><button onClick={e => { lastTrigger.current = e.currentTarget; setModal(i); }}>Explore project <Icon name="arrow"/></button></div></article>)}</div></section>

      <section id="education" className="section reveal"><SectionHead index="04" label="Learning path" title={<>Education <i>timeline.</i></>}/><div className="timeline">{[["2028","Kongu Engineering College, Erode","B.Tech - Artificial Intelligence & Machine Learning","CGPA: 7.94/10 · Expected graduation: 2028"],["2024","Maharishi International Residential School, Sriperumbudur","CBSE Class XII","68%"],["2022","Maharishi International Residential School, Sriperumbudur","CBSE Class X","72%"]].map((e,i) => <article key={e[0]} className="timeline-item"><span className="timeline-year">{e[0]}</span><div><small>{i===0 ? "CURRENT" : "ACADEMIC"}</small><h3>{e[1]}</h3><p>{e[2]}</p><strong>{e[3]}</strong></div></article>)}</div></section>

      <section id="achievements" className="section reveal"><SectionHead index="05" label="Milestones" title={<>Highlights & <i>achievements.</i></>}/><div className="achievement-grid">{[["01","Thinkathon Semi-Finalist","Recognized for the Health Vault healthcare management project."],["02","Algorithmic practice","Regularly practise Data Structures and Algorithms on LeetCode."],["03","Technical communication","Presented research papers at technical symposiums and engineering events."],["04","Applied building","Built Fake Review Detection, Virus Spread Simulation, and Health Vault."]].map(a => <article key={a[0]}><span>{a[0]}</span><h3>{a[1]}</h3><p>{a[2]}</p></article>)}</div><div className="cert-row"><div><span className="section-tag">CERTIFICATIONS</span><h2>Continued <i>learning.</i></h2></div>{["C, C++ Programming","Advanced C Programming","Advanced Java Programming"].map((c,i) => <article key={c}><span>0{i+1}</span><h3>{c}</h3></article>)}</div></section>

      <section id="contact" className="section contact reveal"><div className="contact-copy"><span className="section-tag">06 / CONTACT</span><h2>Let&apos;s build something <i>meaningful.</i></h2><p>Have an opportunity, project idea, or collaboration in mind? Feel free to reach out.</p><div className="contact-links"><a href="mailto:vigneshwar0246@gmail.com"><Icon name="mail"/>vigneshwar0246@gmail.com</a><a href="tel:+916381059809"><Icon name="phone"/>+91 63810 59809</a><span><Icon name="location"/>Erode, Tamil Nadu, India</span></div><div className="social-row large"><a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div>
        <form className="contact-form" onSubmit={submit} noValidate><label>Name<input name="name" maxLength={80} autoComplete="name" aria-describedby="name-error"/><small id="name-error" className="field-error"/></label><label>Email<input name="email" type="email" maxLength={120} autoComplete="email" aria-describedby="email-error"/><small id="email-error" className="field-error"/></label><label>Message<textarea name="message" rows={5} maxLength={1000} aria-describedby="message-error"/><small id="message-error" className="field-error"/></label><button className="primary" type="submit">Send message <Icon name="arrow"/></button><p className="privacy">This form is a front-end demonstration and does not transmit or store your information. <a href="mailto:vigneshwar0246@gmail.com">Send an email directly.</a></p></form>
      </section>
    </main>

    <footer><a className="brand" href="#home">VIGNESHWAR <em>T.</em></a><p>Designed and built by Vigneshwar T. · {new Date().getFullYear()}</p><button onClick={() => scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}>Back to top ↑</button></footer>
    {modal !== null && <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && setModal(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={modalRef}><button className="modal-close" onClick={() => setModal(null)} aria-label="Close project details"><Icon name="close"/></button><span className="section-tag">PROJECT / {projects[modal].n}</span><h2 id="modal-title">{projects[modal].title}</h2><p>{projects[modal].description}</p><h3>Key contributions</h3><ul>{projects[modal].highlights.map(h => <li key={h}>{h}</li>)}</ul><div className="chips">{projects[modal].tech.map(t => <span key={t}>{t}</span>)}</div><p className="repo-note">Repository link can be added when this project is published.</p></div></div>}
    <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div><noscript><div className="noscript">JavaScript is needed for the 3D entrance and project dialogs.</div></noscript>
  </>;
}

function SectionHead({ index, label, title }: { index: string; label: string; title: ReactNode }) { return <div className="section-head"><span className="section-tag">{index} / {label}</span><h2>{title}</h2></div>; }
