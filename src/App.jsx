import React, { useRef, useState } from 'react';

const org = 'https://github.com/Clinical-Quality-Artifical-Intelligence';
const booking = 'https://calendar.app.google/8PfmvNcuPvxY9pPi6';
const handbook = 'https://handbook.nursingcitizendevelopment.com/';
const logo = `${import.meta.env.BASE_URL}clinyqai-logo.jpeg`;
const nav = [['About', '#about'], ['What we do', '#expertise'], ['Solutions', '#solutions'], ['Responsible AI', '#responsibility']];

function Arrow({ diagonal = false }) {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} /></svg>;
}
function Icon({ type }) {
  const paths = {
    ai: <><path d="M12 4v16M4 12h16M6 6l12 12M6 18 18 6"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="3" r="1"/><circle cx="21" cy="12" r="1"/></>,
    tech: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4M7 11h3l2-3 2 6 2-3h2"/></>,
    innovation: <><path d="M9 18h6m-5 3h4M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4Z"/><path d="m10 9 2 3 2-3"/></>,
    education: <><path d="m2 8 10-5 10 5-10 5L2 8Zm4 3v6c4 3 8 3 12 0v-6m4-3v9"/></>,
  };
  return <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  function closeMenu(event) {
    if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" onKeyDown={closeMenu}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="ClinyQAi Limited home">
          <img src={logo} alt="" width="60" height="58" />
          <span>ClinyQAi<span className="brand-sub">LIMITED</span></span>
        </a>
        <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <nav id="primary-navigation" aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a>
        </nav>
      </div>
    </header>
    <main id="main" tabIndex="-1">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"/> HEALTHCARE × INTELLIGENCE</p>
            <h1 id="hero-title">Clinical Quality.<br/><span>Intelligent</span><br/>Innovation.</h1>
            <p className="hero-lead">Connecting the possibilities of AI with the realities of healthcare.</p>
            <p className="hero-description">Clinical thinking. Thoughtful technology. Practical education. Built around the people who give and receive care.</p>
            <div className="button-row"><a className="button primary" href="#solutions">Explore our solutions <Arrow /></a><a className="text-link" href="#responsibility">Our approach <Arrow diagonal /></a></div>
          </div>
          <div className="hero-art" aria-label="ClinyQAi: clinical quality, technology and people">
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
            <span className="orbit-dot dot-turquoise"/><span className="orbit-dot dot-magenta"/><span className="orbit-dot dot-orange"/>
            <div className="logo-disc"><img src={logo} alt="ClinyQAi logo: a colourful C encircled by connected neural pathways" width="765" height="735" fetchPriority="high" /></div>
            <span className="art-label label-top"><span/> Clinical insight</span>
            <span className="art-label label-bottom"><span/> Human purpose</span>
            <p className="art-caption">QUALITY AT THE CENTRE.<br/>POSSIBILITY ALL AROUND.</p>
          </div>
        </div>
        <div className="hero-bottom container"><span>CLINYQAI LIMITED</span><p>Clinical AI <span> / </span> Healthcare technology <span> / </span> Digital innovation <span> / </span> Education</p><a href="#about" aria-label="Discover more about ClinyQAi">↓</a></div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="container split-heading"><p className="eyebrow section-label">01 / ABOUT CLINYQAI</p><div><h2 id="about-title">Better possibilities.<br/><span className="muted">Grounded in care.</span></h2><div className="about-columns"><p>ClinyQAi Limited brings together clinical quality, artificial intelligence and digital innovation. Our focus is on making technology meaningful for healthcare, with people and professional practice at its centre.</p><p>We connect ideas, tools and education to help healthcare professionals explore what is possible, ask better questions and approach digital change with confidence.</p></div></div></div>
      </section>

      <section className="section expertise" id="expertise" aria-labelledby="expertise-title">
        <div className="container"><div className="section-heading"><div><p className="eyebrow section-label">02 / WHAT WE DO</p><h2 id="expertise-title">Four disciplines.<br/>One connected approach.</h2></div><p>From understanding a clinical challenge to exploring a practical digital response.</p></div>
          <div className="expertise-grid">{[
            ['ai', 'Clinical AI', 'Exploring how artificial intelligence can support healthcare work, with clinical context, human oversight and clear limits at the forefront.', '01'],
            ['tech', 'Healthcare technology', 'Developing digital tools and resources around the needs of healthcare professionals, education and everyday practice.', '02'],
            ['innovation', 'Digital innovation', 'Turning ideas into prototypes and practical possibilities, with attention to usability, accessibility and real-world needs.', '03'],
            ['education', 'Education', 'Building AI literacy and digital confidence through practical resources that encourage reflection and informed use.', '04'],
          ].map(([type,title,description,number]) => <article className={`expertise-card ${type}`} key={title}><div className="card-top"><Icon type={type}/><span>{number}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="section solutions" id="solutions" aria-labelledby="solutions-title">
        <div className="container"><div className="section-heading"><div><p className="eyebrow section-label">03 / OUR SOLUTIONS</p><h2 id="solutions-title">Ideas made practical.</h2></div><p>Resources to explore, learn from and put into context.</p></div>
          <article className="handbook-feature">
            <div className="handbook-visual" aria-hidden="true"><div className="book"><span className="book-kicker">PRACTICAL AI EDUCATION</span><div className="book-lines"/><span className="book-title">The Nursing<br/>Copilot<br/><em>Handbook</em></span><span className="book-rule"/><span className="book-footer">THOUGHTFUL PROMPTS.<br/>PROFESSIONAL JUDGEMENT.</span></div><span className="visual-caption">A resource for the way nurses work.</span></div>
            <div className="handbook-copy"><p className="eyebrow">FEATURED RESOURCE / EDUCATION</p><h3>The Nursing<br/>Copilot Handbook</h3><p>A practical resource for exploring Microsoft 365 Copilot in nursing, with prompts for everyday work, learning and professional development.</p><ul className="feature-list"><li>Grounded in everyday nursing tasks</li><li>Encourages thoughtful, responsible use</li><li>Explore the contents and sample on the handbook website</li></ul><a className="button primary" href={handbook}>Explore the handbook <Arrow diagonal /></a><p className="small-note">Hosted by Nursing Citizen Development. Resource details and purchase information are available on the linked website.</p></div>
          </article>
          <a className="projects-link" href={org}><span className="project-symbol" aria-hidden="true">&lt;/&gt;</span><div><h3>Explore our technology projects</h3><p>Browse the organisation’s public repositories on GitHub.</p></div><Arrow diagonal /></a>
        </div>
      </section>

      <section className="section responsibility" id="responsibility" aria-labelledby="responsibility-title"><div className="container governance-grid"><div><p className="eyebrow">04 / RESPONSIBLE AI</p><h2 id="responsibility-title">Innovation needs<br/><span>good judgement.</span></h2><p className="governance-intro">Our approach puts human responsibility, clinical context and thoughtful evaluation at the centre of AI.</p><p className="governance-note">Information and educational resources on this website do not replace professional judgement or local clinical governance. Any use in care needs appropriate assessment and approval.</p></div><div className="principles">{[
        ['01', 'Human oversight', 'Keep people accountable. Review outputs, question assumptions and recognise where AI should not be used.'],
        ['02', 'Clinical governance', 'Consider intended use, evidence, risks and local requirements before introducing technology into practice.'],
        ['03', 'Privacy & inclusion', 'Protect confidential information and consider accessibility, bias and the needs of different communities.'],
        ['04', 'Honest evaluation', 'Be clear about limitations. Test ideas, learn from feedback and avoid claims that go beyond the evidence.'],
      ].map(([n,title,copy])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

      <section className="section contact" id="contact" aria-labelledby="contact-title"><div className="container contact-grid"><div><p className="eyebrow section-label">05 / LET’S CONNECT</p><h2 id="contact-title">A conversation can<br/>be the beginning.</h2><p>For professional enquiries about healthcare AI, digital innovation, education or collaboration, get in touch.</p></div><div className="contact-actions"><a className="button primary" href={booking}>Book a conversation <Arrow diagonal /></a><a className="email-link" href="mailto:lincoln@clinyqai.com">lincoln@clinyqai.com <Arrow diagonal /></a><p>Booking opens Google’s appointment service.<br/>Please do not include patient or confidential information.</p></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><a className="brand" href="#home" aria-label="ClinyQAi Limited home"><img src={logo} alt="" width="54" height="52"/><span>ClinyQAi<span className="brand-sub">LIMITED</span></span></a><p>Clinical Quality. Intelligent Innovation.</p><a className="text-link" href={org}>GitHub <Arrow diagonal /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} ClinyQAi Limited.<br/>Company number 17155505. Registered in England and Wales.</p><a href="https://find-and-update.company-information.service.gov.uk/company/17155505">Company register <Arrow diagonal /></a><a href="#privacy">Privacy & website information</a></div><details id="privacy" className="privacy"><summary>Privacy & website information</summary><div><p>This website does not use analytics, advertising trackers, contact forms or non-essential cookies. Site assets, including fonts, are served with the website.</p><p>GitHub Pages hosts this website and may process technical request information. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub’s privacy statement</a>. When you follow external links, the destination’s privacy practices apply. Booking is provided by Google; email opens your chosen email application.</p><p>For privacy or accessibility enquiries, contact <a href="mailto:lincoln@clinyqai.com">lincoln@clinyqai.com</a>. General website information is provided for information and education and is not individual clinical advice.</p></div></details></div></footer>
  </>;
}
