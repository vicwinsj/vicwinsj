import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="px-1 sm:px-10 py-10 h-full max-w-[var(--content-w)] w-full flex flex-col gap-6 sm:gap-10">
      <h2 className="ml-1 sm:ml-0 text-2xl sm:text-3xl">Projects</h2>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
      </div>
    </main>
  );
}
