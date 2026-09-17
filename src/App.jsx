import { useEffect, useRef, useState } from 'react';
import { projects, tracks, socials } from './data/portfolio';

const normalizeTrack = (track) => (track === 'product' ? 'builder' : track);
const href = (route = '') => `#/${route}`;
function scrollToSection(id) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  section?.focus({ preventScroll: true });
}
function SectionLink({ section, children, className }) {
  return <a className={className} href={`#/?section=${section}`} onClick={() => {
    if (location.hash === `#/?section=${section}`) scrollToSection(section);
  }}>{children}</a>;
}
function Nav({route, section}) {
  const isHome = !route || route === 'about';
  const active = route.startsWith('work/') ? normalizeTrack(projects.find(p => route === `work/${p.slug}`)?.track) : normalizeTrack(route);
  const items = [
    { label: 'About', target: '#/', key: 'about', color: 'rose' },
    { label: 'Engineer', target: '#/engineer', key: 'engineer', color: 'peach' },
    { label: 'Product', target: '#/builder', key: 'builder', color: 'gold' },
    { label: 'Contact', target: '#/contact', key: 'contact', color: 'sage' }
  ];
  return <header className="nav">
    <a className="wordmark" href={href()}>Diti Chhaproo</a><span className="folio-edition">Personal folio · 2026</span>
    <nav className="ribbon-nav" aria-label="Main navigation">{items.map(item => {
      const selected = active === item.key || section === `volume-${item.key}` || section === item.key || (isHome && item.key === 'about');
      return <a key={item.key} href={item.target} className={`ribbon ribbon-${item.color} ${selected ? 'is-active' : ''}`} aria-current={selected ? 'location' : undefined} onClick={() => { if(location.hash === item.target && item.target.includes('section=')) scrollToSection(item.target.split('section=')[1]); }}><span>{item.label}</span><i aria-hidden="true"/></a>;
    })}</nav>
  </header>;
}
function Footer() { return <footer><div><a className="footer-name" href={href()}>Diti Chhaproo</a><span>Thoughtfully considered. Always in progress.</span><a className="footer-resume" href={href('resume')}>Résumé</a></div><div className="socials"><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={socials.github} target="_blank" rel="noreferrer">GitHub</a><a href={socials.email}>ditichhaproo@gmail.com</a><a href={socials.schoolEmail}>djc11@illinois.edu</a></div><p><span>© {new Date().getFullYear()} · Champaign, Illinois</span><span className="colophon">An ongoing edition · Written & built by Diti</span></p></footer>; }
function Illustration({type='engineer'}) { return <svg className={`cover-art ${type}`} viewBox="0 0 400 260" fill="none" aria-hidden="true">{type==='engineer' ? <g stroke="currentColor" strokeWidth=".8"><ellipse cx="200" cy="130" rx="117" ry="82"/><ellipse cx="200" cy="130" rx="117" ry="40"/><ellipse cx="200" cy="130" rx="55" ry="82"/><path d="M60 130h280M200 25v210M95 70l210 120M95 190L305 70"/>{[0,1,2,3,4].map(i=><ellipse key={i} cx="200" cy="130" rx={30+i*18} ry="82" transform={`rotate(${i*30} 200 130)`}/>)}<circle cx="200" cy="130" r="5" fill="currentColor"/><path d="M70 220h260M80 215v10m240-10v10"/></g> : <g stroke="currentColor" strokeWidth="1">{[0,1,2,3,4].map(i=><path key={i} d={`M${90+i*21} ${165-i*23}l90 -43 100 48 -90 45Z M${90+i*21} ${165-i*23}v19l100 49 90-45v-19`} transform={`translate(${-i*13} ${i*5})`}/>)}<path d="M78 211l118 57 120-59" strokeDasharray="3 5"/></g>}</svg>; }
function BookCover({track}) { const t=tracks[track]; return <a href={href(track)} id={`volume-${track}`} className={`book-link ${track}`} aria-label={`Explore Vol. ${t.volume}: ${t.name}`}><div className="book-pages"/><div className="book-cover"><span className="cover-ribbon" aria-hidden="true"/><div className="book-top"><span>Selected works</span><span>Vol. {t.volume}</span></div><div className="book-title"><span>{t.subtitle}</span><h2>The<br/><em>{track==='engineer'?'Engineer':<>Product<br/>Manager</>}</em></h2></div><Illustration type={track}/><div className="book-bottom"><span>{track==='engineer'?'Systems · Hardware · Research':'Product · AI · Entrepreneurship'}</span><span>Diti Chhaproo</span></div></div></a>; }
function Home() {
  return <><section className="open-book" aria-label="Portfolio introduction and reading paths">
    <div className="left-leaf">
      <div className="introduction"><figure className="intro-portrait"><img src="/me.jpeg" alt="Diti Chhaproo"/><figcaption>Engineer · Product manager · Reader</figcaption></figure><div className="intro-copy"><p className="eyebrow">Engineer · AI builder · Reader</p><h1><span>I read</span><span>between the</span><span><em>lines,</em> then</span><span>build what</span><span>comes next.</span></h1><p>I’m Diti. I turn complicated questions into thoughtful systems and useful products.</p><p className="location-note">Champaign, Illinois · UIUC Grainger</p></div></div>
      <div className="leaf-foot"><span>Left leaf · Introduction</span><span>Choose a volume</span></div>
    </div>
    <div className="right-leaf"><div className="reading-intro"><p className="eyebrow">Choose a reading path</p><h2>Two disciplines, <em>one point of view.</em></h2><p>Each volume gathers relevant internships, projects, and the thinking behind the work.</p></div><section className="library" aria-label="Choose a portfolio track"><BookCover track="engineer"/><BookCover track="builder"/></section><div className="leaf-foot"><span>Right leaf · Index</span><span>Open a volume</span></div></div>
  </section></>;
}
function ProjectCard({project:p}) { const art=(Array.isArray(p.visuals) ? p.visuals[0] : p.artwork) || p.slug; return <a className="project-card" href={href(`work/${p.slug}`)}><div className="project-image"><img src={`/assets/portfolio/${art}.svg`} alt={`Illustrative placeholder for ${p.title}`} loading="lazy"/><span className="image-caption">Read the chapter</span></div><div className="card-text"><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.summary}</p></div></a>; }
function Track({track}) {
  const normalizedTrack = normalizeTrack(track);
  const t = tracks[normalizedTrack];
  const filteredProjects = projects.filter(p => normalizeTrack(p.track) === normalizedTrack);
  return <><section className="track-hero"><a className="text-link" href={href()}>The collected works</a><p className="eyebrow">Vol. {t.volume} / {normalizedTrack==='engineer'?'Engineering':'Product management'}</p><h1>{normalizedTrack==='engineer'?'Engineering':'Product'}</h1><p>{t.intro}</p></section><section className="work-section"><div className="section-heading"><h2>Selected work</h2><span>{filteredProjects.length} chapters</span></div><div className="project-grid">{filteredProjects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><p className="art-note">Illustrative project artwork. Original screenshots and artifacts forthcoming.</p></section></>;
}
function CaseStudy({project:p}) {
  const [activeSection, setActiveSection] = useState('problem');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const current = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if(current) setActiveSection(current.target.id);
    }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
    ['problem','approach','artifacts','takeaways'].forEach(id => { const el=document.getElementById(id); if(el) observer.observe(el); });
    return () => observer.disconnect();
  }, [p.slug]);
  const normalizedTrack = normalizeTrack(p.track);
  const visuals = Array.isArray(p.visuals) && p.visuals.length ? p.visuals : [p.artwork || p.slug];
  const art = visuals[0];
  const artifactVisuals = visuals.length > 1 ? visuals.slice(1) : visuals;
  const artifactEntries = (p.artifacts || []).map((label, index) => ({ label, src: artifactVisuals[index % artifactVisuals.length] }));
  return <article className="case-study"><section className="case-hero"><a className="text-link" href={href(normalizedTrack)}>Vol. {tracks[normalizedTrack].volume} / {tracks[normalizedTrack].name}</a><p className="eyebrow">{p.category}</p><h1>{p.title}<em>{p.subtitle}</em></h1><p className="case-lead">{p.lead} <strong>{p.emphasis}</strong></p><img className="case-hero-image" src={`/assets/portfolio/${art}.svg`} alt={`Illustrative overview of ${p.title}`}/></section><nav className="jump-nav" aria-label="Case study sections">{['Problem','Approach','Artifacts','Takeaways'].map(s=><button className={`ribbon ribbon-${({Problem:"rose",Approach:"peach",Artifacts:"gold",Takeaways:"sage"})[s]} ${activeSection===s.toLowerCase()?"is-active":""}`} aria-current={activeSection===s.toLowerCase()?"location":undefined} key={s} onClick={()=>{setActiveSection(s.toLowerCase());const el=document.getElementById(s.toLowerCase());el?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}><span>{s}</span><i aria-hidden="true"/></button>)}</nav><dl className="metadata">{[['Role',p.role],['Timeline',p.timeline],['Tools',p.tools],['Context',p.context]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><section id="problem" tabIndex="-1" className="problem-callout"><p className="eyebrow">The problem</p><h2>{p.problem}</h2></section><section id="approach" tabIndex="-1" className="case-section"><h2>The approach</h2><div className="approach-grid">{p.approach.map(([title,body])=><div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section><section id="artifacts" tabIndex="-1" className="case-section"><div className="section-heading"><h2>Working artifacts</h2><span>Preview collection</span></div><div className="artifact-grid">{artifactEntries.map((a,i)=><figure key={a.label}><img src={`/assets/portfolio/${a.src}.svg`} alt={`Illustrative preview of ${a.label}`} className={i?'detail-crop':''}/><figcaption><strong>{a.label}</strong><span>Project artifact</span></figcaption></figure>)}</div></section><section id="takeaways" tabIndex="-1" className="case-section takeaways"><h2>What I’m taking forward</h2><ol>{p.takeaways.map(t=><li key={t}>{t}</li>)}</ol></section><div className="case-end"><a href={href(normalizedTrack)}>All {normalizedTrack==='engineer'?'engineering':'product'} work</a><a href={href('contact')}>Let’s talk about the work</a></div></article>; }
function About() {
  return <section id="about" tabIndex="-1" className="author-preface">
    <div className="preface-heading"><p className="eyebrow">A note from the author</p><span>Champaign, Illinois</span></div>
    <div className="preface-spread">
      <div className="author-portrait"><div className="portrait-mount"><img src="/me.jpeg" alt="Diti Chhaproo"/><span className="photo-corner" aria-hidden="true"/></div><p>Diti Chhaproo</p><span>Engineer, builder, perpetual reader.</span></div>
      <div className="preface-copy"><h2>Curious by nature.<br/><em>Deliberate by design.</em></h2><p className="preface-statement">I care about the disciplined work behind useful products: clear requirements, deliberate tradeoffs, and systems that hold up when the details matter.</p><p>I’m Diti, a Systems Engineering and Design junior at UIUC Grainger, graduating in Spring 2028. I’m pursuing a Computer Science minor and a Quantum SFO.</p><p>Currently, I’m a Product Systems Engineer intern at HDF Group, the founder of Revamp, an agentic AI consulting lab, and a researcher at ESDL under Prof. James Allison.</p><p>I’m based in Champaign, Illinois. Outside the work, you’ll find me reading, making time for fitness, or working on a piece of creative writing.</p><div className="inline-links"><a href={href('resume')}>Résumé</a><a href={href('contact')}>A line of correspondence</a></div></div>
    </div><div className="preface-end" aria-hidden="true">✦</div>
  </section>;
}
function Contact() { return <section className="simple-page"><p className="eyebrow">Start a conversation</p><h1>Good work starts<br/><em>with a connection.</em></h1><p>For engineering, product, research, or a thoughtful exchange of ideas.</p><a className="contact-email" href={socials.email}>ditichhaproo@gmail.com</a><a className="contact-email" href={socials.schoolEmail}>djc11@illinois.edu</a><div className="inline-links"><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={socials.github} target="_blank" rel="noreferrer">GitHub</a></div><p className="eyebrow">Champaign, Illinois</p></section>; }
function Resume() { return <section className="simple-page"><p className="eyebrow">Experience, on paper</p><h1>The <em>résumé.</em></h1><p>An updated PDF will be added here soon.</p><p>Systems Engineering and Design · UIUC Grainger<br/>Spring 2028 · CS minor · Quantum SFO</p><a className="text-link" href="mailto:ditichhaproo@gmail.com?subject=Resume%20request">Request my resume</a><div className="inline-links"><a href={href('engineer')}>Explore engineering work</a><a href={href('builder')}>Explore product work</a></div></section>; }
export default function App() {
  const [address, setAddress] = useState(() => location.hash.slice(2) || '');
  const [path, query = ''] = address.split('?');
  const route = path.replace(/\/$/, '');
  const normalizedRoute = normalizeTrack(route);
  const section = route === 'about' ? 'about' : new URLSearchParams(query).get('section');
  const main = useRef(null);
  useEffect(() => {
    const onChange = () => setAddress(location.hash.slice(2) || '');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (section) scrollToSection(section);
      else { window.scrollTo(0, 0); main.current?.focus({ preventScroll: true }); }
    });
    return () => cancelAnimationFrame(frame);
  }, [address, section]);
  const project = projects.find(p => route === `work/${p.slug}`);
  const isHome = route === '' || route === 'about';
  useEffect(() => {
    document.title = `${project ? project.title : tracks[normalizedRoute]?.name || ({ contact: 'Contact', resume: 'Resume' }[route]) || 'Systems engineer. AI builder.'} | Diti Chhaproo`;
  }, [route, normalizedRoute, project]);
  const page = isHome ? <Home/> : tracks[normalizedRoute] ? <Track track={normalizedRoute}/> : project ? <CaseStudy project={project}/> : route === 'contact' ? <Contact/> : route === 'resume' ? <Resume/> : <section className="simple-page"><h1>Page not found.</h1><a href={href()}>Return to the portfolio</a></section>;
  return <div className={`site ${isHome ? 'home-site' : 'inner-site'} ${normalizedRoute === 'builder' || normalizeTrack(project?.track) === 'builder' ? 'builder-theme' : ''}`}>
    <a className="skip-link" href="#main" onClick={e => { e.preventDefault(); main.current?.focus(); }}>Skip to content</a>
    <Nav route={route} section={section}/>
    <main id="main" tabIndex="-1" ref={main}><div key={isHome ? 'home' : route} className="page-leaf">{page}</div></main>
    <Footer/>
  </div>;
}
