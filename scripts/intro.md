# Presentation Script — Introduction

---

## [SLIDE / ACTION: Show URL on screen]

Alright, before we get started — can everyone go to this URL?

> **[URL here]**

Go to your browser and enter tinyurl.com/tdjul26. Let me know if you are able to access it. You should be able to see a page with today's hand-on guide. It includes all the steps for creating different use cases.

---

## Opening

I guess everyone is able to access the page. I'll be walking you through these **six use cases** that i personally been using with ChatGPT — they are genuinely useful for our day-to-day work.

The first one we will be building a **Scheduler** for Daily Tech News, it will automatically searches and pulls the important technology news every morning, so we don't have to search for it ourselves.

Next, we will connect our ChatGPT to **SharePoint** using a plugin, which can search and summarise information straight from our SharePoint.

After that, we will build the **AI Work Organizer** — this combines the Outlook Calendar and Email plugins with a scheduled task to generate a weekly work summary plan for us every morning, or every week depends on ur preference, it covers your meetings, follow up emails, and suggest the priorities for us.

Then we will be building a **Custom GPT**. It behaves like a specialist instead of a general assistant so we don't have to re-explain things every time. We'll build an AWS Architect Specialist version, but the same idea works for any domain your team needs an expert on.

Finally, we'll look at **Skills** — they are like reusable workflows. We'll build a **CSV Analyser** using the chat, it will analyse csv file and generate reports in a consistent format every time. We'll also build a **Python Code Reviewer** using the skill editor, it will review our code based on the coding standards that we defined — so it ensure that every team member follows the same coding standard.

By the end of this session, you will see how each one works, and hopefully walked away with at least one or two things you can start using straight away. 

Now, please login to your ChatGPt and we will start with our hands-on. Please let us know if u facing any issue login. We will be walking around to assist u guys.

Once you're logged in, one quick thing to check — go to **Settings**, then head to the **Usage** section to see your remaining credit. If you find you've used up your limit, no worries. The guide covers all the steps, so you can still follow along with us today and test it out yourself once your credits reset on 1st August. Either way, we'd love everyone to stay engaged throughout the session. and some of the use cases might not need credit to set up.



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
