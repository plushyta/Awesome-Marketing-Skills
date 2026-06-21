---
name: hermes-tweet
description: Plan high-signal X/Twitter research, launch monitoring, social listening, creator research, and controlled publishing workflows with the native Hermes Tweet plugin for Hermes Agent. Use when a marketer, founder, creator, or campaign operator needs current X signals, account context, trend checks, mention tracking, or approval-gated posting from Hermes.
---

# Hermes Tweet

Use this skill to turn X/Twitter activity into precise marketing context through the [Hermes Tweet](https://github.com/Xquik-dev/hermes-tweet) Hermes Agent plugin. The goal is to collect public signal first, shape a clear campaign or research brief, and only take account-changing actions after explicit approval.

## Best-Fit Workflows

- Launch monitoring: track product, campaign, founder, competitor, and category mentions.
- Social listening: summarize trends, replies, user timelines, media, and follower context.
- Creator and brand research: compare account positioning, audience signals, and content angles.
- Support triage: gather public complaints or questions before drafting response options.
- Giveaway and community audits: inspect tweet, reply, follower, list, draw, and export evidence.
- Controlled publishing: post, reply, DM, follow, create monitors, or manage media only when actions are enabled and approved.

## Setup

Install and enable Hermes Tweet in the Hermes runtime:

```bash
hermes plugins install Xquik-dev/hermes-tweet --enable
```

Set `XQUIK_API_KEY` in the Hermes runtime environment or `~/.hermes/.env`. Do not paste keys into prompts, issue bodies, chat messages, or tool arguments.

Keep `HERMES_TWEET_ENABLE_ACTIONS=false` for read-only research and unattended monitoring. Set it to `true` only for sessions that intentionally allow account-changing actions.

## Workflow

1. Define the marketing question: audience, account, keyword, campaign, competitor, launch, or support theme.
2. Use `tweet_explore` to find the right catalog endpoint. Do not guess paths.
3. Use `tweet_read` for public read-only endpoints and account context.
4. Convert findings into a concise campaign brief: signal, source, audience meaning, risk, and next action.
5. Use `tweet_action` only after naming the exact endpoint, payload, account effect, and approval reason.

## Output Standard

For research and monitoring, return:

- Objective: the campaign, launch, creator, or support question.
- Signals: the strongest X/Twitter evidence found.
- Interpretation: what the signal means for positioning, copy, timing, or audience.
- Recommended next step: read-only follow-up or an explicitly approved action.
- Guardrail: whether actions stayed disabled or which approved action was taken.

## Decision Rules

- Use `tweet_explore` first for every endpoint or capability search.
- Use `tweet_read` only for catalog-listed read-only endpoints.
- Use `tweet_action` only for posting, deleting, following, DMs, profile changes, monitors, webhooks, extraction jobs, media changes, private reads, and giveaway draws.
- If `tweet_action` is unavailable, explain that action tools are gated by `HERMES_TWEET_ENABLE_ACTIONS=true`.
- If `XQUIK_API_KEY` is missing, ask the user to configure it where Hermes runs. Never ask for the value.
- If Hermes Desktop connects to a remote gateway, install and configure Hermes Tweet on the remote Hermes host.

## Safety

- Never request, reveal, or pass credentials in tool calls.
- Never use account connection, re-authentication, API key, billing, credit top-up, or support-ticket endpoints.
- Never retry a failed write through another route after policy, auth, or account-state errors.
- Summarize the account effect before any post, reply, DM, follow, monitor, webhook, media, extraction, or draw action.
