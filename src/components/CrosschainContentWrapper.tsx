import CopyableCode from "@/components/CopyableCode";
import CrosschainContent from "@/content/shared/crosschain-content.mdx";

export function CrosschainContentWrapper() {
  const components = {
    CopyableCode,
  };

  return <CrosschainContent components={components} />;
}
