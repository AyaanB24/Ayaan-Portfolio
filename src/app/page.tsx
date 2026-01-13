"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import {
  Github,
  Linkedin,
  Award,
  ChevronRight,
  Zap,
  Cpu,
  Globe,
  Terminal,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";
import FloatingResume from "@/components/FloatingResume";

const fadeIn = (direction: "left" | "right"): any => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50, filter: "blur(10px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 1, ease: "easeOut" }
});

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative z-10 px-6 sm:px-12 lg:px-24">
      {/* 1. HERO SECTION - High Impact */}
      <section className="min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl pt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-black"></div>
            <span className="font-mono text-[10px] tracking-[0.5em] text-zinc-500 uppercase font-black">
              System Architect & DevOps Engineer
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter text-black">
            Engineering <br />
            <span className="text-zinc-400">Autonomy.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 mt-12">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black mb-6 uppercase leading-tight">
                Ayaan Bargir — <br />
                <span className="text-zinc-500 text-base md:text-xl normal-case font-bold">
                  • Computer Science Engineer • DevOps <br />
                  • Full Stack • Workflow Automation
                </span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-900 leading-tight font-black opacity-80 max-w-xl">
                I work at the intersection of development and operations, <br />
                turning complex workflows into dependable, automated systems.
              </p>
            </div>

            <div className="flex flex-col gap-4 justify-end pb-2">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-10 py-5 bg-black text-white font-black overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">View Artifacts <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></span>
                <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="px-6 py-4 border-2 border-black text-black font-black hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
                >
                  RESUME.PDF
                </a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-4 border-2 border-black text-black font-black hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION - Clean Editorial Layout */}
      <section id="about" className="min-h-screen flex items-center justify-end py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[560px] text-left pr-6 md:pr-0"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-zinc-400 mb-16 uppercase font-black">
            / 01 ABOUT ME
          </div>

          <div className="space-y-12">
            <h3 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter uppercase mb-8">
              BEYOND THE <br />
              <span className="text-zinc-300">CODEBASE.</span>
            </h3>

            <p className="text-xl md:text-2xl font-medium text-zinc-600 leading-snug tracking-tight">
              Computer Science Engineering student focused on DevOps,
              system automation, and full-stack development.
            </p>

            <div className="space-y-8 text-zinc-900 text-lg md:text-xl leading-relaxed font-semibold">
              <p>
                I enjoy working across the entire lifecycle of an application — from development and automation to deployment and optimization. My focus is on reducing operational friction by designing workflows and systems that are reliable, repeatable, and easy to maintain.
              </p>
              <p>
                I’m naturally curious about new technologies and enjoy learning by building. Whether it’s automating processes with tools like n8n, containerizing applications, or improving deployment pipelines, I like solving real-world problems with practical, engineering-driven solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. SKILLS SECTION - Optimized Bento Grid */}
      <section id="skills" className="py-24 min-h-screen flex items-center pr-6 lg:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1000px] text-left"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-zinc-400 mb-8 uppercase font-black">
            / 02 TECH STACK & EXPERTISE
          </div>

          <h2 className="text-5xl md:text-[8rem] font-black text-black mb-12 tracking-tighter uppercase leading-[0.75]">
            TECHNICAL <br /> <span className="text-zinc-200">STACK.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory
              title="1. INFRASTRUCTURE & ORCHESTRATION"
              skills={["Docker", "Kubernetes", "Jenkins", "Git", "Vercel", "CI/CD Pipelines"]}
            />
            <SkillCategory
              title="2. LOGIC & AUTOMATION"
              skills={["n8n Workflow", "API Integrations", "Python", "Java", "Process Logic"]}
            />
            <SkillCategory
              title="3. PRODUCTION & SCALING"
              skills={["Supabase", "MySQL", "Flutter", "Android (Java)", "REST APIs"]}
            />
            <div className="grid grid-cols-1 gap-6">
              <SkillCategory
                title="4. FOUNDATIONS"
                skills={["Operating Systems", "DBMS", "Networks", "Software Engineering"]}
                subtle
              />
              <SkillCategory
                title="5. MACHINE LEARNING BASICS"
                skills={["Scikit-learn", "Data Cleaning", "Data Analysis (EDA)", "Seaborn"]}
                subtle
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. PROJECTS SECTION - Side-by-Side Grid */}
      <section id="projects" className="py-32 min-h-screen flex items-center justify-center relative px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1400px] z-10"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-zinc-400 mb-16 uppercase font-black text-center md:text-left">
            / 03 SELECTED PROJECTS
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-black mb-24 tracking-tighter uppercase leading-[0.8]">
            SELECTED <br /> <span className="text-zinc-300">WORKS.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              number="01"
              title=" RakshaSetu- AI powered Cyber Defence Safety Portal"
              desc="RakshaSetu is a defence-centric cyber security platform built to protect defence personnel, veterans, and defence families from rising cyber threats such as phishing, impersonation, honey-traps, fake welfare schemes, and identity fraud"
              tag="Full Stack"
              github="https://github.com/AyaanB24/RakshaSetu-Ai-powered-Cyber-Defence-Safety-Portal"
              demo="https://v0-raksha-setu-cybersecurity-platfo.vercel.app/"
            />
            <ProjectCard
              number="02"
              title="Automated CI/CD Notes App with Jenkins & Email Notifications"
              desc="Automated build and deployment pipeline with Jenkins, Docker, and email alerts for successful and failed builds."
              tag="Jenkins CI/CD"
              github="https://github.com/AyaanB24/Declarative-Pipeline-NotesApp"
              demo="#"
            />
            <ProjectCard
              number="03"
              title="Dockerized Expenses Tracker WebApp"
              desc="Used Docker to containerize the Expenses Tracker WebApp"
              tag="BACKEND"
              github="https://github.com/AyaanB24/expense-tracker-dockerized"
              demo="#"
            />
            <ProjectCard
              number="04"
              title=" Employee Salary Prediction"
              desc="A user-friendly Streamlit web app that predicts employee salaries based on age, gender, education level, job title, and experience. It also supports bulk predictions, data visualizations, model performance evaluation, and a chatbot career assistant."
              tag="PRODUCTION"
              github="https://github.com/AyaanB24/employee-salary-prediction"
              demo="#"
            />
          </div>
        </motion.div>
      </section>

      {/* 5. EXPERIENCE SECTION - Vertical Timeline */}
      <section id="experience" className="py-48 min-h-screen flex items-center pr-12 lg:pr-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[900px]"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-zinc-400 mb-16 uppercase font-black">
            / 04 PROFESSIONAL TIMELINE
          </div>

          <h2 className="text-6xl md:text-9xl font-black text-black mb-24 tracking-tighter uppercase leading-[0.8]">
            EXPERIENCE <br />
          </h2>

          <div className="relative pl-12 border-l-4 border-black/5">
            {/* Timeline Items */}
            <div className="space-y-32">
              <TimelineItem
                title="Technical Contributor"
                company="GSSoC"
                period="2025 | 3 Months"
                certificateUrl="/certificates/GSSoC.pdf"
                points={[
                  "Contributed to open-source projects",
                  "Collaborated with developers and mentors",
                  "Improved code quality and documentation"
                ]}
              />

              <TimelineItem
                title="Machine Learning Intern"
                company="IBM SkillsBuild (Remote)"
                period="18 JUNE 2025 – 30 JULY 2025 (6 WEEKS)"
                certificateUrl="/certificates/ML_Intern.pdf"
                points={[
                  "Worked on ML fundamentals and applied learning",
                  "Hands-on experience with data preprocessing and models"
                ]}
              />

              <TimelineItem
                title="Full Stack Intern"
                company="Itinium, Sangli"
                period="7 JUNE 2023 – 17 JULY 2023"
                certificateUrl="/certificates/itinium_Intern.pdf"
                points={[
                  "Developed frontend and backend features",
                  "Worked with databases and APIs",
                  "Gained real-world development experience"
                ]}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. EDUCATION SECTION - High-Contrast Cards */}
      <section id="education" className="py-48 min-h-screen flex items-center justify-end relative px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1200px] z-10"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-zinc-400 mb-16 uppercase font-black text-right md:text-left">
            / 05 ACADEMIC FOUNDATIONS
          </div>

          <h2 className="text-6xl md:text-9xl font-black text-black mb-24 tracking-tighter uppercase leading-[0.8] text-right md:text-left">
            KNOWLEDGE <br /> <span className="text-zinc-300">BASE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EduCard
              number="01"
              school="Annasaheb Dange College of Engineering"
              location="Ashta"
              level="B.Tech – Computer Science & Engineering(IOT & Cybersecurity including Blockchain Technology)"
              period="2024 – 2027 (IN PROGRESS)"
            />
            <EduCard
              number="02"
              school="Latthe Polytechnic"
              location="Sangli"
              level="Diploma in Computer Scienece & Engineering"
              period="2021 – 2024"
            />
            <EduCard
              number="03"
              school="St. Thomas English School"
              location="Sangli"
              level="Secondary Education"
              period="2020 PASSOUT"
            />
          </div>
        </motion.div>
      </section>

      {/* 7. CERTIFICATES - Redesigned Interactive Grid */}
      <section id="certificates" className="py-48 min-h-screen flex items-center px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-zinc-400 mb-16 uppercase font-black">
            / 06 TECHNICAL VALIDATION
          </div>

          <h2 className="text-6xl md:text-9xl font-black text-black mb-24 tracking-tighter uppercase leading-[0.8]">
            CREDENTIAL <br /> <span className="text-zinc-300">VAULT.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Machine Learning using python" },
              { name: "Git Training" },
              { name: "Artificial Intelligence Fundamentals Badge", url: "https://www.credly.com/badges/2132318c-e554-4ea5-82ef-86da7b385f8a/linked_in_profile" },
              { name: "Java Basics" },
              { name: "Introduction to Python OpenCv" },
              { name: "Data Structure and Algorithms" }
            ].map((cert, i) => (
              <div key={i} className="group relative p-8 bg-zinc-50 border-2 border-black/5 hover:border-black hover:bg-white transition-all duration-500 rounded-2xl flex flex-col justify-between h-full shadow-sm hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
                <div>
                  <Award className="mb-6 w-8 h-8 text-black opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl md:text-2xl font-black leading-tight uppercase tracking-tighter mb-8">
                    {cert.name}
                  </h3>
                </div>

                <a
                  href={cert.url || `/certificates/${cert.name.toLowerCase().replace(/ /g, '_')}.pdf`}
                  target="_blank"
                  className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest border border-black/20 px-4 py-2 hover:bg-black hover:text-white transition-all w-fit"
                >
                  <Terminal className="w-3 h-3" /> {cert.url ? "View Badge" : "View Certificate"}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. CONTACT SECTION - Responsive Aligned & Pure Black */}
      <section id="contact" className="min-h-screen py-20 flex flex-col justify-between relative overflow-hidden text-black z-10">
        <div className="max-w-[1400px] w-full mx-auto z-10 px-6 sm:px-12 lg:px-24 flex-1 flex flex-col justify-center items-center md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-right"
          >
            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-4 tracking-tighter max-w-3xl">
              Let&apos;s build your next <br /> <span className="text-zinc-500 font-bold italic">high-scale system together.</span>
            </h2>
          </motion.div>

          {/* Responsive Grid - 1 Col Mobile, 4 Col Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-black pb-12 w-full">
            <ContactCol
              title="PRIMARY"
              links={[
                { label: "About Me", href: "#about" },
                { label: "Selected Works", href: "#projects" },
                { label: "Technical Log", href: "#experience" },
                { label: "Knowledge Base", href: "#education" }
              ]}
            />
            <ContactCol
              title="GO DEEPER"
              links={[
                { label: "Download CV", href: "/resume.pdf" },
                { label: "Tech Stack", href: "#skills" },
                { label: "Credentials", href: "#certificates" }
              ]}
            />
            <ContactCol
              title="SOCIAL"
              links={[
                { label: "GitHub", href: "https://github.com/AyaanB24" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ayaan-bargir-13b684311/" },
                { label: "Youtube", href: "https://www.youtube.com/@ayaanbargir2324" }
              ]}
            />
            <div className="flex flex-col gap-6 items-center md:items-end">
              <span className="font-mono text-[10px] font-black text-black border-b border-black pb-2 tracking-[0.5em] uppercase">WANT TO SEE MY WORK?</span>
              <a href="mailto:ayaanbargir7@gmail.com" className="text-lg md:text-xl font-black text-black hover:italic transition-all lowercase break-all text-center md:text-right">
                ayaanbargir7@gmail.com
              </a>
            </div>
          </div>

          {/* Footer Metadata - Responsive stack/spread */}
          <div className="py-8 border-t border-black mt-8 flex flex-col md:flex-row justify-between items-center md:items-baseline text-[10px] font-mono font-black text-black gap-8 uppercase tracking-[0.2em] w-full text-center md:text-left">
            <div className="flex flex-col gap-1">
              <span>© COPYRIGHT {new Date().getFullYear()} AYAANB</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex flex-col gap-1 md:text-right">
              <span>SANGLI, INDIA</span>
              <span>{time} / UTC+5.5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              <span>SYSTEMS ONLINE / ENCRYPTED</span>
            </div>
          </div>
        </div>

        {/* Massive Branding Footer - Responsive Font Fluidity */}
        <div className="absolute inset-x-0 bottom-0 h-[20vh] md:h-[30vh] overflow-hidden flex items-end justify-center z-0 pointer-events-none opacity-100 px-4">
          <motion.h1
            initial={{ y: "110%" }}
            whileInView={{ y: "10%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[30vw] md:text-[18vw] font-black leading-none text-black tracking-tighter select-none"
          >
            AYAANB
          </motion.h1>
        </div>
      </section>
      <FloatingResume />
    </main>
  );
}

function SkillCategory({ title, skills, subtle = false }: { title: string, skills: string[], subtle?: boolean }) {
  // Mapping technology names to DevIcon names
  const getIcon = (skill: string) => {
    const name = skill.toLowerCase();
    if (name.includes("docker")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg";
    if (name.includes("kubernetes")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg";
    if (name.includes("jenkins")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg";
    if (name.includes("git")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
    if (name.includes("vercel")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg";
    if (name.includes("supabase")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg";
    if (name.includes("mysql")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
    if (name.includes("html") || name.includes("css")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
    if (name.includes("flutter")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg";
    if (name.includes("android")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg";
    if (name.includes("java")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
    if (name.includes("python")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
    if (name.includes("vscode")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";
    if (name.includes("jupyter")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg";
    return null;
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        animate: { transition: { staggerChildren: 0.05 } }
      }}
      className={`flex flex-col gap-6 p-8 border-2 border-black/10 hover:border-black transition-colors rounded-3xl bg-white shadow-sm ${subtle ? 'opacity-80' : ''}`}
    >
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-black mb-2">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => {
          const icon = getIcon(s);
          return (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 }
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ecfdf5", // emerald-50
                borderColor: "#10b981" // emerald-500
              }}
              className="group/skill flex items-center gap-2 px-3 py-1.5 border border-black/5 rounded-full bg-zinc-50 transition-colors"
            >
              {icon && <img src={icon} alt={s} className="w-4 h-4 grayscale group-hover/skill:grayscale-0 transition-all duration-300" />}
              <span className="text-[10px] font-mono font-black text-black/60 group-hover/skill:text-black uppercase tracking-tight">{s}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ProjectCard({ number, title, desc, tag, github, demo }: any) {
  return (
    <div className="group relative p-10 border-2 border-black/10 bg-white/50 backdrop-blur-sm hover:border-emerald-500 hover:bg-emerald-50/10 hover:shadow-[20px_20px_60px_rgba(16,185,129,0.05)] transition-all duration-500 overflow-hidden rounded-3xl h-full flex flex-col justify-between">
      <div className="absolute top-0 right-0 p-8">
        <span className="font-mono text-[10px] text-zinc-300 group-hover:text-emerald-500 transition-colors font-black">/ {number}</span>
      </div>

      <div>
        <span className="text-[10px] font-mono block text-zinc-400 mb-4 tracking-[0.2em] group-hover:text-emerald-600 transition-colors">{tag}</span>
        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.9] group-hover:italic transition-all">
          {title}
        </h3>
        <p className="text-xs font-black opacity-60 uppercase tracking-tight max-w-xs mb-10 leading-relaxed group-hover:opacity-100 transition-opacity">
          {desc}
        </p>
      </div>

      <div className="flex gap-4 mt-auto">
        {github && (
          <a href={github} target="_blank" className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest border border-black px-4 py-2 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all">
            <Github className="w-3.5 h-3.5" /> Source
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest bg-emerald-500 text-white px-4 py-2 hover:bg-black transition-all">
            Deploy <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

function TimelineItem({ title, company, period, points, certificateUrl }: { title: string, company: string, period: string, points: string[], certificateUrl?: string }) {
  return (
    <div className="relative group">
      {/* Node indicator */}
      <div className="absolute -left-[54px] top-2 w-[12px] h-[12px] bg-zinc-200 border-2 border-white rounded-full group-hover:bg-black group-hover:scale-150 transition-all duration-500 z-10" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-black/5 pb-4">
          <div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase group-hover:italic transition-all">
              {title}
            </h3>
            <span className="text-black font-mono text-[11px] uppercase tracking-[0.3em] font-black italic group-hover:bg-black group-hover:text-white px-2 py-0.5 transition-all">
              @ {company}
            </span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-sm md:text-lg font-black text-black opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {period}
            </span>
            {certificateUrl && (
              <a href={certificateUrl} target="_blank" className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest border border-black/20 px-3 py-1.5 hover:bg-black hover:text-white transition-all bg-white relative z-10 shadow-sm">
                <Award className="w-3 h-3" /> View Certificate
              </a>
            )}
          </div>
        </div>

        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex items-center gap-4 text-xs md:text-base font-black text-zinc-600 uppercase tracking-tight group-hover:text-black transition-colors">
              <span className="w-1.5 h-1.5 bg-zinc-200 shrink-0 group-hover:bg-black transition-colors" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EduCard({ number, school, location, level, period }: any) {
  return (
    <div className="group relative p-10 border-2 border-black/10 bg-white hover:border-black hover:bg-black hover:text-white hover:shadow-[15px_15px_0_0_rgba(0,0,0,1)] transition-all duration-500 rounded-2xl flex flex-col justify-between h-full cursor-default">
      <div className="flex justify-between items-start mb-12">
        <span className="font-mono text-xs text-zinc-300 group-hover:text-white/50 font-black tracking-widest">{number} // FOUNDATION</span>
        <div className="w-10 h-px bg-zinc-100 group-hover:bg-white/20 mt-2" />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter uppercase leading-tight">
          {school}
        </h3>
        <span className="text-[10px] font-mono font-black text-zinc-400 group-hover:text-white/40 uppercase tracking-widest block mb-4">
          {location}
        </span>
        <div className="h-1 w-8 bg-zinc-100 group-hover:bg-white mb-6 transition-all" />
        <p className="text-base md:text-lg font-black opacity-70 group-hover:opacity-100 uppercase tracking-tight">
          {level}
        </p>
      </div>

      <div className="pt-8 border-t border-black/5 group-hover:border-white/10 mt-auto">
        <span className="font-mono text-xs font-black block group-hover:italic transition-all">
          {period}
        </span>
      </div>
    </div>
  );
}

function ContactCol({ title, links }: any) {
  return (
    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
      <span className="font-mono text-[10px] font-black text-black border-b border-black pb-2 tracking-[0.5em] uppercase">{title}</span>
      <div className="flex flex-col gap-2 items-center md:items-start">
        {links.map((link: any, i: number) => (
          <a key={i} href={link.href} className="text-base md:text-lg font-bold text-black hover:italic transition-all uppercase tracking-tight">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
