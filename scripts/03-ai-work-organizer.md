# Presentation Script — Use Case 3: AI Work Organizer (Scheduler + Plugin)

---

## Introduction

Alright, use case three — the **AI Work Organizer**.

This one combines two things we've already touched on — scheduled tasks and plugins — but this time we're using them together to do something practical and personal.

The idea is simple: every morning at 9am, ChatGPT automatically checks your Outlook Calendar and Outlook Email, and produces a structured daily work summary — your meetings for the week, emails that need a response, flagged items, and your top priorities for the day. Fully automated, delivered to you every morning, no manual effort.

Importantly, this task is read-only. It will not send emails, create drafts, edit calendar events, or change any Outlook flags. It only reads and summarises.

Let's set it up.

---

## Step 1 — Install the Outlook Plugins

> **[Check guide: Use Case 3, Step 1]**

First we need to connect ChatGPT to your Outlook. Go to **Plugins** in the ChatGPT sidebar.

Search for **"Outlook"**. You should find two plugins: **Outlook Calendar** and **Outlook Email**.

Click the **+** button beside both to install them. If prompted, complete the Microsoft sign-in or permission process.

Both plugins are required — Outlook Calendar provides meeting and event information, and Outlook Email provides recent, flagged, and important email information.

Is everyone seeing both plugins installed? Good.

---

## Step 2 — Open the Scheduled Page

> **[Check guide: Use Case 3, Step 2]**

Now, click **Scheduled** in the ChatGPT sidebar.

Click **"Schedule a task"** or enter your task request directly into the scheduled-task chat interface.

---

## Step 3 — Enter the AI Work Organizer Prompt

> **[Check guide: Use Case 3, Step 3]**

In the guide, under Step 3, there's the full AI Work Organizer prompt ready to copy. This prompt tells ChatGPT:

- **When to run** — every morning at 9am
- **What calendar data to pull** — all events this week, Monday to Sunday, in Singapore time
- **What email data to pull** — recent emails likely needing a response, older flagged items still unresolved, and high-importance emails requiring action
- **The exact output structure** — a calendar table, an email table, and a priorities section
- **What it must not do** — no sending emails, no creating drafts, no editing calendar events, no changing flags

Go ahead and copy that prompt from the guide and paste it into the scheduled-task chat, then hit send.

---

## Step 4 — Check the Schedule Configuration

> **[Check guide: Use Case 3, Step 4]**

Once ChatGPT confirms the task is created, open the task named **"AI Work Organizer"**.

Check these settings: task name, repeat frequency, scheduled time, time zone, and next run. Confirm it runs every day at **9:00 AM Singapore time**.

This step prevents common problems — the task running in the wrong time zone, being created as a one-time task, or starting on the wrong date. Adjust the time or frequency if anything looks off.

---

## Step 5 — Run the Task Immediately for Testing

> **[Check guide: Use Case 3, Step 5]**

You don't need to wait until tomorrow morning to see the output. Let's run it now.

Open the AI Work Organizer task, click the three-dot **…** menu, and select **Run now**.

When run manually, the report generates immediately. A scheduled-task notification may not appear because the result opens directly in the current session — but the recurring daily schedule remains active in the background.

---

## Step 6 — Review the Generated Calendar Section

> **[Check guide: Use Case 3, Step 6]**

Have a look at the calendar section of the report. It should show every event from Monday to Sunday with the date, start and end time, and event name. All-day events will be labelled "All day" and timed events will show the time in Singapore time.

Use the calendar section to spot busy periods, back-to-back meetings, days with limited working time, or upcoming deadlines.

---

## Step 7 — Review Important Emails and Priorities

> **[Check guide: Use Case 3, Step 7]**

The email section will list emails that may require attention — recent emails likely needing a reply, older flagged emails that remain unresolved, and high-importance emails requiring action.

Note that it doesn't include an email merely because it's unread or marked important — the content has to indicate that some form of action is required.

Finally, the **Priorities** section consolidates everything into no more than five actions for today or this week, with any conflicts or calendar risks flagged at the bottom.

Is everyone seeing the report? Any questions on what's in it?

---

## Wrap-up

That's use case three — the AI Work Organizer. You've taken two features you already knew — scheduled tasks and plugins — and combined them into something that gives you a structured daily briefing every morning, automatically.

The real value here isn't just the automation — it's the structure. Instead of spending the first 20 minutes of your day context-switching through email and calendar separately, you get one consolidated view, ready when you start work.

Let's move on to use case four.

---

*[Proceed to: `04-custom-gpt.md`]*
