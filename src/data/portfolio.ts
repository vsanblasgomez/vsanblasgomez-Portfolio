export type Language = 'es' | 'en' | 'ca';

export type Project = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  link: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Social = { label: string; url: string; icon: 'github' | 'linkedin' | 'globe' };

export type PortfolioContent = {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  socials: Social[];
  cvFile: string;
  summary: string;
  about: string;
  stack: string[];
  stats: { label: string; value: string }[];
  skills: Record<string, string[]>;
  projects: Project[];
  experience: Experience[];
};

export type UiCopy = {
  nav: string[];
  status: string;
  primaryCta: string;
  contactCta: string;
  cvCta: string;
  sections: Record<'about' | 'projects' | 'skills' | 'experience' | 'contact', { eyebrow: string; title: string; description: string }>;
  projectLink: string;
  contactForm: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    socialTitle: string;
    phoneLabel: string;
    emailLabel: string;
    success: string;
    errorRequired: string;
    errorEmail: string;
    errorCooldown: (seconds: number) => string;
    errorLimit: string;
    errorGeneric: string;
    errorConfig: string;
  };
  cv: Record<'profile' | 'skills' | 'experience' | 'projects' | 'contact' | 'stack' | 'link', string>;
  footer: string;
};

export const languageOptions: { code: Language; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'ca', label: 'Valencià' },
];

const shared = {
  name: 'Victor San Blas Gomez',
  initials: 'VS',
  location: 'Valencia, España',
  email: 'vsanblasgomez@gmail.com',
  phone: '+34 655 92 10 79',
  socials: [
    { label: 'GitHub', url: 'https://github.com/vsanblasgomez', icon: 'github' as const },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/vsanbla', icon: 'linkedin' as const },
    { label: 'Portfolio', url: 'https://example.com/victor-portfolio', icon: 'globe' as const },
  ],
  cvFile: '/CV_Victor_SanBlas.pdf',
  stack: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Flutter', 'Dart', 'Node.js', 'Python', 'REST APIs', 'Git', 'AWS', 'Firebase'],
};

const watermarksImage = '/projects/watermarks.jpg';
const taskMasterImage = '/projects/taskmaster.jpg';
const urbanCutImage = '/projects/urban-cut.jpg';

export const portfolios: Record<Language, PortfolioContent> = {
  es: {
    ...shared,
    role: 'Front-End Developer · React · Flutter',
    summary: 'Front-End Developer con experiencia en aplicaciones web y móviles usando React, JavaScript (ES6+), HTML5 y CSS3. Trabajo con arquitecturas limpias, APIs REST y diseño responsive de alto rendimiento.',
    about: 'Soy Victor San Blas Gomez, graduado en Tecnología Digital y Multimedia por la Universitat Politècnica de València. Actualmente trabajo en Dots Memories como Front-End Developer con Flutter y React. Me enfoco en construir productos bien estructurados, con interfaces claras, accesibles y orientadas a resultados.',
    stats: [
      { label: 'Experiencia', value: '3+ años' },
      { label: 'Stack principal', value: 'React · JS' },
      { label: 'Idiomas', value: 'ES · CA · EN' },
    ],
    skills: {
      Frontend: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Responsive Design', 'SEO On-Page', 'State Management'],
      Mobile: ['Flutter', 'Dart', 'Provider', 'SQLite', 'Firebase', 'Push Notifications'],
      Backend: ['Node.js', 'Python', 'REST APIs', 'AWS (nociones)', 'Firebase'],
      Herramientas: ['Git', 'Clean Architecture / MVC', 'Optimización de rendimiento', 'Figma'],
    },
    projects: [
      {
        title: 'Watermarks – Plataforma de protección de imágenes (TFG)',
        image: watermarksImage,
        description: 'Plataforma web full-stack de protección de imágenes: frontend en React + HTML5 y backend en Python con API REST para procesamiento en servidor. Proyecto de fin de grado centrado en seguridad digital, validación de entrada, gestión de errores y escalabilidad.',
        stack: ['React', 'HTML5', 'Python', 'REST API'],
        link: '#',
      },
      {
        title: 'TaskMaster – App móvil de gestión de tareas',
        image: taskMasterImage,
        description: 'App de gestión de tareas para Android e iOS con Flutter y Dart. UI responsiva, gestión de estado con Provider, persistencia local con SQLite y notificaciones push. Testing manual y optimización orientada a métricas de UX.',
        stack: ['Flutter', 'Dart', 'Provider', 'SQLite'],
        link: '#',
      },
      {
        title: 'Urban Cut – Landing corporativa',
        image: urbanCutImage,
        description: 'Landing page corporativa mobile-first con HTML5, CSS3 y React. Optimización SEO on-page (metaetiquetas, semántica HTML) y rendimiento de carga (Core Web Vitals) con foco en captación y conversión.',
        stack: ['React', 'HTML5', 'CSS3', 'SEO On-Page'],
        link: '#',
      },
    ],
    experience: [
      {
        role: 'Frontend Developer (Flutter & React)',
        company: 'Dots Memories',
        period: 'Enero 2025 – Actualidad',
        description: 'Desarrollo de aplicaciones multiplataforma (Android, iOS, Web) con Flutter, Dart y React aplicando componentización reutilizable y separación de responsabilidades. Implementación de UIs responsivas y accesibles, consumo de APIs REST en tiempo real, Clean Architecture / MVC, gestión de estado con Provider y optimización de rendimiento en producción. Interlocución técnica con diseño, backend y QA.',
      },
      {
        role: 'Freelance Web Developer',
        company: 'Urban Cut',
        period: 'Octubre 2024',
        description: 'Desarrollo de landing page corporativa con HTML5, CSS3 y React, diseño responsive mobile-first, optimización SEO on-page y Core Web Vitals. Creación de componentes reutilizables en React y recursos visuales.',
      },
      {
        role: 'Grado en Tecnología Digital y Multimedia',
        company: 'Universitat Politècnica de València (UPV)',
        period: '2022 – 2025',
        description: 'Formación equivalente a Ingeniería Técnica en Informática/Telecomunicaciones con especialización en desarrollo web, arquitecturas de software y sistemas multimedia.',
      },
      {
        role: 'Responsive Web Design Certification',
        company: 'freeCodeCamp',
        period: '2023 – 2024',
        description: 'Certificación oficial en diseño web responsive: HTML5, CSS3, Flexbox, Grid y buenas prácticas de accesibilidad.',
      },
    ],
  },
  en: {
    ...shared,
    location: 'Valencia, Spain',
    role: 'Front-End Developer · React · Flutter',
    summary: 'Front-End Developer experienced in web and mobile applications using React, JavaScript (ES6+), HTML5 and CSS3. I work with clean architectures, REST APIs and high-performance responsive interfaces.',
    about: 'I am Victor San Blas Gomez, a Digital Technology and Multimedia graduate from Universitat Politècnica de València. I currently work at Dots Memories as a Front-End Developer with Flutter and React. I focus on building well-structured products with clear, accessible interfaces and a results-driven mindset.',
    stats: [
      { label: 'Experience', value: '3+ years' },
      { label: 'Main stack', value: 'React · JS' },
      { label: 'Languages', value: 'ES · CA · EN' },
    ],
    skills: {
      Frontend: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Responsive Design', 'On-Page SEO', 'State Management'],
      Mobile: ['Flutter', 'Dart', 'Provider', 'SQLite', 'Firebase', 'Push Notifications'],
      Backend: ['Node.js', 'Python', 'REST APIs', 'AWS (basics)', 'Firebase'],
      Tooling: ['Git', 'Clean Architecture / MVC', 'Performance Optimization', 'Figma'],
    },
    projects: [
      {
        title: 'Watermarks – Image protection platform (TFG)',
        image: watermarksImage,
        description: 'Full-stack web platform for image protection: React + HTML5 frontend and Python backend with a REST API for server-side image processing. Final degree project focused on digital security, input validation, error handling and scalability.',
        stack: ['React', 'HTML5', 'Python', 'REST API'],
        link: '#',
      },
      {
        title: 'TaskMaster – Mobile task management app',
        image: taskMasterImage,
        description: 'Task management app for Android and iOS built with Flutter and Dart. Responsive UI, state management with Provider, local persistence with SQLite and push notifications. Manual testing and optimization driven by real UX metrics.',
        stack: ['Flutter', 'Dart', 'Provider', 'SQLite'],
        link: '#',
      },
      {
        title: 'Urban Cut – Corporate landing page',
        image: urbanCutImage,
        description: 'Mobile-first corporate landing page with HTML5, CSS3 and React. On-page SEO optimization (meta tags, semantic HTML) and loading performance (Core Web Vitals) focused on lead capture and conversion.',
        stack: ['React', 'HTML5', 'CSS3', 'On-Page SEO'],
        link: '#',
      },
    ],
    experience: [
      {
        role: 'Frontend Developer (Flutter & React)',
        company: 'Dots Memories',
        period: 'January 2025 – Present',
        description: 'Building cross-platform applications (Android, iOS, Web) with Flutter, Dart and React, applying reusable componentization and separation of concerns. Implementing responsive and accessible UIs, consuming real-time REST APIs, applying Clean Architecture / MVC, managing state with Provider and optimizing production performance. Technical liaison with design, backend and QA teams.',
      },
      {
        role: 'Freelance Web Developer',
        company: 'Urban Cut',
        period: 'October 2024',
        description: 'Built a corporate landing page with HTML5, CSS3 and React, mobile-first responsive design, on-page SEO and Core Web Vitals optimization. Created reusable React components and visual assets.',
      },
      {
        role: 'BSc in Digital and Multimedia Technology',
        company: 'Universitat Politècnica de València (UPV)',
        period: '2022 – 2025',
        description: 'Degree equivalent to a Technical Engineering in IT/Telecommunications, specializing in web development, software architectures and multimedia systems.',
      },
      {
        role: 'Responsive Web Design Certification',
        company: 'freeCodeCamp',
        period: '2023 – 2024',
        description: 'Official certification in responsive web design: HTML5, CSS3, Flexbox, Grid and accessibility best practices.',
      },
    ],
  },
  ca: {
    ...shared,
    role: 'Front-End Developer · React · Flutter',
    summary: 'Front-End Developer amb experiència en aplicacions web i mòbils amb React, JavaScript (ES6+), HTML5 i CSS3. Treballe amb arquitectures netes, APIs REST i disseny responsive d’alt rendiment.',
    about: 'Soc Victor San Blas Gomez, graduat en Tecnologia Digital i Multimèdia per la Universitat Politècnica de València. Actualment treballe en Dots Memories com a Front-End Developer amb Flutter i React. Em centre a construir productes ben estructurats, amb interfícies clares, accessibles i orientades a resultats.',
    stats: [
      { label: 'Experiència', value: '3+ anys' },
      { label: 'Stack principal', value: 'React · JS' },
      { label: 'Idiomes', value: 'ES · CA · EN' },
    ],
    skills: {
      Frontend: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Responsive Design', 'SEO On-Page', 'State Management'],
      Mobile: ['Flutter', 'Dart', 'Provider', 'SQLite', 'Firebase', 'Push Notifications'],
      Backend: ['Node.js', 'Python', 'REST APIs', 'AWS (nocions)', 'Firebase'],
      Eines: ['Git', 'Clean Architecture / MVC', 'Optimització de rendiment', 'Figma'],
    },
    projects: [
      {
        title: 'Watermarks – Plataforma de protecció d’imatges (TFG)',
        image: watermarksImage,
        description: 'Plataforma web full-stack de protecció d’imatges: frontend en React + HTML5 i backend en Python amb API REST per a processament en servidor. Projecte de fi de grau centrat en seguretat digital, validació d’entrada, gestió d’errors i escalabilitat.',
        stack: ['React', 'HTML5', 'Python', 'REST API'],
        link: '#',
      },
      {
        title: 'TaskMaster – App mòbil de gestió de tasques',
        image: taskMasterImage,
        description: 'App de gestió de tasques per a Android i iOS amb Flutter i Dart. UI responsiva, gestió d’estat amb Provider, persistència local amb SQLite i notificacions push. Testing manual i optimització orientada a mètriques d’UX reals.',
        stack: ['Flutter', 'Dart', 'Provider', 'SQLite'],
        link: '#',
      },
      {
        title: 'Urban Cut – Landing corporativa',
        image: urbanCutImage,
        description: 'Landing page corporativa mobile-first amb HTML5, CSS3 i React. Optimització SEO on-page (metaetiquetes, semàntica HTML) i rendiment de càrrega (Core Web Vitals) amb focus en captació i conversió.',
        stack: ['React', 'HTML5', 'CSS3', 'SEO On-Page'],
        link: '#',
      },
    ],
    experience: [
      {
        role: 'Frontend Developer (Flutter & React)',
        company: 'Dots Memories',
        period: 'Gener 2025 – Actualitat',
        description: 'Desenvolupament d’aplicacions multiplataforma (Android, iOS, Web) amb Flutter, Dart i React aplicant componentització reutilitzable i separació de responsabilitats. Implementació d’UIs responsives i accessibles, consum d’APIs REST en temps real, Clean Architecture / MVC, gestió d’estat amb Provider i optimització de rendiment en producció. Interlocució tècnica amb disseny, backend i QA.',
      },
      {
        role: 'Freelance Web Developer',
        company: 'Urban Cut',
        period: 'Octubre 2024',
        description: 'Desenvolupament de landing page corporativa amb HTML5, CSS3 i React, disseny responsive mobile-first, optimització SEO on-page i Core Web Vitals. Creació de components reutilitzables en React i recursos visuals.',
      },
      {
        role: 'Grau en Tecnologia Digital i Multimèdia',
        company: 'Universitat Politècnica de València (UPV)',
        period: '2022 – 2025',
        description: 'Formació equivalent a Enginyeria Tècnica en Informàtica/Telecomunicacions, amb especialització en desenvolupament web, arquitectures de programari i sistemes multimèdia.',
      },
      {
        role: 'Responsive Web Design Certification',
        company: 'freeCodeCamp',
        period: '2023 – 2024',
        description: 'Certificació oficial en disseny web responsive: HTML5, CSS3, Flexbox, Grid i bones pràctiques d’accessibilitat.',
      },
    ],
  },
};

export const uiCopy: Record<Language, UiCopy> = {
  es: {
    nav: ['Proyectos', 'Skills', 'Contacto'],
    status: 'Disponible para proyectos front-end, Flutter y producto digital',
    primaryCta: 'Ver proyectos',
    contactCta: 'Contactar',
    cvCta: 'Descargar CV',
    sections: {
      about: { eyebrow: 'Sobre mí', title: 'Quién soy y cómo trabajo.', description: 'Un resumen de mi perfil, formación y forma de afrontar proyectos digitales.' },
      projects: { eyebrow: 'Proyectos', title: 'Trabajo y proyectos destacados.', description: 'Una selección de apps, plataformas y experiencias que muestran lo que he construido.' },
      skills: { eyebrow: 'Skills', title: 'Tecnologías y áreas de trabajo.', description: 'Herramientas y conocimientos que utilizo para construir productos digitales.' },
      experience: { eyebrow: 'Experiencia', title: 'Formación y recorrido profesional.', description: 'Mi evolución desde la UPV hasta el desarrollo front-end y Flutter en un entorno profesional.' },
      contact: { eyebrow: 'Contacto', title: 'Hablemos.', description: 'Si quieres conocer más sobre mi trabajo o colaborar, puedes escribirme.' },
    },
    projectLink: 'Abrir proyecto',
    contactForm: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@empresa.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame en qué estás trabajando',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      socialTitle: 'Contacto',
      phoneLabel: 'Teléfono',
      emailLabel: 'Email',
      success: '¡Mensaje enviado! Te responderé lo antes posible.',
      errorRequired: 'Por favor, completa todos los campos.',
      errorEmail: 'Introduce un email válido.',
      errorCooldown: (seconds) => `Espera ${seconds}s antes de enviar otro mensaje.`,
      errorLimit: 'Has alcanzado el límite de envíos. Inténtalo más tarde.',
      errorGeneric: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
      errorConfig: 'El formulario no está configurado todavía.',
    },
    cv: { profile: 'Perfil', skills: 'Skills', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto', stack: 'Stack', link: 'Link' },
    footer: 'Portfolio personal.',
  },
  en: {
    nav: ['Projects', 'Skills', 'Contact'],
    status: 'Available for front-end, Flutter and digital product projects',
    primaryCta: 'View projects',
    contactCta: 'Contact',
    cvCta: 'Download CV',
    sections: {
      about: { eyebrow: 'About', title: 'Who I am and how I work.', description: 'A short overview of my profile, education and approach to digital projects.' },
      projects: { eyebrow: 'Projects', title: 'Selected work and projects.', description: 'A selection of apps, platforms and experiences that show what I have built.' },
      skills: { eyebrow: 'Skills', title: 'Technologies and areas of work.', description: 'Tools and knowledge I use to build digital products.' },
      experience: { eyebrow: 'Experience', title: 'Education and professional path.', description: 'My progression from UPV to front-end and Flutter development in a professional environment.' },
      contact: { eyebrow: 'Contact', title: 'Let’s talk.', description: 'If you want to know more about my work or collaborate, feel free to contact me.' },
    },
    projectLink: 'Open project',
    contactForm: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      message: 'Message',
      messagePlaceholder: 'Tell me what you are working on',
      send: 'Send message',
      sending: 'Sending...',
      socialTitle: 'Contact',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      success: 'Message sent! I will reply as soon as possible.',
      errorRequired: 'Please fill in all fields.',
      errorEmail: 'Please enter a valid email address.',
      errorCooldown: (seconds) => `Wait ${seconds}s before sending another message.`,
      errorLimit: 'You have reached the submission limit. Try again later.',
      errorGeneric: 'Could not send the message. Please try again.',
      errorConfig: 'The contact form is not configured yet.',
    },
    cv: { profile: 'Profile', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact', stack: 'Stack', link: 'Link' },
    footer: 'Personal portfolio.',
  },
  ca: {
    nav: ['Projectes', 'Skills', 'Contacte'],
    status: 'Disponible per a projectes front-end, Flutter i producte digital',
    primaryCta: 'Veure projectes',
    contactCta: 'Contactar',
    cvCta: 'Descarregar CV',
    sections: {
      about: { eyebrow: 'Sobre mi', title: 'Qui soc i com treballe.', description: 'Un resum del meu perfil, formació i manera d’afrontar projectes digitals.' },
      projects: { eyebrow: 'Projectes', title: 'Treball i projectes destacats.', description: 'Una selecció d’apps, plataformes i experiències que mostren el que he construït.' },
      skills: { eyebrow: 'Skills', title: 'Tecnologies i àrees de treball.', description: 'Ferramentes i coneixements que utilitze per a construir productes digitals.' },
      experience: { eyebrow: 'Experiència', title: 'Formació i recorregut professional.', description: 'La meua evolució des de la UPV fins al desenvolupament front-end i Flutter en un entorn professional.' },
      contact: { eyebrow: 'Contacte', title: 'Parlem.', description: 'Si vols conéixer més sobre el meu treball o col·laborar, pots escriure’m.' },
    },
    projectLink: 'Obrir projecte',
    contactForm: {
      name: 'Nom',
      namePlaceholder: 'El teu nom',
      email: 'Email',
      emailPlaceholder: 'tu@empresa.com',
      message: 'Missatge',
      messagePlaceholder: 'Conta’m en què estàs treballant',
      send: 'Enviar missatge',
      sending: 'Enviant...',
      socialTitle: 'Contacte',
      phoneLabel: 'Telèfon',
      emailLabel: 'Email',
      success: 'Missatge enviat! Et respondré el més prompte possible.',
      errorRequired: 'Per favor, ompli tots els camps.',
      errorEmail: 'Introdueix un email vàlid.',
      errorCooldown: (seconds) => `Espera ${seconds}s abans d’enviar un altre missatge.`,
      errorLimit: 'Has arribat al límit d’enviaments. Torna-ho a provar més tard.',
      errorGeneric: 'No s’ha pogut enviar el missatge. Torna-ho a provar.',
      errorConfig: 'El formulari no està configurat encara.',
    },
    cv: { profile: 'Perfil', skills: 'Skills', experience: 'Experiència', projects: 'Projectes', contact: 'Contacte', stack: 'Stack', link: 'Link' },
    footer: 'Portfolio personal.',
  },
};

export const portfolio = portfolios.es;
