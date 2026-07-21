import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'

const SKILL_MD = `# Python Code Reviewer

A standardized rubric for reviewing Python code so that every review — regardless of who (or what) performs it — surfaces the same categories of issues, in the same priority order, with the same tone. The goal is team-wide consistency, not personal style preference.

## How to run a review

1. **Read the whole file/diff first.** Don't comment line-by-line on a first pass — understand what the code is trying to do before critiquing how it does it.
2. **Work through the checklist below in order.** Severity order matters: correctness and security bugs are called out before style nits. Don't let 20 whitespace comments bury one real bug.
3. **Classify every finding** as one of:
   - 🔴 **Blocker** — bug, security issue, data loss risk, or breaks tests/CI
   - 🟡 **Should fix** — violates team convention, hurts readability/maintainability, missing tests
   - 🟢 **Nit / optional** — style preference, minor polish, "consider..."
4. **Cite the specific line(s)** and show the fix, not just the problem. A review that says "use a context manager" is worse than one that shows \`with open(...) as f:\`.
5. **Acknowledge what's good**, briefly — a review isn't only a list of complaints. This keeps trust high and signals which patterns to keep repeating.
6. **End with a summary**: blocker count, should-fix count, and a one-line verdict (e.g., "Approve once blockers are addressed").

## Review checklist

### 1. Correctness & logic (🔴 first priority)
- Off-by-one errors, incorrect boundary conditions, wrong operator precedence
- Mutable default arguments (\`def f(items=[])\`) — always flag, always a bug waiting to happen
- Bare \`except:\` or overly broad \`except Exception:\` that swallows errors silently
- Comparing with \`==\` where \`is\` is correct (e.g., \`is None\`, singleton checks) and vice versa
- Floating point equality comparisons (\`if x == 0.1\`)
- Resource leaks: files, sockets, DB connections, locks not released — should use \`with\` / context managers
- Race conditions in concurrent code; shared mutable state without locks/queues
- Off-happy-path behavior: what happens on empty input, None, huge input, malformed input?

### 2. Security
- String-built SQL/shell commands instead of parameterized queries / \`subprocess\` with a list (never \`shell=True\` with untrusted input)
- Hardcoded secrets, API keys, passwords, tokens — must come from env vars or a secrets manager
- \`eval()\`, \`exec()\`, \`pickle.load()\` on untrusted input
- Missing input validation/sanitization on anything crossing a trust boundary (user input, external API, file upload)
- Insecure randomness (\`random\` instead of \`secrets\` for tokens/passwords)
- Dependency versions pinned; no unvetted \`pip install\` of unmaintained packages for security-sensitive code

### 3. Error handling
- Exceptions are specific (\`except ValueError:\`), not blanket (\`except Exception:\` or bare \`except:\`), unless there's a deliberate top-level catch-all with logging and re-raise
- Custom exceptions subclass \`Exception\` (not \`BaseException\`) and are named \`...Error\`
- Errors are either handled meaningfully or propagated — never silently \`pass\`-ed
- Use \`raise X from e\` to preserve the original traceback when re-raising as a different exception type
- Don't use exceptions for ordinary control flow where a simple conditional would do

### 4. Style & readability (PEP 8 baseline)
- 4-space indentation, no tabs
- Line length: 88 (Black default) or 79 (strict PEP 8) — pick one and be consistent across the repo
- \`snake_case\` for functions/variables, \`PascalCase\` for classes, \`UPPER_SNAKE_CASE\` for constants
- One statement per line; no semicolons
- Imports grouped and ordered: stdlib, then third-party, then local — each group alphabetized, one blank line between groups (this is exactly what \`isort\`/\`ruff --select I\` enforces)
- No wildcard imports (\`from module import *\`)
- f-strings preferred over \`%\` or \`.format()\` for new code
- No unused imports, unused variables, or dead/commented-out code left in
- Prefer early returns / guard clauses over deeply nested \`if\` blocks
- List/dict/set comprehensions over equivalent \`map\`/\`filter\` + \`lambda\` when it improves readability — but don't force a comprehension so dense it's harder to read than a loop

### 5. Type hints & signatures
- Public functions and methods have type hints on parameters and return values
- Use \`Optional[X]\` / \`X | None\` (3.10+) rather than assuming \`None\` is obvious from a default
- Prefer precise types (\`list[str]\`, \`dict[str, int]\`) over bare \`list\`/\`dict\`
- Use \`TypedDict\`, \`dataclass\`, or \`pydantic\` models instead of untyped dicts for structured data passed between functions
- Avoid \`Any\` unless genuinely dynamic; if used, comment why

### 6. Documentation
- Every public module, class, and function has a docstring (a consistent style — Google, NumPy, or reST — picked once per project and used everywhere)
- Docstrings explain *why* and *contract* (params, returns, raises), not just restate the function name
- Comments explain non-obvious *why*, not *what* the code already says
- Complex algorithms or business-rule-driven code have a short comment linking to the spec/ticket if one exists

### 7. Testing
- New logic has corresponding unit tests; bug fixes include a regression test
- Tests cover the unhappy path (invalid input, exceptions raised) not just the happy path
- Tests don't depend on execution order or shared mutable state
- Mocks/stubs are used for I/O, network, and time (\`datetime.now()\`) so tests are deterministic
- Test names describe behavior (\`test_raises_valueerror_on_negative_amount\`), not implementation

### 8. Performance & idiom ("Pythonic-ness")
- No quadratic-or-worse behavior on data that's expected to scale (e.g., \`x in list\` in a hot loop instead of a \`set\`)
- String concatenation in loops uses \`"".join(...)\` instead of repeated \`+=\`
- Use generator expressions instead of building large intermediate lists when the full list isn't needed
- Use \`enumerate()\` instead of manual index counters; use \`zip()\` instead of parallel indexing
- Avoid premature optimization — flag genuinely wasteful patterns, don't micro-optimize readable code for negligible gains

### 9. Project structure & dependencies
- No circular imports; module boundaries respect a clear dependency direction
- \`__init__.py\` doesn't hide sprawling logic — thin re-exports only
- Dependencies declared in \`pyproject.toml\`/\`requirements.txt\` with versions pinned or ranged sensibly
- Config/secrets come from environment or config files, never hardcoded into modules

## Suggested tooling (mention if not already in the project)

Recommend these as automatable checks so future reviews spend less time on things a machine already catches:
- **\`ruff\`** — linting + import sorting (fast, replaces flake8/isort/pyupgrade)
- **\`black\`** — formatting, removes style bikeshedding entirely
- **\`mypy\`** or **\`pyright\`** — static type checking
- **\`pytest\`** with **\`pytest-cov\`** — testing and coverage
- **\`bandit\`** — security-focused static analysis
- **pre-commit hooks** running the above on every commit

## Output format

Structure every review response like this:

\`\`\`
## Summary
<1-2 sentence overview of what the code does and overall quality>

## 🔴 Blockers (N)
- \`file.py:L23\` — <issue> → <fix>

## 🟡 Should Fix (N)
- \`file.py:L47\` — <issue> → <fix>

## 🟢 Nits (N)
- \`file.py:L12\` — <issue>

## What's good
- <brief, genuine positives>

## Verdict
<Approve / Approve with changes / Request changes> — <one line why>
\`\`\`

If the code is short (under ~30 lines) or has zero blockers/should-fix items, skip the heavy structure and just give a short, direct verdict — don't manufacture nits to fill sections.

## Tone

Be direct and specific, not harsh. Point at the pattern, not the person ("this function swallows exceptions" not "you swallowed exceptions"). Assume competence — explain *why* a convention matters in one clause, not a lecture. The goal is a codebase the whole team can read interchangeably, not enforcing personal taste.`

export default function PythonReviewerPage() {
  return (
    <div>
      <PageHeader
        tag="4"
        title="Build a Python Code Reviewer Skill"
        objective="Create a shared skill that applies the same Python review standards across the division."
      />

      {/* ── Create the skill ─────────────────────────────────── */}

      <div className="mb-8">
        <SectionHeading>Part A — Create the Skill</SectionHeading>
      </div>

      <StepCard number={1} title="Open the editor">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Open <strong style={{ color: 'var(--text-primary)' }}>Plugins → Skills</strong>.
          </li>
          <li>
            Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button.
          </li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Create with editor</strong>.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/20_skills_create_with_editor_menu_1200x395.png`}
          alt="Skills Create With Editor Menu"
          caption="Figure 21: Select Create with editor to build the Python review skill."
          width={1200}
          height={395}
        />
      </StepCard>

      <StepCard number={2} title="Complete the skill form">
        <GuideImage
          src={`${IMG}/21_skill_editor_form_1018x742.png`}
          alt="Skill Editor Form"
          caption="Figure 22: Enter the name, description and SKILL.md instructions."
          width={1018}
          height={742}
        />

        <div
          className="mb-4 rounded-lg px-4 py-3 text-sm"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Before filling in the Name field: </span>
          <span style={{ color: 'var(--text-secondary)' }}>
            Append your own name or initials to the skill name (e.g. <strong style={{ color: 'var(--text-primary)' }}>Python Code Reviewer — John</strong>). This ensures your skill has a unique name and does not conflict with others in the shared workspace.
          </span>
        </div>
        <div className="space-y-4 mt-4">
          <ConfigField label="Name">
            <PromptBlock label="Name">Python Code Reviewer — [Your Name]</PromptBlock>
          </ConfigField>

          <ConfigField label="Description">
            <PromptBlock label="Description">{`Use this skill whenever reviewing, critiquing or giving feedback on Python code, including pull requests, diffs, standalone scripts and modules.

Also use it when the user asks to:

* Review this Python code
* Check this against our style guide
* Clean this up
* Check whether this is Pythonic
* Standardise code before merging

Apply PEP 8, type-hinting, error-handling, testing, security and performance standards consistently so that all reviewers flag the same issues.`}</PromptBlock>
          </ConfigField>

          <ConfigField label="Skill instructions">
            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
              Paste the content below into the{' '}
              <strong style={{ color: 'var(--text-primary)' }}>SKILL.md</strong> instructions field.
              Click <strong style={{ color: 'var(--text-primary)' }}>Copy</strong> to copy the
              entire rubric in one click.
            </p>
            <PromptBlock label="SKILL.md — Skill Instructions">{SKILL_MD}</PromptBlock>
          </ConfigField>
        </div>
      </StepCard>

      <StepCard number={3} title="Create the skill">
        <p className="text-sm">
          Click <strong style={{ color: 'var(--text-primary)' }}>Create</strong> in the upper-right
          corner.
        </p>
      </StepCard>

      <StepCard number={4} title="Confirm the skill">
        <p className="text-sm mb-2">
          Return to the Skills page and confirm that{' '}
          <strong style={{ color: 'var(--text-primary)' }}>Python Code Reviewer</strong> appears.
        </p>
        <p className="text-sm">Open a new skill chat.</p>
      </StepCard>

      <StepCard number={5} title="Test with sample Python code">
        <p className="text-sm mb-3">
          Open a new skill chat and paste the sample code below to test your skill. The code is
          intentionally insecure and poorly formatted to surface a range of findings.
        </p>
        <PromptBlock label="Test code (Python)" mono>{`API_KEY = "replace-with-test-value"
class userManager:
    def __init__(self):
        self.users = []
    def AddUser(self, name):
        self.users.append(name)
    def get_auth_headers(self):
        return {"Authorization": "Bearer " + API_KEY}
    def run_query(self, user_input):
        query = "SELECT * FROM users WHERE name = '" + user_input + "'"
        return query`}</PromptBlock>
      </StepCard>

      {/* ── Install shared skill ──────────────────────────────── */}

      <div className="mb-8 mt-4">
        <SectionHeading>Part B — Install and Use the Shared Skill</SectionHeading>
      </div>

      <StepCard number={6} title="Search for the skill">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open the Skills section.</li>
          <li>
            Search for <strong style={{ color: 'var(--text-primary)' }}>python</strong>.
          </li>
          <li>
            Find{' '}
            <strong style={{ color: 'var(--text-primary)' }}>singstat-python-code-reviewer-td</strong>.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/23_skill_search_python_result_1214x410.png`}
          alt="Skill Search Python Result"
          caption="Figure 23: Search for the shared Python Code Reviewer skill."
          width={1214}
          height={410}
        />
      </StepCard>

      <StepCard number={7} title="Install it">
        <p className="text-sm">
          Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button beside the
          skill.
        </p>
        <div
          className="mt-4 rounded-lg p-4 text-sm space-y-2"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
            Skill not detected after installing?
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            This is a known issue in the current version. Try opening the skill editor, make any
            minor change, and click <strong style={{ color: 'var(--text-primary)' }}>Save</strong>.
            If the skill still does not detected inside the chat, close the browser completely and log back in again.
          </p>
        </div>
      </StepCard>

      <StepCard number={8} title="Open a chat and test the skill">
        <ol className="list-decimal list-inside space-y-1.5 text-sm mb-4">
          <li>Click the three-dot menu.</li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Chat</strong>.
          </li>
          <li>Paste Python code into the conversation for review.</li>
        </ol>
        <GuideImage
          src={`${IMG}/24_python_code_reviewer_actions_menu_616x437.png`}
          alt="Python Code Reviewer Actions Menu"
          caption="Figure 24: Open the Python Code Reviewer skill and start a chat."
          width={616}
          height={437}
        />
        <p className="text-sm mb-3 mt-4">
          Use intentionally insecure and poorly formatted code to test the skill, for example:
        </p>
        <PromptBlock label="Test code (Python)" mono>{`API_KEY = "replace-with-test-value"
class userManager:
    def __init__(self):
        self.users = []
    def AddUser(self, name):
        self.users.append(name)
    def get_auth_headers(self):
        return {"Authorization": "Bearer " + API_KEY}
    def run_query(self, user_input):
        query = "SELECT * FROM users WHERE name = '" + user_input + "'"
        return query`}</PromptBlock>


      </StepCard>

      <SectionNav
        prev={{ href: '/csv-analyser', label: 'CSV Analyser Skill' }}
        next={{ href: '/sharepoint', label: 'SharePoint Access' }}
      />
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3"
      style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
    >
      <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
    </div>
  )
}

function ConfigField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
      {children}
    </div>
  )
}
