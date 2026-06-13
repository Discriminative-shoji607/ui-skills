import { registry, type TopicSlug } from "./registry.ts";

export type Skill = {
  slug: string;
  pathSlug: string;
  sourceKey?: string;
  sourceLabel?: string;
  name: string;
  label: string;
  description?: string;
  topics?: TopicSlug[];
};

const titleize = (value: string) =>
  value
    .split("-")
    .map((word) => {
      if (word.toLowerCase() === "ui") {
        return "UI";
      }

      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(" ");

export const skills: Skill[] = registry.map((skill) => ({
  slug: skill.slug,
  pathSlug: skill.pathSlug,
  sourceKey: skill.sourceKey,
  sourceLabel: skill.sourceLabel,
  name: skill.name ?? skill.slug,
  label: titleize(skill.name ?? skill.slug),
  description: skill.description,
  topics: skill.topics ?? [],
})).sort(
  (a, b) => {
    if (a.slug === "ui-skills-root") return -1;
    if (b.slug === "ui-skills-root") return 1;

    if (a.slug === "baseline-ui") return -1;
    if (b.slug === "baseline-ui") return 1;

    return a.pathSlug.localeCompare(b.pathSlug);
  },
);
