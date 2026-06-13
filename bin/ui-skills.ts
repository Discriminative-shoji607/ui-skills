#!/usr/bin/env -S node --experimental-strip-types

import { readFile } from "node:fs/promises";
import { registry } from "../src/data/registry.ts";
import { skills } from "../src/data/skills.ts";
import { topics, topicBySlug, type Topic } from "../src/data/topics.ts";

const argv = process.argv.slice(2);

const START_SKILL_URL = new URL("../skills/ui-skills-root/SKILL.md", import.meta.url);

const BANNER = [
  " ██╗   ██╗██╗      ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗",
  " ██║   ██║██║      ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝",
  " ██║   ██║██║█████╗███████╗█████╔╝ ██║██║     ██║     ███████╗",
  " ██║   ██║██║╚════╝╚════██║██╔═██╗ ██║██║     ██║     ╚════██║",
  " ╚██████╔╝██║      ███████║██║  ██╗██║███████╗███████╗███████║",
  "  ╚═════╝ ╚═╝      ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝",
].join("\n");

const HELP = [
  BANNER,
  "",
  "Skills for Design Engineers",
  "",
  "Usage:",
  "  ui-skills [command]",
  "",
  "Commands:",
  "  start                     Print the routing skill",
  "  categories                List categories",
  "  list [--category <topic>] List skills",
  "  get <slug>                Print full skill markdown",
  "",
  "Examples:",
  "  ui-skills start",
  "  ui-skills list --category motion",
  "  ui-skills get baseline-ui",
].join("\n");

const normalize = (value: string) => value.trim().toLowerCase();

const print = (value: string) => {
  process.stdout.write(`${value}\n`);
};

const failExtraArgs = (command: string) => {
  fail(`Too many arguments for ${command}`, 1);
};

const readLocalSkillMarkdown = async (slug: string) => {
  try {
    return await readFile(new URL(`../skills/${slug}/SKILL.md`, import.meta.url), "utf8");
  } catch {
    return null;
  }
};

const printSkillMarkdown = async () => {
  process.stdout.write(await readFile(START_SKILL_URL, "utf8"));
};

const fail = (message: string, code = 1) => {
  process.stderr.write(`${message}\n`);
  process.exitCode = code;
};

const formatTopic = (slug: Topic["slug"]) => {
  return slug;
};

const formatSkill = (skill: (typeof skills)[number]) => {
  const categories = (skill.topics ?? []).join(", ");
  const description = (skill.description ?? "").replace(/\s+/g, " ").trim();
  return `${skill.pathSlug} — ${categories} — ${description}`;
};

const resolveSkillCandidates = (input: string) => {
  const normalizedInput = normalize(input);
  const exactPath = registry.find(
    (entry) => normalize(entry.pathSlug) === normalizedInput,
  );
  if (exactPath) {
    return [exactPath];
  }

  const bySlug = registry.filter(
    (entry) => normalize(entry.slug) === normalizedInput,
  );
  return bySlug;
};

const printList = (category?: string) => {
  const normalizedCategory = category ? normalize(category) : undefined;
  const filtered = category
    ? skills.filter((skill) =>
        skill.topics?.includes(normalizedCategory as Topic["slug"]),
      )
    : skills;

  if (category && !topicBySlug.has(normalizedCategory as Topic["slug"])) {
    fail(`Unknown category: ${category}`, 3);
    return;
  }

  if (category && filtered.length === 0) {
    fail(`No skills found for category: ${category}`, 3);
    return;
  }

  print(filtered.map(formatSkill).join("\n"));
};

const printGet = async (input: string) => {
  const candidates = resolveSkillCandidates(input);

  if (candidates.length === 0) {
    fail(`Skill not found: ${input}`, 3);
    return;
  }

  if (candidates.length > 1) {
    process.stderr.write(`Ambiguous skill slug: ${input}\n`);
    process.stderr.write("Candidates:\n");
    for (const candidate of candidates) {
      process.stderr.write(`- ${candidate.pathSlug}\n`);
    }
    process.exitCode = 3;
    return;
  }

  const skill = candidates[0];
  try {
    const localMarkdown = await readLocalSkillMarkdown(skill.slug);
    if (localMarkdown) {
      process.stdout.write(localMarkdown);
      process.stdout.write("\n");
      return;
    }

    const response = await fetch(skill.rawUrl);
    if (!response.ok) {
      fail(`Failed to fetch ${skill.rawUrl} (${response.status} ${response.statusText})`, 4);
      return;
    }

    process.stdout.write(await response.text());
    process.stdout.write("\n");
  } catch (error) {
    fail(`Error fetching skill content: ${error instanceof Error ? error.message : String(error)}`, 4);
  }
};

const main = async () => {
  const [command = ""] = argv;

  if (!command || command === "--help" || command === "-h" || command === "help") {
    print(HELP);
    return;
  }

  if (command === "start") {
    if (argv.length > 1) {
      failExtraArgs("start");
      return;
    }

    await printSkillMarkdown();
    return;
  }

  if (command === "categories") {
    if (argv.length > 1) {
      failExtraArgs("categories");
      return;
    }

    print(topics.map((topic) => formatTopic(topic.slug)).join("\n"));
    return;
  }

  if (command === "list") {
    const args = argv.slice(1);

    if (args.length === 0) {
      printList();
      return;
    }

    if (args.length === 1 && args[0] === "--category") {
      fail("Missing value for --category", 1);
      return;
    }

    if (args.length === 2 && args[0] === "--category") {
      printList(args[1]);
      return;
    }

    if (args.length > 0) {
      failExtraArgs("list");
      return;
    }

    printList();
    return;
  }

  if (command === "get") {
    const args = argv.slice(1);

    if (args.length > 1) {
      failExtraArgs("get");
      return;
    }

    const target = args[0];
    if (!target) {
      fail("Missing skill slug", 1);
      return;
    }

    await printGet(target);
    return;
  }

  fail(`Unknown command: ${command}`, 2);
};

await main();
