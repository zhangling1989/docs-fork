import CopyableCode from '@/components/CopyableCode'
import FaucetsContent from '@/content/shared/faucets-content.mdx'

export function FaucetsContentWrapper() {
  const components = {
    CopyableCode
  }

  return <FaucetsContent components={components} />
}
