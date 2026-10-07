'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import profileImage from '../images/my-image.png'
import contactIllustration from '../images/contact-illustration.svg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light'
    setTheme(initialTheme)
    document.documentElement.dataset.theme = initialTheme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      initialTheme === 'dark' ? '#171a18' : '#f4f2ec',
    )
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      nextTheme === 'dark' ? '#171a18' : '#f4f2ec',
    )
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Rushikesh Sakat, home">Rs<span>.</span></a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span><span></span><span className="sr-only">Toggle navigation</span>
      </button>
      <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-availability" href="#contact" onClick={closeMenu}><span></span> Available for work</a>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
          <span className="theme-toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </nav>
    </header>
  )
}

function ProjectCard({ className = '', children }) {
  return <article className={`project-card ${className}`}>{children}</article>
}

function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(String(new Date().getFullYear()))
  }, [])

  return (
    <footer className="site-footer section-wrap">
      <a className="wordmark" href="#home" aria-label="Back to top">Rs<span>.</span></a>
      <span>MADE WITH CARE &amp; A LITTLE TOO MUCH COFFEE.</span>
      <div>
        <a href="https://github.com/rushikesh47-del" target="_blank" rel="noreferrer" aria-label="Rushikesh Sakat on GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Rushikesh Sakat on LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.18h2.97v9.56ZM6.45 7.87a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.87h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.46V9.18h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.02 0 3.57 1.99 3.57 4.58v5.22Z"/></svg>
        </a>
      </div>
      <span className="copyright">© {year} RUSHIKESH SAKAT</span>
    </footer>
  )
}

export default function Home() {
  function tiltHeroArt(event) {
    if (
      event.pointerType === 'touch' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--tilt-x', `${vertical * -10}deg`)
    event.currentTarget.style.setProperty('--tilt-y', `${horizontal * 12}deg`)
  }

  function resetHeroArt(event) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document
      .querySelectorAll('.section-heading, .project-card, .about-copy, .contact h2')
      .forEach((element) => {
        element.classList.add('js-reveal')
        observer.observe(element)
      })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"></span> FrontEnd DEVELOPER AND UI/UX DESIGNER </p>
            <h1>Good ideas<br />deserve a <em>good</em><br />place to land.</h1>
            <p className="hero-description">
              Hey, I’m <strong>Rushikesh Sakat</strong> — a Frontend developer and UI/UX designer who turns thoughtful ideas
              into clear, considered digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#about">A little about me <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div
            className="hero-art"
            role="img"
            aria-label="A colorful abstract illustration with subtle interactive depth"
            onPointerMove={tiltHeroArt}
            onPointerLeave={resetHeroArt}
          >
            <div className="art-note"><span className="note-dot"></span> currently making things</div>
            <div className="art-orbit art-orbit-one"></div>
            <div className="art-orbit art-orbit-two"></div>
            <div className="art-sun"></div>
            <div className="art-leaf art-leaf-one"></div>
            <div className="art-leaf art-leaf-two"></div>
            <div className="art-star">✳</div>
            <div className="art-caption"><span>01 / 04</span><span>A little curiosity goes a long way.</span></div>
          </div>
          <a className="scroll-cue" href="#work"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I’VE MADE</p>
              <h2>Selected work<span className="period">.</span></h2>
            </div>
            <p className="section-aside">A mix of real projects, good questions,<br />and a lot of little details.</p>
          </div>

          <div className="project-grid">
            <ProjectCard className="project-card-featured">
              <div className="project-visual morrow-visual">
                <div className="mini-window">
                  <div className="mini-sidebar">
                    <span className="mini-logo">morrow<span>.</span></span>
                    <span className="mini-search"></span>
                    <span className="mini-person"><i></i><b></b></span>
                    <span className="mini-person mini-person-active"><i></i><b></b></span>
                    <span className="mini-person"><i></i><b></b></span>
                  </div>
                  <div className="mini-chat">
                    <div className="mini-chat-heading"><i></i><span></span></div>
                    <span className="mini-message mini-message-in">Hey! Just sent over the first draft.</span>
                    <span className="mini-message mini-message-out">This is looking really good ✨</span>
                    <span className="mini-message mini-message-in mini-message-short">Glad you like it!</span>
                    <span className="mini-compose"></span>
                  </div>
                </div>
                <span className="visual-index">01 — REAL-TIME CONVERSATIONS</span>
              </div>
              <div className="project-info">
                <div><p className="project-type">PRODUCT · FRONTEND · FIREBASE</p><h3>Morrow Chat</h3></div>
                <a className="project-github" href="https://github.com/rushikesh47-del/Morrow-App" target="_blank" rel="noreferrer" aria-label="View Morrow Chat on GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
                </a>
                <p className="project-description">A calmer place for teams to stay in touch, built around thoughtful conversations.</p>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-visual grabthecab-visual">
                <div className="cab-map-art" aria-hidden="true">
                  <span className="map-road map-road-one"></span>
                  <span className="map-road map-road-two"></span>
                  <span className="map-road map-road-three"></span>
                  <span className="map-park"></span>
                  <span className="map-route"></span>
                  <span className="map-pin map-pin-start">A</span>
                  <span className="map-pin map-pin-end">B</span>
                  <div className="cab-phone">
                    <div className="cab-phone-top"><span>9:41</span><i></i></div>
                    <div className="cab-app-bar"><span>‹</span><strong>Choose a ride</strong><span>•••</span></div>
                    <div className="cab-map">
                      <span className="cab-map-street cab-street-one"></span>
                      <span className="cab-map-street cab-street-two"></span>
                      <span className="cab-map-street cab-street-three"></span>
                      <span className="cab-map-route"></span>
                      <span className="cab-map-pin cab-map-pin-one">A</span>
                      <span className="cab-map-pin cab-map-pin-two">B</span>
                      <span className="cab-marker">🚕</span>
                    </div>
                    <div className="cab-ride-sheet">
                      <span className="cab-sheet-handle"></span>
                      <strong>Your ride, your way</strong>
                      <span className="cab-ride-option"><i>🚕</i><b>Mini<small>4 min away</small></b><em>₹120</em></span>
                      <span className="cab-ride-option cab-ride-selected"><i>🚘</i><b>Comfort<small>2 min away</small></b><em>₹185</em></span>
                      <span className="cab-book-button">Book your ride</span>
                    </div>
                  </div>
                </div>
                <span className="visual-index">02 — MOBILE APP / RIDE BOOKING</span>
              </div>
              <div className="project-info">
                <div><p className="project-type">MOBILE APPLICATION · RIDE BOOKING</p><h3>GrabTheCab</h3></div>
                <a className="project-github" href="https://github.com/rushikesh47-del/GrabTheCab" target="_blank" rel="noreferrer" aria-label="View GrabTheCab on GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
                </a>
                <p className="project-description">A cab-booking app concept for finding a nearby ride, choosing a car, and getting on the way.</p>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-visual codecast-visual">
                <div className="codecast-orb"></div>
                <div className="codecast-editor" aria-hidden="true">
                  <div className="codecast-editor-bar">
                    <span className="codecast-window-dots"><i></i><i></i><i></i></span>
                    <span className="codecast-file">main.js</span>
                    <span className="codecast-live"><i></i> LIVE</span>
                  </div>
                  <div className="codecast-code">
                    <span><i>01</i><b><em>const</em> room = <strong>new</strong> CodeRoom()</b></span>
                    <span><i>02</i><b>room.<em>join</em>(<q>design-team</q>)</b></span>
                    <span><i>03</i><b></b></span>
                    <span><i>04</i><b><strong>await</strong> room.<em>sync</em>()</b></span>
                    <span><i>05</i><b><em>console</em>.<em>log</em>(<q>together, in real time</q>)</b></span>
                    <span><i>06</i><b className="codecast-cursor-line">|</b></span>
                  </div>
                  <div className="codecast-collaborators">
                    <span className="codecast-avatar codecast-avatar-one">R</span>
                    <span className="codecast-avatar codecast-avatar-two">A</span>
                    <span className="codecast-avatar codecast-avatar-three">M</span>
                    <span>3 people in this room</span>
                  </div>
                </div>
                <div className="codecast-copy">
                  <span className="codecast-kicker">YOUR TEAM, IN SYNC</span>
                  <strong>Code<br /><i>together.</i></strong>
                  <span className="codecast-link">WRITE · RUN · SHARE</span>
                </div>

                <span className="codecast-side">CODECAST / COLLABORATIVE IDE</span>
                <span className="visual-index">03 — REAL-TIME CODE COLLABORATION</span>
              </div>

              <div className="project-info">
                <div>
                  <p className="project-type">WEB APP · MULTIPLAYER CODE EDITOR</p>
                  <h3>
                    CodeCast
                  </h3>
                </div>

                <a className="project-github" href="https://github.com/rushikesh47-del/Code-Cast" target="_blank" rel="noreferrer" aria-label="View CodeCast on GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
                </a>

                <p className="project-description">
                  A shared online coding room where teams can edit together, run code,
                  and see every change as it happens.
                </p>
              </div>
            </ProjectCard>
          </div>
          <p className="projects-note">Stillroom is a concept project. Replace it with your own work before publishing.</p>
        </section>

        <section className="about" id="about">
          <div className="section-wrap about-inner">
            <figure className="about-photo">
              <Image
                className="about-photo-image"
                src={profileImage}
                alt="Rushikesh Sakat working at his desk"
                fill
                sizes="(max-width: 620px) 320px, (max-width: 900px) 250px, 340px"
              />
              <figcaption className="about-photo-caption">
                <span>RUSHIKESH SAKAT</span>
                <span>FRONTEND DEVELOPER AND UI/UX DESIGNER · INDIA</span>
              </figcaption>
            </figure>
            <div className="about-copy">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Building for the<br />way things <em>feel.</em></h2>
              <p>
                I care about the details that make a digital experience feel human: the words,
                the rhythm, the moment something just clicks. I like working from a blank canvas
                to the last pixel, and learning something new along the way.
              </p>
              <div className="toolkit">
                <span>MY EVERYDAY TOOLKIT</span>
                <div><i>JavaScript</i><i>React</i><i>CSS</i><i>Firebase</i><i>Figma</i><i>HTML</i><i>Next.js</i></div>
              </div>
            </div>
            <div className="about-side-note"><span className="side-note-line"></span><span>Thoughtful work,<br />made with care.</span></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow"><span className="eyebrow-line"></span> HAVE SOMETHING IN MIND?</p>
          <h2>Let’s make<br />something <em>matter.</em></h2>
          <a
            className="button button-light"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rushikeshsakat47%40gmail.com&su=Hello%20from%20your%20portfolio&body=Hi%20Rushikesh%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20get%20in%20touch."
            target="_blank"
            rel="noreferrer"
          >
            Say hello <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-footnote">Have a project, a question, or a good book recommendation? My inbox is open.</p>
          <figure className="contact-art">
            <Image
              className="contact-art-image"
              src={contactIllustration}
              alt="An illustrated letter against a calm landscape, inviting you to get in touch"
              fill
              sizes="(max-width: 620px) 220px, (max-width: 900px) 230px, 340px"
            />
            <figcaption><span>HAVE AN IDEA?</span><span>LET’S PUT IT INTO WORDS.</span></figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </>
  )
}
