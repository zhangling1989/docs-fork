import CopyableCode from "@/components/CopyableCode";
import BlockExplorersContent from "@/content/shared/block-explorers-content.mdx";

export function BlockExplorersContentWrapper() {
  const components = {
    CopyableCode,
  };

  return <BlockExplorersContent components={components} />;
}
