import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'

export default function SchedulePage() {
  return (
    <div>
      <PageHeader
        tag="1"
        title="Create a Daily Technology News Schedule"
        objective="Configure ChatGPT to automatically search for important technology news every morning and send the results through ChatGPT and email notifications."
      />

      <StepCard number={1} title="Open Scheduled Tasks">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open ChatGPT.</li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Scheduled</strong> from the left
            sidebar.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/01_scheduled_sidebar_navigation_382x470.png`}
          alt="Scheduled Sidebar Navigation"
          caption="Figure 1: Open Scheduled from the ChatGPT sidebar."
          width={382}
          height={470}
        />
      </StepCard>

      <StepCard number={2} title="Create the scheduled task">
        <p className="text-sm mb-3">
          Enter the prompt below into the chat:
        </p>
        <PromptBlock>{`Every morning at 11:30am, search the web for the top three most important technology news stories published within the past 3 days.

Prioritize major developments in artificial intelligence, software, cybersecurity, cloud computing, and consumer technology.

For each story, provide:

* Headline
* Two-sentence summary
* Why it matters
* Publication date
* Source link

Avoid covering three stories about the same event. Use credible and diverse news sources.`}</PromptBlock>
      </StepCard>

      <StepCard number={3} title="Review or change the schedule">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Open the created task named{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Tech News Brief</strong>.
          </li>
          <li>Check the frequency and triggering time.</li>
          <li>Use the task chat or settings to change the time or recurrence when necessary.</li>
        </ol>
        <GuideImage
          src={`${IMG}/02_scheduled_task_settings_panel_1488x787.png`}
          alt="Scheduled Task Settings Panel"
          caption="Figure 2: Review the frequency, time and next run of the scheduled task."
          width={1488}
          height={787}
        />
      </StepCard>

      <StepCard number={4} title="Open the notification settings">
        <p className="text-sm mb-3">After creating the Tech News Brief task:</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open the Scheduled page.</li>
          <li>
            Select the <strong style={{ color: 'var(--text-primary)' }}>Tech News Brief</strong> task.
          </li>
          <li>
            Click the three-dot <strong style={{ color: 'var(--text-primary)' }}>…</strong> menu near the top of the task.
          </li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Notification settings</strong>.
          </li>
        </ol>
        <p className="text-sm mt-3">
          This step is important because creating the scheduled task does not automatically confirm
          that all desired notification channels are enabled.
        </p>
        <GuideImage
          src={`${IMG}/30_scheduler_notification_settings_menu_736x322.png`}
          alt="Scheduler Notification Settings Menu"
          caption="Figure 30: Open the task menu and select Notification settings."
          width={736}
          height={322}
        />
      </StepCard>

      <StepCard number={5} title="Enable push and email notifications">
        <p className="text-sm mb-3">Inside ChatGPT&apos;s notification settings:</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Locate the <strong style={{ color: 'var(--text-primary)' }}>Tasks</strong> notification category.
          </li>
          <li>
            Open the notification options for <strong style={{ color: 'var(--text-primary)' }}>Tasks</strong>.
          </li>
          <li>
            Make sure both of these are enabled:
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Push</li>
              <li>Email</li>
            </ul>
          </li>
        </ol>
        <p className="text-sm mt-3">With both options enabled:</p>
        <ul className="list-disc list-inside space-y-1.5 text-sm mt-1">
          <li>Push sends an alert through the ChatGPT application or browser.</li>
          <li>Email sends a notification to the email address associated with the ChatGPT account.</li>
        </ul>
        <p className="text-sm mt-3">
          The task will still run even when notifications are disabled, but the user may not be
          alerted when the result is ready.
        </p>
        <GuideImage
          src={`${IMG}/31_scheduler_tasks_push_email_notifications_1046x769.png`}
          alt="Scheduler Tasks Push Email Notifications"
          caption="Figure 31: Enable both Push and Email notifications for scheduled Tasks."
          width={1046}
          height={769}
        />
      </StepCard>

      <StepCard number={6} title="Receive the notification">
        <p className="text-sm mb-3">When the task runs during the scheduled time, ChatGPT will send:</p>
        <ul className="list-disc list-inside space-y-1.5 text-sm">
          <li>A push notification</li>
          <li>An email notification</li>
          <li>A result inside the scheduled-task conversation</li>
        </ul>
        <GuideImage
          src={`${IMG}/03_tech_news_brief_notification_608x424.png`}
          alt="Tech News Brief Notification"
          caption="Figure 3: Example Email notification generated by the Tech News Brief task."
          width={608}
          height={424}
        />
      </StepCard>

      <StepCard number={7} title="Review the generated stories">
        <p className="text-sm mb-3">
          Open the notification to view the three selected technology stories.
        </p>
        <p className="text-sm mb-3">Each story should contain:</p>
        <ul className="list-disc list-inside space-y-1.5 text-sm">
          <li>Headline</li>
          <li>Summary</li>
          <li>Explanation of why it matters</li>
          <li>Publication date</li>
          <li>Source</li>
        </ul>
        <GuideImage
          src={`${IMG}/04_tech_news_generated_story_example_801x627.png`}
          alt="Tech News Generated Story Example"
          caption="Figure 4: Example of a technology-news story generated by the scheduled task."
          width={801}
          height={627}
        />
      </StepCard>

      <SectionNav
        prev={{ href: '/', label: 'Overview' }}
        next={{ href: '/sharepoint', label: 'SharePoint Access' }}
      />
    </div>
  )
}
