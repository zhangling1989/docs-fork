import CopyableCode from "@/components/CopyableCode";
import CommunityContent from "@/content/shared/community-content.mdx";

export function CommunityContentWrapper() {
  const components = {
    CopyableCode,
  };

  return <CommunityContent components={components} />;
}
