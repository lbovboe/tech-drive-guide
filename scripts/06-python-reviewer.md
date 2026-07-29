# Presentation Script — Use Case 6: Python Code Reviewer (Creating a Skill via Editor Form)

---

## Introduction

Use case six is another Skill, but this time we're building it a different way — through the **editor form** instead of chat.

The use case is a Python Code Reviewer. The idea is that instead of every developer writing their own review prompt, or reviewers applying different standards, you define one consistent rubric — and everyone uses the same skill. Same criteria, same priority order, same tone, every time.

This is especially useful for teams where code review quality varies depending on who's doing it.

---

## PART A — Create the Skill

---

## Step 1 — Open the Editor

> **[Check guide: Use Case 6, Step 1]**

Go to **Plugins → Skills**, click the **+** button, but this time select **"Create with editor"** instead of "Create with chat".

This opens a structured form — you fill in the name, description, and instructions directly. It's a bit more hands-on, but it gives you full control over exactly what goes in.

---

## Step 2 — Fill in the Skill Form

> **[Check guide: Use Case 6, Step 2]**

There are three fields to fill in.

**First, the Name.** The guide uses "Python Code Reviewer" — but again, add your name or initials at the end so it doesn't clash with anyone else's in the shared workspace. Something like "Python Code Reviewer — John".

**Second, the Description.** Copy this from the guide. It tells ChatGPT when to automatically apply this skill — so whenever someone asks to review Python code, check against a style guide, or clean something up, the skill kicks in without you having to invoke it manually.

**Third, the Skill Instructions.** This is the big one. It's a full review rubric — covering correctness, security, error handling, style, type hints, documentation, testing, and performance. The guide has a Copy button — use it to grab the whole thing and paste it into the SKILL.md field.

Take a few minutes to fill all three in. Let me know when you're ready to move on.

---

## Step 3 — Create the Skill

> **[Check guide: Use Case 6, Step 3]**

Once everything is filled in, click **Create** in the upper-right corner.

---

## Step 4 — Confirm the Skill

> **[Check guide: Use Case 6, Step 4]**

Go back to the Skills page and confirm that your Python Code Reviewer appears in the list. Then open a new skill chat.

Can everyone see their skill? Good.

---

## Step 5 — Test It

> **[Check guide: Use Case 6, Step 5]**

The guide has a snippet of test code — it's intentionally bad. It has a hardcoded API key, SQL injection vulnerabilities, wrong naming conventions — all the things you'd want a code reviewer to catch.

Paste that code into the skill chat and see what it flags.

You should see findings classified as Blockers, Should Fix, and Nits — with specific line references and suggested fixes. That's the rubric doing its job.

Take a moment to try it. What's it flagging for you?

---

## PART B — Install and Use the Shared Skill

---

## Step 6 — Search for the Shared Skill

> **[Check guide: Use Case 6, Step 6]**

Now, same as before — let's find the pre-built shared version.

Go to Skills, search for **"python"**, and find **"singstat-python-code-reviewer-td"**.

---

## Step 7 — Install It

> **[Check guide: Use Case 6, Step 7]**

Click **+** to install. Same note as earlier applies — if it doesn't get detected after installing, try saving a minor edit or doing a full browser refresh.

---

## Step 8 — Open and Test

> **[Check guide: Use Case 6, Step 8]**

Open it via the three-dot menu → Chat, paste in the same test code from earlier, and see what it returns.

The output should follow the structured format from the rubric — summary at the top, blockers, should-fix items, nits, what's good, and a final verdict.

---

## Wrap-up

That's use case six. Two ways to create skills — chat and editor form. The editor form is better when you already have the instructions ready and just want to plug them in directly.

The Python reviewer is a good example of how skills can encode team standards, not just automate tasks. It's not about replacing code review — it's about making sure the baseline is always consistent, no matter who's reviewing.

---

## Session Close

So just to recap what we've gone through today:

- A **scheduled task** that runs automatically every morning to deliver tech news
- A **SharePoint plugin** that connects ChatGPT to your existing file storage
- An **AI Work Organizer** that combines Outlook Calendar, Outlook Email, and scheduled tasks into a daily briefing
- A **Custom GPT** that behaves like a domain expert and knows your documents
- Two **Skills** — one built through chat, one through the editor — that your whole team can share and reuse

These aren't hypothetical use cases — they're things you can set up today and start using straight away.

If there's anything you want to revisit, the guide is still open on your screen — all the steps are there. And if you run into any issues setting things up after this session, feel free to reach out.

Thanks everyone — appreciate your time today.

---

*[End of presentation]*
