import CopyableCode from "@/components/CopyableCode";
import BridgesContent from "@/content/shared/bridges-content.mdx";

export function BridgesContentWrapper() {
  const components = {
    CopyableCode,
  };

  return <BridgesContent components={components} />;
}
