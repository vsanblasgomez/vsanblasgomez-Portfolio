import type { ReactNode } from 'react';

type ContactLineProps = {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
};

export function ContactLine({ href, icon, label, value }: ContactLineProps) {
  return (
    <a className="contact-line" href={href}>
      {icon}
      <div>
        <strong>{label}</strong>
        <span>{value}</span>
      </div>
    </a>
  );
}
