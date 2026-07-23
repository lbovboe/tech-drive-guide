# Presentation Script — Use Case 3: CSV Analyser Skill (Creating a Skill via Chat)

---

## Introduction

Alright, use case three — **Skills**.

This is where we start thinking beyond just yourself. A Skill is basically a reusable workflow or prompt that you can save, share with your team, and anyone can run it consistently. No one needs to write the prompt from scratch — you define the standard once, everyone uses the same thing.

We're going to build a skill that analyses SingStat MCP query logs and generates a proper monthly usage report — in DOCX and PDF. And we're going to build it through chat, which is the more conversational way of doing it.

This one has three parts: we'll create the skill, share it, and then install a shared one that's already been set up.

---

## PART A — Create the Skill

---

## Step 1 — Open Skills

> **[Check guide: Use Case 3, Step 1]**

In ChatGPT, click on **Plugins** in the left sidebar, then open the **Skills** tab.

Can everyone see the Skills tab under Plugins? Good.

---

## Step 2 — Start Creating the Skill

> **[Check guide: Use Case 3, Step 2]**

Click the **+** button, and select **"Create with chat"**.

This opens a conversation where ChatGPT will help you build the skill step by step through dialogue — you don't need to fill in a form.

---

## Step 3 — Start the Skill-Building Conversation

> **[Check guide: Use Case 3, Step 3]**

In the chat, type exactly this:

> *"Help me create a skill. Keep it conversational, and start by asking what the skill should do."*

Send that. ChatGPT will ask you what the skill is for, and then we'll describe it in the next step.

---

## Step 4 — Describe What the Skill Should Do

> **[Check guide: Use Case 3, Step 4]**

Now, in the guide there's a detailed requirement prompt to paste in. Before you copy it — **replace `[your name]` with your actual name or initials**. This is just to make sure your skill has a unique name and doesn't clash with anyone else's in the shared workspace.

Once you've done that, paste the requirement into the chat and send it.

This tells the skill exactly what columns to expect, what sections the report should have, what format the output should be, and how to handle edge cases. It's quite detailed — and that's intentional, because the more specific you are, the better the skill performs.

---

## Step 5 — Install the Skill

> **[Check guide: Use Case 3, Step 5]**

ChatGPT will take a few minutes — roughly three to five — to generate the skill. Once the skill card appears, click **Install**.

While we wait, does anyone have questions about what we just described to it?

---

## Step 6 — Confirm Installation

> **[Check guide: Use Case 3, Step 6]**

Once installed, go back to **Plugins → Skills** and confirm your skill appears in the installed list.

Can everyone see their skill there?

---

## Step 7 — Open the Skill Chat

> **[Check guide: Use Case 3, Step 7]**

Click the three-dot menu next to your skill and select **Chat**.

> **Note:** If you install the skill but it's not being detected in the chat, don't panic — this is a known issue. Try opening the skill editor, make a minor change, hit Save. If it still doesn't work, close the browser fully and log back in.

---

## Step 8 — Run the Skill

> **[Check guide: Use Case 3, Step 8]**

There are two ways to test this:

**Option A** — Download the sample CSV file from the guide, attach it in the skill chat, and send: *"Generate the report based on the csv."*

**Option B** — Use the auto-generated default prompt that appears in the chat. It will create a sample CSV and generate a report without you needing to upload anything.

Either way works — try whichever is quicker for you right now.

---

## Step 9 — Download the Report

> **[Check guide: Use Case 3, Step 9]**

Give it about five minutes to process. Once it's done, you'll see download links for both a DOCX and PDF version of the report.

Download both and have a look. It should have all the sections: executive summary, usage stats, query analysis, response times, confidence scores, and recommendations — all formatted and ready to share.

Is everyone getting the report? Let me know if anything looks off.

---

## PART B — Share the Skill

---

## Step 10 — Open Sharing Options

> **[Check guide: Use Case 3, Step 10]**

Now let's say you want your team to use this same skill. Click the three-dot menu next to your skill and select **Share**.

---

## Step 11 — Set Access Permissions

> **[Check guide: Use Case 3, Step 11]**

Under "Who has access", select the organisation-wide option — something like **"Anyone at SG WOG ChatGPT"**.

That's it. Your skill is now discoverable and usable by anyone in the organisation.

---

## PART C — Install and Use a Shared Skill

---

## Step 12 — Find the Shared Skill

> **[Check guide: Use Case 3, Step 12]**

Now let's flip to the other side. Someone's already shared a version of this skill — so instead of building it, you're installing someone else's.

Go to **Plugins → Skills**, search for **"csv"**, and find **"singstat-mcp-csv-analyser-td"**.

---

## Step 13 & 14 — Install and Open It

> **[Check guide: Use Case 3, Steps 13 & 14]**

Click the **+** button to install it. Then open it via the three-dot menu → Chat, and try uploading a CSV or using the default prompt.

This shows how skills can be a team asset — one person builds it, everyone benefits.

---

## Wrap-up

That's use case three. You've built a skill, run it, shared it, and installed a shared one. That's the full lifecycle.

The key takeaway here is the sharing part — this is how you get consistency across your division without having to train everyone from scratch.

Let's move on.

---

*[Proceed to: `04-python-reviewer.md`]*
