export const SITE_CONFIG = {
  name: "Kazi Shofi Ahmed",
  title: "Kazi Shofi Ahmed | CTO at Jantra Soft & Software Engineer",
  description:
    "Official portfolio and profile of Kazi Shofi Ahmed - CTO of Jantra Soft, Full-Stack Developer at ScholarPass (US-based EdTech), Software Engineering student at Noakhali Science & Technology University. Specialized in NestJS, Node.js, Next.js, React, PostgreSQL, MongoDB, Firebase, Flutter, and Python.",
  url: "https://kazishofiahmed.com", // Base URL (or canonical URL)
  ogImage: "https://kazishofiahmed.com/shofi_formal.png",
  author: {
    name: "Kazi Shofi Ahmed",
    role: "CTO at Jantra Soft & Full Stack Software Engineer",
    email: "kazishofiahmed@gmail.com",
    address: "Dhaka, Bangladesh",
    university: "Noakhali Science and Technology University (NSTU)",
    degree: "B.Sc. in Software Engineering",
  },
  socials: {
    github: "https://github.com/shofiahmed69",
    linkedin: "https://linkedin.com/in/kazishofiahmed",
    twitter: "https://twitter.com/kazishofiahmed",
    facebook: "https://facebook.com/shofiahmed69",
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
  organizations: [
    {
      name: "Jantra Soft",
      role: "Chief Technology Officer (CTO)",
      type: "Organization",
    },
    {
      name: "ScholarPass",
      role: "Full-Stack Software Engineer",
      location: "USA (Remote/Hybrid)",
      type: "Organization",
    },
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
    jobTitle: "Chief Technology Officer & Full Stack Engineer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Jantra Soft",
        roleName: "Chief Technology Officer",
      },
      {
        "@type": "Organization",
        name: "ScholarPass",
        roleName: "Full-Stack Developer",
      },
    ],
    alumnusOf: {
      "@type": "EducationalOrganization",
      name: "Noakhali Science and Technology University",
      sameAs: "https://nstu.edu.bd",
    },
    knowsAbout: SITE_CONFIG.skills,
    sameAs: [
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.twitter,
      SITE_CONFIG.socials.facebook,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_CONFIG.url}/#profilepage`,
    url: SITE_CONFIG.url,
    name: `${SITE_CONFIG.name} - Professional Profile & Portfolio`,
    mainEntity: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
    hasPart: [
      {
        "@type": "WebPage",
        name: "About Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/about`,
      },
      {
        "@type": "WebPage",
        name: "Projects by Kazi Shofi Ahmed",
        url: `${SITE_CONFIG.url}/projects`,
      },
      {
        "@type": "WebPage",
        name: "Work Experience & Roles",
        url: `${SITE_CONFIG.url}/experience`,
      },
      {
        "@type": "WebPage",
        name: "Publications & Achievements",
        url: `${SITE_CONFIG.url}/publications`,
      },
      {
        "@type": "WebPage",
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
    name: "Kazi Shofi Ahmed - Official Portfolio",
    description: SITE_CONFIG.description,
    author: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
  };
}
