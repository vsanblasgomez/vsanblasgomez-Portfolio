import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { SectionTitle } from '../../components';
import { ContactForm } from './ContactForm';
import { SocialCard } from './SocialCard';

export function Contact() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <section id="contact" className="section contact-grid">
      <SectionTitle index="05" {...copy.sections.contact} />
      <ContactForm copy={copy.contactForm} />
      <SocialCard portfolio={portfolio} copy={copy.contactForm} />
    </section>
  );
}
