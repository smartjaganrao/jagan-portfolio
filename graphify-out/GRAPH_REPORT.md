# Graph Report - portfolio  (2026-08-19)

## Corpus Check
- 25 files · ~9,473 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 160 nodes · 221 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Jagan Rao — Portfolio

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `SectionHeading()` - 10 edges
4. `react` - 8 edges
5. `profile` - 7 edges
6. `Jagan Rao — Portfolio` - 6 edges
7. `scripts` - 5 edges
8. `plugins` - 4 edges
9. `rules` - 3 edges
10. `navLinks` - 3 edges

## Surprising Connections (you probably didn't know these)
- `plugins` --extends--> `react`  [EXTRACTED]
  .oxlintrc.json → .oxlintrc.json  _Bridges community 6 → community 0_

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (23): react, pillars, AIShowcase(), demoMessages, Education(), filters, Projects(), Props (+15 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (23): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.40
Nodes (3): columns, Skills(), skills

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (18): framer-motion, lucide-react, dependencies, framer-motion, lucide-react, react, react-dom, name (+10 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (19): oxlint, devDependencies, oxlint, tailwindcss, @tailwindcss/vite, @types/node, @types/react, @types/react-dom (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (8): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, typescript, warn

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (11): About(), Contact(), CursorGlow(), Experience(), Footer(), chips, Hero(), Marquee() (+3 more)

### Community 10 - "Jagan Rao — Portfolio"
Cohesion: 0.29
Nodes (6): Build, Customize, Jagan Rao — Portfolio, Run, Sections, Stack

## Knowledge Gaps
- **75 isolated node(s):** `$schema`, `typescript`, `oxc`, `react/rules-of-hooks`, `warn` (+70 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Community 0` to `Community 6`, `Community 7`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 5` to `Community 4`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `plugins` connect `Community 6` to `Community 0`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `$schema`, `typescript`, `oxc` to the rest of the system?**
  _75 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11229946524064172 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._