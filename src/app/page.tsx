import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="px-1 sm:px-10 h-full max-w-[var(--content-w)] grid sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      {projects &&
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            articleLink={`article/${project.slug}`}
          />
        ))}
    </main>
  );
}
