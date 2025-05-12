import { UserIcon, CodeIcon, DatabaseIcon, ServerIcon, SmartphoneIcon, CpuIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const skills = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
  devops: ['Docker', 'Git', 'CI/CD', 'AWS'],
  android: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Flutter (Dart)'],
  systems: ['C++ (Modern C++17/20)', 'Qt Framework', 'Djinni']
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center mb-12">
          <UserIcon className="h-10 w-10 text-primary mr-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://picsum.photos/seed/profile/400/400"
              alt="Raghavendra Hande"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover border-4 border-primary"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground mb-6">
              Hi, I&apos;m Raghavendra Hande, a dedicated Full Stack Developer with a knack for solving complex problems and building elegant web and mobile applications. I specialize in building performant, modern Android applications using both native and cross-platform technologies. My journey in tech has been driven by a curiosity to learn and a passion for creating impactful digital solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My expertise extends to Kotlin (leveraging coroutines, Flow, and modern Android architecture components) and Jetpack Compose for declarative UIs with a focus on state management and responsive design. I also create beautiful, multi-platform apps with Flutter, emphasizing smooth UI/UX and rapid development using Dart. For systems programming and native cross-platform solutions, I work with modern C++ (C++17/20), the Qt Framework for desktop applications, and Djinni for bridging C++ core logic with Kotlin/Java.
            </p>
            <p className="text-lg text-muted-foreground">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest advancements in software development.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">My Skillset</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Frontend Web" icon={<CodeIcon className="h-6 w-6 text-primary mb-2"/>} skills={skills.frontend} />
            <SkillCategory title="Backend" icon={<ServerIcon className="h-6 w-6 text-primary mb-2"/>} skills={skills.backend} />
            <SkillCategory title="Databases" icon={<DatabaseIcon className="h-6 w-6 text-primary mb-2"/>} skills={skills.database} />
            <SkillCategory title="Android Development" icon={<SmartphoneIcon className="h-6 w-6 text-primary mb-2"/>} skills={skills.android} />
            <SkillCategory title="Systems & Cross-Platform" icon={<CpuIcon className="h-6 w-6 text-primary mb-2"/>} skills={skills.systems} />
            <SkillCategory title="DevOps & Tools" icon={<CodeIcon className="h-6 w-6 text-primary mb-2"/>} skills={skills.devops} />
          </div>
        </div>
      </div>
    </section>
  );
}

type SkillCategoryProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center mb-4">
        {icon}
        <h4 className="text-xl font-medium text-foreground text-center">{title}</h4>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
