import { useMemo, type ReactNode } from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/BrandIcons';
import type { PortfolioContent, Social as SocialType, UiCopy } from '../../data/portfolio';
import { SocialChip } from './SocialChip';
import { ContactLine } from './ContactLine';

const SOCIAL_ICONS: Record<SocialType['icon'], ReactNode> = {
  github: <GithubIcon size={16} />,
  linkedin: <LinkedinIcon size={16} />,
  globe: <Globe size={16} />,
};

type SocialCardProps = {
  portfolio: PortfolioContent;
  copy: UiCopy['contactForm'];
};

export function SocialCard({ portfolio, copy }: SocialCardProps) {
  const phoneHref = useMemo(() => `tel:${portfolio.phone.replace(/\s+/g, '')}`, [portfolio.phone]);
  const emailHref = useMemo(() => `mailto:${portfolio.email}`, [portfolio.email]);

  return (
    <div className="social-card glass-card">
      <h3>{copy.socialTitle}</h3>
      <div className="social-grid">
        {portfolio.socials.map((social) => (
          <SocialChip
            key={social.label}
            label={social.label}
            url={social.url}
            icon={SOCIAL_ICONS[social.icon]}
          />
        ))}
      </div>
      <ContactLine href={phoneHref} icon={<Phone size={15} />} label={copy.phoneLabel} value={portfolio.phone} />
      <ContactLine href={emailHref} icon={<Mail size={15} />} label={copy.emailLabel} value={portfolio.email} />
    </div>
  );
}
