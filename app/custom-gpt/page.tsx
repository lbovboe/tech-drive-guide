import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function CustomGptPage() {
  return (
    <div>
      <PageHeader
        tag="2"
        title="Create a Custom GPT: Principal AWS Architect"
        objective="Create a specialised GPT that reviews AWS architectures using AWS Well-Architected best practices."
      />

      <StepCard number={1} title="Open the GPT section">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open ChatGPT.</li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>GPTs</strong> from the left
            navigation bar.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/05_gpts_sidebar_navigation_267x320.png`}
          alt="GPTs Sidebar Navigation"
          caption="Figure 5: Open GPTs from the ChatGPT sidebar."
          width={267}
          height={320}
        />
      </StepCard>

      <StepCard number={2} title="Create a new GPT">
        <p className="text-sm">
          Click <strong style={{ color: 'var(--text-primary)' }}>+ Create</strong> in the
          upper-right corner.
        </p>
        <GuideImage
          src={`${IMG}/06_my_gpts_create_button_233x92.png`}
          alt="My GPTs Create Button"
          caption="Figure 6: Create a new custom GPT."
          width={233}
          height={92}
        />
      </StepCard>

      <StepCard number={3} title="Open Configure">
        <p className="text-sm">
          Select the <strong style={{ color: 'var(--text-primary)' }}>Configure</strong> tab rather
          than only describing the GPT through the conversational builder.
        </p>
        <GuideImage
          src={`${IMG}/07_custom_gpt_configure_form_930x578.png`}
          alt="Custom GPT Configure Form"
          caption="Figure 7: Custom GPT configuration screen."
          width={930}
          height={578}
        />
      </StepCard>

      <StepCard number={4} title="Enter the GPT information">
        <div className="space-y-4">
          <ConfigField label="Name">
            <PromptBlock label="Name">Principal AWS Architect</PromptBlock>
          </ConfigField>

          <ConfigField label="Description">
            <PromptBlock label="Description">{`Enterprise-grade AWS Cloud Architect for designing, reviewing, securing, troubleshooting, and optimising production cloud architectures using AWS Well-Architected best practices.`}</PromptBlock>
          </ConfigField>

          <ConfigField label="Instructions">
            <p className="text-sm mb-2">
              Insert the prepared Principal AWS Architect instruction content into the Instructions
              field.
            </p>
            <p className="text-sm mb-2">The instructions should tell the GPT to:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Think like a senior AWS architect</li>
              <li>Apply AWS Well-Architected terminology</li>
              <li>Evaluate security, reliability, performance, cost and operations</li>
              <li>Produce concise engineering reports</li>
              <li>Use uploaded architecture standards</li>
              <li>Avoid beginner-level explanations unless requested</li>
            </ul>
          </ConfigField>

          <ConfigField label="Conversation starters">
            <p className="text-sm mb-2">Add these individually:</p>
            <div className="space-y-2">
              <PromptBlock label="Starter 1">Review my AWS architecture</PromptBlock>
              <PromptBlock label="Starter 2">Estimate my AWS infrastructure cost</PromptBlock>
              <PromptBlock label="Starter 3">Compare ECS, EKS and Lambda cost</PromptBlock>
            </div>
          </ConfigField>
        </div>
      </StepCard>

      <StepCard number={5} title="Upload knowledge files">
        <p className="text-sm mb-3">Upload relevant organisation or architecture documents.</p>

        <div
          className="rounded-lg p-4 mb-4"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            Sample document provided
          </p>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            Download the sample GCC overview document below and upload it to your custom GPT as
            a knowledge file. This gives the GPT context about GCC, GCC 2.0, and GCC+.
          </p>
          <a
            href={`${BASE_PATH}/GCC_GCC2_GCCPlus_Overview.docx`}
            download
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
            style={{
              background: 'var(--accent)',
              color: '#fff',
            }}
          >
            ⬇ Download GCC_GCC2_GCCPlus_Overview.docx
          </a>
        </div>

        <p className="text-sm mb-2">Once downloaded, click <strong style={{ color: 'var(--text-primary)' }}>Upload files</strong> in the Knowledge section and select the file. Other suitable formats include:</p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-4">
          <li>PDF</li>
          <li>Markdown</li>
          <li>DOCX</li>
        </ul>
        <p className="text-sm">The uploaded files act as the GPT&apos;s reference knowledge.</p>
        <GuideImage
          src={`${IMG}/08_custom_gpt_knowledge_upload_755x183.png`}
          alt="Custom GPT Knowledge Upload"
          caption="Figure 8: Upload architecture standards and reference documents as GPT knowledge."
          width={755}
          height={183}
        />
      </StepCard>

      <StepCard number={6} title="Enable capabilities">
        <p className="text-sm mb-3">
          Enable the capabilities required by the GPT, such as:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-3">
          <li>Web Search</li>
          <li>Canvas</li>
          <li>Image Generation</li>
          <li>Code Interpreter and Data Analysis</li>
        </ul>
        <p className="text-sm">Enable only the capabilities required for the intended use case.</p>
        <GuideImage
          src={`${IMG}/09_custom_gpt_capabilities_options_291x168.png`}
          alt="Custom GPT Capabilities Options"
          caption="Figure 9: Select the capabilities available to the custom GPT."
          width={291}
          height={168}
        />
      </StepCard>

      <StepCard number={7} title="Create the GPT">
        <p className="text-sm">
          Click <strong style={{ color: 'var(--text-primary)' }}>Create</strong> in the upper-right
          corner.
        </p>
        <GuideImage
          src={`${IMG}/22_custom_gpt_create_button_215x103.png`}
          alt="Custom GPT Create Button"
          caption="Figure 10: Complete the configuration and create the custom GPT."
          width={215}
          height={103}
        />
      </StepCard>

      <StepCard number={8} title="Test the GPT">
        <p className="text-sm mb-4">Test one prompt at a time.</p>

        <div className="space-y-3">
          <PromptBlock label="Architecture review">{`Review this architecture: Internet → Application Load Balancer → EC2 in a single Availability Zone → RDS MySQL in a single Availability Zone. The application serves 100,000 users daily.`}</PromptBlock>

          <PromptBlock label="Performance troubleshooting">{`We experienced 20 API timeouts during the first minute of a load test. After one minute, everything became stable. What would you investigate?`}</PromptBlock>

          <PromptBlock label="Service selection">Should I choose ECS Fargate or Lambda for an image-processing API?</PromptBlock>

          <PromptBlock label="Knowledge-boundary test">What is GCC+?</PromptBlock>
        </div>

        <div
          className="mt-4 rounded-lg p-3 text-sm"
          style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
        >
          <p style={{ color: 'var(--text-secondary)' }}>
            The final question helps demonstrate whether the custom GPT can distinguish between
            information in its knowledge base and information that requires web research or
            clarification.
          </p>
        </div>
      </StepCard>

      <SectionNav
        prev={{ href: '/schedule', label: 'Daily Technology News' }}
        next={{ href: '/csv-analyser', label: 'CSV Analyser Skill' }}
      />
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
