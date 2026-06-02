import type { PortfolioContent } from '../data/portfolio';

export function downloadCv(portfolio: PortfolioContent) {
  const link = document.createElement('a');
  link.href = portfolio.cvFile;
  link.download = `${portfolio.name.replace(/\s+/g, '-')}-CV.pdf`;
  link.target = '_blank';
  link.rel = 'noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
