import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Download, ExternalLink, Code2, Database, Server, Cpu, Rocket, ShieldCheck, GraduationCap, Briefcase, Car, HeartPulse, WalletCards, FileText, Menu, X, Globe2, Sparkles } from "lucide-react";
import './style.css';

const profile = {
  name: 'Abderrahmane Mejdoubi',
  title: 'Développeur Web & Logiciel',
  subtitle: 'Recherche d’alternance — React, Laravel, PHP, C#, SQL, IA',
  email: 'abderrahmane.mejdo@gmail.com',
  phone: '+212 6 55 36 90 71',
  location: 'Oujda, Maroc',
  github: 'https://github.com/abdo-mej',
  linkedin: 'https://www.linkedin.com/in/abderrahmane-mejdoubi-3534a7339',
  cvPath: '/CV/Abderrahmane_Mejdoubi_CV.pdf'
};

const projects = [
  {
    icon: HeartPulse,
    title: 'SmartClinic Web App',
    type: 'Web · React · IA médicale',
    description: 'Plateforme moderne de gestion médicale : patients, médecins, rendez-vous, consultations, ordonnances, paiements, statistiques et assistant IA.',
    stack: ['React', 'Vite', 'Laravel API', 'Python AI', 'PostgreSQL'],
    live: 'https://smart-clinic-web-app.vercel.app/',
    status: 'Live Vercel',
  },
  {
    icon: Car,
    title: 'LahlalCar Manager',
    type: 'Web · PHP · MySQL',
    description: 'Application de gestion de location de voitures : clients, véhicules, réservations, contrats, paiements, maintenance et rôles utilisateurs.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'InfinityFree'],
    live: 'https://lahlalcar.infinityfree.me',
    status: 'Live Hosting',
  },
  {
    icon: WalletCards,
    title: 'Paie Multi-Sociétés',
    type: 'Desktop · C# · WPF',
    description: 'Logiciel desktop de gestion de paie multi-sociétés : salariés, contrats, bulletins, livre de paie, permissions, thèmes et documents imprimables.',
    stack: ['C#', '.NET 8', 'WPF', 'SQL Server', 'RBAC'],
    live: '#contact',
    status: 'Démo sur demande',
  },
  {
    icon: FileText,
    title: 'Gestion des bons de commande',
    type: 'Desktop · C# · SQL Server',
    description: 'Application desktop multi-utilisateurs pour centraliser bons de commande, règlements, factures, services et reporting.',
    stack: ['C#', '.NET', 'WPF', 'SQL Server'],
    live: '#contact',
    status: 'Projet entreprise',
  },
];

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive UI'] },
  { icon: Server, title: 'Backend', items: ['PHP', 'Laravel', 'REST API', 'Auth', 'MVC', 'Validation', 'Security'] },
  { icon: Database, title: 'Database', items: ['MySQL', 'SQL Server', 'Oracle', 'PostgreSQL', 'PL/SQL', 'Merise', 'UML'] },
  { icon: Cpu, title: 'Software & Tools', items: ['C#', 'WPF', '.NET', 'Python', 'C++', 'Git', 'GitHub', 'Linux'] },
];

const experiences = [
  { date: '2026', title: 'SmartClinic — Projet complet', role: 'Développeur Full-Stack', text: 'Conception d’une application web médicale moderne avec frontend React, architecture API Laravel, assistant IA et déploiement Vercel.' },
  { date: 'Juin 2025 – Sept. 2025', title: 'STE LAHLAL SAMU PLUS', role: 'Développeur Full-Stack', text: 'Développement d’une application de gestion des bons de commande, règlements, factures et reporting.' },
  { date: 'Avril 2025 – Mai 2025', title: 'MULTICODE TECH', role: 'Développeur Stagiaire', text: 'Application de gestion de paie multi-sociétés en C# WPF avec gestion des droits et documents de paie.' },
  { date: 'Août 2024 – Sept. 2024', title: 'LAHLAL CAR', role: 'Développeur Web', text: 'Application web PHP/MySQL de gestion de location de voitures avec contrats, réservations et maintenance.' },
];

function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w, h, raf;
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0009,
      vy: (Math.random() - 0.5) * 0.0009, r: Math.random() * 1.7 + 0.4
    }));
    const resize = () => { w = canvas.width = innerWidth * devicePixelRatio; h = canvas.height = innerHeight * devicePixelRatio; };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const x = p.x * w, y = p.y * h;
        const g = ctx.createRadialGradient(x, y, 0, x, y, p.r * 10);
        g.addColorStop(0, 'rgba(56,189,248,.85)');
        g.addColorStop(1, 'rgba(56,189,248,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, p.r * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]; const dx = (p.x - q.x) * w; const dy = (p.y - q.y) * h;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130 * devicePixelRatio) {
            ctx.strokeStyle = `rgba(125,211,252,${0.12 * (1 - d / (130 * devicePixelRatio))})`;
            ctx.lineWidth = 1 * devicePixelRatio;
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(q.x * w, q.y * h); ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    resize(); draw(); addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="particles" />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Accueil', 'Profil', 'Compétences', 'Expériences', 'Projets', 'CV', 'Contact'];
  return <header className="navbar">
    <a className="brand" href="#accueil"><Sparkles size={19}/> Abderrahmane<span>.</span></a>
    <nav className={open ? 'nav active' : 'nav'}>
      {links.map(l => <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase().replace('é','e')}`}>{l}</a>)}
    </nav>
    <button className="menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </header>
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]);
  return <section id="accueil" className="hero">
    <ParticleCanvas />
    <motion.div style={{ y }} className="orb orb-1" />
    <motion.div style={{ y: useTransform(scrollY, [0, 600], [0, -70]) }} className="orb orb-2" />
    <div className="hero-content">
      <motion.div initial={{opacity:0, y:22}} animate={{opacity:1, y:0}} transition={{duration:.7}} className="badge"><Rocket size={16}/>· Développeur Full-Stack</motion.div>
      <motion.h1 initial={{opacity:0, y:34}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.1}}>Abderrahmane <span>Mejdoubi</span></motion.h1>
      <motion.p initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.2}} className="subtitle">Développeur Web & Logiciel — Recherche d’alternance</motion.p>
      <motion.p initial={{opacity:0, y:28}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.3}} className="intro">Étudiant admis à l’EPISEN en systèmes d’information et actuellement en licence informatique appliquée, spécialité développement informatique. Titulaire d’un DUT en développement des applications informatiques, j’ai acquis une solide expérience à travers plusieurs projets en développement web et logiciel, notamment des applications de gestion et des plateformes complètes.

Passionné par les technologies, rigoureux et orienté solution, je conçois des applications modernes intégrant interfaces intuitives, logique métier, bases de données et déploiement cloud.

Je recherche une alternance en développement informatique à partir de septembre 2026 afin de renforcer mes compétences et contribuer à des projets innovants.</motion.p>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.4}} className="actions">
        <a className="btn primary" href="#projets"><Globe2 size={18}/> Voir mes projets</a>
        <a className="btn ghost" href="/cv.pdf" download><Download size={18}/> Télécharger CV</a>
        <a className="btn ghost" href="#contact"><Mail size={18}/> Contact</a>
      </motion.div>
    </div>
    <motion.div initial={{opacity:0, rotateY:-25, y:40}} animate={{opacity:1, rotateY:0, y:0}} transition={{duration:1, delay:.35}} className="hero-card tilt-card">
      <div className="avatar3d"><span>AM</span></div>
      <h2>{profile.name}</h2>
      <p>{profile.subtitle}</p>
      <div className="info-grid">
        <span><MapPin size={16}/> Oujda, Maroc</span>
        <span><GraduationCap size={16}/> Licence Informatique</span>
        <span><Briefcase size={16}/> Alternance</span>
        <span><ShieldCheck size={16}/> Projets réels</span>
      </div>
    </motion.div>
  </section>
}

function Section({ id, kicker, title, children }) {
  return <section id={id} className="section"><div className="container"><div className="section-title"><p>{kicker}</p><h2>{title}</h2></div>{children}</div></section>
}

function App() {
  return <>
    <Navbar />
    <Hero />
    <Section id="profil" kicker="Profil" title="Un profil orienté systèmes d’information et applications métiers">
      <div className="about-grid">
        <motion.div whileHover={{ y:-8, rotateX:4 }} className="glass-card"><h3>Vision</h3><p>Créer des solutions utiles, propres et maintenables : de l’analyse métier jusqu’au déploiement en ligne. Mon objectif est de progresser en entreprise et contribuer à des projets concrets.</p></motion.div>
        <motion.div whileHover={{ y:-8, rotateX:4 }} className="glass-card"><h3>Valeur ajoutée</h3><p>Je combine développement web, desktop, bases de données, UI/UX et déploiement. Mes projets couvrent la santé, la location automobile et la paie multi-sociétés.</p></motion.div>
      </div>
    </Section>
    <Section id="competences" kicker="Compétences" title="Stack technique moderne">
      <div className="skills-grid">{skills.map((s, i) => <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="skill" key={s.title}><s.icon/><h3>{s.title}</h3><div>{s.items.map(x => <span key={x}>{x}</span>)}</div></motion.div>)}</div>
    </Section>
    <Section id="experiences" kicker="Parcours" title="Expériences et réalisations">
      <div className="timeline">{experiences.map((e, i) => <motion.div initial={{opacity:0,x:-35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.1}} className="time-item" key={e.title}><div className="time-dot"/><div className="time-card"><b>{e.date}</b><h3>{e.title}</h3><h4>{e.role}</h4><p>{e.text}</p></div></motion.div>)}</div>
    </Section>
    <Section id="projets" kicker="Portfolio" title="Projets intégrés avec liens live">
      <div className="projects-grid">{projects.map((p, i) => <motion.article initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} whileHover={{ y:-10, rotateX:3, rotateY:-3 }} className="project" key={p.title}><div className="project-top"><p.icon/><span>{p.status}</span></div><small>{p.type}</small><h3>{p.title}</h3><p>{p.description}</p><div className="stack">{p.stack.map(x => <span key={x}>{x}</span>)}</div><a className="project-link" href={p.live} target={p.live.startsWith('http') ? '_blank' : '_self'}>{p.live.startsWith('http') ? 'Voir l’application' : 'Me demander une démo'} <ExternalLink size={16}/></a></motion.article>)}</div>
    </Section>
    <Section id="cv" kicker="CV" title="CV et documents">
      <div className="cv-card"><div><h3>Abderrahmane_Mejdoubi_CV.pdf</h3><p>Place ton fichier dans <code>public/CV/Abderrahmane_Mejdoubi_CV.pdf</code> pour activer le bouton.</p></div><a className="btn primary" href="/cv.pdf" download><Download size={18}/> Télécharger</a></div>
    </Section>
    <Section id="contact" kicker="Contact" title="Disponible pour alternance, stage ou collaboration">
      <div className="contact-card">
        <a href={`mailto:${profile.email}`}><Mail/> {profile.email}</a>
        <a href={`tel:${profile.phone}`}><Phone/> {profile.phone}</a>
        <a href={profile.linkedin} target="_blank"><Briefcase/> LinkedIn</a>
        <a href={profile.github} target="_blank"><Code2/> GitHub</a>
      </div>
    </Section>
    <footer>© 2026 Abderrahmane Mejdoubi — Portfolio 3D professionnel</footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
