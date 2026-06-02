import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type SocialChipProps = {
  label: string;
  url: string;
  icon: ReactNode;
};

export function SocialChip({ label, url, icon }: SocialChipProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="social-chip">
      <span className="social-chip-icon">{icon}</span>
      <span>{label}</span>
      <ArrowUpRight size={14} />
    </a>
  );
}
