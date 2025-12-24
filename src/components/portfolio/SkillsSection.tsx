const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C++'],
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Laravel', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-portfolio">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm constantly learning and expanding my skillset. Here are the technologies I'm proficient in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8"
            >
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full gradient-bg" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill visualization */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { skill: 'Frontend Development', level: 90 },
            { skill: 'Backend Development', level: 85 },
            { skill: 'Problem Solving', level: 95 },
          ].map((item) => (
            <div key={item.skill} className="glass-card p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">{item.skill}</span>
                <span className="text-primary font-semibold">{item.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full gradient-bg rounded-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
