import Image from "next/image";
import * as motion from "motion/react-client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function AboutMain() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-8 md:py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col justify-center items-center"
          >
            <h1
              className="text-4xl md:text-6xl lg-text-7xl font-sans font-bold text-foreground
                  leading-tight mb-6"
            >
              About
              <span className="text-primary italic"> Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-center">
              A digital craftsman passionate about creating meaningful
              experiences through thoughtful design and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1.1 }}
              className="text-center lg:text-left"
            >
              <div className="space-y-8">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/sample.jpg"
                    alt="Profile photo"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="text-center lg:text-left"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Hello, I am Krishna
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I am digital craftsman who believes in the power of
                      thoughtful storytelling. With over 8 years of experience
                      in tech and design, I have dedicated my career to creating
                      content that not only informs but truly resonates with
                      people.
                    </p>
                    <p>
                      My journey began in software development, but I quickly
                      discovered my passion for the intersection of technology,
                      design, and human experience. This blog serves as my
                      canvas to explore these themes and share insights that
                      matter.
                    </p>
                    <p>
                      When I am not writing or designing, you will find me
                      experimenting with new technologies, reading about design
                      philosophy, or enjoying a good cup of coffee while
                      sketching ideas.
                    </p>
                  </div>
                </div>

                {/* Skills/Interests */}
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4 text-start">
                    What I Write About
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "User Experience",
                      "Web Development",
                      "Design Systems",
                      "Creative Process",
                      "Technology Trends",
                      "Digital Craftsmanship",
                    ].map((topic) => (
                      <Link
                        key={topic}
                        href={"/categories"}
                        className="px-4 py-2 border-2  text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300 rounded-full text-sm"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4 text-start">
                    Lets Connect
                  </h3>
                  <div className="flex space-x-4 items-center">
                    <Link
                      href="https://x.com/"
                      target="_blank"
                      className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <Twitter /> Twitter
                    </Link>
                    <Link
                      target="_blank"
                      href="https://linkedin.com/"
                      className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <Linkedin /> LinkedIn
                    </Link>
                    <Link
                      target="_blank"
                      href="https://github.com/"
                      className="text-muted-foreground hover:text-blue-400 transition-colors  flex items-center gap-1.5"
                    >
                      <Github /> GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
