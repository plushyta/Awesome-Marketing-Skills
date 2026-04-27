# ✦ Awesome Marketing Skills

![Awesome Marketing Skills Banner](docs/assets/banner.png)

<div align="center">


**"AI is not the architect; it is the brush. We design the intention."**

[Explore Skills](#-active-skills) • [Setup Guide](#️-requirements-mcp-servers) • [Contribute](#-contributing) • [Connect](#-creator)

</div>

---

Welcome to **Awesome Marketing Skills** — a universal, high-fidelity library of AI Agent skills compatible with all modern AI agents, CLIs, and IDEs (Claude Code, Cursor, Windsurf, Codex, and more). This hub is engineered for the next generation of "Design Engineers" who move beyond generic prompts into the realm of intentional aesthetic orchestration and pixel-perfect utility.

## 📌 Table of Contents
- [🎨 Philosophy: Vibe Designing](#-philosophy-vibe-designing)
- [🚀 Active Skills](#-active-skills)
- [🛠 Upcoming Skills (Incubating)](#-upcoming-skills-incubating)
- [⚙️ Requirements: MCP Servers](#️-requirements-mcp-servers)
- [🏗️ Skill Placement & IDE Setup](#️-skill-placement--ide-setup)
- [🎯 Triggering a Skill](#-triggering-a-skill)
- [🤝 Contributing](#-contributing)
- [✦ Creator](#-creator)

---

## 🎨 Philosophy: Vibe Designing

Most AI-generated content suffers from "The Slop" — generic layouts, predictable palettes, and a lack of soul. In this hub, we practice **Vibe Designing**:

*   **Sacred Drift Aesthetic**: A design philosophy rooted in warmth, trust, and rhythmic typography.
*   **Mathematical Precision**: Using AI to calculate optimal vertical rhythm, contrast ratios, and layout grids.
*   **Contextual Intelligence**: Agents that research the "Why" before they build the "What."

---

## 🚀 Active Skills

### 📂 [Brochure Generator](.agents/skills/brochure-generator)
Our flagship skill. It generates premium, multi-page, mobile-optimized marketing brochures (1:1 aspect ratio) for exclusive retreats, high-end events, luxury products, or bespoke services.

**Key Design Features:**
- **Sacred Drift Archetype**: Uses `Cormorant Garamond` and `Jost` for a grounded yet ethereal feel.
- **WCAG AAA Compliance**: Programmatically checked for readability against deep background overlays.
- **Automated Research**: Leverages Tavily & Firecrawl for local cultural accuracy.
- **Pixel-Perfect Export**: Automated Puppeteer workflow for high-res PDF distribution.

> [!TIP]
> Check out the [Spiti Valley Yoga Retreat Brochure](examples/brochure-generator/output/SpitiValley_Retreat_Brochure.pdf) for a live demonstration.

---

## 🛠 Upcoming Skills (Incubating)

We are rapidly expanding the hub with new aesthetic-first workflows. **Star this repo to stay updated!**

| Skill | Vibe | Focus | Status |
| :--- | :--- | :--- | :--- |
| **youtube-thumbnail** | *Dynamic Force* | High-CTR typography and focus-anchor logic. | 🚧 Incubating |
| **insta-tiktok-reels** | *Rhythmic Pulse* | Hook-first narrative design with beat-matching. | 🚧 Incubating |
| **instagram-carousel** | *Seamless Flow* | Horizontal continuity and narrative pacing. | 🚧 Incubating |

---

## ⚙️ Requirements: MCP Servers

These skills require specific [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers to perform research and handle assets.

| Tool | Source | Purpose |
| :--- | :--- | :--- |
| **Tavily** | `uvx mcp-server-tavily` | High-speed web research & local context. |
| **Firecrawl** | `uvx firecrawl-mcp` | Deep web scraping for accurate copy. |
| **Stock Images** | `uvx stock-images-mcp` | Contextual Pexels image search. |

**Add to your `mcp_config.json`:**
```json
{
  "mcpServers": {
    "tavily": {
      "command": "uvx",
      "args": ["mcp-server-tavily"],
      "env": { "TAVILY_API_KEY": "YOUR_API_KEY" }
    },
    "firecrawl": {
      "command": "uvx",
      "args": ["firecrawl-mcp"],
      "env": { "FIRECRAWL_API_KEY": "YOUR_API_KEY" }
    },
    "stock-images": {
      "command": "uvx",
      "args": ["stock-images-mcp"],
      "env": { "PEXELS_API_KEY": "YOUR_API_KEY" }
    }
  }
}
```

---

## 🏗️ Skill Placement & IDE Setup

### 1. Default Placement
Clone this repository into your project's `.agents/skills/` directory:
```bash
git clone https://github.com/yourusername/awesome-marketing-skills.git .agents/skills/vibe-hub
```

### 2. IDE-Specific Discovery
Use the official documentation links below to configure your environment for custom instruction/skill loading.

#### [<img src="https://cdn.simpleicons.org/claude/D97757" width="20" height="20" /> Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code)
- **Location**: `.agents/skills/`
- **Automation**: The agent will automatically read files in `.agents/` when prompted about them.

#### [<img src="https://cursor.com/marketing-static/icon-512x512.png" width="20" height="20" /> Cursor Rules](https://docs.cursor.com/context/rules-for-ai)
- **Location**: `.agents/skills/`
- **Pro Tip**: Create a `.cursorrules` file at your project root to force discovery:
  ```text
  Always check the instruction files in .agents/skills/ for marketing tasks.
  ```

#### [<img src="https://windsurf.com/favicon.svg" width="20" height="20" /> Windsurf (Cascade)](https://docs.windsurf.com/windsurf/cascade/cascade)
- **Location**: `.agents/skills/`
- **Discovery**: Cascade naturally indexes the repository. Mention the skill name (e.g., *"Use the brochure-generator skill"*) to activate.

#### [<img src="https://cdn.simpleicons.org/githubcopilot/FFFFFF" width="20" height="20" /> GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/customizing-copilot-with-custom-instructions)

- **Location**: `.agents/skills/`
- **Setup**: Link the `.agents/skills/` directory in your custom instructions settings or `.github/copilot-instructions.md`.

#### [<img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/codex-color.png" width="20" height="20" /> Codex (Skill Specification)](https://github.com/crawwell/codex)

- **Universal Format**: These skills follow the open-source **Codex** specification for portable AI agent instructions. Use the `codex` CLI to run these skills across any supporting agent.

#### [<img src="https://brandlogos.net/wp-content/uploads/2025/12/google_antigravity-logo_brandlogos.net_qu4jc-512x472.png" width="20" height="20" /> Antigravity](https://github.com/google/antigravity)

- **Location**: `.agents/skills/`
- **Setup**: Antigravity is a high-orchestration agentic IDE. Place skills in the `.agents/` directory for the "Manager View" to leverage them during parallel task execution.

---

## 🎯 Triggering a Skill
Once configured, simply give a high-level command:
- *"Make a premium brochure for a luxury fragrance brand launching in Paris."*
- *"Design a 5-page PDF for my upcoming tech conference using the Sacred Drift theme."*

---

## 🤝 Contributing

We are building the future of AI-Forward Design. If you have a skill that focuses on high-fidelity output and intentional design, we want it! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b skill/AmazingSkill`)
3. Commit your Changes (`git commit -m 'Add AmazingSkill'`)
4. Push to the Branch (`git push origin skill/AmazingSkill`)
5. Open a Pull Request

---

## ✦ Creator

Built with ✦ by **Prashita Gupta**. 

Let's build the future of AI-Forward Design together.

[![Portfolio](https://img.shields.io/badge/Portfolio-prashitagupta.com-gold?style=flat-square)](https://prashitagupta.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Prashita%20Gupta-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/prashitagupta)


