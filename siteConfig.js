// siteConfig.js
export const siteConfig = {
  name: "Nanduni Kaveesha Senadeera",
  title: "Aspiring Software Engineer",
  description: "Welcome to the portfolio site",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/your-username",
    medium: "https://medium.com/@your-medium",
  },
  aboutMe:
    "I’m a developer with experience in Python, JavaScript, and building full-stack applications. Passionate about AI, business, and technology.",
  skills: ["Python", "JavaScript", "FastAPI", "React", "SQL"],

  projects: [
    {
      name: "NameSense",
      description: "AI-driven file classification and renaming tool.",
      link: "https://github.com/your-username/namesense",
      skills: ["Python", "OCR", "FastAPI"],
    },
    {
      name: "To-Do List App",
      description: "Simple React-based to-do list for productivity.",
      link: "https://github.com/your-username/todo-list",
      skills: ["React", "TailwindCSS"],
    },
  ],

  experience: [
    {
      company: "Promptus",
      title: "AI, QA & Software Support",
      dateRange: "2023 – Present",
      bullets: [
        "Coordinated business operations and streamlined workflows.",
        "Collaborated with cross-functional teams for growth strategies.",
      ],
    },
    {
      company: "Company B",
      title: "HR Administrator",
      dateRange: "2022 – 2023",
      bullets: [
        "Managed recruitment and employee engagement initiatives.",
        "Supported HR operations and payroll processing.",
      ],
    },
  ],

  education: [
    {
      school: "University of Westminster",
      degree: "BSc (Hons) in Computer Science",
      dateRange: "2019 – 2023",
      achievements: [
        "Completed a full-stack ML project for final year.",
        "Member of Computer Science Club.",
      ],
    },
  ],
};
