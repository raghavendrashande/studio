import { BriefcaseIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData, type Project } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center mb-12">
          <BriefcaseIcon className="h-10 w-10 text-primary mr-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
      </CardHeader>
      <div className="relative w-full h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          data-ai-hint="project code"
        />
      </div>
      <CardContent className="flex-grow pt-6">
        <CardDescription className="text-muted-foreground mb-4 h-20 overflow-y-auto">
          {project.description}
        </CardDescription>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start space-x-3">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="default" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}