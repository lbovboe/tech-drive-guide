# Presentation Script — Use Case 4: Principal AWS Architect (Custom GPT)

---

## Introduction

okay, lets move on to our fourth use case, we will be building the **Custom GPTs**.

 A Custom GPT lets you give ChatGPT a very specific role, a persona, a set of instructions, and even your own knowledge base. So instead of starting every conversation from scratch and re-explaining the context, you build it once and it's always there.


---

## Step 1 — Open the GPT Section

> **[Check guide: Use Case 4, Step 1]**

Lets click on the GPTs option on the left sidebar.


---

## Step 2 — Create a New GPT

> **[Check guide: Use Case 4, Step 2]**

Then on the top right hand corner , Click the **"+ Create"** button.

You'll see there are two ways building — one is through a chat where you just describe what you want, or through a **Configure** tab where you fill in the details directly. We're going to use Configure option, because it gives us more control.

---

## Step 3 — Open the Configure Tab

> **[Check guide: Use Case 4, Step 3]**

Click on the **Configure** tab. You should see this configure form for us to fill in.

---

## Step 4 — Fill in the GPT Details

> **[Check guide: Use Case 4, Step 4]**

Now let's fill this in. The guide has the exact values to use — copy them across one by one.

- **Name:** Principal AWS Architect
- **Description:** copy it from the guide — it's a one-liner about what the GPT does
- **Instructions:** this is the main bit — it tells the GPT how to think and respond. The guide has the key points it should follow, like applying Well-Architected terminology, evaluating security and cost, and writing like a senior engineer
- **Conversation starters:** add these in — they're the suggested prompts that appear when someone opens the GPT

Take a couple of minutes to fill those in. Let me know if anything looks off.

---

## Step 5 — Upload Knowledge Files

> **[Check guide: Use Case 4, Step 5]**

This is one of my favourite parts. You can upload your own documents as a knowledge base for the GPT to reference.

In the guide, there's a sample file you can download — it's a sample overview document. Go to the hand-on guide. Under step 5, click on the download file button.

This is what makes a Custom GPT really powerful — it can answer questions based on your actual internal documents, not just general knowledge.

---

## Step 6 — Enable Capabilities

> **[Check guide: Use Case 4, Step 6]**

Scroll down to the Capabilities section. Make sure these are turn on

- Web Search
- Canvas
- Image Generation
- Code Interpreter and Data Analysis

---

## Step 7 — Create the GPT

> **[Check guide: Use Case 4, Step 7]**

click **Create** in the upper-right corner.

Give it a moment. Is everyone seeing the GPT get created successfully?

---

## Step 8 — Test It

> **[Check guide: Use Case 4, Step 8]**

Now let's test it. The guide has few test prompts — try at least one or two of them:

1. **Architecture review** — paste in the simple architecture and see how it evaluates it
2. **Performance troubleshooting** — describe a load test issue and see what it investigates
3. **Service selection** — ask whether to use ECS Fargate or Lambda
4. **Knowledge test** — ask "What is GCC+?" — this one tests whether the GPT is actually using your uploaded document

The last one is worth paying attention to. If the GPT can answer it correctly, that means it's drawing from the file you uploaded, not just hallucinating.

Take a few minutes to try the prompts and see the responses. Any questions on what you're seeing?

---

## Wrap-up

So that's Custom GPTs — you've now got a specialised assistant that behaves like a senior AWS architect. You built it, configured it, gave it your own documents, and tested it.

The same pattern works for anything: HR policy assistant, tender review GPT, data governance advisor — you name it.

Let's move on to use case five.

---

*[Proceed to: `05-csv-analyser.md`]*
