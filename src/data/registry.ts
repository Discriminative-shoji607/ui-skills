export type RegistrySkill = {
  slug: string;
  pathSlug: string;
  sourceKey: string;
  sourceLabel: string;
  user: string;
  repo: string;
  rawUrl: string;
  githubUrl: string;
  name: string;
  description: string;
  topics?: TopicSlug[];
};

export type TopicSlug =
  // Design engineering core
  | "accessibility"
  | "motion"
  | "systems"
  | "visual"
  | "interaction"
  | "performance"
  | "craft"
  | "taste"
  | "typography"
  | "color"
  | "3d"
  // Broader frontend
  | "frontend"
  | "architecture"
  | "frameworks"
  | "testing"
  | "debugging"
  | "code-quality"
  | "tooling"
  | "video"
  // Framework-specific topics
  | "nextjs"
  | "nuxt"
  | "vue"
  | "react-native"
  | "threejs"
  | "remotion"
  | "swiftui";

type RegistrySourceSkill = Omit<
  RegistrySkill,
  "pathSlug" | "sourceKey" | "sourceLabel"
>;

const registrySource: RegistrySourceSkill[] = [
  {
    slug: "ui-skills-root",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/ui-skills-root/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/ui-skills-root/SKILL.md",
    name: "ui-skills-root",
    topics: ["systems", "tooling", "architecture"],
    description:
      "Use when the user needs UI help and you must route by topic, stack, and intent to the smallest useful set of UI skills.",
  },
  {
    slug: "baseline-ui",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/baseline-ui/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/baseline-ui/SKILL.md",
    name: "baseline-ui",
    topics: ["systems", "visual", "craft"],
    description:
      "Quickly deslop UI code by fixing spacing, hierarchy, typography, and small layout issues. Use when the interface needs a fast cleanup or polish pass.",
  },
  {
    slug: "design-first-ui-prompting",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/design-first-ui-prompting/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/design-first-ui-prompting/SKILL.md",
    name: "design-first-ui-prompting",
    topics: ["visual", "systems", "frontend"],
    description:
      "Use when you want to turn a product goal into a design-first UI prompt with clear layout, type, color, and constraint choices.",
  },
  {
    slug: "design-taste-frontend",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/design-taste-frontend/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/design-taste-frontend/SKILL.md",
    name: "design-taste-frontend",
    topics: ["visual", "taste", "systems"],
    description:
      "Use when the UI needs stronger taste, restraint, hierarchy, and visual coherence without changing the product shape.",
  },
  {
    slug: "full-output-enforcement",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/full-output-enforcement/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/full-output-enforcement/SKILL.md",
    name: "full-output-enforcement",
    topics: ["systems", "tooling", "frontend"],
    description:
      "Use when you need the agent to deliver the complete requested output instead of a partial or truncated result.",
  },
  {
    slug: "gpt-taste",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/gpt-taste/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/gpt-taste/SKILL.md",
    name: "gpt-taste",
    topics: ["taste", "visual", "frontend"],
    description:
      "Use when you want stronger aesthetic judgment, visual refinement, and better-looking interface decisions from the model.",
  },
  {
    slug: "high-end-visual-design",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/high-end-visual-design/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/high-end-visual-design/SKILL.md",
    name: "high-end-visual-design",
    topics: ["visual", "systems", "craft"],
    description:
      "Use when the interface needs a premium, high-polish visual treatment with disciplined spacing and hierarchy.",
  },
  {
    slug: "image-to-code",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/image-to-code/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/image-to-code/SKILL.md",
    name: "image-to-code",
    topics: ["frontend", "visual", "tooling"],
    description:
      "Use when you have a visual reference and want a practical workflow to translate it into implementation details.",
  },
  {
    slug: "industrial-brutalist-ui",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/industrial-brutalist-ui/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/industrial-brutalist-ui/SKILL.md",
    name: "industrial-brutalist-ui",
    topics: ["visual", "systems", "craft"],
    description:
      "Use when you want a harder-edged, brutalist UI direction with strong structure and visual tension.",
  },
  {
    slug: "minimalist-ui",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/minimalist-ui/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/minimalist-ui/SKILL.md",
    name: "minimalist-ui",
    topics: ["visual", "systems", "craft"],
    description:
      "Use when you want a restrained UI direction with fewer elements, cleaner hierarchy, and more negative space.",
  },
  {
    slug: "redesign-existing-projects",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/redesign-existing-projects/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/redesign-existing-projects/SKILL.md",
    name: "redesign-existing-projects",
    topics: ["visual", "frontend", "systems"],
    description:
      "Use when you need to improve an existing product interface without throwing away the underlying product structure.",
  },
  {
    slug: "seo-audit",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/seo-audit/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/seo-audit/SKILL.md",
    name: "seo-audit",
    topics: ["frontend", "architecture", "tooling"],
    description:
      "Use when you need to review a page for metadata, headings, structured data, and search visibility basics.",
  },
  {
    slug: "stitch-design-taste",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/stitch-design-taste/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/stitch-design-taste/SKILL.md",
    name: "stitch-design-taste",
    topics: ["visual", "taste", "systems"],
    description:
      "Use when you want to combine multiple references into one coherent visual direction without losing consistency.",
  },
  {
    slug: "swiftui-pro",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/ui/swiftui-pro/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/ui/swiftui-pro/SKILL.md",
    name: "swiftui-pro",
    topics: ["swiftui", "frontend", "systems"],
    description:
      "Use when building or polishing SwiftUI interfaces with production-minded composition and layout discipline.",
  },
  {
    slug: "landing-page",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/landing-page/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/landing-page/SKILL.md",
    name: "landing-page",
    topics: ["visual", "frontend", "interaction"],
    description:
      "Use when designing or implementing a landing page with strong hierarchy, conversion flow, and visual pacing.",
  },
  {
    slug: "pricing-page",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/pricing-page/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/pricing-page/SKILL.md",
    name: "pricing-page",
    topics: ["visual", "frontend", "interaction"],
    description:
      "Use when building a pricing page with clear plan comparison, emphasis, and conversion-oriented layout.",
  },
  {
    slug: "tailwindcss",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/tailwindcss/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/tailwindcss/SKILL.md",
    name: "tailwindcss",
    topics: ["frontend", "systems", "tooling"],
    description:
      "Use when you are implementing UI with Tailwind and want reusable, practical utility-first patterns.",
  },
  {
    slug: "animation-systems",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/animation-systems/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/animation-systems/SKILL.md",
    name: "animation-systems",
    topics: ["motion", "systems", "frontend"],
    description:
      "Use when building a coherent animation system instead of one-off motion tweaks.",
  },
  {
    slug: "animation-on-scroll",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/animation-on-scroll/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/animation-on-scroll/SKILL.md",
    name: "animation-on-scroll",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Use when you need scroll-driven motion that feels intentional instead of noisy or overdone.",
  },
  {
    slug: "gsap",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/gsap/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/gsap/SKILL.md",
    name: "gsap",
    topics: ["motion", "frontend", "interaction"],
    description:
      "Use when implementing motion with GSAP and you want practical animation structure and sequencing guidance.",
  },
  {
    slug: "gsap-scrolltrigger-storytelling",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/gsap-scrolltrigger-storytelling/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/gsap-scrolltrigger-storytelling/SKILL.md",
    name: "gsap-scrolltrigger-storytelling",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Use when building scroll-based storytelling sections with GSAP ScrollTrigger.",
  },
  {
    slug: "threejs",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/threejs/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/threejs/SKILL.md",
    name: "threejs",
    topics: ["threejs", "motion", "frontend"],
    description:
      "Use when building 3D scenes, interactions, or WebGL-backed interface moments in Three.js.",
  },
  {
    slug: "cobejs",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/cobejs/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/cobejs/SKILL.md",
    name: "cobejs",
    topics: ["3d", "visual", "frontend"],
    description:
      "Use when building lightweight animated globe or orb visuals with Cobe.",
  },
  {
    slug: "matterjs",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/matterjs/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/matterjs/SKILL.md",
    name: "matterjs",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Use when building physics-driven interactions and layout behaviors with Matter.js.",
  },
  {
    slug: "progressive-blur",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/progressive-blur/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/progressive-blur/SKILL.md",
    name: "progressive-blur",
    topics: ["visual", "motion", "frontend"],
    description:
      "Use when applying blur transitions or layered depth effects that need to feel smooth and controlled.",
  },
  {
    slug: "beautiful-shadows",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/beautiful-shadows/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/beautiful-shadows/SKILL.md",
    name: "beautiful-shadows",
    topics: ["visual", "craft", "frontend"],
    description:
      "Use when a UI needs better depth, elevation, and shadow treatment without looking muddy.",
  },
  {
    slug: "company-logos",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/company-logos/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/company-logos/SKILL.md",
    name: "company-logos",
    topics: ["systems", "visual", "frontend"],
    description:
      "Use when laying out logos, trust rows, or brand collections in a clean and balanced way.",
  },
  {
    slug: "container-lines",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/container-lines/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/container-lines/SKILL.md",
    name: "container-lines",
    topics: ["systems", "visual", "frontend"],
    description:
      "Use when using borders and container structure as part of the visual system.",
  },
  {
    slug: "masked-reveal",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/masked-reveal/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/masked-reveal/SKILL.md",
    name: "masked-reveal",
    topics: ["motion", "visual", "frontend"],
    description:
      "Use when revealing content with masked motion, clipped transitions, or layered entrances.",
  },
  {
    slug: "marquee-loop",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/marquee-loop/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/marquee-loop/SKILL.md",
    name: "marquee-loop",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Use when building looping marquees that need steady rhythm, spacing, and performance awareness.",
  },
  {
    slug: "webgl-landing-steering",
    user: "MengTo",
    repo: "Skills",
    rawUrl:
      "https://raw.githubusercontent.com/MengTo/Skills/main/agent-skills/web-design/webgl-landing-steering/SKILL.md",
    githubUrl:
      "https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/webgl-landing-steering/SKILL.md",
    name: "webgl-landing-steering",
    topics: ["threejs", "visual", "frontend"],
    description:
      "Use when steering a landing page around a WebGL centerpiece or hero experience.",
  },
  {
    slug: "fixing-accessibility",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-accessibility/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/fixing-accessibility/SKILL.md",
    name: "fixing-accessibility",
    topics: ["accessibility", "testing", "frontend"],
    description:
      "Audit and fix HTML accessibility issues including ARIA labels, keyboard navigation, focus management, color contrast, and form errors. Use when adding interactive controls, forms, dialogs, or reviewing WCAG compliance.",
  },
  {
    slug: "fixing-metadata",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-metadata/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md",
    name: "fixing-metadata",
    topics: ["architecture", "frontend", "tooling"],
    description:
      "Audit and fix page metadata including titles, meta descriptions, Open Graph, Twitter cards, canonical URLs, and JSON-LD structured data. Use when shipping new pages or fixing SEO and social preview issues.",
  },
  {
    slug: "fixing-motion-performance",
    user: "ibelick",
    repo: "ui-skills",
    rawUrl:
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/fixing-motion-performance/SKILL.md",
    githubUrl:
      "https://github.com/ibelick/ui-skills/blob/main/skills/fixing-motion-performance/SKILL.md",
    name: "fixing-motion-performance",
    topics: ["motion", "performance", "frontend"],
    description:
      "Audit and fix animation performance issues including layout thrashing, compositor properties, scroll-linked motion, and blur effects. Use when animations stutter, transitions jank, or reviewing CSS/JS animation performance.",
  },
  {
    slug: "frontend-design",
    user: "anthropics",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md",
    githubUrl:
      "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
    name: "frontend-design",
    topics: ["visual", "systems", "frontend"],
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code and UI design that avoids generic AI aesthetics.",
  },
  {
    slug: "remotion-best-practices",
    user: "remotion-dev",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/remotion-dev/skills/main/skills/remotion/SKILL.md",
    githubUrl:
      "https://github.com/remotion-dev/skills/blob/main/skills/remotion/SKILL.md",
    name: "remotion-best-practices",
    topics: ["video", "motion", "remotion"],
    description:
      "Domain-specific knowledge base for building videos with Remotion and React.",
  },
  {
    slug: "create-adaptable-composable",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/create-adaptable-composable/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/create-adaptable-composable/SKILL.md",
    name: "create-adaptable-composable",
    topics: ["vue", "frontend", "tooling"],
    description:
      "Create library-grade Vue composables that support plain values, refs, and getters with predictable reactivity.",
  },
  {
    slug: "vue-best-practices",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-best-practices/SKILL.md",
    name: "vue-best-practices",
    topics: ["vue", "frontend", "performance"],
    description:
      "Core Vue development best practices for component architecture, reactivity, and maintainable code.",
  },
  {
    slug: "vue-debug-guides",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-debug-guides/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-debug-guides/SKILL.md",
    name: "vue-debug-guides",
    topics: ["vue", "testing", "tooling"],
    description:
      "Practical debugging workflows for diagnosing and fixing Vue reactivity, rendering, and state issues.",
  },
  {
    slug: "vue-jsx-best-practices",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-jsx-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-jsx-best-practices/SKILL.md",
    name: "vue-jsx-best-practices",
    topics: ["vue", "frontend", "tooling"],
    description:
      "Guidance for writing robust, type-safe, and readable Vue components using JSX.",
  },
  {
    slug: "vue-options-api-best-practices",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-options-api-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-options-api-best-practices/SKILL.md",
    name: "vue-options-api-best-practices",
    topics: ["vue", "frontend", "tooling"],
    description:
      "Best practices for structuring and scaling Vue applications built with the Options API.",
  },
  {
    slug: "vue-pinia-best-practices",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-pinia-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-pinia-best-practices/SKILL.md",
    name: "vue-pinia-best-practices",
    topics: ["vue", "systems", "frontend"],
    description:
      "Patterns for clean, scalable state management in Vue apps using Pinia stores.",
  },
  {
    slug: "vue-router-best-practices",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-router-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-router-best-practices/SKILL.md",
    name: "vue-router-best-practices",
    topics: ["vue", "interaction", "frontend"],
    description:
      "Routing architecture and navigation patterns for maintainable Vue Router applications.",
  },
  {
    slug: "vue-testing-best-practices",
    user: "vuejs-ai",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/vuejs-ai/skills/main/skills/vue-testing-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vuejs-ai/skills/blob/main/skills/vue-testing-best-practices/SKILL.md",
    name: "vue-testing-best-practices",
    topics: ["vue", "testing", "frontend"],
    description:
      "Testing strategies for Vue applications, including component tests, integration tests, and reliability patterns.",
  },
  {
    slug: "web-design-guidelines",
    user: "vercel-labs",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/web-design-guidelines/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md",
    name: "web-design-guidelines",
    topics: ["visual", "accessibility", "frontend"],
    description:
      "Review UI code for Web Interface Guidelines compliance. Audit design, accessibility, and UX against Vercel's best practices.",
  },
  {
    slug: "next-best-practices",
    user: "vercel-labs",
    repo: "next-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/next-skills/main/skills/next-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/next-skills/blob/main/skills/next-best-practices/SKILL.md",
    name: "next-best-practices",
    topics: ["nextjs", "frontend", "performance"],
    description:
      "Next.js best practices: file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, and optimization.",
  },
  {
    slug: "next-cache-components",
    user: "vercel-labs",
    repo: "next-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/next-skills/main/skills/next-cache-components/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/next-skills/blob/main/skills/next-cache-components/SKILL.md",
    name: "next-cache-components",
    topics: ["nextjs", "performance", "frontend"],
    description:
      "Next.js 16 Cache Components guidance covering PPR, use cache directive, cacheLife, cacheTag, and updateTag.",
  },
  {
    slug: "next-upgrade",
    user: "vercel-labs",
    repo: "next-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/next-skills/main/skills/next-upgrade/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/next-skills/blob/main/skills/next-upgrade/SKILL.md",
    name: "next-upgrade",
    topics: ["nextjs", "tooling", "frontend"],
    description:
      "Upgrade Next.js to the latest version using official migration guides and codemods.",
  },
  {
    slug: "agent-browser",
    user: "vercel-labs",
    repo: "agent-browser",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/agent-browser/main/skills/agent-browser/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/agent-browser/blob/main/skills/agent-browser/SKILL.md",
    name: "agent-browser",
    topics: ["testing", "tooling", "frontend"],
    description:
      "Browser automation CLI for AI agents for navigation, form actions, extraction, screenshots, QA, and app testing.",
  },
  {
    slug: "frontend-ui-engineering",
    user: "addyosmani",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/addyosmani/agent-skills/main/skills/frontend-ui-engineering/SKILL.md",
    githubUrl:
      "https://github.com/addyosmani/agent-skills/blob/main/skills/frontend-ui-engineering/SKILL.md",
    name: "frontend-ui-engineering",
    topics: ["frontend", "systems", "accessibility"],
    description:
      "Frontend UI engineering guidance covering component architecture, responsive design, accessibility, and maintainable implementation patterns.",
  },
  {
    slug: "react-best-practices",
    user: "vercel-labs",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/react-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md",
    name: "vercel-react-best-practices",
    topics: ["frontend", "performance", "systems"],
    description:
      "Vercel React best practices for rendering performance, bundle efficiency, and scalable component architecture.",
  },
  {
    slug: "react-router-framework-mode",
    user: "remix-run",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/remix-run/agent-skills/main/skills/react-router-framework-mode/SKILL.md",
    githubUrl:
      "https://github.com/remix-run/agent-skills/blob/main/skills/react-router-framework-mode/SKILL.md",
    name: "react-router-framework-mode",
    topics: ["frontend", "architecture", "interaction"],
    description:
      "React Router framework-mode patterns for loaders, actions, middleware, route modules, and full-stack rendering flows.",
  },
  {
    slug: "svelte-code-writer",
    user: "sveltejs",
    repo: "ai-tools",
    rawUrl:
      "https://raw.githubusercontent.com/sveltejs/ai-tools/main/plugins/claude/svelte/skills/svelte-code-writer/SKILL.md",
    githubUrl:
      "https://github.com/sveltejs/ai-tools/blob/main/plugins/claude/svelte/skills/svelte-code-writer/SKILL.md",
    name: "svelte-code-writer",
    topics: ["frameworks", "frontend", "tooling"],
    description:
      "Official Svelte code-writing skill focused on modern Svelte patterns, component composition, and production-ready implementations.",
  },
  {
    slug: "playwright-cli",
    user: "microsoft",
    repo: "playwright-cli",
    rawUrl:
      "https://raw.githubusercontent.com/microsoft/playwright-cli/main/skills/playwright-cli/SKILL.md",
    githubUrl:
      "https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md",
    name: "playwright-cli",
    topics: ["testing", "tooling", "frontend"],
    description:
      "Official Playwright CLI skill for browser automation, test generation, tracing, and session-driven end-to-end testing workflows.",
  },
  {
    slug: "web-quality-audit",
    user: "addyosmani",
    repo: "web-quality-skills",
    rawUrl:
      "https://raw.githubusercontent.com/addyosmani/web-quality-skills/main/skills/web-quality-audit/SKILL.md",
    githubUrl:
      "https://github.com/addyosmani/web-quality-skills/blob/main/skills/web-quality-audit/SKILL.md",
    name: "web-quality-audit",
    topics: ["performance", "accessibility", "testing"],
    description:
      "Web quality auditing skill for Lighthouse-style analysis across performance, accessibility, best practices, and SEO signals.",
  },
  {
    slug: "swiss-design",
    user: "zeke",
    repo: "swiss-design-skill",
    rawUrl:
      "https://raw.githubusercontent.com/zeke/swiss-design-skill/main/swiss-design/SKILL.md",
    githubUrl:
      "https://github.com/zeke/swiss-design-skill/blob/main/swiss-design/SKILL.md",
    name: "swiss-design",
    topics: ["visual", "typography", "systems"],
    description:
      "Swiss design system skill focused on grid discipline, typography hierarchy, and clean editorial interface composition.",
  },
  {
    slug: "react-native-best-practices",
    user: "callstackincubator",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/callstackincubator/agent-skills/main/skills/react-native-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/callstackincubator/agent-skills/blob/main/skills/react-native-best-practices/SKILL.md",
    name: "react-native-best-practices",
    topics: ["react-native", "performance", "frontend"],
    description:
      "React Native performance optimization guidelines for FPS, TTI, bundle size, memory leaks, re-renders, and animations.",
  },
  {
    slug: "threejs-animation",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-animation/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-animation/SKILL.md",
    name: "threejs-animation",
    topics: ["threejs", "motion", "frontend"],
    description:
      "Three.js animation guidance for keyframes, skeletal animation, morph targets, and animation blending.",
  },
  {
    slug: "threejs-fundamentals",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-fundamentals/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-fundamentals/SKILL.md",
    name: "threejs-fundamentals",
    topics: ["threejs", "interaction", "frontend"],
    description:
      "Three.js scene setup guidance for cameras, renderer configuration, object hierarchy, and transforms.",
  },
  {
    slug: "threejs-geometry",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-geometry/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-geometry/SKILL.md",
    name: "threejs-geometry",
    topics: ["threejs", "performance", "frontend"],
    description:
      "Three.js geometry patterns for built-in shapes, BufferGeometry, custom meshes, and instancing.",
  },
  {
    slug: "threejs-interaction",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-interaction/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-interaction/SKILL.md",
    name: "threejs-interaction",
    topics: ["threejs", "interaction", "frontend"],
    description:
      "Three.js interaction patterns for raycasting, controls, pointer input, and object selection.",
  },
  {
    slug: "threejs-lighting",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-lighting/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-lighting/SKILL.md",
    name: "threejs-lighting",
    topics: ["threejs", "visual", "frontend"],
    description:
      "Three.js lighting guidance for light types, shadows, environment lighting, and performance tuning.",
  },
  {
    slug: "threejs-loaders",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-loaders/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-loaders/SKILL.md",
    name: "threejs-loaders",
    topics: ["threejs", "tooling", "performance"],
    description:
      "Three.js asset loading patterns for GLTF, textures, HDR assets, async loading, and progress handling.",
  },
  {
    slug: "threejs-materials",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-materials/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-materials/SKILL.md",
    name: "threejs-materials",
    topics: ["threejs", "visual", "frontend"],
    description:
      "Three.js material guidance for PBR, classic materials, shader materials, and material optimization.",
  },
  {
    slug: "threejs-postprocessing",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-postprocessing/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-postprocessing/SKILL.md",
    name: "threejs-postprocessing",
    topics: ["threejs", "visual", "performance"],
    description:
      "Three.js post-processing techniques with EffectComposer, bloom, depth of field, and screen-space effects.",
  },
  {
    slug: "threejs-shaders",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-shaders/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-shaders/SKILL.md",
    name: "threejs-shaders",
    topics: ["threejs", "visual", "frontend"],
    description:
      "Three.js shader guidance for GLSL, ShaderMaterial, uniforms, and custom vertex and fragment effects.",
  },
  {
    slug: "threejs-textures",
    user: "cloudai-x",
    repo: "threejs-skills",
    rawUrl:
      "https://raw.githubusercontent.com/CloudAI-X/threejs-skills/main/skills/threejs-textures/SKILL.md",
    githubUrl:
      "https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-textures/SKILL.md",
    name: "threejs-textures",
    topics: ["threejs", "visual", "frontend"],
    description:
      "Three.js texture workflows for maps, UV mapping, environment maps, and texture configuration.",
  },
  {
    slug: "ui-ux-pro-max",
    user: "nextlevelbuilder",
    repo: "ui-ux-pro-max-skill",
    rawUrl:
      "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-ux-pro-max/SKILL.md",
    githubUrl:
      "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md",
    name: "ui-ux-pro-max",
    topics: ["visual", "systems", "frontend"],
    description:
      "Comprehensive UI/UX design intelligence with 50+ styles, 97 palettes, and 9 technology stacks for building professional interfaces.",
  },
  {
    slug: "interaction-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/interaction-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/interaction-design/SKILL.md",
    name: "interaction-design",
    topics: ["interaction", "motion", "visual"],
    description:
      "Design and implement microinteractions, motion design, transitions, and user feedback patterns for delightful user experiences.",
  },
  {
    slug: "swiftui-ui-patterns",
    user: "dimillian",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/dimillian/skills/main/swiftui-ui-patterns/SKILL.md",
    githubUrl:
      "https://github.com/dimillian/skills/blob/main/swiftui-ui-patterns/SKILL.md",
    name: "swiftui-ui-patterns",
    topics: ["swiftui", "interaction", "systems"],
    description:
      "Best practices and example-driven guidance for building SwiftUI views and components. Includes tab architecture and screen composition.",
  },
  {
    slug: "interface-design",
    user: "Dammyjay93",
    repo: "interface-design",
    rawUrl:
      "https://raw.githubusercontent.com/Dammyjay93/interface-design/main/.claude/skills/interface-design/SKILL.md",
    githubUrl:
      "https://github.com/Dammyjay93/interface-design/blob/main/.claude/skills/interface-design/SKILL.md",
    name: "interface-design",
    topics: ["visual", "systems", "interaction"],
    description:
      "Specialized skill for interface design: dashboards, admin panels, and SaaS apps. Focused on craft and consistency.",
  },
  {
    slug: "wcag-audit-patterns",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md",
    name: "wcag-audit-patterns",
    topics: ["accessibility", "testing", "frontend"],
    description:
      "Conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for accessibility, fixing WCAG violations, or implementing accessible design patterns.",
  },
  {
    slug: "canvas-design",
    user: "anthropics",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/anthropics/skills/main/skills/canvas-design/SKILL.md",
    githubUrl:
      "https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md",
    name: "canvas-design",
    topics: ["visual", "interaction", "frontend"],
    description:
      "Create original visual designs and art on digital canvases using design philosophy, focusing on form, space, and color.",
  },
  {
    slug: "antfu",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/antfu/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/antfu/SKILL.md",
    name: "antfu",
    topics: ["tooling", "frontend", "performance"],
    description:
      "Anthony Fu's opinionated tooling and conventions for JavaScript/TypeScript projects.",
  },
  {
    slug: "nuxt",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/nuxt/SKILL.md",
    githubUrl: "https://github.com/antfu/skills/blob/main/skills/nuxt/SKILL.md",
    name: "nuxt",
    topics: ["nuxt", "frontend", "performance"],
    description:
      "Nuxt full-stack Vue framework guidance for SSR, auto-imports, file-based routing, and server routes.",
  },
  {
    slug: "pinia",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/pinia/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/pinia/SKILL.md",
    name: "pinia",
    topics: ["vue", "systems", "frontend"],
    description:
      "Pinia state management best practices for type-safe Vue stores, getters, and actions.",
  },
  {
    slug: "pnpm",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/pnpm/SKILL.md",
    githubUrl: "https://github.com/antfu/skills/blob/main/skills/pnpm/SKILL.md",
    name: "pnpm",
    topics: ["tooling", "frontend", "performance"],
    description:
      "pnpm package manager guidance for strict dependency resolution, workspaces, catalogs, patches, and overrides.",
  },
  {
    slug: "slidev",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/slidev/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/slidev/SKILL.md",
    name: "slidev",
    topics: ["video", "visual", "frontend"],
    description:
      "Create developer slide decks with Slidev using Markdown, Vue components, code highlighting, and animations.",
  },
  {
    slug: "tsdown",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/tsdown/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/tsdown/SKILL.md",
    name: "tsdown",
    topics: ["tooling", "performance", "frontend"],
    description:
      "Bundle TypeScript and JavaScript libraries with tsdown, including declarations and multi-format builds.",
  },
  {
    slug: "turborepo",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/turborepo/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/turborepo/SKILL.md",
    name: "turborepo",
    topics: ["tooling", "performance", "frontend"],
    description:
      "Turborepo monorepo build system guidance for pipelines, caching, filtering, CI, and package boundaries.",
  },
  {
    slug: "unocss",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/unocss/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/unocss/SKILL.md",
    name: "unocss",
    topics: ["tooling", "visual", "frontend"],
    description:
      "UnoCSS atomic CSS engine guidance for rules, shortcuts, and presets like Wind, Icons, and Attributify.",
  },
  {
    slug: "vite",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vite/SKILL.md",
    githubUrl: "https://github.com/antfu/skills/blob/main/skills/vite/SKILL.md",
    name: "vite",
    topics: ["tooling", "performance", "frontend"],
    description:
      "Vite configuration and plugin guidance, including SSR and Vite 8 Rolldown migration patterns.",
  },
  {
    slug: "vitepress",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vitepress/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/vitepress/SKILL.md",
    name: "vitepress",
    topics: ["nuxt", "tooling", "frontend"],
    description:
      "VitePress documentation site guidance for configuration, theming, and Markdown plus Vue content.",
  },
  {
    slug: "vitest",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vitest/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/vitest/SKILL.md",
    name: "vitest",
    topics: ["testing", "tooling", "frontend"],
    description:
      "Vitest testing best practices for unit tests, mocking, coverage, fixtures, and test filtering.",
  },
  {
    slug: "vue",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vue/SKILL.md",
    githubUrl: "https://github.com/antfu/skills/blob/main/skills/vue/SKILL.md",
    name: "vue",
    topics: ["vue", "interaction", "frontend"],
    description:
      "Vue 3 Composition API and reactivity guidance for SFCs, script setup macros, and built-in components.",
  },
  {
    slug: "vue-best-practices",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vue-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/vue-best-practices/SKILL.md",
    name: "vue-best-practices",
    topics: ["vue", "frontend", "performance"],
    description:
      "Vue.js best practices emphasizing Composition API with script setup and TypeScript.",
  },
  {
    slug: "vue-router-best-practices",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vue-router-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/vue-router-best-practices/SKILL.md",
    name: "vue-router-best-practices",
    topics: ["vue", "interaction", "frontend"],
    description:
      "Vue Router 4 patterns covering navigation guards, route params, and route lifecycle interactions.",
  },
  {
    slug: "vue-testing-best-practices",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vue-testing-best-practices/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/vue-testing-best-practices/SKILL.md",
    name: "vue-testing-best-practices",
    topics: ["vue", "testing", "frontend"],
    description:
      "Vue testing guidance using Vitest, Vue Test Utils, component testing, mocking, and Playwright E2E.",
  },
  {
    slug: "vueuse-functions",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/vueuse-functions/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/vueuse-functions/SKILL.md",
    name: "vueuse-functions",
    topics: ["vue", "tooling", "frontend"],
    description:
      "Apply VueUse composables to build concise, maintainable Vue and Nuxt features.",
  },
  {
    slug: "web-design-guidelines",
    user: "antfu",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/antfu/skills/main/skills/web-design-guidelines/SKILL.md",
    githubUrl:
      "https://github.com/antfu/skills/blob/main/skills/web-design-guidelines/SKILL.md",
    name: "web-design-guidelines",
    topics: ["visual", "accessibility", "frontend"],
    description:
      "Review UI code for web interface guideline compliance, including accessibility and UX best practices.",
  },
  {
    slug: "12-principles-of-animation",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/12-principles-of-animation/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/12-principles-of-animation/SKILL.md",
    name: "12-principles-of-animation",
    topics: ["motion", "interaction", "visual"],
    description:
      "Apply Disney's 12 animation principles to web interfaces to make motion feel natural, organic, and human.",
  },
  {
    slug: "design-lab",
    user: "0xdesign",
    repo: "design-plugin",
    rawUrl:
      "https://raw.githubusercontent.com/0xdesign/design-plugin/main/design-and-refine/skills/design-lab/SKILL.md",
    githubUrl:
      "https://github.com/0xdesign/design-plugin/blob/main/design-and-refine/skills/design-lab/SKILL.md",
    name: "design-lab",
    topics: ["visual", "interaction", "systems"],
    description:
      "Interactive design exploration workflow: conduct interviews, generate variants, and refine UI designs through feedback.",
  },
  {
    slug: "make-interfaces-feel-better",
    user: "jakubkrehel",
    repo: "make-interfaces-feel-better",
    rawUrl:
      "https://raw.githubusercontent.com/jakubkrehel/make-interfaces-feel-better/main/skills/make-interfaces-feel-better/SKILL.md",
    githubUrl:
      "https://github.com/jakubkrehel/make-interfaces-feel-better/blob/main/skills/make-interfaces-feel-better/SKILL.md",
    name: "make-interfaces-feel-better",
    topics: ["craft", "interaction", "visual"],
    description:
      "Design engineering principles for making interfaces feel polished, with focus on micro-interactions, typography, and visual details.",
  },
  {
    slug: "oklch-skill",
    user: "jakubkrehel",
    repo: "oklch-skill",
    rawUrl:
      "https://raw.githubusercontent.com/jakubkrehel/oklch-skill/main/skills/oklch-skill/SKILL.md",
    githubUrl:
      "https://github.com/jakubkrehel/oklch-skill/blob/main/skills/oklch-skill/SKILL.md",
    name: "oklch-skill",
    topics: ["color", "accessibility", "systems"],
    description:
      "Practical OKLCH color workflow skill for building consistent, accessible, and tunable color systems in modern UIs.",
  },
  {
    slug: "better-ui",
    user: "jakubkrehel",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/jakubkrehel/skills/main/skills/better-ui/SKILL.md",
    githubUrl:
      "https://github.com/jakubkrehel/skills/blob/main/skills/better-ui/SKILL.md",
    name: "better-ui",
    topics: ["visual", "interaction", "motion"],
    description:
      "Design engineering principles for making interfaces feel polished. Use when building UI components, reviewing frontend code, implementing animations, hover states, shadows, borders, micro-interactions, enter/exit animations, or any visual detail work. Triggers on UI polish, design details, \"make it feel better\", \"feels off\", stagger animations, border radius, optical alignment, image outlines, box shadows.",
  },
  {
    slug: "better-colors",
    user: "jakubkrehel",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/jakubkrehel/skills/main/skills/better-colors/SKILL.md",
    githubUrl:
      "https://github.com/jakubkrehel/skills/blob/main/skills/better-colors/SKILL.md",
    name: "better-colors",
    topics: ["color", "accessibility", "systems"],
    description:
      "OKLCH color space for web projects. Convert hex/rgb/hsl to oklch, generate palettes, check contrast, handle gamut boundaries, and theme with Tailwind v4. Triggers on oklch, color conversion, palette generation, contrast ratio, gamut, display p3, design tokens, hue drift, chroma, dark mode colors.",
  },
  {
    slug: "better-typography",
    user: "jakubkrehel",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/jakubkrehel/skills/main/skills/better-typography/SKILL.md",
    githubUrl:
      "https://github.com/jakubkrehel/skills/blob/main/skills/better-typography/SKILL.md",
    name: "better-typography",
    topics: ["typography", "visual", "accessibility"],
    description:
      "Web typography from choosing fonts to spacing, wrapping and accessibility. Use when picking or pairing typefaces, configuring variable fonts or OpenType features, setting up a type scale, styling text in components, truncating text, styling underlines, selection, placeholders or carets, or reviewing frontend code for typography. Triggers on typography, fonts, font formats, woff2, variable fonts, font-weight, opentype, font-feature-settings, letter-spacing, line-height, type scale, tabular numbers, text-wrap, truncation, line clamp, underlines, text-decoration, text selection, iOS input zoom, font smoothing, text contrast, measure, line length, text-box, smart punctuation, drop cap.",
  },
  {
    slug: "budge",
    user: "millionco",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/millionco/skills/main/skills/budge/SKILL.md",
    githubUrl:
      "https://github.com/millionco/skills/blob/main/skills/budge/SKILL.md",
    name: "budge",
    topics: ["visual", "tooling", "frontend"],
    description:
      "Use when making single-property CSS or Tailwind visual changes in Next.js App Router projects. Presents a floating control widget for live tuning before persisting.",
  },
  {
    slug: "react-doctor",
    user: "millionco",
    repo: "react-doctor",
    rawUrl:
      "https://raw.githubusercontent.com/millionco/react-doctor/main/skills/react-doctor/SKILL.md",
    githubUrl:
      "https://github.com/millionco/react-doctor/blob/main/skills/react-doctor/SKILL.md",
    name: "react-doctor",
    topics: ["testing", "performance", "frontend"],
    description:
      "Run React Doctor to detect regressions in security, performance, correctness, and architecture, with score-based quality checks.",
  },
  {
    slug: "improve-react",
    user: "millionco",
    repo: "react-doctor",
    rawUrl:
      "https://raw.githubusercontent.com/millionco/react-doctor/main/skills/improve-react/SKILL.md",
    githubUrl:
      "https://github.com/millionco/react-doctor/blob/main/skills/improve-react/SKILL.md",
    name: "improve-react",
    topics: ["code-quality", "performance", "architecture", "frontend"],
    description:
      "Survey a React codebase using React Doctor's findings, then produce prioritized audits and self-contained implementation plans without modifying source code.",
  },
  {
    slug: "rams",
    user: "rams",
    repo: "rams-ai",
    rawUrl: "https://www.rams.ai/rams.md",
    githubUrl: "",
    name: "rams",
    topics: ["visual", "accessibility", "interaction"],
    description:
      "Real-time design feedback skill focused on accessibility, spacing, typography, contrast, and component quality.",
  },
  {
    slug: "bencium-innovative-ux-designer",
    user: "bencium",
    repo: "bencium-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/bencium/bencium-marketplace/main/bencium-innovative-ux-designer/skills/bencium-innovative-ux-designer/SKILL.md",
    githubUrl:
      "https://github.com/bencium/bencium-marketplace/blob/main/bencium-innovative-ux-designer/skills/bencium-innovative-ux-designer/SKILL.md",
    name: "bencium-innovative-ux-designer",
    topics: ["visual", "systems", "frontend"],
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.",
  },
  {
    slug: "audit-and-fix",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    name: "audit-and-fix",
    topics: ["accessibility", "testing", "frontend"],
    description:
      "Accessibility auditing and remediation workflow that combines detection, prioritization, and practical fixes for WCAG issues.",
  },
  {
    slug: "contrast-checker",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    name: "contrast-checker",
    topics: ["accessibility", "testing", "color"],
    description:
      "Compatibility listing for contrast-checker installs from AccessLint's marketplace skill set.",
  },
  {
    slug: "link-purpose",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    name: "link-purpose",
    topics: ["accessibility", "testing", "interaction"],
    description:
      "Compatibility listing for link-purpose installs from AccessLint's marketplace skill set.",
  },
  {
    slug: "refactor",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    name: "refactor",
    topics: ["accessibility", "testing", "frontend"],
    description:
      "Compatibility listing for refactor installs from AccessLint's marketplace skill set.",
  },
  {
    slug: "use-of-color",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/audit-and-fix/SKILL.md",
    name: "use-of-color",
    topics: ["accessibility", "color", "testing"],
    description:
      "Compatibility listing for use-of-color installs from AccessLint's marketplace skill set.",
  },
  {
    slug: "emil-design-eng",
    user: "emilkowalski",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/emilkowalski/skill/main/skills/emil-design-eng/SKILL.md",
    githubUrl:
      "https://github.com/emilkowalski/skill/blob/main/skills/emil-design-eng/SKILL.md",
    name: "emil-design-eng",
    topics: ["craft", "taste", "visual"],
    description:
      "Emil Kowalski's design-engineering philosophy for UI polish, components, animation, and production-ready frontend craft.",
  },
  {
    slug: "apple-design",
    user: "emilkowalski",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/emilkowalski/skills/main/skills/apple-design/SKILL.md",
    githubUrl:
      "https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md",
    name: "apple-design",
    topics: ["motion", "interaction", "visual"],
    description:
      "Apple's approach to interface design and fluid, physical motion, translated for the web. Use when building or reviewing gesture-driven UI, spring animations, drag/swipe/sheet interactions, momentum and interruptible transitions, translucent materials and depth, typography (optical sizing, tracking, leading), reduced-motion, or the design foundations (feedback, spatial consistency, restraint) behind Apple-style interfaces.",
  },
  {
    slug: "improve-animations",
    user: "emilkowalski",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/emilkowalski/skills/main/skills/improve-animations/SKILL.md",
    githubUrl:
      "https://github.com/emilkowalski/skills/blob/main/skills/improve-animations/SKILL.md",
    name: "improve-animations",
    topics: ["motion", "performance", "testing"],
    description:
      "Survey a codebase's animation and motion code as a senior motion advisor, then produce prioritized audit and self-contained implementation plans. Read-only on source code - it plans improvements, it does not apply them. Use when the user asks to improve animations, audit motion, make an app feel better, or wants a roadmap of animation fixes rather than a review of a single diff.",
  },
  {
    slug: "web-clone",
    user: "Jane-xiaoer",
    repo: "claude-skill-web-clone",
    rawUrl:
      "https://raw.githubusercontent.com/Jane-xiaoer/claude-skill-web-clone/main/SKILL.md",
    githubUrl:
      "https://github.com/Jane-xiaoer/claude-skill-web-clone/blob/main/SKILL.md",
    name: "web-clone",
    topics: ["frontend", "architecture", "tooling"],
    description:
      "网站复刻 / 克隆方法论。Use when the user says to clone, reproduce, or recreate a website or WebGL/Canvas/Three.js effect. Covers source-first reconstruction, repo scaffolding, reverse engineering, implementation paths, and verification for static sites, content sites, and heavy front-end experiences.",
  },
  {
    slug: "generating-sounds-with-ai",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/generating-sounds-with-ai/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/generating-sounds-with-ai/SKILL.md",
    name: "generating-sounds-with-ai",
    topics: ["interaction", "testing", "frontend"],
    description:
      "Audit Web Audio API code for procedural sound synthesis quality, UX decisions, and parameter best practices.",
  },
  {
    slug: "mastering-animate-presence",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/mastering-animate-presence/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/mastering-animate-presence/SKILL.md",
    name: "mastering-animate-presence",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Audit Motion and Framer Motion exit/presence patterns with practical fixes for AnimatePresence usage.",
  },
  {
    slug: "morphing-icons",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/morphing-icons/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/morphing-icons/SKILL.md",
    name: "morphing-icons",
    topics: ["motion", "visual", "frontend"],
    description:
      "Build icon components that morph between SVG shapes with smooth, line-based transformation.",
  },
  {
    slug: "pseudo-elements",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/pseudo-elements/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/pseudo-elements/SKILL.md",
    name: "pseudo-elements",
    topics: ["motion", "visual", "frontend"],
    description:
      "Audit CSS pseudo-elements and View Transitions usage for hover effects, decorative layers, and transitions.",
  },
  {
    slug: "sounds-on-the-web",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/sounds-on-the-web/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/sounds-on-the-web/SKILL.md",
    name: "sounds-on-the-web",
    topics: ["interaction", "accessibility", "frontend"],
    description:
      "Audit interface sound feedback for UX quality, accessibility, and practical implementation patterns.",
  },
  {
    slug: "to-spring-or-not-to-spring",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/to-spring-or-not-to-spring/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/to-spring-or-not-to-spring/SKILL.md",
    name: "to-spring-or-not-to-spring",
    topics: ["motion", "performance", "frontend"],
    description:
      "Audit animation timing choices to decide when springs versus easing curves produce better motion.",
  },
  {
    slug: "frontend-slides",
    user: "zarazhangrui",
    repo: "frontend-slides",
    rawUrl:
      "https://raw.githubusercontent.com/zarazhangrui/frontend-slides/main/SKILL.md",
    githubUrl:
      "https://github.com/zarazhangrui/frontend-slides/blob/main/SKILL.md",
    name: "frontend-slides",
    topics: ["video", "visual", "frontend"],
    description:
      "Create animation-rich HTML presentations from scratch or convert PPT/PPTX files into polished web slides.",
  },
  {
    slug: "slide-wright",
    user: "arifszn",
    repo: "slide-wright",
    rawUrl:
      "https://raw.githubusercontent.com/arifszn/slide-wright/main/SKILL.md",
    githubUrl: "https://github.com/arifszn/slide-wright/blob/main/SKILL.md",
    name: "slide-wright",
    topics: ["video", "visual", "craft"],
    description:
      "Create beautiful, animated web presentations from a topic, rough notes, or an outline. Generates a custom theme and a short two-slide preview, then builds the full deck only once the user confirms the direction. Use when the user wants to make slides, a presentation, a talk deck, or a pitch deck.",
  },
  {
    slug: "shadcn",
    user: "shadcn-ui",
    repo: "ui",
    rawUrl:
      "https://raw.githubusercontent.com/shadcn-ui/ui/main/skills/shadcn/SKILL.md",
    githubUrl:
      "https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md",
    name: "shadcn",
    topics: ["systems", "tooling", "frontend"],
    description:
      "Project-aware shadcn/ui workflow for searching, adding, composing, and fixing components with correct patterns.",
  },
  {
    slug: "brutalist-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/brutalist-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/brutalist-skill/SKILL.md",
    name: "industrial-brutalist-ui",
    topics: ["taste", "visual", "interaction"],
    description:
      "Raw, mechanical interface direction mixing Swiss print structure with terminal-inspired brutalist aesthetics.",
  },
  {
    slug: "gpt-tasteskill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/gpt-tasteskill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/gpt-tasteskill/SKILL.md",
    name: "gpt-taste",
    topics: ["taste", "systems", "frontend"],
    description:
      "High-agency UX/UI skill with strict layout variance, typography, and GSAP motion engineering constraints.",
  },
  {
    slug: "minimalist-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/minimalist-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/minimalist-skill/SKILL.md",
    name: "minimalist-ui",
    topics: ["taste", "visual", "systems"],
    description:
      "Editorial minimal interfaces with monochrome palettes, typographic contrast, and restrained visuals.",
  },
  {
    slug: "output-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/output-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/output-skill/SKILL.md",
    name: "full-output-enforcement",
    topics: ["tooling", "testing", "frontend"],
    description:
      "Enforces complete, non-truncated code output and blocks placeholder or half-finished responses.",
  },
  {
    slug: "redesign-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/redesign-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/redesign-skill/SKILL.md",
    name: "redesign-existing-projects",
    topics: ["craft", "visual", "interaction"],
    description:
      "Audit and upgrade existing interfaces to premium visual quality while preserving product functionality.",
  },
  {
    slug: "soft-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/soft-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/soft-skill/SKILL.md",
    name: "high-end-visual-design",
    topics: ["taste", "craft", "visual"],
    description:
      "High-end visual design guidance for premium typography, spacing, depth, and animation systems.",
  },
  {
    slug: "stitch-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/stitch-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/stitch-skill/SKILL.md",
    name: "stitch-design-taste",
    topics: ["systems", "tooling", "taste"],
    description:
      "Semantic design-system skill for Google Stitch with strict anti-generic UI generation rules.",
  },
  {
    slug: "taste-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md",
    name: "design-taste-frontend",
    topics: ["taste", "visual", "frontend"],
    description:
      "Senior UI/UX frontend skill that enforces anti-slop design decisions, motion quality, and architecture discipline.",
  },
  {
    slug: "adapt",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/adapt.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/adapt.md",
    name: "adapt",
    topics: ["interaction", "systems", "frontend"],
    description:
      "Adapt designs across breakpoints, device contexts, and platform constraints with responsive interaction quality.",
  },
  {
    slug: "animate",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/animate.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/animate.md",
    name: "animate",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Enhance UX with purposeful animation and micro-interactions that support usability and delight.",
  },
  {
    slug: "audit",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/audit.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/audit.md",
    name: "audit",
    topics: ["testing", "accessibility", "performance"],
    description:
      "Run technical UI quality audits across accessibility, performance, theming, responsive behavior, and anti-patterns.",
  },
  {
    slug: "bolder",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/bolder.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/bolder.md",
    name: "bolder",
    topics: ["visual", "interaction", "taste"],
    description:
      "Increase visual impact and personality for interfaces that feel too safe, bland, or generic.",
  },
  {
    slug: "clarify",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/clarify.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/clarify.md",
    name: "clarify",
    topics: ["interaction", "systems", "frontend"],
    description:
      "Improve labels, microcopy, and UX messaging so interface text is clearer and easier to act on.",
  },
  {
    slug: "colorize",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/colorize.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/colorize.md",
    name: "colorize",
    topics: ["color", "visual", "systems"],
    description:
      "Introduce strategic color systems to interfaces that feel dull, monochrome, or visually flat.",
  },
  {
    slug: "critique",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/critique.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/critique.md",
    name: "critique",
    topics: ["testing", "visual", "taste"],
    description:
      "Evaluate design quality with structured UX scoring, persona checks, and actionable remediation guidance.",
  },
  {
    slug: "delight",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/delight.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/delight.md",
    name: "delight",
    topics: ["interaction", "motion", "taste"],
    description:
      "Add personality and memorable moments through thoughtful interaction details and emotional UX touches.",
  },
  {
    slug: "distill",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/distill.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/distill.md",
    name: "distill",
    topics: ["systems", "interaction", "craft"],
    description:
      "Simplify noisy interfaces by removing non-essential complexity and restoring clear visual focus.",
  },
  {
    slug: "harden",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/harden.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/harden.md",
    name: "harden",
    topics: ["testing", "systems", "frontend"],
    description:
      "Make interfaces production-ready with robust empty states, edge cases, errors, onboarding, and i18n resilience.",
  },
  {
    slug: "impeccable",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/SKILL.src.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/SKILL.src.md",
    name: "impeccable",
    topics: ["craft", "visual", "systems"],
    description:
      "Flagship design skill for production-grade, anti-generic frontend interfaces with strong craft and consistency.",
  },
  {
    slug: "layout",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/layout.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/layout.md",
    name: "layout",
    topics: ["craft", "systems", "visual"],
    description:
      "Fix spacing, composition, and hierarchy rhythm when UI layout feels crowded, flat, or misaligned.",
  },
  {
    slug: "optimize",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/optimize.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/optimize.md",
    name: "optimize",
    topics: ["performance", "frontend", "testing"],
    description:
      "Diagnose and improve interface performance across rendering, motion smoothness, assets, and load speed.",
  },
  {
    slug: "overdrive",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/overdrive.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/overdrive.md",
    name: "overdrive",
    topics: ["motion", "visual", "taste"],
    description:
      "Push interfaces into high-impact territory with advanced animation, shaders, and ambitious interaction systems.",
  },
  {
    slug: "polish",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/polish.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/polish.md",
    name: "polish",
    topics: ["craft", "visual", "systems"],
    description:
      "Final quality pass for spacing, alignment, and consistency to prepare UI for launch.",
  },
  {
    slug: "quieter",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/quieter.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/quieter.md",
    name: "quieter",
    topics: ["visual", "systems", "craft"],
    description:
      "Tone down overly intense designs while keeping quality high and preserving hierarchy.",
  },
  {
    slug: "shape",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/shape.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/shape.md",
    name: "shape",
    topics: ["interaction", "systems", "architecture"],
    description:
      "Plan feature UX before coding via a structured design interview that produces an actionable design brief.",
  },
  {
    slug: "typeset",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/skill/reference/typeset.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/skill/reference/typeset.md",
    name: "typeset",
    topics: ["typography", "craft", "visual"],
    description:
      "Improve typography systems, hierarchy, readability, and text cadence for more intentional interfaces.",
  },
  {
    slug: "transitions-dev",
    user: "Jakubantalik",
    repo: "transitions-dev",
    rawUrl:
      "https://raw.githubusercontent.com/Jakubantalik/transitions-dev/main/skills/transitions-dev/SKILL.md",
    githubUrl:
      "https://github.com/Jakubantalik/transitions-dev/blob/main/skills/transitions-dev/SKILL.md",
    name: "transitions-dev",
    topics: ["motion", "interaction", "frontend"],
    description:
      "Production-ready CSS transition patterns for web apps, with drop-in snippets for cards, modals, dropdowns, panels, and page transitions.",
  },
  {
    slug: "daisyui",
    user: "saadeghi",
    repo: "daisyui",
    rawUrl:
      "https://raw.githubusercontent.com/saadeghi/daisyui/master/skills/daisyui/SKILL.md",
    githubUrl:
      "https://github.com/saadeghi/daisyui/blob/master/skills/daisyui/SKILL.md",
    name: "daisyui",
    topics: ["visual", "tooling", "frontend"],
    description:
      "Official daisyUI component library skill, providing docs, class names, examples and code examples to generate better daisyUI code.",
  },
  {
    slug: "compact-landing",
    user: "Danilaa1",
    repo: "compact-landing-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Danilaa1/compact-landing-skill/main/skills/compact-landing/SKILL.md",
    githubUrl:
      "https://github.com/Danilaa1/compact-landing-skill/blob/main/skills/compact-landing/SKILL.md",
    name: "compact-landing",
    topics: ["visual", "craft", "typography", "frontend"],
    description:
      "Build compact premium landing pages with clear CTA hierarchy, quiet typography, and minimal visual noise.",
  },
  {
    slug: "text-to-lottie",
    user: "diffusionstudio",
    repo: "lottie",
    rawUrl:
      "https://raw.githubusercontent.com/diffusionstudio/lottie/main/skills/text-to-lottie/SKILL.md",
    githubUrl:
      "https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/SKILL.md",
    name: "text-to-lottie",
    topics: ["motion", "visual", "frontend"],
    description:
      "Turn text prompts into polished Lottie animations for motion-heavy UI work.",
  },
  {
    slug: "brag",
    user: "latent-spaces",
    repo: "brag",
    rawUrl:
      "https://raw.githubusercontent.com/latent-spaces/brag/main/skills/brag/SKILL.md",
    githubUrl:
      "https://github.com/latent-spaces/brag/blob/main/skills/brag/SKILL.md",
    name: "brag",
    topics: ["video", "motion", "frontend"],
    description:
      "Turn a finished project into a short shareable launch video with motion, music, and copy.",
  },
  {
    slug: "build-primitive",
    user: "PrototyperAI",
    repo: "prototyper-ui",
    rawUrl:
      "https://raw.githubusercontent.com/PrototyperAI/prototyper-ui/main/apps/docs/skill/build-primitive/SKILL.md",
    githubUrl:
      "https://github.com/PrototyperAI/prototyper-ui/blob/main/apps/docs/skill/build-primitive/SKILL.md",
    name: "build-primitive",
    topics: ["accessibility", "interaction", "systems", "testing", "frontend"],
    description:
      "Build foundational UI primitives from scratch with strong ARIA, keyboard, focus, and state handling.",
  },
  {
    slug: "animation-vocabulary",
    user: "emilkowalski",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/emilkowalski/skills/main/skills/animation-vocabulary/SKILL.md",
    githubUrl:
      "https://github.com/emilkowalski/skills/blob/main/skills/animation-vocabulary/SKILL.md",
    name: "animation-vocabulary",
    topics: ["motion", "visual", "craft"],
    description:
      "Sharpen motion language so animation choices feel deliberate and consistent.",
  },
  {
    slug: "review-animations",
    user: "emilkowalski",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/emilkowalski/skills/main/skills/review-animations/SKILL.md",
    githubUrl:
      "https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md",
    name: "review-animations",
    topics: ["motion", "performance", "testing", "interaction"],
    description:
      "Review animation quality, timing, and motion consistency with a production-critical eye.",
  },
  {
    slug: "refine-live",
    user: "Jakubantalik",
    repo: "transitions.dev",
    rawUrl:
      "https://raw.githubusercontent.com/Jakubantalik/transitions.dev/main/refine/.agents/skills/refine-live/SKILL.md",
    githubUrl:
      "https://github.com/Jakubantalik/transitions.dev/blob/main/refine/.agents/skills/refine-live/SKILL.md",
    name: "refine-live",
    topics: ["motion", "visual", "interaction", "frontend"],
    description:
      "Iteratively refine UI in live sessions with a focus on motion, polish, and interaction detail.",
  },
  {
    slug: "engineering",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/README.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/README.md",
    name: "engineering",
    topics: ["architecture", "testing", "tooling", "debugging"],
    description:
      "Routing bundle for code work covering planning, debugging, TDD, architecture, and execution flows.",
  },
  {
    slug: "ask-matt",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/ask-matt/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md",
    name: "ask-matt",
    topics: ["tooling", "architecture", "frontend"],
    description:
      "Router that picks the right Matt Pocock engineering flow for the current task.",
  },
  {
    slug: "grill-with-docs",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/grill-with-docs/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md",
    name: "grill-with-docs",
    topics: ["architecture", "systems", "tooling"],
    description:
      "Sharpens the domain model and updates supporting docs while grilling through design choices.",
  },
  {
    slug: "triage",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/triage/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md",
    name: "triage",
    topics: ["tooling", "testing", "architecture"],
    description: "Moves issues through a structured triage state machine.",
  },
  {
    slug: "improve-codebase-architecture",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/improve-codebase-architecture/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md",
    name: "improve-codebase-architecture",
    topics: ["architecture", "systems", "testing"],
    description:
      "Scans a codebase for deepening opportunities and turns them into a prioritized visual report.",
  },
  {
    slug: "setup-matt-pocock-skills",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/setup-matt-pocock-skills/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/SKILL.md",
    name: "setup-matt-pocock-skills",
    topics: ["tooling", "architecture"],
    description:
      "One-time repo setup for the engineering skill workflow and related conventions.",
  },
  {
    slug: "to-issues",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/to-issues/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/to-issues/SKILL.md",
    name: "to-issues",
    topics: ["architecture", "tooling", "testing"],
    description: "Breaks a plan or PRD into independently actionable issues.",
  },
  {
    slug: "to-prd",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/to-prd/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/to-prd/SKILL.md",
    name: "to-prd",
    topics: ["architecture", "tooling", "frontend"],
    description:
      "Turns a conversation into a PRD and publishes it to the issue tracker.",
  },
  {
    slug: "prototype",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/prototype/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md",
    name: "prototype",
    topics: ["frontend", "interaction", "systems"],
    description:
      "Builds throwaway prototypes to answer design or logic questions quickly.",
  },
  {
    slug: "diagnosing-bugs",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/diagnosing-bugs/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md",
    name: "diagnosing-bugs",
    topics: ["debugging", "testing", "frontend"],
    description:
      "Systematic bug diagnosis through reproduce, minimize, hypothesize, instrument, and fix.",
  },
  {
    slug: "tdd",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/tdd/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md",
    name: "tdd",
    topics: ["testing", "tooling", "frontend"],
    description:
      "Red-green-refactor workflow for building features and fixes one slice at a time.",
  },
  {
    slug: "domain-modeling",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/domain-modeling/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md",
    name: "domain-modeling",
    topics: ["architecture", "systems", "frontend"],
    description: "Builds and sharpens project domain models and terminology.",
  },
  {
    slug: "codebase-design",
    user: "mattpocock",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/mattpocock/skills/main/skills/engineering/codebase-design/SKILL.md",
    githubUrl:
      "https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md",
    name: "codebase-design",
    topics: ["architecture", "systems", "testing"],
    description:
      "Guidance for designing deep modules with small interfaces and clean seams.",
  },
  {
    slug: "improve",
    user: "shadcn",
    repo: "improve",
    rawUrl:
      "https://raw.githubusercontent.com/shadcn/improve/main/skills/improve/SKILL.md",
    githubUrl:
      "https://github.com/shadcn/improve/blob/main/skills/improve/SKILL.md",
    name: "improve",
    topics: ["code-quality", "architecture", "testing"],
    description:
      "Survey any codebase as a senior advisor and produce prioritized, self-contained implementation plans for OTHER models/agents to execute. Strictly read-only on source code — never implements, fixes, or refactors anything itself. Use when asked to audit a codebase, find improvement opportunities (bugs, security, performance, test coverage, tech debt, migrations, DX), suggest features or take the project next, or generate handoff plans for another agent to implement.",
  },
  {
    slug: "thermo-nuclear-code-quality-review",
    user: "cursor",
    repo: "plugins",
    rawUrl:
      "https://raw.githubusercontent.com/cursor/plugins/main/thermos/skills/thermo-nuclear-code-quality-review/SKILL.md",
    githubUrl: "",
    name: "thermo-nuclear-code-quality-review",
    topics: ["code-quality", "architecture", "testing"],
    description:
      "Run an extremely strict maintainability review for abstraction quality, giant files, and spaghetti-condition growth.",
  },
];

const buildInitialPathSlug = (entry: RegistrySourceSkill) => {
  const userSegment = entry.user.toLowerCase();
  return `${userSegment}/${entry.slug}`;
};

export const registry: RegistrySkill[] = [];
const usedPathSlugs = new Set<string>();

for (const entry of registrySource) {
  const userSegment = entry.user.toLowerCase();
  const repoSegment = entry.repo.toLowerCase();
  const sourceKey = userSegment;

  let pathSlug = buildInitialPathSlug(entry);
  if (usedPathSlugs.has(pathSlug)) {
    pathSlug = `${userSegment}/${repoSegment}/${entry.slug}`;
  }

  usedPathSlugs.add(pathSlug);

  registry.push({
    ...entry,
    pathSlug,
    sourceKey,
    sourceLabel: entry.user,
  });
}
