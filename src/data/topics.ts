import type { TopicSlug } from "./registry";

export type Topic = {
  slug: TopicSlug;
  label: string;
  description: string;
  isDesignCore: boolean;
};

export const topics: Topic[] = [
  {
    slug: "accessibility",
    label: "Accessibility",
    description:
      "Inclusive UI patterns, WCAG audits, and remediation workflows.",
    isDesignCore: true,
  },
  {
    slug: "motion",
    label: "Motion",
    description: "Animation systems, transitions, and interaction timing.",
    isDesignCore: true,
  },
  {
    slug: "systems",
    label: "Systems",
    description:
      "Design systems, component architecture, and scalable UI foundations.",
    isDesignCore: true,
  },
  {
    slug: "visual",
    label: "Visual",
    description:
      "Visual polish, hierarchy, and intentional interface direction.",
    isDesignCore: true,
  },
  {
    slug: "interaction",
    label: "Interaction",
    description: "Microinteractions, feedback loops, and UX behavior patterns.",
    isDesignCore: true,
  },
  {
    slug: "performance",
    label: "Performance",
    description: "Rendering, bundle, and runtime optimization for smooth UIs.",
    isDesignCore: true,
  },
  {
    slug: "craft",
    label: "Craft",
    description:
      "Execution quality, spacing, polish, and production readiness.",
    isDesignCore: true,
  },
  {
    slug: "taste",
    label: "Taste",
    description:
      "Aesthetic judgment, style direction, and anti-generic UI quality.",
    isDesignCore: true,
  },
  {
    slug: "typography",
    label: "Typography",
    description: "Type systems, readability, and hierarchy refinement.",
    isDesignCore: true,
  },
  {
    slug: "color",
    label: "Color",
    description: "Color systems, contrast, and palette strategy.",
    isDesignCore: true,
  },
  {
    slug: "3d",
    label: "3D",
    description:
      "Spatial interfaces, real-time graphics, and immersive UI scenes.",
    isDesignCore: true,
  },
  {
    slug: "frontend",
    label: "Frontend",
    description: "General frontend implementation guidance and patterns.",
    isDesignCore: false,
  },
  {
    slug: "architecture",
    label: "Architecture",
    description:
      "Project structure, composition patterns, and scalable code design.",
    isDesignCore: false,
  },
  {
    slug: "testing",
    label: "Testing",
    description: "Reliability checks, QA flows, and regression prevention.",
    isDesignCore: false,
  },
  {
    slug: "tooling",
    label: "Tooling",
    description:
      "Build systems, CLI workflows, and developer productivity tools.",
    isDesignCore: false,
  },
  {
    slug: "video",
    label: "Video",
    description:
      "Video composition, storytelling, and timeline-based UI content.",
    isDesignCore: false,
  },
  {
    slug: "nextjs",
    label: "Next.js",
    description:
      "Next.js conventions, performance, caching, and upgrade guidance.",
    isDesignCore: false,
  },
  {
    slug: "nuxt",
    label: "Nuxt",
    description: "Nuxt workflows for Vue full-stack and SSR architectures.",
    isDesignCore: false,
  },
  {
    slug: "vue",
    label: "Vue",
    description:
      "Vue component patterns, reactivity, and ecosystem best practices.",
    isDesignCore: false,
  },
  {
    slug: "react-native",
    label: "React Native",
    description:
      "Mobile app performance, profiling, and React Native optimization.",
    isDesignCore: false,
  },
  {
    slug: "threejs",
    label: "Three.js",
    description:
      "Three.js workflows for rendering, materials, interaction, and shaders.",
    isDesignCore: false,
  },
  {
    slug: "remotion",
    label: "Remotion",
    description:
      "React-driven video generation, animation, and composition workflows.",
    isDesignCore: false,
  },
  {
    slug: "swiftui",
    label: "SwiftUI",
    description:
      "SwiftUI interface patterns, composition, and architecture guidance.",
    isDesignCore: false,
  },
  {
    slug: "frameworks",
    label: "Frameworks",
    description: "Framework-level practices across modern frontend stacks.",
    isDesignCore: false,
  },
];

export const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));

export const primaryDesignTopicSlugs: TopicSlug[] = [
  "accessibility",
  "motion",
  "systems",
  "visual",
  "interaction",
  "performance",
  "craft",
  "taste",
];
