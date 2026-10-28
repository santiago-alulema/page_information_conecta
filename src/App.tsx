import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Headphones, Menu, Package, ShieldCheck, Sparkles, Wrench, X } from 'lucide-react';
import './styles.css';
const services = [
  { n: '01', title: 'Servicio técnico', text: 'Instalación, diagnóstico, mantenimiento preventivo y correctivo de electrodomésticos.', icon: Wrench, className: 'technical' },
  { n: '02', title: 'Experiencia al cliente', text: 'Atención especializada, seguimiento de solicitudes y soluciones de principio a fin.', icon: Headphones, className: 'call' },
  { n: '03', title: 'Inventarios y repuestos', text: 'Administración inteligente de inventarios y gestión operativa de repuestos.', icon: Package, className: 'stock' },
  { n: '04', title: 'Talleres autorizados', text: 'Coordinación, control de evidencias y seguimiento de una red de talleres.', icon: ShieldCheck, className: 'shops' },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > Math.max(240, (document.getElementById('inicio')?.offsetHeight ?? window.innerHeight) - 130));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .13 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  const close = () => setMenuOpen(false);
  return <>
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="logo" onClick={close} aria-label="Conecta inicio"><span className="logo-mark">C<span className="logo-dot" /></span><span>conecta<span className="logo-period">.</span></span></a>
      <nav className={menuOpen ? 'nav-links opened' : 'nav-links'} aria-label="Navegación principal">
        <a href="#nosotros" onClick={close}>Nosotros</a><a href="#servicios" onClick={close}>Servicios</a><a href="#experiencia" onClick={close}>Experiencia</a><a href="#marcas" onClick={close}>Marcas</a>
        <a className="nav-mobile-contact" href="#contacto" onClick={close}>Contáctanos</a>
      </nav>
      <a className="nav-cta" href="#contacto">Hablemos <ArrowUpRight size={16} /></a>
      <button type="button" className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-image" /><div className="hero-grad" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-top-note"><span className="pulse-dot" /> SOLUCIONES POSTVENTA EN ECUADOR <span className="note-line" /></div>
        <div className="hero-content">
          <div className="hero-overline animate-entrance">MÁS QUE SOPORTE, UNA EXPERIENCIA</div>
          <h1 className="hero-title animate-entrance delay-one">Conectamos<br /><em>confianza.</em></h1>
          <p className="hero-subtitle animate-entrance delay-two">Transformamos la experiencia postventa con personas, tecnología y soluciones que sí responden.</p>
          <div className="hero-buttons animate-entrance delay-three"><a href="#servicios" className="primary-button">Descubre lo que hacemos <ArrowUpRight size={18} /></a><a href="#nosotros" className="text-button">Conoce Conecta <ArrowRight size={17} /></a></div>
        </div>
        <div className="hero-bottom"><span>EST. ECUADOR · SERVICIO POSTVENTA</span><a href="#nosotros" aria-label="Desplazarse hacia abajo" className="scroll-cue"><ArrowDown size={20} /></a><span>EXPERIENCIA QUE CONECTA</span></div>
        <div className="hero-index">01 <span>/ 05</span></div>
      </section>

      <section className="intro section-pad" id="nosotros">
        <div className="intro-layout container">
          <div className="eyebrow reveal"><span className="eyebrow-line" /> QUIÉNES SOMOS</div>
          <div className="intro-main"><h2 className="display-heading reveal">La confianza no se promete. <span>Se construye en cada servicio.</span></h2><div className="intro-bottom reveal"><p>En Conecta transformamos la atención postventa en una experiencia cercana, ágil y confiable. Comprendemos las necesidades de cada marca y acompañamos a sus clientes desde el primer contacto hasta la solución.</p><a className="circle-arrow" href="#experiencia" aria-label="Ver nuestra experiencia"><ArrowUpRight /></a></div></div>
        </div>
        <div className="statement container reveal"><div><Sparkles size={19} /> NUESTRO PROPÓSITO</div><p>Elevar los estándares de atención, respaldo y seguridad para que cada interacción deje una buena experiencia.</p></div>
      </section>

      <section className="services section-pad" id="servicios">
        <div className="container"><div className="section-header reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> QUÉ HACEMOS</div><h2 className="section-title">Soluciones que<br /><i>van más allá.</i></h2></div><p>Unimos experiencia, atención y tecnología para acompañar cada etapa del servicio postventa.</p></div>
          <div className="service-grid">{services.map((s, i) => <article className={`service-card reveal ${s.className}`} key={s.n} style={{ transitionDelay: `${i * 90}ms` }}><div className="card-ambient" /><div className="service-top"><span>{s.n} / SERVICIO</span><s.icon size={24} strokeWidth={1.55} /></div><div className="service-bottom"><h3>{s.title}</h3><p>{s.text}</p><span className="service-rule" /></div></article>)}</div></div>
      </section>

      <section className="experience" id="experiencia"><div className="experience-image" /><div className="experience-overlay" /><div className="container experience-inner"><div className="eyebrow light reveal"><span className="eyebrow-line" /> NUESTRA ESENCIA</div><h2 className="experience-heading reveal">Cada detalle.<br /><em>Cada solución.</em><br />Cada conexión.</h2><p className="reveal">Porque el verdadero servicio no termina cuando se resuelve un problema. Termina cuando el cliente vuelve a confiar.</p><div className="pill-row reveal"><span><Check size={15} /> Atención especializada</span><span><Check size={15} /> Seguimiento continuo</span><span><Check size={15} /> Compromiso real</span></div></div><span className="experience-caption">CONECTA / EXPERIENCIA DE SERVICIO</span></section>

      <section className="process section-pad"><div className="container"><div className="section-header process-head reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> CÓMO TRABAJAMOS</div><h2 className="section-title">Simple para ti.<br /><i>Preciso para nosotros.</i></h2></div><p>Un proceso claro para que cada caso tenga atención, seguimiento y una solución.</p></div><div className="process-grid">{[{ n: '01', title: 'Escuchamos', text: 'Recibimos y entendemos cada necesidad.' }, { n: '02', title: 'Coordinamos', text: 'Asignamos los recursos y especialistas adecuados.' }, { n: '03', title: 'Resolvemos', text: 'Ejecutamos el servicio y acompañamos cada etapa.' }, { n: '04', title: 'Acompañamos', text: 'Verificamos la atención y la satisfacción del cliente.' }].map((s, i) => <div className="process-step reveal" style={{ transitionDelay: `${i * 80}ms` }} key={s.n}><div className="step-number">{s.n}<ChevronRight size={18} /></div><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>

      <section className="brands section-pad" id="marcas"><div className="container brands-content"><div className="eyebrow reveal"><span className="eyebrow-line" /> MARCAS QUE NOS CONECTAN</div><h2 className="section-title reveal">Grandes marcas.<br /><i>Una misma confianza.</i></h2><p className="brands-lead reveal">Experiencia de servicio postventa para marcas que valoran el respaldo y la calidad.</p><div className="brand-list reveal"><div className="brand-name indurama">INDURAMA<span>®</span></div><div className="brand-name toshiba">TOSHIBA</div><div className="brand-name innova">innova<span className="innova-dot">.</span></div></div><p className="brand-footnote">Marcas indicadas para esta propuesta. Confirmar autorización de uso de sus logotipos antes de publicar.</p></div></section>

      <section className="contact" id="contacto"><div className="contact-glow" /><div className="container contact-inner"><div className="eyebrow light reveal"><span className="eyebrow-line" /> EL SIGUIENTE PASO</div><h2 className="reveal">Hagamos que<br /><em>todo conecte.</em></h2><p className="reveal">Conversemos sobre cómo llevar la experiencia postventa de tu marca al siguiente nivel.</p><div className="contact-actions reveal"><a href="mailto:contacto@conecta593.com" className="primary-button contact-btn">Escríbenos <ArrowUpRight size={19} /></a><a className="text-button light-button" href="https://ordenes.conecta593.com" target="_blank" rel="noreferrer">Acceso al sistema <ArrowUpRight size={17} /></a></div><span className="contact-note">Confirma el correo corporativo antes de publicar esta página.</span></div></section>
    </main>
    <footer className="footer"><div className="container footer-glass"><div className="footer-inner"><a href="#inicio" className="logo footer-logo"><span className="logo-mark">C<span className="logo-dot" /></span><span>conecta<span className="logo-period">.</span></span></a><p>Transformamos la experiencia postventa.</p><span>© {new Date().getFullYear()} Conecta · Ecuador</span><a href="#inicio">Volver arriba ↑</a></div></div></footer>
  </>;
}
export default App;

