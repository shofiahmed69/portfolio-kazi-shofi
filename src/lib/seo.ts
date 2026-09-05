export const SITE_CONFIG = {
  name: "Kazi Shofi Ahmed",
  legalName: "Kazi Shofi Ahmed",
  title: "Kazi Shofi Ahmed | CTO at Jantra Software & Full-Stack Software Engineer",
  description:
    "Official portfolio and personal website of Kazi Shofi Ahmed — Chief Technology Officer (CTO) at Jantra Software, Full-Stack Software Engineer at ScholarPass, and B.Sc. in Software Engineering candidate at Noakhali Science and Technology University (NSTU). Specializing in NestJS, Node.js, Next.js, React, PostgreSQL, MongoDB, Firebase, Flutter, and Python.",
  url: "https://kazishofiahmedportfolio.vercel.app",
  ogImage: "https://kazishofiahmedportfolio.vercel.app/shofi_formal.png",
  author: {
    name: "Kazi Shofi Ahmed",
    email: "frex19shofi@gmail.com",
    address: {
      locality: "Dhaka",
      country: "Bangladesh",
    },
    education: {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Noakhali Science and Technology University",
      url: "https://nstu.edu.bd",
    },
    roles: [
      {
        title: "Chief Technology Officer (CTO)",
        organization: "Jantra Software",
        organizationUrl: "https://jantrasoft.online",
        description: "Bangladesh-based custom software development company building SaaS platforms, AI agents, mobile apps, and workflow automation.",
      },
      {
        title: "Full-Stack Developer",
        organization: "ScholarPass",
        organizationUrl: "https://scholarpass.org",
        description: "US-based EdTech platform providing tutoring, test preparation, coding curriculum, and scholarship discovery.",
      },
    ],
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/shofi-ahmed-sh351/",
    github: "https://github.com/shofiahmed69",
  },
  skills: [
    "NestJS",
    "Node.js",
    "Next.js",
    "React.js",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Flutter",
    "Python",
    "TypeScript",
    "REST API",
    "GraphQL",
    "Docker",
    "Software Architecture",
  ],
};

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#person`,
    name: SITE_CONFIG.name,
    givenName: "Kazi Shofi",
    familyName: "Ahmed",
    alternateName: ["Shofi Ahmed", "Kazi Shofi"],
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.ogImage,
    email: `mailto:${SITE_CONFIG.author.email}`,
    jobTitle: [
      "Chief Technology Officer",
      "Full-Stack Software Engineer",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Jantra Software",
        url: "https://jantrasoft.online",
        sameAs: "https://jantrasoft.online",
        description:
          "Custom software development company based in Bangladesh building SaaS platforms, AI agents, mobile apps, and workflow automation.",
      },
      {
        "@type": "Organization",
        name: "ScholarPass",
        url: "https://scholarpass.org",
        sameAs: "https://scholarpass.org",
        description:
          "US-based educational technology company providing tutoring, test prep, and scholarship discovery.",
      },
    ],
    alumnusOf: {
      "@type": "EducationalOrganization",
      name: "Noakhali Science and Technology University",
      url: "https://nstu.edu.bd",
      sameAs: "https://nstu.edu.bd",
    },
    knowsAbout: SITE_CONFIG.skills,
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.github,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.author.address.locality,
      addressCountry: SITE_CONFIG.author.address.country,
    },
    description:
      "Kazi Shofi Ahmed is a Software Engineering student at Noakhali Science and Technology University (NSTU), Chief Technology Officer (CTO) at Jantra Software, and Full-Stack Developer at ScholarPass.",
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_CONFIG.url}/#profilepage`,
    url: SITE_CONFIG.url,
    name: `${SITE_CONFIG.name} — Professional Profile & Portfolio`,
    description: SITE_CONFIG.description,
    mainEntity: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
    hasPart: [
      {
        "@type": "AboutPage",
        name: "About Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/about`,
      },
      {
        "@type": "CollectionPage",
        name: "Projects & Repositories by Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/projects`,
      },
      {
        "@type": "ItemPage",
        name: "Professional Experience of Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/experience`,
      },
      {
        "@type": "ItemPage",
        name: "Honors, Awards & Publications of Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/publications`,
      },
      {
        "@type": "ContactPage",
        name: "Contact Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/contact`,
      },
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: "Kazi Shofi Ahmed — Official Portfolio",
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
    author: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
  };
}
