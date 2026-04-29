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
    slug: "contrast-checker",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/contrast-checker/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/contrast-checker/SKILL.md",
    name: "contrast-checker",
    topics: ["accessibility", "testing", "color"],
    description:
      "Color contrast analyzer for WCAG compliance. Calculates contrast ratios, identifies violations, and suggests accessible color alternatives.",
  },
  {
    slug: "link-purpose",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/link-purpose/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/link-purpose/SKILL.md",
    name: "link-purpose",
    topics: ["accessibility", "testing", "interaction"],
    description:
      "Analyze and improve WCAG 2.4.4 link purpose compliance by fixing generic and ambiguous link text.",
  },
  {
    slug: "refactor",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/refactor/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/refactor/SKILL.md",
    name: "refactor",
    topics: ["accessibility", "testing", "frontend"],
    description:
      "Accessibility refactoring specialist for systematic WCAG fixes across components and codebases.",
  },
  {
    slug: "use-of-color",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/use-of-color/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/use-of-color/SKILL.md",
    name: "use-of-color",
    topics: ["accessibility", "color", "testing"],
    description:
      "Analyze and remediate WCAG 1.4.1 use-of-color issues where meaning relies only on color.",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/adapt/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/adapt/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/animate/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/animate/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/audit/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/audit/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/bolder/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/bolder/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/clarify/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/clarify/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/colorize/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/colorize/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/critique/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/critique/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/delight/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/delight/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/distill/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/distill/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/harden/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/harden/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/impeccable/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/impeccable/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/layout/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/layout/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/optimize/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/optimize/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/overdrive/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/overdrive/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/polish/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/polish/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/quieter/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/quieter/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/shape/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/shape/SKILL.md",
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
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/typeset/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/typeset/SKILL.md",
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
