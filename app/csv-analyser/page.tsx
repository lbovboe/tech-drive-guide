import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function CsvAnalyserPage() {
  return (
    <div>
      <PageHeader
        tag="3"
        title="Build a CSV Analyser Skill"
        objective="Create a reusable skill that analyses CSV query logs and generates reports in a consistent format."
      />

      {/* ── Create the skill ─────────────────────────────────── */}

      <div className="mb-8">
        <SectionHeading>Part A — Create the Skill</SectionHeading>
      </div>

      <StepCard number={1} title="Open Skills">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Plugins</strong> from the left
            sidebar.
          </li>
          <li>
            Open the <strong style={{ color: 'var(--text-primary)' }}>Skills</strong> tab.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/10_plugins_skills_tab_overview_1727x454.png`}
          alt="Plugins Skills Tab Overview"
          caption="Figure 11: Open the Skills section under Plugins."
          width={1727}
          height={454}
        />
      </StepCard>

      <StepCard number={2} title="Start creating the skill">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button.
          </li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Create with chat</strong>.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/11_skills_create_menu_1262x361.png`}
          alt="Skills Create Menu"
          caption="Figure 12: Select Create with chat from the Skills menu."
          width={1262}
          height={361}
        />
      </StepCard>

      <StepCard number={3} title="Add the skill requirements">
        <p className="text-sm mb-3">
          Send the default prompt that is automatically generated — it will then ask what you want to create. Enter the following prompt:
        </p>
        <div
          className="mb-4 rounded-lg px-4 py-3 text-sm"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Before sending the requirements: </span>
          <span style={{ color: 'var(--text-secondary)' }}>
            Replace <code className="rounded px-1 py-0.5 text-xs font-mono" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>[your name]</code> with your own name or initials (e.g. <strong style={{ color: 'var(--text-primary)' }}>singstat-csv-analyser-john</strong>). This ensures your skill has a unique name and does not conflict with others in the shared workspace.
          </span>
        </div>
        <PromptBlock>{`Create a skill called singstat-csv-analyser-[your name]. It should analyse uploaded CSV files only — do not use external connectors or data sources. The CSV contains query-log data with the columns sessionid, query, responsetime, confidencescore and createddate. Proceed with creation immediately — do not ask any follow-up questions.

Generate a monthly usage report in both DOCX and PDF format. Do not create a Markdown deliverable.

Always use these six report sections in this order:

1. Executive Summary
2. Usage Statistics
3. Query Analysis
4. Response Time Analysis
5. Confidence Score Analysis
6. Recommendations

Include:

* An overall health rating using green, yellow, orange or red
* Query categorisation, such as Economy, GDP, Inflation and Population
* P90, P95 and P99 response-time percentiles
* Identification of slow queries
* Confidence-score classification
* Detection of constant placeholder confidence scores
* Three to five data-backed recommendations

Round percentages to one decimal place, averages to two decimal places and response times to milliseconds.

Analyse the entire CSV without sampling. Never invent statistics. Clearly identify sections that cannot be completed when required columns are missing.

Use this report title:

SingStat MCP Monthly Usage Report — <Month YYYY>`}</PromptBlock>
      </StepCard>

      <StepCard number={4} title="Install the skill">
        <p className="text-sm mb-3">
          Wait approximately three to five minutes for the skill to be generated.
        </p>
        <p className="text-sm">
          Click <strong style={{ color: 'var(--text-primary)' }}>Install</strong> when the skill
          card appears.
        </p>
        <GuideImage
          src={`${IMG}/12_skill_install_card_1019x214.png`}
          alt="Skill Install Card"
          caption="Figure 13: Install the generated CSV analyser skill."
          width={1019}
          height={214}
        />
      </StepCard>

      <StepCard number={5} title="Confirm installation">
        <p className="text-sm mb-3">
          Return to: <strong style={{ color: 'var(--text-primary)' }}>Plugins → Skills</strong>
        </p>
        <p className="text-sm">
          Confirm that the CSV analyser appears under installed skills.
        </p>
        <GuideImage
          src={`${IMG}/13_installed_skills_overview_1709x571.png`}
          alt="Installed Skills Overview"
          caption="Figure 14: Confirm that the skill appears in the Installed section."
          width={1709}
          height={571}
        />
      </StepCard>

      <StepCard number={6} title="Start using the skill">
        <ol className="list-decimal list-inside space-y-1.5 text-sm mb-4">
          <li>Click the three-dot menu next to the skill.</li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Chat</strong>.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/14_skill_actions_menu_chat_edit_share_583x455.png`}
          alt="Skill Actions Menu"
          caption="Figure 15: Open the skill actions menu and select Chat."
          width={583}
          height={455}
        />
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

      <StepCard number={7} title="Run the skill">
        <p className="text-sm mb-3">There are two ways to run the skill:</p>

        {/* Option A */}
        <div
          className="rounded-xl p-4 mb-4 space-y-3"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Option A — Upload the sample CSV and generate a report
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li>
              Download the sample CSV file below, then attach it in the skill chat.
            </li>
            <li>
              Paste the following prompt:
            </li>
          </ol>
          <PromptBlock>Generate the report base on the csv</PromptBlock>
          <a
            href={`${BASE_PATH}/mcp_query_log_July.csv`}
            download="mcp_query_log_July.csv"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download mcp_query_log_July.csv
          </a>
        </div>

        {/* Option B */}
        <div
          className="rounded-xl p-4 space-y-3"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Option B — Use the auto-generated default prompt
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Use the automatically generated example prompt that appears in the chat. It will generate a sample CSV and produce a report without needing to upload a file.
          </p>
        </div>

        <GuideImage
          src={`${IMG}/15_skill_default_chat_prompt_1051x417.png`}
          alt="Skill Default Chat Prompt"
          caption="Figure 16: Example of the automatically generated skill-testing prompt."
          width={1051}
          height={417}
        />
      </StepCard>

      <StepCard number={8} title="Download the report">
        <p className="text-sm mb-3">Wait approximately five minutes for processing.</p>
        <p className="text-sm mb-2">Download the generated:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>DOCX report</li>
          <li>PDF report</li>
        </ul>
        <GuideImage
          src={`${IMG}/16_generated_report_download_links_671x323.png`}
          alt="Generated Report Download Links"
          caption="Figure 17: Download the generated monthly report in DOCX and PDF format."
          width={671}
          height={323}
        />
      </StepCard>

      {/* ── Share the skill ───────────────────────────────────── */}

      <div className="mb-8 mt-4">
        <SectionHeading>Part B — Share the Skill</SectionHeading>
      </div>

      <StepCard number={9} title="Open sharing options">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open the three-dot menu beside the skill.</li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Share</strong>.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/17_skill_share_actions_menu_573x377.png`}
          alt="Skill Share Actions Menu"
          caption="Figure 18: Select Share from the skill actions menu."
          width={573}
          height={377}
        />
      </StepCard>

      <StepCard number={10} title="Set access permissions">
        <p className="text-sm mb-2">
          Under <strong style={{ color: 'var(--text-primary)' }}>Who has access</strong>, select the
          appropriate organisation-wide option, such as:
        </p>
        <PromptBlock label="Access setting">Anyone at SG WOG ChatGPT</PromptBlock>
        <GuideImage
          src={`${IMG}/18_skill_access_permissions_802x265.png`}
          alt="Skill Access Permissions"
          caption="Figure 19: Configure organisation-level access for the shared skill."
          width={802}
          height={265}
        />
      </StepCard>

      {/* ── Install shared skill ──────────────────────────────── */}

      <div className="mb-8 mt-4">
        <SectionHeading>Part C — Install and Use the Shared Skill</SectionHeading>
      </div>

      <StepCard number={11} title="Find the shared skill">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Open <strong style={{ color: 'var(--text-primary)' }}>Plugins → Skills</strong>.
          </li>
          <li>
            Search for <strong style={{ color: 'var(--text-primary)' }}>csv</strong>.
          </li>
          <li>
            Find <strong style={{ color: 'var(--text-primary)' }}>singstat-mcp-csv-analyser-td</strong>.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/19_skill_search_csv_result_1194x409.png`}
          alt="Skill Search CSV Result"
          caption="Figure 20: Search for the shared CSV analyser skill."
          width={1194}
          height={409}
        />
      </StepCard>

      <StepCard number={12} title="Install it">
        <p className="text-sm">
          Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button beside the
          skill. The skill should install automatically.
        </p>
      </StepCard>

      <StepCard number={13} title="Open the skill">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Click the three-dot menu.</li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Chat</strong>.
          </li>
          <li>Upload a CSV file or use the default test prompt.</li>
        </ol>
      </StepCard>

      <SectionNav
        prev={{ href: '/custom-gpt', label: 'Custom GPT: Principal AWS Architect' }}
        next={{ href: '/python-reviewer', label: 'Python Code Reviewer Skill' }}
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
