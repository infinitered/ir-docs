import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return ( 
    <div style={{ marginTop: '2rem' }}>
    <Giscus    
      repo="infinitered/ir-docs-comments"
      repoId="R_kgDOQP-VRA"
      category="Announcements"
      categoryId="DIC_kwDOQP-VRM4CxeQh"
      mapping="pathname"
      strict="1"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      //@ts-expect-error
      crossorigin="anonymous"
      async
    />
    </div>
  );
}