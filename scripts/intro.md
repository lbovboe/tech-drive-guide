# Presentation Script — Introduction

---

## [SLIDE / ACTION: Show URL on screen]

Alright, before we get started — can everyone go to this URL?

> **[URL here]**

Go to your browser and enter tinyurl.com/tdjul26 — that's "jul" for July, without the "y". Let me know if you're having any issue accessing it — I'll wait about a minute to make sure everyone's loaded the page.

---

## Opening

I'll be walking you through **five use cases** I've personally been setting up and using with ChatGPT — they are genuinely useful for our day-to-day work. 

We'll start with the **Scheduler**, using Daily Tech News as the example — it automatically searches and pulls the important technology news every morning, so you don't have to search for it yourself.

Next, a **Custom GPT**. This is where you give ChatGPT a fixed role, instructions, and even your own documents, so it behaves like a specialist instead of a general assistant you have to re-explain things to every time. We'll build an AWS Architect version that reviews architectures and answers AWS-related questions, but the same idea works for any domain your team needs an expert on.

After that, we'll look at **Skills** — reusable workflows the whole team can share, so no one's writing prompts from scratch. We'll build two: a **CSV Analyzer**, created through chat, which analyses query logs and generates reports in a consistent format; and a **Code Reviewer**, created through the editor, which applies the same Python coding standards across the whole team, so review quality doesn't depend on who's doing the reviewing.

And last but not least, a **SharePoint plugin**, so ChatGPT can search and summarise information straight from your SharePoint files.

By the end of this session, you'll have gone through all five yourself, seen how each one works, and hopefully walked away with at least one or two things you can start using straight away. We'll go through each one step by step — I'll demo it first, and then you can follow along at your own pace using the guide.

---

## A Quick Note Before We Dive In

A few things to keep in mind as we go:

- If you get stuck at any point, raise your hand and we'll sort it out.


Alright — everyone ready? Let's start with the first one.

---

## Anticipated Questions (Reference — not part of the read-aloud script)

Keep this handy in case these come up, either now or partway through the demos.

**"What actually is a Custom GPT?"**
It's ChatGPT configured once with a fixed role, instructions, and optionally your own documents — so it always responds a certain way without you having to explain the context every time. Think of it as saving a persona and a briefing pack together, permanently.

**"What actually is a Skill?"**
A Skill is a saved, reusable workflow — a detailed set of instructions for doing one specific task the same way every time, like generating a report from a CSV or reviewing code against a rubric. You (or your team) build it once, then trigger it whenever that task comes up.

**"What's the difference between just typing a prompt and using a Skill or Custom GPT?"**
A plain prompt is one-off — you're typing out the context and instructions fresh every single time, and the quality depends on how well you phrased it that day. A Skill or Custom GPT bakes that setup in permanently, so you get consistent output every time, and anyone on the team can use it without knowing how to write the "perfect" prompt themselves.

**"What's the difference between a Custom GPT and a Skill?"**
- A **Custom GPT** is a persona — it's a whole assistant with a role, tone, and optionally its own knowledge base (documents), meant for open-ended conversation within that role (e.g. "act as an AWS architect and let me ask anything").
- A **Skill** is a task — it's narrower and more mechanical, meant to be triggered to do one specific job with a predictable output (e.g. "turn this CSV into a report"). Skills can also be attached and used inside a conversation, not just standalone.

Rule of thumb: if you want an ongoing expert to talk to, build a Custom GPT. If you want a repeatable task done the same way every time, build a Skill.

---

*[Proceed to: `01-daily-tech-news.md`]*
