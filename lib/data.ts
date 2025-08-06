export const featuredPosts = [
  {
    id: "1",
    title: "The Art of Minimalist Design",
    excerpt:
      "Exploring how less can truly be more in the digital age, and why constraints breed creativity.",
    category: "Design",
    date: "Dec 15, 2024",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    paragraph:
      "Minimalist design is not merely an aesthetic choice but a functional philosophy grounded in clarity and user intention. By reducing visual noise and focusing on essential components, designers improve usability, cognitive load, and system accessibility. Leveraging whitespace, grid systems, and consistent typography, minimalist interfaces create streamlined user experiences that facilitate intuitive navigation. This design methodology aligns well with modern digital principles such as mobile-first design and progressive enhancement.",
  },
  {
    id: 2,
    title: "Building Sustainable Tech Solutions",
    excerpt:
      "A deep dive into creating technology that doesn't just work, but works responsibly for future generations.",
    category: "Tech",
    date: "Dec 12, 2024",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    paragraph:
      "Sustainable tech goes beyond greenwashing—it requires deliberate engineering and lifecycle thinking. From leveraging renewable energy in data centers to optimizing code for energy efficiency on low-power devices, developers must integrate eco-conscious decisions into every layer of the stack. Practices such as green cloud computing, carbon-aware deployment scheduling, modular hardware architecture, and responsible e-waste management all contribute to reducing tech’s environmental footprint. The future of technology depends on scalability without sacrificing sustainability.",
  },
  {
    id: 3,
    title: "The Psychology of Creative Flow",
    excerpt:
      "Understanding the mental states that unlock our most innovative thinking and productive creativity.",
    category: "Creativity",
    date: "Dec 10, 2024",
    image:
      "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600",
    paragraph:
      "Creative flow, often referred to as the 'zone,' is a psychological state of peak performance characterized by deep focus, intrinsic motivation, and effortless execution. Neurologically, it involves the transient hypofrontality of the prefrontal cortex, allowing the brain to suspend inner criticism and linear thought in favor of divergent thinking and pattern recognition. Techniques such as time-blocking, environment priming, and mindfulness training have shown to improve one’s ability to enter flow states more consistently. For creatives, understanding and engineering flow is not optional—it's essential for sustained innovation and output.",
  },
  {
    id: 4,
    title: "Future of Remote Collaboration",
    excerpt:
      "How distributed teams are reshaping the way we work, communicate, and create together.",
    category: "Tech",
    date: "Dec 8, 2024",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
    paragraph:
      "Remote collaboration is now a cornerstone of modern work culture, driven by advancements in cloud-native tools, asynchronous workflows, and cross-platform integrations. Real-time co-editing, version-controlled documentation, and persistent team spaces are just a few examples of how tools like Notion, Figma, and Slack are redefining team dynamics. However, the human aspect—maintaining psychological safety, transparent communication, and shared accountability—is equally crucial. Companies that invest in virtual onboarding, digital rituals, and hybrid team alignment frameworks will lead the next era of distributed innovation.",
  },
];

export const categories = [
  {
    name: "Tech",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
    count: 24,
    slug: "#tech"
  },
  {
    name: "Design",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
    count: 18,
    slug: "#design"
  },
  {
    name: "Creativity",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    count: 15,
    slug: "#creativity"
  },
  {
    name: "Innovation",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
    count: 12,
    slug: "#innovation"
  },
  {
    name: "Digital",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    count: 20,
    slug: "#digital"
  },
  {
    name: "Lifestyle",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    count: 8,
    slug: "#lifestyle"
  },
];

export const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
];
