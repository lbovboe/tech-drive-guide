import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'

export default function AiWorkOrganizerPage() {
  return (
    <div>
      <PageHeader
        tag="6"
        title="AI Work Organizer"
        objective="Combine Outlook Calendar, Outlook Email, and ChatGPT Scheduled Tasks to generate a daily work summary — covering this week's meetings, emails that require action, flagged messages, suggested priorities, and calendar risks. The task is read-only and will not send emails, create drafts, edit calendar events, or change Outlook flags."
      />

      <StepCard number={1} title="Install the Outlook plugins">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Open <strong style={{ color: 'var(--text-primary)' }}>Plugins</strong> from the ChatGPT
            sidebar.
          </li>
          <li>
            Search for <strong style={{ color: 'var(--text-primary)' }}>Outlook</strong>.
          </li>
          <li>
            Find <strong style={{ color: 'var(--text-primary)' }}>Outlook Calendar</strong> and{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Outlook Email</strong>.
          </li>
          <li>
            Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button beside
            both plugins to install them.
          </li>
          <li>Complete the Microsoft sign-in or permission process when prompted.</li>
        </ol>
        <p className="text-sm mt-3">
          Both plugins are required. <strong style={{ color: 'var(--text-primary)' }}>Outlook Calendar</strong> provides
          meeting and event information.{' '}
          <strong style={{ color: 'var(--text-primary)' }}>Outlook Email</strong> provides recent,
          flagged, and important email information.
        </p>
        <GuideImage
          src={`${IMG}/32_ai_work_organizer_install_outlook_plugins_1792x347.png`}
          alt="Install Outlook Calendar and Outlook Email plugins"
          caption="Figure 32: Search for and install both Outlook Calendar and Outlook Email plugins."
          width={1792}
          height={347}
        />
      </StepCard>

      <StepCard number={2} title="Open the Scheduled page">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Click <strong style={{ color: 'var(--text-primary)' }}>Scheduled</strong> in the
            ChatGPT sidebar.
          </li>
          <li>
            Click <strong style={{ color: 'var(--text-primary)' }}>Schedule a task</strong>, or
            enter the task request into the scheduled-task chat interface.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/33_ai_work_organizer_open_scheduled_page_1802x427.png`}
          alt="Open the Scheduled page"
          caption="Figure 33: Open the Scheduled page to create the AI Work Organizer task."
          width={1802}
          height={427}
        />
      </StepCard>

      <StepCard number={3} title="Enter the AI Work Organizer prompt">
        <p className="text-sm mb-3">
          Enter a prompt that tells ChatGPT when to run, which calendar events and emails to
          include, how to classify the results, what actions it must not perform, and the exact
          report format to return.
        </p>
        <PromptBlock>{`Schedule a task every morning at 9am. Using the Outlook calendar plugin, list every event this week (Mon–Sun) with its actual scheduled time. Show all-day events explicitly as "All day" and timed events as "HH:MM–HH:MM". Use Singapore time.

Using the Outlook email plugin, review emails from the past 2 days that likely need a response, plus all emails with an Outlook follow-up flag (including older ones still requiring action). Note any High importance emails that require action.

Return this structure:

# AI Work Organizer
Report date: [date]

## Calendar
| Date | Time | Event |

## Important / Follow-up Emails
| Received | Sender | Subject | Flag/Importance | Status | Next Action |

Status options: Due today, Due this week, Overdue, Waiting for others, No stated deadline, Completed.

## Priorities
Summarize the above into up to 5 top priorities for today/this week, and note any conflicts or risks. If none, say "No significant risks identified."

Keep it concise and factual. Do not send emails, create drafts, modify calendar events, or change flags/importance/categories. Do not assume unread or high-importance emails need a response. If a section has no items, write "No items identified."`}</PromptBlock>
        <div
          className="mt-4 rounded-lg p-4 text-sm space-y-2"
          style={{ background: 'var(--accent-dim)', borderLeft: '3px solid var(--accent)' }}
        >
          <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
            Why these instructions matter
          </p>
          <ul className="space-y-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Scheduling instruction</strong> —
              creates a recurring morning task.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Calendar instructions</strong> —
              cover the entire current week, clearly distinguish all-day events, and use Singapore
              time.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Email instructions</strong> — include
              older flagged messages that remain unresolved, not just recent inbox items.
            </li>
            <li>
              <strong style={{ color: 'var(--text-primary)' }}>Restriction instructions</strong> —
              prevent the organiser from modifying email or calendar data.
            </li>
          </ul>
        </div>
      </StepCard>

      <StepCard number={4} title="Check the schedule configuration">
        <p className="text-sm mb-3">After submitting the prompt:</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Wait for ChatGPT to confirm that the task has been created.</li>
          <li>
            Open the task named{' '}
            <strong style={{ color: 'var(--text-primary)' }}>AI Work Organizer</strong>.
          </li>
          <li>
            Check the task name, repeat frequency, scheduled time, time zone, and next run.
          </li>
          <li>Confirm that it runs every day at 9:00 AM Singapore time.</li>
          <li>Adjust the time or frequency when needed.</li>
        </ol>
        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
          This step prevents common scheduling problems such as the task running in the wrong time
          zone, being created as a one-time task, using an incorrect morning time, or starting on
          the wrong date.
        </p>
        <GuideImage
          src={`${IMG}/34_ai_work_organizer_schedule_configuration_1497x584.png`}
          alt="AI Work Organizer schedule configuration"
          caption="Figure 34: Check the AI Work Organizer task configuration, frequency and scheduled time."
          width={1497}
          height={584}
        />
      </StepCard>

      <StepCard number={5} title="Run the task immediately for testing">
        <p className="text-sm mb-3">
          You do not need to wait until the next morning to test the organiser.
        </p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open the AI Work Organizer task.</li>
          <li>
            Click the three-dot <strong style={{ color: 'var(--text-primary)' }}>…</strong> menu.
          </li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Run now</strong>.
          </li>
        </ol>
        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
          The latest interface may show <strong style={{ color: 'var(--text-primary)' }}>Run now</strong>, while
          the guide may refer to it as <strong style={{ color: 'var(--text-primary)' }}>Run immediately</strong>.
          They perform the same function. When run manually, the report generates immediately, a
          scheduled-task notification may not appear because the result opens directly in the current
          session, and the recurring daily schedule remains active.
        </p>
        <GuideImage
          src={`${IMG}/35_ai_work_organizer_run_now_menu_512x421.png`}
          alt="Run now menu"
          caption="Figure 35: Select Run now to test the AI Work Organizer immediately."
          width={512}
          height={421}
        />
      </StepCard>

      <StepCard number={6} title="Review the generated calendar section">
        <p className="text-sm mb-3">
          The generated report should begin with the report date and the Calendar section. Check
          that the calendar table includes the date, start and end time, and event name for all
          events from Monday to Sunday, with &ldquo;All day&rdquo; for all-day events and Singapore
          time for timed events.
        </p>
        <p className="text-sm mb-3">Use the calendar result to identify:</p>
        <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li>Busy periods and meeting overlaps</li>
          <li>Back-to-back meetings</li>
          <li>Days with limited working time</li>
          <li>Upcoming deadlines or important discussions</li>
        </ul>
        <GuideImage
          src={`${IMG}/36_ai_work_organizer_calendar_result_904x421.png`}
          alt="Weekly calendar table generated by AI Work Organizer"
          caption="Figure 36: Example of the weekly calendar table generated by the AI Work Organizer."
          width={904}
          height={421}
        />
      </StepCard>

      <StepCard number={7} title="Review important emails and priorities">
        <p className="text-sm mb-3">
          The email section should list emails that may require attention. The table includes the
          received date or time, sender, subject, follow-up flag or importance, status, and
          recommended next action.
        </p>
        <p className="text-sm mb-3">The organiser includes:</p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          <li>Recent emails that likely require a response</li>
          <li>Older flagged emails that remain unresolved</li>
          <li>High-importance emails that require action</li>
        </ul>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          It does not include an email merely because it is unread or marked as important — the
          content must indicate that some form of action is required.
        </p>
        <p className="text-sm mb-3">
          The <strong style={{ color: 'var(--text-primary)' }}>Priorities</strong> section
          consolidates the calendar and email findings into no more than five actions. A useful
          priority explains what needs to be done, why it matters, when it should be completed, and
          whether it conflicts with another task or meeting. For example:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li>Attend an upcoming project meeting.</li>
          <li>Reply to an overdue flagged email.</li>
          <li>Review a document before a scheduled discussion.</li>
          <li>Resolve an overlapping calendar appointment.</li>
          <li>Follow up with a colleague waiting for a response.</li>
        </ul>
        <GuideImage
          src={`${IMG}/37_ai_work_organizer_email_priorities_result_1164x596.png`}
          alt="Important email table and prioritised action list"
          caption="Figure 37: Example of the important-email table and prioritised action list."
          width={1164}
          height={596}
        />
      </StepCard>

      <SectionNav prev={{ href: '/sharepoint', label: 'SharePoint Access' }} />
    </div>
  )
}
