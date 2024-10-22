import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/themes/theme-toggle";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "StarloPost",
      description:
        "A full-stack Thread clone made in NextJS, Clerk and MongoDB",
      image: "/starlopost.png",
      tags: ["React", "Node.js", "Clerk", "MongoDB"],
      link: "https://starlopost.vercel.app/",
    },
    {
      title: "StarloSearch",
      description: "A Search Engine fully made in HTML, JS and CSS",
      image: "/starlosearch.png",
      tags: ["Search", "Engine", "HTML", "JavaScript", "CSS"],
      link: "https://starlosearch.vercel.app/index.html",
    },
    {
      title: "LunarDB",
      description: "A NoSQL Cache, in memory database written in C++ and Ruby",
      image: "/lunardb.png",
      tags: ["Database", "C++", "NoSQL", "Multimodal"],
      link: "https://github.com/Kazooki123/lunardb",
    },
    {
      title: "Crabby",
      description: "A New and Modern Programming Language written in C",
      image: "/crabbylogo.jpg",
      tags: ["Language", "C", "Programming", "Modern"],
      link: "https://github.com/Kazooki123/crabby",
    },
    {
      title: "Typeify",
      description:
        "A JavaScript-to-Typescript syntax converter helpful for changing messy Javascript codes to Typescript!",
      image: "/typescript.png",
      tags: ["JavaScript", "Typescript", "Converter", "Type Safety"],
      link: "https://github.com/Kazooki123/typeify/",
    },
    {
      title: "Forest Camp",
      description:
        "A Unity Game that tells a emotional and wholesome story of a Father who lost everything and wants to forget everything by going to the far lands",
      image: "/forestcamp.png",
      tags: ["Unity", "Game", "3D", "Story"],
      link: "https://github.com/Kazooki123/Forest-Camp",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />

      {/* Header with background image */}
      <header className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
        <div className="container mx-auto px-4 relative z-[2]">
          <h1 className="text-5xl font-bold text-center text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
              StarloExoliz&apos;s
            </span>{" "}
            Portfolio
          </h1>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            About Me! :3
          </h2>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
            Hi and my name is StarloExoliz, I am a Programmer, Student and love
            to play Games in my free time. I love to adventure into the world of
            A.I and Game Development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Developer",
                description:
                  "Passionate about creating responsive and user-friendly websites.",
              },
              {
                title: "Linux User",
                description:
                  "I use Arch btw. Just kidding but I do use both Arch and Ubuntu :)",
              },
              {
                title: "Uses Multiple Programming Languages",
                description:
                  "Not always but I tend to code in C++, C, Python, Rust, Ruby, Javascript, Typescript, Zig, Go and Kotlin. I sometimes use the Dart language.",
              },
              {
                title: "Problem Solver",
                description:
                  "Enjoys tackling complex challenges and finding elegant solutions.",
              },
              {
                title: "Continuous Learner",
                description:
                  "Always eager to learn new technologies and improve my skills.",
              },
              {
                title: "Experiences",
                description:
                  "I have Experiences in the field of Web development, Machine Learning, Game Development, App Development and even Database Development!",
              },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            My Projects 📖
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform duration-300 hover:scale-[1.02]"
              >
                <Card className="overflow-hidden h-full transition-colors duration-300 hover:bg-accent cursor-pointer">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
