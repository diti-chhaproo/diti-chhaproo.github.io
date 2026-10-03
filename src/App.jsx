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
    { label: 'CAD', target: '#/cad', key: 'cad', color: 'cad' },
    { label: 'Posts', target: '#/posts', key: 'posts', color: 'sky' },
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
const imageFiles = import.meta.glob(['/public/assets/portfolio/*', '/public/assets/images/*'], { eager: true, query: '?url', import: 'default' });
function artworkUrl(name) {
  const entry = Object.keys(imageFiles).find(path => path.split('/').pop() === name || path.split('/').pop().replace(/\.[^.]+$/, '') === name);
  return entry ? imageFiles[entry] : null;
}
function ExpandableImage({ artwork, label, className = '' }) {
  const dialog = useRef(null);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const src = artworkUrl(artwork);
  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = overflow; };
  }, [open]);
  if (!src) return <div className={`image-placeholder ${className}`}><span>{label}</span><small>Image forthcoming</small></div>;
  return <>
    <button type="button" className={`image-preview ${className}`} onClick={() => { setZoomed(false); setOpen(true); }} aria-label={`Expand ${label}`}>
      <img src={src} alt={label} loading="lazy"/><span className="expand-label">Expand image</span>
    </button>
    <dialog ref={dialog} className="image-dialog" aria-label={label} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}>
      <div className="image-dialog-toolbar"><span>{label}</span><button type="button" onClick={() => setZoomed(value => !value)} aria-pressed={zoomed}>{zoomed ? 'Fit image' : 'Zoom in'}</button><button type="button" onClick={() => dialog.current.close()} autoFocus>Close</button></div>
      <div className={`image-dialog-view ${zoomed ? 'is-zoomed' : ''}`}><img src={src} alt={label}/></div>
    </dialog>
  </>;
}
function ProjectCard({project:p}) {
  const art=p.thumbnail || (Array.isArray(p.visuals) ? p.visuals[0] : p.artwork) || p.slug;
  return <article className="project-card"><a className="project-image image-preview" href={href(`work/${p.slug}`)} aria-label={`Read ${p.title}`}>{p.hideImages && !p.thumbnail ? <span className="image-placeholder">{p.title}<small>Confidential engagement · NDA</small></span> : artworkUrl(art) ? <img src={artworkUrl(art)} alt={p.title} loading="lazy"/> : <span className="image-placeholder">{p.title}<small>Image forthcoming</small></span>}<span className="expand-label">Read the chapter</span></a><a className="card-text" href={href(`work/${p.slug}`)}><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.summary}</p><span className="chapter-link">Read the chapter</span></a></article>;
}
function Track({track}) {
  const normalizedTrack = normalizeTrack(track);
  const t = tracks[normalizedTrack];
  const filteredProjects = projects.filter(p => normalizeTrack(p.track) === normalizedTrack);
  return <><section className="track-hero"><a className="text-link" href={href()}>The collected works</a><p className="eyebrow">Vol. {t.volume} / {normalizedTrack==='engineer'?'Engineering':'Product management'}</p><h1>{normalizedTrack==='engineer'?'Engineering':'Product'}</h1><p>{t.intro}</p></section><section className="work-section"><div className="section-heading"><h2>Selected work</h2><span>{filteredProjects.length} chapters</span></div><div className="project-grid">{filteredProjects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><p className="art-note">Select a thumbnail or title to read the case study.</p></section></>;
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
  return <article className="case-study"><section className={`case-hero ${p.hideImages ? "case-hero-text-only" : ""}`}><a className="text-link" href={href(normalizedTrack)}>Vol. {tracks[normalizedTrack].volume} / {tracks[normalizedTrack].name}</a><p className="eyebrow">{p.category}</p><h1>{p.title}<em>{p.subtitle}</em></h1><p className="case-lead">{p.lead} <strong>{p.emphasis}</strong></p>{!p.hideImages && <ExpandableImage className="case-hero-image" artwork={art} label={p.title}/>}</section><nav className="jump-nav" aria-label="Case study sections">{['Problem','Approach',...(p.nda ? [] : ['Artifacts']),'Takeaways'].map(s=><button className={`ribbon ribbon-${({Problem:"rose",Approach:"peach",Artifacts:"gold",Takeaways:"sage"})[s]} ${activeSection===s.toLowerCase()?"is-active":""}`} aria-current={activeSection===s.toLowerCase()?"location":undefined} key={s} onClick={()=>{setActiveSection(s.toLowerCase());const el=document.getElementById(s.toLowerCase());el?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});el?.focus({preventScroll:true});}}><span>{s}</span><i aria-hidden="true"/></button>)}</nav><dl className="metadata">{[['Role',p.role],['Timeline',p.timeline],['Tools',p.tools],['Context',p.context]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><section id="problem" tabIndex="-1" className="problem-callout"><p className="eyebrow">The problem</p><h2>{p.problem}</h2></section><section id="approach" tabIndex="-1" className="case-section"><h2>The approach</h2><div className="approach-grid">{p.approach.map(([title,body])=><div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>{p.nda ? <section className="case-section nda-notice"><h2>Confidential work</h2><p>Working artifacts are covered by a non-disclosure agreement (NDA) and cannot be shared publicly.</p></section> : <section id="artifacts" tabIndex="-1" className="case-section"><div className="section-heading"><h2>Working artifacts</h2><span>Preview collection</span></div><div className="artifact-grid">{artifactEntries.map(a=><figure key={a.label}><ExpandableImage artwork={a.src} label={a.label}/><figcaption><strong>{a.label}</strong><span>Project artifact</span></figcaption></figure>)}</div>{p.report && <a className="text-link cad-pdf" href={p.report} target="_blank" rel="noreferrer">Open summer research report (PDF)</a>}</section>}<section id="takeaways" tabIndex="-1" className="case-section takeaways"><h2>What I’m taking forward</h2><ol>{p.takeaways.map(t=><li key={t}>{t}</li>)}</ol></section><div className="case-end"><a href={href(normalizedTrack)}>All {normalizedTrack==='engineer'?'engineering':'product'} work</a><a href={href('contact')}>Let’s talk about the work</a></div></article>; }
function CAD() {
  const entries = [
    { title: 'Black & Decker electrical screwdriver', video: true, date: 'December 2024', description: 'Reverse engineered the 4V MAX cordless screwdriver with a team using Fusion 360. Modelled eight parts, explored generative design for the handle, and modelled the orange handle using freeform tools.', images: [['thumbnail.png', 'Screwdriver assembly'], ['generative.png', 'Generative handle design'], ['orange.png', 'Freeform orange handle']] },
    { title: 'Conveyor belt', date: '2025', description: 'Geometry and material trade-off studies for structural components, exploring robustness and weight as part of CAD work at UIUC’s Civil Engineering department.', images: [['whole belt.png', 'Complete conveyor belt'], ['face.png', 'Belt face'], ['robot.png', 'Robot assembly']] },
    { title: 'Self-balancing robot', date: '2024', description: 'Designed a double-decker chassis and modelled the DC motors in Fusion 360, with space for the electronics and a focus on stability.', images: [['bot.png', 'Self-balancing robot'], ['chassis.png', 'Double-decker chassis']], pdf: true }
  ];
  return <section className="cad-page"><div className="track-hero"><a className="text-link" href={href()}>The collected works</a><p className="eyebrow">Models, mechanisms & making</p><h1>CAD portfolio</h1><p>A collection of models, assemblies, and design explorations. Select any image for a closer look.</p></div><nav className="cad-index" aria-label="CAD projects">{entries.map((entry,index)=><button key={entry.title} onClick={()=>scrollToSection(`cad-project-${index}`)}>{entry.title}</button>)}</nav>{entries.map((entry,index)=><section key={entry.title} id={`cad-project-${index}`} tabIndex="-1" className="case-section cad-project"><p className="eyebrow">{entry.date} · CAD exploration</p><h2>{entry.title}</h2><p className="cad-description">{entry.description}</p><div className="artifact-grid">{entry.images.map(([art,label])=><figure key={art}><ExpandableImage artwork={art} label={label}/><figcaption><strong>{label}</strong></figcaption></figure>)}</div>{entry.video&&<figure className="cad-video"><video controls playsInline preload="metadata" poster="/assets/images/thumbnail.png" aria-label="Screwdriver functionality demonstration"><source src="/assets/videos/Functionality%20demo.mp4" type="video/mp4"/></video><figcaption>Functionality demonstration</figcaption><a className="text-link" href="/assets/videos/Functionality%20demo.mp4" target="_blank" rel="noreferrer">Open video</a></figure>}{entry.pdf&&<a className="text-link cad-pdf" href="/assets/docs/self-balancing-robot.pdf" target="_blank" rel="noreferrer">Open robot project PDF</a>}</section>)}</section>;
}
const postsList = [
  {
    slug: 'tms-corpus',
    date: 'Summer 2025',
    tag: 'ISE REU · Research',
    title: 'Building a TMS Architecture Corpus: How I Approached the Problem',
    lead: 'Before you can train a generative model on thermal management system architectures, you need data. That data doesn\'t exist. So I built it.',
    coverImage: 'tms-cover.png',
    sections: [
      {
        heading: 'What is a Thermal Management System?',
        body: 'A thermal management system (TMS) in a battery electric vehicle controls temperature across the vehicle\'s critical components: battery pack, motor, power electronics, cabin. The architecture of a TMS — which components connect to which and how fluid flows between them — directly impacts performance, range, and safety.\n\nDesigning a TMS architecture is not trivial. The design space is vast, physical constraints are strict, and engineers typically rely on experience and intuition to enumerate candidate architectures. The goal of this research is to automate that: to build a model that can generate valid TMS architectures from scratch.\n\nBut before you can train a generative model, you need data. That\'s where I came in.'
      },
      {
        heading: 'The Problem: You Need a Corpus That Doesn\'t Exist',
        body: 'A generative model needs examples to learn from: a diverse set of valid TMS architecture graph topologies. Valid meaning physically feasible — components connected in ways that respect flow direction, connectivity, and domain constraints. Diverse meaning architectures that actually explore the full design space, not variations of the same pattern.\n\nThis corpus doesn\'t exist off the shelf. So I had to build it.'
      },
      {
        heading: 'Step 1: Literature Review',
        body: 'The first question was: how do you generate graphs that are both valid and diverse? I ran a literature review across random graph generation algorithms, looking for approaches applied to constrained engineering domains.',
        listItems: [
          'Herber, Guo & Allison (2017) — perfect matching-based graph generation for engineering systems',
          'Marussy, Semerath & Varro, IEEE TSE (2022) — diversity-aware graph generation',
          'Gjoka, Tillman & Markopoulou, INFOCOM (2015) and IEEE/ACM Trans. Networking (2019) — joint degree methods',
          'Ma et al., NeurIPS (2018) — CGVAE, constrained graph variational autoencoder',
        ],
        bodyAfter: 'From this I identified a family of candidate algorithms to test: Erdős-Rényi, joint degree graph, and Herber\'s perfect matching.',
        image: 'tms-graph-options.png',
        imageLabel: 'Graph topology options surveyed in the literature'
      },
      {
        heading: 'Step 2: Building the Unified Sampler Interface',
        body: 'Rather than running each algorithm in isolation, I built a unified sampler interface in Python: a single system that calls any algorithm with consistent inputs and outputs, logs results, and evaluates feasibility against TMS constraints automatically.\n\nThis mattered because comparing algorithms fairly requires holding everything else constant. The interface let me run controlled experiments across all candidates and understand what each algorithm was actually doing differently.\n\nStack: Python, NetworkX, FastAPI backend, deployed on Render with a Lovable frontend for visualization.'
      },
      {
        heading: 'Step 3: 5,000 Trials Per Algorithm',
        body: 'I ran 5,000 trials per algorithm and evaluated each output against physical feasibility constraints. Erdős-Rényi produced graphs roughly 2.5× denser than valid TMS architectures (feasibility rate ~0.2%) and served only as a domain-agnostic baseline. The more instructive comparison was between the two constrained approaches.',
        table: {
          headers: ['', 'Joint Degree', 'Herber-Marussy'],
          rows: [
            { label: 'Foundation', cols: ['NetworkX directed_joint_degree_graph', 'Herber, Guo & Allison (2017) + incremental backtracking from Marussy et al. (IEEE TSE, 2022)'] },
            { label: 'Mechanism', cols: ['Configuration translated to joint degree dictionary; nodes given stubs equal to degree, paired randomly until all matched', 'Port pool (one port per degree slot per node); perfect matching with no-self-loop and no-multi-edge constraints'] },
            { label: 'Type awareness', cols: ['Type-blind — matching operates on degree counts only; a Pump and a Valve at degree 2 look identical', 'Type-aware from the start; ports are typed before matching begins'] },
            { label: 'Backtracking', cols: ['None', 'Up to 20 retries per unmatched port; backtracks to last valid checkpoint'] },
            { label: 'Degree constraints', cols: ['Satisfied by construction', 'Satisfied by construction'] },
            { label: 'Distinct structures / 5,000', cols: ['679', '4,067'] },
            { label: 'Limitation', cols: ['Topological bias from type-blindness; structurally similar graphs recur', '6.6% of generated graphs are disconnected; need downstream filtering'] },
          ]
        },
        image: 'tms-algorithm-results.png',
        imageLabel: 'Algorithm feasibility comparison across 5,000 trials'
      },
      {
        heading: 'Step 4: Finding the Gap and Fixing It',
        body: 'Feasibility without diversity is a dead end. A model trained on structurally similar graphs will just learn to reproduce one pattern, which tells you nothing useful about the design space.\n\nThe problem with Herber\'s is that it has no mechanism to escape local structural patterns once it finds a valid solution. It converges, and stays there.\n\nMarussy\'s approach offered something Herber\'s didn\'t: backtracking. Where Herber\'s commits to a matching and moves on, Marussy\'s backtracking allows the algorithm to reverse earlier decisions when it hits a constraint, exploring parts of the graph space a greedy approach would never reach.\n\nI combined the two: Herber\'s perfect matching as the base generation mechanism, with Marussy\'s backtracking layered on top. The result was a corpus that was both physically feasible and meaningfully varied across the design space. That\'s what the final corpus is built on.',
        image: 'tms-graph-topology.png',
        imageLabel: 'Topology diversity in the combined-method corpus'
      },
      {
        heading: 'What\'s Next',
        body: 'With the corpus ready, the next phase is the generator itself. The plan is to bring an LLM into the architecture generation loop, training it on the corpus so it learns the physical design rules of a TMS well enough to generate valid architectures from scratch. Starting with smoke tests to identify the right base model, then fine-tuning.\n\nThis is what I\'m doing through the ISE REU. More on that as it develops.'
      }
    ]
  }
];
function PostArticle({ post: p }) {
  return <article className="post-article">
    <div className="track-hero post-hero">
      <a className="text-link" href={href('posts')}>Posts</a>
      <p className="eyebrow">{p.date} · {p.tag}</p>
      <h1>{p.title}</h1>
      <p className="post-lead">{p.lead}</p>
    </div>
    {p.coverImage && <div className="post-cover-image"><ExpandableImage artwork={p.coverImage} label={p.title} className="post-cover"/></div>}
    <div className="post-body">
      {p.sections.map(s => <section key={s.heading} className="post-section">
        <h2>{s.heading}</h2>
        {s.body.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
        {s.listItems && <ul className="post-list">{s.listItems.map(item => <li key={item}>{item}</li>)}</ul>}
        {s.table && <div className="post-table-wrap"><table className="post-table"><thead><tr>{s.table.headers.map((h,i) => <th key={i}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map(row => <tr key={row.label}><td className="post-table-label">{row.label}</td>{row.cols.map((c,i) => <td key={i}>{c}</td>)}</tr>)}</tbody></table></div>}
        {s.bodyAfter && <p>{s.bodyAfter}</p>}
        {s.image && <figure className="post-figure"><ExpandableImage artwork={s.image} label={s.imageLabel}/><figcaption>{s.imageLabel}</figcaption></figure>}
      </section>)}
    </div>
    <div className="case-end"><a href={href('posts')}>All posts</a><a href={href('contact')}>Get in touch</a></div>
  </article>;
}
function Posts() {
  return <section className="posts-index">
    <div className="track-hero"><a className="text-link" href={href()}>The collected works</a><p className="eyebrow">Writing & reflection</p><h1>Posts.</h1><p>Essays and notes from the work — research, engineering, and the thinking in between.</p></div>
    <div className="posts-list">{postsList.map(p => <a key={p.slug} href={href(`posts/${p.slug}`)} className="post-card"><p className="eyebrow">{p.date} · {p.tag}</p><h2>{p.title}</h2><p>{p.lead}</p><span className="chapter-link">Read →</span></a>)}</div>
  </section>;
}
function About() {
  return <section id="about" tabIndex="-1" className="author-preface">
    <div className="preface-heading"><p className="eyebrow">A note from the author</p><span>Champaign, Illinois</span></div>
    <div className="preface-spread">
      <div className="author-portrait"><div className="portrait-mount"><img src="/me.jpeg" alt="Diti Chhaproo"/><span className="photo-corner" aria-hidden="true"/></div><p>Diti Chhaproo</p><span>Engineer, builder, perpetual reader.</span></div>
      <div className="preface-copy"><h2>Curious by nature.<br/><em>Deliberate by design.</em></h2><p className="preface-statement">I care about the disciplined work behind useful products: clear requirements, deliberate tradeoffs, and systems that hold up when the details matter.</p><p>I’m Diti, a Systems Engineering and Design junior at UIUC Grainger, graduating in Spring 2028. I’m pursuing a Computer Science minor and a Quantum SFO.</p><p>Currently, I’m a Product Systems Engineer intern at HDF Group, the founder of Revamp, an agentic AI consulting lab, and a researcher at ESDL under Prof. James Allison.</p><p>I’m based in Champaign, Illinois. Outside the work, you’ll find me reading, making time for fitness, or working on a piece of creative writing.</p><div className="inline-links"><a href={href('resume')}>Résumé</a><a href={href('contact')}>A line of correspondence</a></div></div>
    </div><div className="preface-end" aria-hidden="true">✦</div>
  </section>;
}
function Contact() { return <section className="simple-page"><p className="eyebrow">Start a conversation</p><h1>Good work starts<br/><em>with a connection.</em></h1><p>For engineering, product, research, or a thoughtful exchange of ideas.</p><div className="contact-addresses"><div><p className="eyebrow">Personal</p><a className="contact-email" href={socials.email}>ditichhaproo@gmail.com</a></div><div><p className="eyebrow">University</p><a className="contact-email" href={socials.schoolEmail}>djc11@illinois.edu</a></div></div><div className="inline-links"><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={socials.github} target="_blank" rel="noreferrer">GitHub</a></div><p className="eyebrow">Champaign, Illinois</p></section>; }
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
    document.title = `${project ? project.title : tracks[normalizedRoute]?.name || ({ contact: 'Contact', resume: 'Resume', cad: 'CAD portfolio', posts: 'Posts' }[route]) || 'Systems engineer. AI builder.'} | Diti Chhaproo`;
  }, [route, normalizedRoute, project]);
  const page = isHome ? <Home/> : tracks[normalizedRoute] ? <Track track={normalizedRoute}/> : project ? <CaseStudy project={project}/> : route === 'cad' ? <CAD/> : route === 'posts' ? <Posts/> : route.startsWith('posts/') ? (() => { const post = postsList.find(p => route === `posts/${p.slug}`); return post ? <PostArticle post={post}/> : <section className="simple-page"><h1>Post not found.</h1><a href={href('posts')}>Back to posts</a></section>; })() : route === 'contact' ? <Contact/> : route === 'resume' ? <Resume/> : <section className="simple-page"><h1>Page not found.</h1><a href={href()}>Return to the portfolio</a></section>;
  return <div className={`site ${isHome ? 'home-site' : 'inner-site'} ${normalizedRoute === 'builder' || normalizeTrack(project?.track) === 'builder' ? 'builder-theme' : ''}`}>
    <a className="skip-link" href="#main" onClick={e => { e.preventDefault(); main.current?.focus(); }}>Skip to content</a>
    <Nav route={route} section={section}/>
    <main id="main" tabIndex="-1" ref={main}><div key={isHome ? 'home' : route} className="page-leaf">{page}</div></main>
    <Footer/>
  </div>;
}
