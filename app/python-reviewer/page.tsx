import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'

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

        <div className="space-y-4 mt-4">
          <ConfigField label="Name">
            <PromptBlock label="Name">Python Code Reviewer</PromptBlock>
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
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Upload or paste the prepared <strong style={{ color: 'var(--text-primary)' }}>SKILL.md</strong> file containing the
              organisation&apos;s Python review standards.
            </p>
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

      <StepCard number={5} title="Test the skill">
        <p className="text-sm mb-3">
          Use intentionally insecure and poorly formatted code, for example:
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

        <p className="text-sm mb-2">The reviewer should identify issues such as:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Hard-coded credentials</li>
          <li>Incorrect class and method naming</li>
          <li>Missing type hints</li>
          <li>SQL injection risk</li>
          <li>Missing validation</li>
          <li>Missing documentation</li>
          <li>Weak error handling</li>
          <li>Lack of tests</li>
        </ul>

        <div
          className="mt-4 rounded-lg p-3 text-sm"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <p style={{ color: 'var(--text-muted)' }}>
            Use a fake test value rather than a real API key in training material.
          </p>
        </div>
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
      </StepCard>

      <StepCard number={8} title="Open a chat">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
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
      </StepCard>

      <SectionNav
        prev={{ href: '/csv-analyser', label: 'CSV Analyser Skill' }}
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
