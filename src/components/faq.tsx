import React, { useState, useRef, useEffect } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  Database,
  Zap,
  Shield,
  Rocket,
  Layers,
  Settings,
  CloudLightning,
} from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: React.ReactNode;
  gradient: string;
  items: FAQItem[];
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set<number>());
  const [visibleCategories, setVisibleCategories] = useState(new Set<number>());
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Enhanced Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(
              entry.target.getAttribute("data-category") || "0"
            );
            setVisibleCategories((prev) => new Set([...prev, categoryIndex]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px 0px" }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const faqData: FAQCategory[] = [
    {
      category: "Full-Stack Development & Architecture",
      icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-purple-500 to-indigo-600",
      items: [
        {
          question: "What full-stack technologies do you specialize in?",
          answer:
            "I specialize in the MERN/MEAN stack (MongoDB, Express.js, React/Angular, Node.js) and modern alternatives like Next.js with TypeScript, PostgreSQL, and cloud services. I&apos;m also proficient in Python (Django/Flask), PHP (Laravel), and Java (Spring Boot) for backend development, with expertise in both SQL and NoSQL databases.",
        },
        {
          question: "How do you architect scalable full-stack applications?",
          answer:
            "I design applications using microservices architecture, implement proper separation of concerns with clean architecture patterns, use containerization with Docker, and leverage cloud-native solutions on AWS, Azure, or GCP. I also implement proper caching strategies, database sharding, and load balancing for optimal scalability.",
        },
        {
          question:
            "Can you handle both frontend and backend development equally well?",
          answer:
            "Absolutely! I have deep expertise in both domains. On the frontend, I create responsive, interactive UIs with React, Vue, or Angular, implementing state management, routing, and modern UI/UX patterns. On the backend, I build robust APIs, handle authentication, manage databases, and ensure security and performance optimization.",
        },
        {
          question: "What's your approach to API design and integration?",
          answer:
            "I design RESTful and GraphQL APIs following industry standards, implement proper versioning, comprehensive documentation with Swagger/OpenAPI, and ensure backward compatibility. I also handle third-party integrations, webhooks, real-time communications with WebSockets, and implement proper error handling and rate limiting.",
        },
      ],
    },
    {
      category: "Database Design & Management",
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-emerald-500 to-teal-600",
      items: [
        {
          question: "What database technologies do you work with?",
          answer:
            "I work with both SQL databases (PostgreSQL, MySQL, SQLite) and NoSQL solutions (MongoDB, DynamoDB, Redis). I also have experience with specialized databases like Elasticsearch for search functionality, Neo4j for graph data, and time-series databases like InfluxDB for analytics applications.",
        },
        {
          question: "How do you ensure database performance and scalability?",
          answer:
            "I implement proper database indexing, query optimization, connection pooling, and caching strategies using Redis or Memcached. For scalability, I design database schemas with normalization principles, implement read replicas, database sharding, and use CDNs for static content delivery.",
        },
        {
          question: "Do you handle database migrations and data modeling?",
          answer:
            "Yes, I create comprehensive data models, design efficient database schemas, and implement automated migration scripts. I use tools like Prisma, Sequelize, or Mongoose for ORM/ODM, ensure data integrity with proper constraints, and handle complex relationships and transactions effectively.",
        },
      ],
    },
    {
      category: "DevOps & Cloud Infrastructure",
      icon: <CloudLightning className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-blue-500 to-cyan-600",
      items: [
        {
          question: "What cloud platforms and DevOps tools do you use?",
          answer:
            "I deploy on AWS, Azure, and Google Cloud Platform using services like EC2, Lambda, RDS, S3, and Kubernetes. For DevOps, I implement CI/CD pipelines with GitHub Actions, GitLab CI, or Jenkins, use Docker for containerization, and Terraform for infrastructure as code.",
        },
        {
          question: "How do you handle application deployment and monitoring?",
          answer:
            "I set up automated deployment pipelines with blue-green or rolling deployments, implement comprehensive monitoring with tools like DataDog, New Relic, or CloudWatch, and establish logging systems with ELK stack. I also configure auto-scaling, load balancers, and disaster recovery procedures.",
        },
        {
          question: "Can you implement serverless architectures?",
          answer:
            "Absolutely! I build serverless applications using AWS Lambda, Azure Functions, or Vercel Functions, implement event-driven architectures, and use serverless databases like DynamoDB or FaunaDB. This approach reduces costs, improves scalability, and simplifies maintenance for many use cases.",
        },
      ],
    },
    {
      category: "Security & Performance Optimization",
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-red-500 to-pink-600",
      items: [
        {
          question: "How do you ensure application security?",
          answer:
            "I implement comprehensive security measures including JWT authentication, OAuth 2.0, input validation and sanitization, SQL injection prevention, XSS protection, CSRF tokens, and secure headers. I also conduct security audits, implement rate limiting, and follow OWASP security guidelines.",
        },
        {
          question:
            "What performance optimization techniques do you implement?",
          answer:
            "I optimize applications through code splitting, lazy loading, image optimization, CDN implementation, database query optimization, caching strategies, and bundle size reduction. I also implement server-side rendering (SSR) or static site generation (SSG) when appropriate for SEO and performance benefits.",
        },
        {
          question: "How do you handle application monitoring and debugging?",
          answer:
            "I implement comprehensive logging with structured logs, error tracking with Sentry or Bugsnag, performance monitoring with APM tools, and real-time analytics. I also set up alerts for critical issues, implement health checks, and use profiling tools to identify bottlenecks.",
        },
      ],
    },
    {
      category: "Modern Development Practices",
      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-orange-500 to-yellow-600",
      items: [
        {
          question: "What development methodologies do you follow?",
          answer:
            "I follow Agile/Scrum methodologies with sprint planning, daily standups, and retrospectives. I practice Test-Driven Development (TDD), implement comprehensive testing with Jest, Cypress, and Playwright, and maintain high code coverage with automated testing pipelines.",
        },
        {
          question: "How do you ensure code quality and maintainability?",
          answer:
            "I write clean, documented code following SOLID principles, implement proper Git workflows with feature branches and pull requests, use code linters (ESLint, Prettier), conduct thorough code reviews, and maintain comprehensive documentation for APIs and system architecture.",
        },
        {
          question: "Do you work with modern development tools and workflows?",
          answer:
            "Yes, I use modern IDEs like VS Code with extensions, implement hot reloading for development, use package managers like npm/yarn, work with monorepos using tools like Nx or Lerna, and leverage AI-assisted development tools while maintaining code quality and security standards.",
        },
      ],
    },
    {
      category: "Project Management & Collaboration",
      icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: "from-violet-500 to-purple-600",
      items: [
        {
          question:
            "How do you manage full-stack projects from start to finish?",
          answer:
            "I start with requirements gathering and technical architecture planning, create detailed project roadmaps with milestones, provide regular progress updates with demos, and maintain transparent communication throughout development. I use tools like Jira, Linear, or Notion for project management.",
        },
        {
          question:
            "What&apos;s your process for handling project requirements and scope changes?",
          answer:
            "I begin with thorough requirement analysis and technical specifications, create user stories and acceptance criteria, and implement proper change management processes. I accommodate reasonable scope changes while maintaining timeline transparency and budget considerations through detailed documentation.",
        },
        {
          question: "Do you provide post-launch support and maintenance?",
          answer:
            "Yes, I offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, feature enhancements, server maintenance, and database optimization. I also provide documentation, training, and can establish long-term maintenance contracts based on your needs.",
        },
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Multi-Layer Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-r from-emerald-500 to-blue-400 rounded-full blur-2xl opacity-15 animate-pulse delay-500"></div>

        {/* Secondary accent orbs */}
        <div className="absolute top-1/2 right-1/6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/6 left-1/3 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full blur-2xl opacity-15 animate-pulse delay-1500"></div>
      </div>

      {/* Enhanced floating particles with different sizes and colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const colors = [
            "bg-purple-400",
            "bg-blue-400",
            "bg-cyan-400",
            "bg-emerald-400",
            "bg-pink-400",
            "bg-orange-400",
          ];
          const sizes = ["w-1 h-1", "w-1.5 h-1.5", "w-2 h-2"];
          return (
            <div
              key={i}
              className={`absolute ${colors[i % colors.length]} ${
                sizes[i % sizes.length]
              } rounded-full opacity-40 sm:opacity-60 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 6}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_24%,_rgba(255,255,255,0.05)_25%,_rgba(255,255,255,0.05)_26%,_transparent_27%,_transparent_74%,_rgba(255,255,255,0.05)_75%,_rgba(255,255,255,0.05)_76%,_transparent_77%),_linear-gradient(0deg,_transparent_24%,_rgba(255,255,255,0.05)_25%,_rgba(255,255,255,0.05)_26%,_transparent_27%,_transparent_74%,_rgba(255,255,255,0.05)_75%,_rgba(255,255,255,0.05)_76%,_transparent_77%)] bg-[length:100px_100px] animate-[moveGrid_20s_linear_infinite]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with stunning animations */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-2xl shadow-purple-500/30 animate-[bounceIn_1.5s_ease-out_0.5s_forwards] opacity-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
            <HelpCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white animate-pulse relative z-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4 animate-[slideInFromLeft_1s_ease-out_0.7s_forwards] opacity-0 leading-tight">
            Full-Stack Developer
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              FAQ
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto animate-[slideInFromRight_1s_ease-out_0.9s_forwards] opacity-0 px-2 leading-relaxed">
            Everything you need to know about my full-stack development
            expertise, from frontend to backend, DevOps to deployment.
            <span className="block sm:inline text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text hover:from-purple-300 hover:to-cyan-300 cursor-pointer sm:ml-1 transition-all duration-300 hover:scale-105 mt-2 sm:mt-0 font-semibold">
              Let&apos;s build the future together! 🚀
            </span>
          </p>
        </div>

        {/* FAQ Categories with enhanced animations and gradients */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {faqData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => {
                categoryRefs.current[categoryIndex] = el;
              }}
              data-category={categoryIndex.toString()}
              className={`group transition-all duration-1000 ${
                visibleCategories.has(categoryIndex)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Enhanced Category Header with gradient backgrounds */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 group-hover:scale-[1.01] sm:group-hover:scale-[1.02] transition-transform duration-300">
                <div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-2 sm:group-hover:rotate-6 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
                  <div className="group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300 flex-shrink">
                  {category.category}
                </h3>
                <div
                  className={`flex-1 h-0.5 bg-gradient-to-r ${category.gradient} opacity-30 sm:opacity-40 md:opacity-50 ml-2 sm:ml-3 group-hover:opacity-70 transition-opacity duration-300`}
                ></div>
              </div>

              {/* FAQ Items with enhanced styling */}
              <div className="grid gap-4 sm:gap-5">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.has(globalIndex);

                  return (
                    <div
                      key={itemIndex}
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-[1.01] sm:hover:scale-[1.02] relative group/item"
                      style={{
                        animationDelay: `${
                          categoryIndex * 200 + itemIndex * 100
                        }ms`,
                      }}
                    >
                      {/* Gradient accent border */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 pointer-events-none`}
                      ></div>

                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="relative w-full px-5 sm:px-6 md:px-7 py-4 sm:py-5 md:py-6 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4"
                      >
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-purple-200 group-hover/item:bg-clip-text transition-all duration-300 leading-relaxed flex-1 pr-2">
                          {item.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full transition-all duration-300 mt-0.5 sm:mt-0 ${
                            isOpen
                              ? `bg-gradient-to-r ${category.gradient} shadow-lg transform rotate-180 scale-110`
                              : `bg-white/10 border border-white/20 group-hover/item:bg-gradient-to-r group-hover/item:${category.gradient} group-hover/item:border-transparent group-hover/item:shadow-lg`
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                          ) : (
                            <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                          )}
                        </div>
                      </button>

                      {/* Enhanced Answer Content with gradient accent */}
                      <div
                        className={`px-5 sm:px-6 md:px-7 transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "max-h-[500px] pb-4 sm:pb-5 md:pb-6 opacity-100 transform translate-y-0"
                            : "max-h-0 pb-0 opacity-0 overflow-hidden transform -translate-y-2"
                        }`}
                      >
                        <div
                          className={`border-t border-gradient-to-r ${category.gradient} opacity-20 pt-4 sm:pt-5 relative`}
                        >
                          <div
                            className={`absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r ${category.gradient} opacity-60`}
                          ></div>
                          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed animate-[slideInFromBottom_0.5s_ease-out]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action with multiple gradient layers */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="relative bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-500 overflow-hidden group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-60 delay-1000"></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60 delay-500"></div>

            <div className="relative z-10">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-purple-400 mx-auto mb-4 sm:mb-5 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text mb-3 sm:mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg sm:max-w-xl mx-auto px-2 leading-relaxed">
                Let&apos;s discuss your full-stack development needs and bring
                your vision to life with cutting-edge technology and best
                practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
                <Link href="/Contact">
                  <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white text-sm sm:text-base font-bold rounded-xl hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transform relative overflow-hidden group/btn">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">
                      Let&apos;s Build Together
                    </span>
                  </button>
                </Link>
                <Link href="/portfolios">
                  <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-bold rounded-xl border border-white/30 hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn2">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">View My Work</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced custom keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-15deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.15) rotate(8deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes moveGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
