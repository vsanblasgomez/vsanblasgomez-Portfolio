import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Bell,
  Braces,
  Boxes,
  Code2,
  Component,
  Database,
  FileJson,
  Flame,
  Gauge,
  GitBranch,
  Globe,
  Hash,
  Layers,
  MonitorSmartphone,
  Palette,
  PenTool,
  Search,
  Server,
  Settings,
  Triangle,
  Wand2,
  Waypoints,
  Workflow,
} from 'lucide-react';

const ICON_MAP: { match: RegExp; icon: LucideIcon }[] = [
  { match: /react/i, icon: Atom },
  { match: /typescript|ts\b/i, icon: FileJson },
  { match: /javascript|js\b|es6/i, icon: Braces },
  { match: /html5?\b/i, icon: Hash },
  { match: /css3?\b/i, icon: Palette },
  { match: /responsive/i, icon: MonitorSmartphone },
  { match: /seo|search/i, icon: Search },
  { match: /state management|workflow/i, icon: Workflow },
  { match: /flutter/i, icon: Layers },
  { match: /\bdart\b/i, icon: Triangle },
  { match: /provider/i, icon: Boxes },
  { match: /sqlite|database/i, icon: Database },
  { match: /firebase/i, icon: Flame },
  { match: /push|notif/i, icon: Bell },
  { match: /node\.?js/i, icon: Server },
  { match: /python/i, icon: Code2 },
  { match: /rest|api|graphql/i, icon: Globe },
  { match: /aws|cloud/i, icon: Settings },
  { match: /\bgit\b/i, icon: GitBranch },
  { match: /clean architecture|mvc|architecture/i, icon: Component },
  { match: /performance|optimi[sz]/i, icon: Gauge },
  { match: /figma|design/i, icon: PenTool },
  { match: /wind|tailwind/i, icon: Wand2 },
  { match: /state|waypoint/i, icon: Waypoints },
];

const FALLBACK: LucideIcon = Code2;

export function getSkillIcon(skill: string): LucideIcon {
  for (const { match, icon } of ICON_MAP) {
    if (match.test(skill)) return icon;
  }
  return FALLBACK;
}
