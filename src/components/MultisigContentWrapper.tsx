import CopyableCode from '@/components/CopyableCode'
import MultisigContent from '@/content/shared/multisig-content.mdx'

export function MultisigContentWrapper() {
  const components = {
    CopyableCode
  }

  return <MultisigContent components={components} />
}