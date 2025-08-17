// siteConfig.js
export const siteConfig = {
  name: "Nanduni Kaveesha Senadeera",
  title: "Aspiring Software Engineer",
  description: "Computer Science graduate skilled in full-stack development, machine learning, and automation — passionate about building scalable and impactful software solutions.",
  accentColor: "#4f639aff",
  social: {
    email: "naksathaudage2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/s-a-nanduni-kaveesha-senadeera/",
    github: "https://github.com/Senadeera-NK",
    medium: "https://medium.com/@naksathaudage2000",
  },
  aboutMe:
    "I’m a Computer Science graduate passionate about building reliable and scalable software solutions. My experience spans frontend and backend development, software quality assurance, and automation workflows. I enjoy working with modern web technologies, designing REST APIs, and exploring data-driven solutions that solve real-world problems.With a strong foundation in object-oriented programming and a quick ability to adapt to new tech stacks, I thrive in collaborative environments where I can both contribute and learn. Beyond coding, I’m motivated by the challenge of creating clean, efficient systems that make life easier for users",
  skills: ["HTML", "CSS3", "Python", "JavaScript", "FastAPI", "React", "SQL"],

  projects: [
    {
      name: "Deepfake Audio Detection",
      description: "Developed a machine learning model in TensorFlow to detect synthetically generated audio, enhancing digital security. The system included custom data preprocessing pipelines, classification algorithms, and a prototype demo interface, showcasing end-to-end ML integration and deployment skills.",
      link: "https://github.com/topics/audio-deepfake-detection",
      skills: ["Python", "TensorFlow"],
    },
    {
      name: "Event Planning Web Application",
      description: "Currently building a full-stack event management platform with React.js, FastAPI, and Supabase. The application enables user accounts, event categories, and cart functionality, while leveraging cloud tools like GitHub and Gitpod for collaborative development and scalability.",
      link: "https://github.com/Senadeera-NK/JZ_EventPlanner-Latests-",
      skills: ["FastAPI", "Supabase(PostreSQL)", "React.js", "GitHub", "Gitpod", "Codespace"],
    },
    {
      name: "Iris Flower Classifier System",
      description: "Designed a predictive model in Scikit-learn to classify iris flower species with strong accuracy. The project integrates Python, Pandas, and Matplotlib for model training, validation, and visualization, while providing lightweight backend services for handling real-time prediction requests.",
      link: "https://github.com/Senadeera-NK/Iris-Flowers-Classifier",
      skills: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    },
    ,
    {
      name: "Intelligent File Classifier & Rename System",
      description: "Building an AI-powered tool that automates file classification and renaming using OCR and NLP. The system extracts text from documents, interprets context, and stores metadata in SQL, streamlining repetitive file management tasks through FastAPI-based backend services.",
      link: "https://github.com/Senadeera-NK/NameSense",
      skills: ["Python", "OCR", "NLP", "SQL", "FastAPI"],
    },
  ],

  experience: [
    {
      company: "Promptus - Dubai(UAE)",
      title: "AI, QA & Software Support",
      dateRange: "April, 2025 – June, 2025",
      bullets: [
        "Conduct comprehensive functionality, performance, and UI/UX testing on AI-generated microsites, ensuring responsive layouts and intuitive navigation.",
        "Identified and documented usability issues, collaborating with developers to enhance the end-user experience.",
        "Assisted in refining bug reporting workflows to improve turnaround time for fixes.",
        "Created internal user documentation to guide both technical and non-technical teams.",
        "Provided valuable feedback on frontend design choices to align with branding and accessibility standards."

      ],
    },
    {
      company: "LOLC Technologies - Colombo Sri Lanka",
      title: "Intern -QA, UIPath & RPA Developer",
      dateRange: "2021 – 2022",
      bullets: [
        "Supported quality assurance activities for enterprise software solutions.",
        "Learned UIPath automation techniques for repetitive business processes.",
        "Assisted in executing backend and frontend test cases.",
        "Maintained QA documentation and test reports.",
        "Observed the complete software development lifecycle in a corporate environment."

      ],
    },
  ],

  education: [
    {
      school: "University of Westminster",
      degree: "BSc (Hons) in Computer Science",
      dateRange: "2019 – 2023",
      achievements: [
        "Graduated with Second Upper Class Honours (GPA: 3.7/4.0)",
        "Final year project: 'Deepfake Audio Detection' using Tensorflow and Python",
      ],
    },
  ],
};
