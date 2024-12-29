declare module "*.mdx" {
  import type { ComponentType } from "react";

  const component: ComponentType<{
    components?: {
      [key: string]: ComponentType<any>;
    };
  }>;
  export default component;
}
