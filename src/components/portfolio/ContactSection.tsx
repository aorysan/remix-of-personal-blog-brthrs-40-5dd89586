import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aryoadiputro@gmail.com',
      href: 'mailto:aryoadiputro@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 858-1534-6834',
      href: 'tel:+6285815346834',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Malang, Jawa Timur, Indonesia',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/aorysan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aryo-adi-putro-1a7b872a4/',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:aryoadiputro@gmail.com',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-portfolio">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's work{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm currently available for freelance work and full-time positions. If you have a project that needs coding or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
