"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/BrandIcons";
import { Star, GitFork, ExternalLink, Search, RefreshCw, Code2 } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const username = "shofiahmed69";

  const fallbackRepos: Repository[] = [
    {
      id: 1,
      name: "Skillsync2",
      description: "AI-Powered Job Portal with role-based auth, resume screening, LiveKit video interviews & Hope companion.",
      html_url: `https://github.com/${username}/Skillsync2`,
      stargazers_count: 12,
      forks_count: 4,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      name: "ScholarPASS-Core",
      description: "Full-stack EdTech platform backend services and microservice architecture.",
      html_url: `https://github.com/${username}/ScholarPASS-Core`,
      stargazers_count: 8,
      forks_count: 2,
      language: "JavaScript",
      updated_at: new Date().toISOString(),
    },
    {
      id: 3,
      name: "AI-Headshot-Generator",
      description: "Gradio Queue & InstantID AI corporate headshot portrait generator pipeline.",
      html_url: `https://github.com/${username}/AI-Headshot-Generator`,
      stargazers_count: 15,
      forks_count: 5,
      language: "Python",
      updated_at: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Pharmacy-POS-System",
      description: "Full-stack pharmacy inventory, billing, and prescription management system.",
      html_url: `https://github.com/${username}/Pharmacy-POS-System`,
      stargazers_count: 6,
      forks_count: 1,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
    },
    {
      id: 5,
      name: "Flutter-SuperApp-Mobile",
      description: "Cross-platform Flutter application for scholarship discovery and tutoring.",
      html_url: `https://github.com/${username}/Flutter-SuperApp-Mobile`,
      stargazers_count: 9,
      forks_count: 3,
      language: "Dart",
      updated_at: new Date().toISOString(),
    },
    {
      id: 6,
      name: "Technovation-Winner-Code",
      description: "Technovation 2025 National Champion winning hackathon solution codebase.",
      html_url: `https://github.com/${username}/Technovation-Winner-Code`,
      stargazers_count: 21,
      forks_count: 8,
      language: "Python",
      updated_at: new Date().toISOString(),
    },
  ];

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (!res.ok) throw new Error("GitHub API issue");
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        setRepos(fallbackRepos);
      }
    } catch {
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const languages = ["All", ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean)))];

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLanguage === "All" || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-neutral-900 rounded border border-neutral-800">
          [ 05 // LIVE GITHUB REPOSITORIES ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Real-Time GitHub Repositories
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Connected directly to <span className="text-white font-mono font-bold">@shofiahmed69</span>.
        </p>
      </div>

      {/* Profile Header Box */}
      <div className="mono-card p-6 rounded-xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-white text-black flex items-center justify-center font-bold">
            <GithubIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono">
              <h3 className="text-base font-bold text-white">Kazi Shofi Ahmed</h3>
              <span className="text-xs text-neutral-400">@shofiahmed69</span>
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-light">
              Full-Stack Software Engineer & Applied AI/ML Specialist
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-white hover:bg-neutral-200 rounded transition-all"
          >
            <span>Visit Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded px-10 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 font-mono"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto font-mono">
          <span className="text-xs text-neutral-500 shrink-0">Filter:</span>
          {languages.slice(0, 6).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 text-xs rounded border transition-all shrink-0 ${
                selectedLanguage === lang
                  ? "bg-white text-black font-bold border-white"
                  : "bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo, idx) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="mono-card p-5 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-sm text-white hover:underline font-mono flex items-center gap-2 truncate"
                >
                  <Code2 className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="truncate">{repo.name}</span>
                </a>
              </div>

              <p className="text-neutral-400 text-xs line-clamp-3 leading-relaxed mb-4 font-light">
                {repo.description || "No description provided."}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>{repo.language || "Plain"}</span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-neutral-400" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-neutral-400" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
