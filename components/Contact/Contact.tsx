import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock } from "lucide-react";
import * as motion from "motion/react-client";

export default function ContactMain() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-9 md:py-8 mb-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1
              className="text-4xl md:text-6xl lg-text-7xl font-sans font-bold text-foreground
            leading-tight mb-6"
            >
              Get It
              <span className="text-primary italic"> Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-center">
              Have a question, collaboration idea, or just want to say hello? I
              love to hear from you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 ">
                    Send a Message
                  </h2>
                  <form
                    className="space-y-6"
                    action={"https://api.web3forms.com/submit"}
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="6e494d02-db02-47f0-83c5-da6c4fbf7624"
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-foreground mb-4"
                        >
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="first_name"
                          placeholder="Your first name"
                          required
                          className="focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-foreground mb-4"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="last_name"
                          placeholder="Your last name"
                          required
                          className="focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground mb-4">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                        className="focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground mb-4">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className="focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground mb-4">
                        Message
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me more about your project, question, or just say hello..."
                        required
                        rows={6}
                        className="focus:border-blue-400 focus:ring-blue-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-6">
                    Other Ways to Reach Me
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">
                          Email
                        </h3>
                        <p className="text-chart-1">hello@resonance.blog</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          I typically respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">
                          Location
                        </h3>
                        <p className="text-chart-1">San Francisco, CA</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available for remote collaboration worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">
                          Response Time
                        </h3>
                        <p className="text-chart-1">Usually within 24 hours</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Monday - Friday, 9 AM - 6 PM PST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-background rounded-2xl p-8 border-2">
                  <h3 className="text-lg font-medium text-foreground mb-4 ">
                    Frequently Asked
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Collaboration Opportunities
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        I am always open to discussing interesting projects,
                        speaking opportunities, and creative collaborations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Guest Writing
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Interested in contributing to Resonance? I love to hear
                        your ideas for thoughtful, well-crafted content.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Consulting
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Available for design and development consulting on
                        select projects. Lets discuss your needs.
                      </p>
                    </div>
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
