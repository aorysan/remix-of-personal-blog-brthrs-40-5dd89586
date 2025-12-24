import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and dark mode support.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/aorysan',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product management, shopping cart, and secure payment integration.',
      tags: ['Node.js', 'React', 'MongoDB'],
      github: 'https://github.com/aorysan',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      github: 'https://github.com/aorysan',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location detection and 7-day forecast visualization.',
      tags: ['JavaScript', 'API', 'CSS'],
      github: 'https://github.com/aorysan',
      featured: false,
    },
    {
      title: 'Blog CMS',
      description: 'Content management system for blogs with markdown support and SEO optimization.',
      tags: ['Laravel', 'MySQL', 'Vue.js'],
      github: 'https://github.com/aorysan',
      featured: false,
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging and group chat functionality.',
      tags: ['Socket.io', 'Node.js', 'React'],
      github: 'https://github.com/aorysan',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-portfolio">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Some things I've{' '}
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects. Each one taught me something new and helped me grow as a developer.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-background rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Folder className="w-16 h-16 text-primary/40" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            asChild
          >
            <a href="https://github.com/aorysan" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
