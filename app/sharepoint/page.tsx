import { PageHeader } from '@/components/PageHeader'
import { StepCard } from '@/components/StepCard'
import { PromptBlock } from '@/components/PromptBlock'
import { GuideImage } from '@/components/GuideImage'
import { SectionNav } from '@/components/SectionNav'

const IMG = '/Tech_Test_Drive_Extracted_Images'

export default function SharePointPage() {
  return (
    <div>
      <PageHeader
        tag="5"
        title="SharePoint Access"
        objective="Install the SharePoint plugin to search and retrieve information from files you have permission to access in SharePoint, including recent documents and topic-based queries."
      />

      <StepCard number={1} title="Open the Plugins section">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Open ChatGPT.</li>
          <li>
            Click <strong style={{ color: 'var(--text-primary)' }}>Plugins</strong> in the left
            sidebar.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/25_plugins_sidebar_navigation_526x428.png`}
          alt="Plugins Sidebar Navigation"
          caption="Figure 25: Open Plugins from the ChatGPT sidebar."
          width={526}
          height={428}
        />
      </StepCard>

      <StepCard number={2} title="Search for and install SharePoint">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Enter <strong style={{ color: 'var(--text-primary)' }}>SharePoint</strong> in the
            plugin search bar.
          </li>
          <li>Find the SharePoint plugin in the search results.</li>
          <li>
            Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button beside it
            to install the plugin.
          </li>
          <li>
            After installation, the <strong style={{ color: 'var(--text-primary)' }}>+</strong>{' '}
            button will change to a three-dot{' '}
            <strong style={{ color: 'var(--text-primary)' }}>…</strong> menu.
          </li>
        </ol>
        <GuideImage
          src={`${IMG}/26_sharepoint_plugin_search_and_install_1301x526.png`}
          alt="SharePoint Plugin Search and Install"
          caption="Figure 26: Search for the SharePoint plugin and click the + button to install it."
          width={1301}
          height={526}
        />
      </StepCard>

      <StepCard number={3} title="Start a SharePoint chat">
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>
            Click the three-dot <strong style={{ color: 'var(--text-primary)' }}>…</strong> menu
            beside the installed SharePoint plugin.
          </li>
          <li>
            Select <strong style={{ color: 'var(--text-primary)' }}>Chat</strong>.
          </li>
          <li>A new conversation connected to the SharePoint plugin will open.</li>
        </ol>
        <GuideImage
          src={`${IMG}/27_sharepoint_plugin_actions_chat_649x482.png`}
          alt="SharePoint Plugin Actions Chat"
          caption="Figure 27: Open the SharePoint plugin menu and select Chat."
          width={649}
          height={482}
        />
      </StepCard>

      <StepCard number={4} title="Use SharePoint from a normal new chat">
        <p className="text-sm mb-3">
          After installing the plugin, you do not always need to open it from the Plugins page.
        </p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          <li>Start a new ChatGPT conversation.</li>
          <li>
            Click the <strong style={{ color: 'var(--text-primary)' }}>+</strong> button beside the
            message box.
          </li>
          <li>Select the SharePoint plugin from the available tools or connected sources.</li>
          <li>Enter your question.</li>
        </ol>
        <GuideImage
          src={`${IMG}/28_sharepoint_plugin_in_new_chat_menu_1361x793.png`}
          alt="SharePoint Plugin in New Chat Menu"
          caption="Figure 28: Access the SharePoint plugin from the + menu in a new chat."
          width={1361}
          height={793}
        />
      </StepCard>

      <StepCard number={5} title="Ask SharePoint questions">
        <p className="text-sm mb-3">
          Enter a clear request describing the document or information that you need. For example:
        </p>
        <PromptBlock>What is my latest file?</PromptBlock>
        <p className="text-sm mt-4">
          ChatGPT will search the SharePoint files that your account is authorised to access and
          return the most relevant result.
        </p>
        <GuideImage
          src={`${IMG}/29_sharepoint_latest_file_query_example_1035x481.png`}
          alt="SharePoint Latest File Query Example"
          caption="Figure 29: Example of asking the SharePoint plugin to find the latest file."
          width={1035}
          height={481}
        />
      </StepCard>

      <SectionNav prev={{ href: '/python-reviewer', label: 'Python Code Reviewer' }} />
    </div>
  )
}
